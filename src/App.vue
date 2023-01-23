<template>
  <div>
    <ProjectName />
    <NewTask />
    <ActiveTask />
    <DeletedTask />
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

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
