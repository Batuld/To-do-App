<script lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
//import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    //AddTask
    //HelloWorld
  }
}
</script>

<template>
  <div>
    <router-view></router-view>
 
     <div class="rounded overflow-hidden shadow-lg flex justify-center p-10">
      <div class="m-3 bg-lime-500 p-2">
<!--<AddTask>

</AddTask>-->
        <router-link tag="li" to="/" class-active="active">
            <span>Home</span>
          </router-link>
        </div>
        <div class="m-3  bg-lime-500 p-2">
          <router-link tag="li" to="/add_task" class-active="active">
           
            <span>Add Tasks</span>
          </router-link>
      <!--  <div class="sm-4 columns text-center">
          <router-link to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </router-link>
        </div>
        <div class="sm-4 columns text-center">
          <router-link to="/add_task">
            <i class="fa fa-plus" aria-hidden="true" />
            <span>Add Tasks</span>
          </router-link> 
        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active{
text-decoration: underline;
  cursor: pointer;
}
</style>

