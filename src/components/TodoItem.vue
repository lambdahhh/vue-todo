<template>
  <div class="todo-item">
    <div>{{ todo.title }}</div>
    <div class="btns">
      <button>Important</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .todo-item {
    font-weight: bold;
    font-size: 18px;
    color: tomato;
    margin: 5px;
    padding: 5px;
    border: solid 1px teal;
    display: flex;
    justify-content: space-between;
  }
  .btns * {
    margin-left: 5px;
  }
</style>