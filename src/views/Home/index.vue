<template>
  <div class="content">
    <h1>Home</h1>

    <div class="img">
      <img src="@/assets/img/NTQS_logo_linkedin.jpg" alt="" v-click />
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
};
</script>
<style scoped>
.img {
  border: 1px solid black;
  width: fit-content;
}
.img img {
  width: 200px;
  height: 100px;
}
</style>
