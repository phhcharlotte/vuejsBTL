<template>
  <button class="btn" @click.prevent="handleClick">
    <img
      class="loading"
      :src="'https://i.gifer.com/ZZ5H.gif'"
      v-if="isLoading"
    />
    <span>{{ title }}</span>
  </button>
</template>
<script>
export default {
  name: "BtnButton",
  props: {
    title: String,
    isLoading: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("handleClickEvent");
    },
  },
};
</script>
<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  column-gap: 10px;
  width: 27%;
  height: 2.5em;
  margin-bottom: 20px;
  background: #59bab1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.loading {
  width: 20px;
  height: 20px;
}
</style>
