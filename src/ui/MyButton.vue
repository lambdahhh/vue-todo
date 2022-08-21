<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
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