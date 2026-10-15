import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist((set) => ({
    todos: [],
    addTask: (newTask) =>
      set((state) => ({ todos: [...state.todos, newTask] })),
    removeTask: (id) =>
      set((state) => {
        const newtodos = state.todos.filter((task) => task.id !== id);
        return {
          todos: [...newtodos],
        };
      }),

    toggleDone: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
        ),
      })),
  })),
);

export default useTodoStore;
