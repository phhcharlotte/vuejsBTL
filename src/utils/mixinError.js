import axios from "axios";
export const ErrorMixin = {
  data() {
    return {
      visible: false,
      loading: false,
    };
  },
  methods: {
    closeModal() {
      this.visible = false;
    },
    login() {
      this.loading = true;
      axios
        .post("https://staging.cippo.info/api/default/api/login", {
          username: this.user.username,
          password: this.user.password,
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          let value = error.response;
          if (value.status === 400) {
            this.visible = true;
            this.errorMsg = value.data.message_en;
          }
          this.loading = false;
        });
    },
  },
};
