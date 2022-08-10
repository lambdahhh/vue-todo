<template>
  <div class="todo-item">
    <div
      :class="{
        important: todo.important,
        completed: todo.completed
      }"
    >{{ todo.title }}</div>
    <div class="btns">
      <button @click="$emit('set-important', todo.id);" class="btn">Important</button>
      <button @click="$emit('set-completed', todo.id);" class="btn">Delete</button>
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
    font-size: 18px;
    margin: 5px;
    padding: 5px;
    border: solid 1px teal;
    display: flex;
    justify-content: space-between;
  }
  .important {
    color: tomato;
    font-weight: bold;
  }
  .completed {
     text-decoration: line-through;
  }
  .btns * {
    margin-left: 5px;
  }
  .btn {
    background: transparent;
    border: solid 1px teal;
    padding: 7px;
    color: teal;
  }
  .btn:hover {
    background: teal;
    color: white;
    cursor: pointer;
  }
</style>