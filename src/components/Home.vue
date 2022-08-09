
<template>
   <div class="home">
	<div class="row">
		<div class="text-center">
			<h4 class="text-xl bg-red-500 w-auto"> Todo Application</h4>
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
           <td v-text="task.name"  :class='{"text-line-through": task.completed}'>
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
 }
})
</script>