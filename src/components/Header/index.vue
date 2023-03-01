<template>
  <header>
    <div class="logo">
      <img src="@/assets/img/download.png" alt="" />
      <span>CiPPo</span>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderLogin",
};
</script>
<style scoped>
header {
  padding-left: 15px;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
}
.logo {
  display: flex;
  height: 100%;
  align-items: center;
  column-gap: 10px;
}
.logo img {
  width: 30px;
  height: 30px;
}
</style>
