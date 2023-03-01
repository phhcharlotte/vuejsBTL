<template>
  <footer>
    <div class="logoFooter">
      <img src="@/assets/img/download2.svg" alt="" />
      <span>ⓒ CiPPo, Incorporated</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterMain",
};
</script>
<style scoped>
footer {
  height: 100px;
  background: #fff;
}
.logoFooter {
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #dbdbdb;
  padding-top: 15px;
}
.logoFooter img {
  width: 25px;
  height: 25px;
}
</style>
