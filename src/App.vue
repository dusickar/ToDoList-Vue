<template>
  <div>
    <ProjectName />
    <div class="nav nav-tabs card-header-tabs">
      <div class="container">
        <div class="row">
          <!-- <router-link to="/" class="nav-link col-auto">Aktívne úlohy</router-link>
          <router-link to="/deletedpage" class="nav-link col-auto">Zmazané úlohy</router-link> -->
        </div>
      </div>
    </div>
    <NewTask />
    



    
  </div>
</template>


<script>
import ProjectName from "./components/ProjectName.vue"
import NewTask from './components/NewTask.vue'
import ActiveTask from './components/ActiveTask.vue'
import DeletedTask from './components/DeletedTask.vue'

export default {
  name: 'App',
  components: {
    ProjectName ,
    NewTask ,
    ActiveTask ,
    DeletedTask
  },
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.nav-link {
  color: #2c3e50 ;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.router-link-active {
    color: black !important;
    background-color: lightblue !important;
}
</style>
