<template>
  <div class="todo-item">
    <div
      :class="{
        important: todo.important,
        completed: todo.completed
      }"
    >{{ todo.title }}</div>
    <div class="btns">
      <my-button @click="$emit('set-important', todo.id);" class="btn">Important</my-button>
      <my-button @click="$emit('set-completed', todo.id);" class="btn">Completed</my-button>
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

</style>