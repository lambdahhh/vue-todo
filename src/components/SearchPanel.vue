<template>
  <input :value="modelValue" @input="updateValue" class="input" type="text" />
</template>

<script>
export default {
  name: "SearchPanel",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input {
    padding: 10px 5px;
    width: 80%;
  }
</style>