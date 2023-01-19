<template>
  <body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5 py-4">
            <div class="container">
                <h1 class="navbar-brand fs-1">ToDo List 
                    <i class="fa-solid fa-check-double ms-3"></i>
                </h1>
            </div>
        </nav>
    </header>

    <main>
        <div class="container">
            <div id="app">
                <div class="col-auto mt-5">
                    <h5>Nová úloha</h5>
                </div>
                <form class="row g-3 mt-2 mb-5 add-new" @submit.prevent=add>
                  <div class="col-sm-auto col-md-4">
                        <label for="task" class="visually-hidden">Nová úloha</label>
                        <input type="text" v-model="newTask" ref="new" autofocus class="form-control" id="task" placeholder="Sem zadaj novú úlohu...">
                    </div>
                    <div class="col-auto">
                        <button button type="submit" class="btn btn-primary mb-3">Pridaj úlohu</button>
                    </div>
                </form>
    
                <div class="card text-center my-5">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active text-primary activeTasks" aria-current="true" href="#">Aktívne úlohy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary deletedTasks" href="#">Zmazané úlohy</a>
                                <ul>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled m-0" v-for="newTask in characters" :key="newTask.id">
                            <li class="float-start">
                                <input type="checkbox" class="active-task-checkbox float-start" name="prvá úloha">
                                <p class="ms-4 float-start task"> {{ newTask }}
                                    <i type="button" class="ms-5 fa-solid fa-trash-can" @click.prevent="remove(newTask)"></i>
                                </p>
                            </li>
                            <div class="clear"></div>
                        </ul>
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
    name: 'NewTask',
    props: [
            'NewTask'

        ],
    data() {
            return {
                    newTask: '',
                    characters: [ ]
                }
            },
    methods: {
                add() {
                        if (!this.newTask) return //ak sa na neyplní políčko s úlohou, metóda add končí

                        this.characters.push(
                                                this.newTask //premennú newTask natlač do characters
                        )

                        this.newTask = '' //po pridaní novej úlohy zostane input prázdny

                        this.$refs.new.focus() //po pridaní novej úlohy sa kurzor automaticky nastaví na input
                },
                remove(newTask) {
                                    this.characters = this.characters.filter(item => item !== newTask) //odfiltruj z characters všetky itemy ktoré nie sú newTask
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


</style>
