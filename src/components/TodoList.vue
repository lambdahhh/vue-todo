<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    ><TodoItem
        @setImportant="$emit('set-important', todo.id)"
        @setCompleted="$emit('set-completed', todo.id)"
        :todo="todo" /></li>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components: {TodoItem},
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>

</style>