<template>
  <div class="modal-above" v-on:click="closeModal">
    <div class="modal-err">
      <p class="close-err">X</p>
      <h3>Login Unsuccessful</h3>
      <p v-on:click="closeModal">{{ value }}</p>
      <div>
        <button v-on:click="closeModal">
          <span>Close</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrModal",
  props: {
    value: String,
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("handleModal");
    },
  },
};
</script>
<style scoped>
.modal-above {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.close-err {
  text-align: right;
  cursor: pointer;
}
.modal-err {
  position: fixed;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  z-index: 1000;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 20px;
}
</style>
