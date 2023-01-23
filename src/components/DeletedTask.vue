<template>
    <DeletedTask>
        <li class="nav-item">
            <a  class="nav-link" 
                :class="{ active : active_el == 2}"
                href="#" 
                @click="markActive(2)"
            >
                Zmazané úlohy
            </a>
        </li>
    </DeletedTask>    
</template>




<script>

export default {
    name: 'DeletedTask',
    components: {
        DeletedTask() {
          
        }
    }
}
</script>




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

.clear {
  clear: both;
}

.active-task-checkbox {
  width: 15px;
  height: 24px;
}

.active {
    color: blue !important;
}

.nav-link {
    color: gray;
}

.invisible {
    visibility: hidden;
}

</style>