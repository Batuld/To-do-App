
<template>
   <div class="home">
	<div class="row">
		<div class="text-center">
			<h4 class="text-xl bg-amber-500 w-auto m-2"> Todo Application</h4>
		</div>
	
    <div>
   <div >
     <table class="main-table">
       <thead>
         <tr>
           <th>To-do List</th>
           <th></th>
           <th></th>
           <th></th>
         </tr>
       </thead>
         <tr v-for="task in tasks" :key="task.name">
          <td><input type="checkbox" @click="setTaskComplete(task)"/></td>
           <td v-text="task.name"  :class='{"line-through ...": task.completed}'>
           </td>
           <td width="10%" class="text-right">
             <button @click="deleteTask(task)" class="bg-red-500 rounded m-2">Delete</button>
           </td>
         </tr>
     </table>
   </div>
 </div>
</div>
</div>
</template>

<script lang="ts">
import Task from "../models/Task";
import { defineComponent } from "vue";

export default defineComponent( {
  name: 'HomePage',
  data() {
		return {
			tasks: [] as Task[]
		};
	},
mounted() {
   this.tasks = this.$store.state.tasks;
 },
  methods: {
    setTaskComplete(task: Task): void {
     this.$store.commit("completeTask", task);
   },
   deleteTask(task: Task) {
     this.$store.commit("deleteTask", task);
   },

 },
})
</script>