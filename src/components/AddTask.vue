<template>
<header class="text-xl bg-red-500 w-auto">
        Add Tasks
       </header>
       <div class="rounded overflow-hidden shadow-lg w-96 justify-center p-10">
            <p><b >Add your next Tasks</b></p>
 <input placeholder= "Add Todo" class="flex m-4 
        shadow
        appearance-none
        border
        rounded
        w-64
        py-2
        px-2
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline" v-model="taskName"  />
 <button class="flex-1 p-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addTask()">
  Add
 </button>
       </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Task from "../models/Task";

export default defineComponent({
 name: "AddTask",
 data() {
   return {
     taskName: ""
   };
 },


methods: {
   addTask() {
     if (this.taskName !== "") {
       const newTask = new Task(this.taskName);
       this.$store.commit("setTask", newTask);
       this.taskName = "";
       this.$router.push("/");
     }
   }
   
 }
})
</script>