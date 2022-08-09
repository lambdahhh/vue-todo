<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    ><TodoItem :todo="todo" /></li>
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
  }
}
</script>

<style scoped>

</style>