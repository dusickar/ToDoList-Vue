<template>
  <body>
    <ProjectName></ProjectName>
    <main>
        <div class="container">
            <div id="app">
                <div class="col-auto mt-5">
                    <h5>Nová úloha</h5>
                </div>
                <form class="row g-3 mt-2 mb-5 add-new" @submit.prevent=add>
                  <div class="col-sm-auto col-md-4">
                        <label for="task" class="visually-hidden">Nová úloha</label>
                        <input type="text" v-model="newTask" ref="new" autofocus class="form-control" placeholder="Sem zadaj novú úlohu...">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Pridaj úlohu</button>
                    </div>
                </form>

                <div class="card text-center my-5">
                    <div class="card-header">
                        <div class="nav nav-tabs card-header-tabs">
                            <table>
                                <th>
                                    <router-link to="/" class="nav-link col-auto" @click.prevent="moveToActiveTasks()">
                                        Aktívne úlohy
                                    </router-link>
                                </th>
                                <tr>
                                    <ul>
                                        <div class="card-body">
                                            <ul class="list-unstyled m-0" v-for="(newTask, index) in characters" :key="index.id">
                                                <li class="float-start" v-if="isActive">
                                                    <input type="checkbox" class="active-task-checkbox float-start" name="prvá úloha">
                                                    <p class="ms-4 float-start task"> {{ index }} {{ newTask }}
                                                        <i type="button" class="ms-5 fa-solid fa-trash-can" @click.prevent="moveToDeletedTasks(index)"></i>
                                                    </p>
                                                </li>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>
                                    </ul>
                                </tr>
                            </table>

                            <table>
                                <th>
                                    <router-link to="/deletedpage" class="nav-link col-auto" @click.prevent="moveToDeletedTasks()">
                                        Zmazané úlohy
                                    </router-link>
                                </th>
                                <tr>
                                    <slot></slot>
                                    <ul>
                                        <div class="card-body">
                                            <ul class="list-unstyled m-0" v-for="newTask in characters" :key="newTask.id">
                                                <li class="float-start" v-if="isDeleted">
                                                    <input type="checkbox" class="active-task-checkbox float-start" name="prvá úloha">
                                                    <p class="ms-4 float-start task"> {{ newTask }}
                                                        <i type="button" class="ms-5 fa-solid fa-trash-can-arrow-up" @click.prevent="moveToActiveTasks()"></i>
                                                    </p>
                                                </li>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>
                                    </ul>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <p class="text-center bg-primary text-bg-dark py-5 fs-5 align-middle m-0"> ToDo List &copy; 2023</p>
    </footer>
  </body>
</template>

<script>

export default {
    name: 'NewTask, ProjectName, ActiveTask, DeletedTask',
    props: [
            'NewTask',
            'ProjectName',
            'ActiveTask',
            'DeletedTask',
        ],
    data() {
            return {
                newTask: '',
                characters : [],
                id: 0,
                isActive: true,
                isDeleted: false,
                }
            },
    methods: {
                add() {
                        if (!this.newTask) return //ak sa na neyplní políčko s úlohou, metóda add končí

                        this.characters.push({
                                            value: this.newTask,
                                            id: this.id++,
                                            isDeleted: false,
                        })

                                            // this.newTask, //premennú newTask natlač do characters
                        
                        this.newTask = '' //po pridaní novej úlohy zostane input prázdny

                        this.$refs.new.focus() //po pridaní novej úlohy sa kurzor automaticky nastaví na input
                },
                moveToDeletedTasks(index) {
                    this.characters = this.characters.filter(item => item !== index > 2) 
                    
                        
                        


                        
                        // this.characters = this.characters.filter(item => item !== newTask) //odfiltruj z characters všetky itemy ktoré nie sú newTask
                        this.isActive = false;
                        this.isDeleted = true
                },
                moveToActiveTasks() {
                        // this.characters = this.characters.filter(item => item !== index) //odfiltruj z characters všetky itemy ktoré nie sú newTask
                        this.isActive = true;
                        this.isDeleted = false
                },
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
    margin: 0;
}

.clear {
  clear: both;
}

.active-task-checkbox {
  width: 15px;
  height: 24px;
}

footer {
    bottom: 0;
    position: fixed;
    height: auto;
    width: 100%;
}
</style>
