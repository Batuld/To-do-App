import { createStore } from "vuex";
import Task from "../models/Task";
import { findIndex } from "lodash";


export default createStore({
  state: {
    tasks: [
      {
        name: "Demo vuex",
        completed: false
      },
      {
        name: "UI design",
        completed: false
      }
    ] as Task[]
  },
  mutations: {
    setTask: (state, task) => state.tasks.push(task),
    
    deleteTask(state, task) {
      //state.tasks.splice(state.tasks.indexof(task), 1)
      let taskIndex = findIndex(state.tasks, task);
      state.tasks.splice(taskIndex, ++taskIndex);
    },
    completeTask(state, task) {
      const taskIndex = findIndex(state.tasks, task);
      state.tasks[taskIndex].completed = true;
    }
  },
});