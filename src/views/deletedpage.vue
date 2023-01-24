<template>
    <li class="nav-item">
        <a  class="nav-link" href="#">Zmazané úlohy</a>
    </li>
</template>
  
  
  <script>
  // @ is an alias to /src
  import DeletedTask from '../components/DeletedTask.vue'
  export default {
    name: 'App',
    components: {
      DeletedTask
    },
  }
  </script>