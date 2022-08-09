<template>
  <p>All todos: {{todosCount.all}}, Important: {{todosCount.important}}, Completed: {{todosCount.completed}}</p>
</template>

<script>
export default {
  name: "StatusBar",
  props: {
    todosCount: {
      type: Object
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 19px;
    font-weight: bold;
    color: tomato;
  }
</style>