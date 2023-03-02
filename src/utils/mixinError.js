export const ErrorMixin = {
  data() {
    return {
      visible: false,
      loading: false,
      errorMsg: "",
    };
  },
  methods: {
    closeModal() {
      this.visible = false;
    },
  },
};
