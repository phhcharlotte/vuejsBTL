<template>
  <div class="content">
    <header-login></header-login>
    <div class="login-container">
      <form>
        <div class="title">
          <h1>CiPPo</h1>
          <h2>
            <span style="font-weight: 600">管理画面にログイン</span>
          </h2>
        </div>
        <div>
          <div>
            <div class="titleLabel">
              <label for="">ユーザー名</label>
              <span class="icon"><i class="fa-solid fa-star-of-life"></i></span>
            </div>
            <div class="inputValue">
              <input
                type="text"
                placeholder="ユーザ名を入力してください。"
                v-bind:class="{ username: true, active: isErrorUser }"
                name="username"
                v-model="user.username"
                @blur="onblur"
              />
            </div>
            <div v-if="isErrorUser" class="error error-user">
              ユーザー名は必須です
            </div>
          </div>
          <div>
            <div class="titleLabel">
              <label for="">パスワード</label>
              <span class="icon"><i class="fa-solid fa-star-of-life"></i></span>
            </div>

            <div class="inputValue">
              <input
                type="password"
                placeholder="パスワードを入力してください。"
                v-bind:class="{ password: true, active: isErrorPass }"
                name="password"
                v-model="user.password"
                @blur="onblur"
              />
            </div>
            <div v-if="isErrorPass" class="error error-pass">
              ユーザー名は必須です
            </div>
          </div>
          <div class="mess-text">
            <div>
              <span> パスワードを表示する </span>
            </div>
            <div>
              <span>パスワードをお忘れの場合</span>
            </div>
          </div>
          <button class="btn-login" @click.prevent="login" v-tooltip="'Login'">
            <img
              class="loading"
              :src="'https://i.gifer.com/ZZ5H.gif'"
              v-if="loading"
            />
            <span>ログイン</span>
          </button>
        </div>
      </form>
      <div class="modal-above" @click="closeModal" v-if="visible">
        <div class="modal-err">
          <p class="close-err">X</p>
          <h3>Login Unsuccessful</h3>
          <p @click="closeModal">{{ errorMsg }}</p>
          <div>
            <button @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <footer-login></footer-login>
  </div>
</template>

<script>
import HeaderLogin from "@/components/Header/index.vue";
import FooterLogin from "@/components/Footer/index.vue";
// import axios from "axios";
import { ErrorMixin } from "@/utils/mixinError.js";
export default {
  name: "LoginContent",
  components: { HeaderLogin, FooterLogin },
  mixins: [ErrorMixin],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      // visible: false,
      // loading: false,
      isErrorUser: false,
      isErrorPass: false,
      // errorMsg: "",
    };
  },
  methods: {
    // closeModal() {
    //   this.visible = false;
    // },
    // login() {
    //   this.loading = true;
    //   axios
    //     .post("https://staging.cippo.info/api/default/api/login", {
    //       username: this.user.username,
    //       password: this.user.password,
    //     })
    //     .then(() => {
    //       this.$router.push("/");
    //     })
    //     .catch((error) => {
    //       let value = error.response;
    //       if (value.status === 400) {
    //         this.visible = true;
    //         this.errorMsg = value.data.message_en;
    //       }
    //       this.loading = false;
    //     });
    // },
    onblur(e) {
      let valueInput = e.target.value;
      let nameValue = e.target.name;
      const regexPass =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
      const regexMail =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if (valueInput === "") {
        if (nameValue == "password") {
          this.isErrorPass = true;
        }
        if (nameValue == "username") {
          this.isErrorUser = true;
        }

        console.log(nameValue);
      } else {
        if (regexPass.test(valueInput) === true && nameValue == "password") {
          this.isErrorPass = false;
        } else if (
          regexMail.test(valueInput) === true &&
          nameValue == "username"
        ) {
          this.isErrorUser = false;
        } else if (
          regexPass.test(valueInput) === false &&
          nameValue == "password"
        ) {
          this.isErrorPass = true;
        } else if (
          regexMail.test(valueInput) === false &&
          nameValue == "username"
        ) {
          this.isErrorUser = true;
        }
      }
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
.loading {
  width: 20px;
  height: 20px;
}
.content {
  height: 100%;
  width: 100%;
}
.login-container {
  padding-top: 30px;
}
.login-container form {
  border-radius: 2px;
  position: relative;
  z-index: 1;
  background: #fff;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 48px;
  border: 1px solid #dbdbdb;
}
.title {
  padding: 8px 0;
}
.title h1 {
  font-size: 26px;
  text-align: left !important;
  color: #484848 !important;
}
.title h2 {
  font-weight: 500;
  color: #484848;
  margin-bottom: 32px;
  margin-top: 0;
  font-size: 1.5em;
}
.titleLabel {
  display: flex;
  align-items: center;
}
.icon {
  font-size: 8px;
  color: #f56c6c;
}
.inputValue {
  height: 47px;
  font-size: 14px;
}
.inputValue input {
  height: 40px;
  width: 100%;
  line-height: 40px;
  padding-left: 10px;
  border-radius: 0;
  border: 0.5px solid #484848;
}
.inputValue input:focus {
  outline: none;
}
.error {
  color: #f56c6c;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  top: 100%;
  text-align: left;
}
.active {
  border: 1px solid #f56c6c !important;
}
.mess-text {
  width: 100%;
  text-align: right;
}
.mess-text span {
  color: #59bab1;
  font-size: 14px;
  padding: 7px 0;
  display: inline-block;
  cursor: pointer;
}
.btn-login {
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
