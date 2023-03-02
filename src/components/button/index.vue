<template>
  <button class="btn" v-on:click.prevent="handleClick">
    <!-- <img class="loading" :src="'https://i.gifer.com/ZZ5H.gif'" v-if="loading" /> -->
    <span>{{ title }}</span>
  </button>
</template>
<script>
export default {
  name: "BtnButton",
  props: {
    title: String,
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("handleClickEvent");
      console.log("123", this.title);
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
</style>
