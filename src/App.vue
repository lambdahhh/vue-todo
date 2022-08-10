<template>
  <Header />
  <StatusBar :todosCount="todosCount" />
  <SearchPanel v-model="searchString" />
  <TodoList
      :todos="searchTodos"
      @setImportant="setImportant"
      @setCompleted="setCompleted"
  />
</template>

<script>
import Header from "@/components/Header";
import StatusBar from "@/components/StatusBar";
import TodoList from "@/components/TodoList";
import SearchPanel from "@/components/SearchPanel";
export default {
  name: "App",
  components: {SearchPanel, TodoList, StatusBar, Header},
  data() {
    return {
      todos: [
        {id: 1, title: 'Javascript', completed: false, important: false},
        {id: 2, title: 'PHP', completed: false, important: false},
        {id: 3, title: 'Java', completed: false, important: false},
        {id: 4, title: 'Python', completed: false, important: false},
        {id: 5, title: 'C++', completed: false, important: false},
        {id: 6, title: 'Ruby', completed: false, important: false},
        {id: 7, title: 'C#', completed: false, important: false},
        {id: 8, title: 'Kotlin', completed: false, important: false},
        {id: 9, title: 'Go', completed: false, important: false},
        {id: 10, title: 'Scala', completed: false, important: false},
        {id: 11, title: 'Rust', completed: false, important: false},
        {id: 12, title: 'TypeScript', completed: false, important: false},
        {id: 13, title: 'C', completed: false, important: false},
      ],
      searchString: ''
    }
  },
  methods: {
    setImportant(id) {
      const idx = this.todos.findIndex(todo => todo.id === id);
      const todo = this.todos[idx];
      const newTodo = {...todo, important: !todo.important}
      this.todos = [
          ...this.todos.slice(0, idx),
          newTodo,
          ...this.todos.slice(idx + 1)
      ];
    },
    setCompleted(id) {
      const idx = this.todos.findIndex(todo => todo.id === id);
      const todo = this.todos[idx];
      const newTodo = {...todo, completed: !todo.completed}
      this.todos = [
        ...this.todos.slice(0, idx),
        newTodo,
        ...this.todos.slice(idx + 1)
      ];
    },
  },
  computed: {
    todosCount() {
      const completed = this.todos.filter(todo => todo.completed === true).length;
      const important = this.todos.filter(todo => todo.important === true).length;

      return {
        all: this.todos.length,
        completed: completed,
        important: important
      }
    },
    searchTodos() {
      return this.todos.filter(todo => todo.title.toLowerCase().includes(this.searchString.toLowerCase()));
    }
  }
}
</script>

<style scoped>

</style>