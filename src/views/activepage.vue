<template>
  <li class="nav-item">
      <a  class="nav-link" aria-current="true" href="#">Aktívne úlohy</a>
  </li>
</template>
  
  
  <script>
  // @ is an alias to /src
  import ActiveTask from '../components/ActiveTask.vue'
  export default {
    name: 'App',
    components: {
      ActiveTask
    },
  }
  </script>