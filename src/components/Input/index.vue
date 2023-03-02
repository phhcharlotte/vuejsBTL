<template>
  <input type="text" v-bind:value="value" v-on:input="handleInput" />
</template>
<script>
export default {
  name: "InputValue",
  props: {
    value: String,
  },
  data() {
    return {};
  },
  methods: {
    handleInput() {
      const value = event.target.value;
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border: 0.5px solid #484848;
}
input:focus {
  outline: none;
}
</style>
