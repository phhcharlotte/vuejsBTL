<template>
  <input type="text" @blur="$emit('handleCheck', $event.target.value)" />
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
