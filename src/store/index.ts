import { createStore } from "vuex";
import Task from "../models/Task";

export default createStore({
  state: {
    tasks: [
      {
        name: "Demo vuex",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false
      },
      {
        name: "UI design",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false
      }
    ] as Task[]
  },
  mutations: {
    setTask: (state, task) => state.tasks.push(task),
  },
  actions: {},
  modules: {}
});