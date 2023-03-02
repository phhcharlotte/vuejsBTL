import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import routes from "./router/index";
Vue.config.productionTip = false;

Vue.use(FloatingVue);
Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: "history" });

Vue.directive("click", {
  bind(el) {
    let setImageWrapperStyle = () => {
      el.style.width = "100%";
      el.style.height = "100%";
    };
    let setImageDefault = () => {
      el.style.width = "200px";
      el.style.height = "100px";
    };

    el.addEventListener("click", () => {
      const wrapper = document.querySelector(".img");
      const previewImg = document.querySelector("div.preview-img");
      if (!previewImg) {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("preview-img");
        setImageWrapperStyle(imgWrapper);
        console.log(wrapper);
        wrapper.appendChild(imgWrapper);
        const valueImg = document.querySelector("img");
        imgWrapper.appendChild(valueImg);
        wrapper.appendChild(valueImg);
        el.addEventListener("click", () => {
          wrapper.removeChild(document.querySelector("div.preview-img"));
          setImageDefault(wrapper);
        });
      }
    });
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
