<template>
  <div class="content">
    <header-login />
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
              <input-value
                v-model="username"
                :updateInput="username"
                placeholder="ユーザ名を入力してください。"
                name="username"
                @handleCheck="handleCheck"
                v-bind:class="{ active: isErrorUser }"
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
                v-model="password"
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
          <btn-button
            title="ログイン"
            @handleClickEvent="login"
            :isLoading="loading"
            v-tooltip="'Login'"
          />
        </div>
      </form>
      <err-modal
        @handleModal="closeModal"
        v-if="visible"
        :value="errorMsg"
      ></err-modal>
    </div>
    <footer-login />
  </div>
</template>

<script>
import HeaderLogin from "@/components/Header/index.vue";
import FooterLogin from "@/components/Footer/index.vue";
import BtnButton from "@/components/button/index.vue";
import InputValue from "@/components/Input/index.vue";
import ErrModal from "@/components/Modal/index.vue";
import { ErrorMixin } from "@/utils/mixinError.js";
export default {
  name: "LoginContent",
  components: {
    HeaderLogin,
    FooterLogin,
    BtnButton,
    InputValue,
    ErrModal,
  },
  mixins: [ErrorMixin],
  data() {
    return {
      username: "",
      password: "",
      isErrorUser: false,
      isErrorPass: false,
      errorMsg: "",
    };
  },
  methods: {
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
    handleCheck(valueInput) {
      const regexMail =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if (valueInput === "") {
        {
          this.isErrorUser = true;
        }
      } else {
        if (regexMail.test(valueInput) === true) {
          this.isErrorUser = false;
        } else if (regexMail.test(valueInput) === false) {
          this.isErrorUser = true;
        }
      }
    },
  },
};
</script>

<style scoped>
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
  height: 100%;
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
</style>
