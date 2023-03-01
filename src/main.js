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
    const wrapper = document.querySelector(".img");

    el.addEventListener("click", () => {
      const previewImg = document.querySelector("div.preview-img");
      if (!previewImg) {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("preview-img-wrapper");
        setImageWrapperStyle(imgWrapper);
        console.log(wrapper);
        // wrapper.appendChild(imgWrapper);
      }
    });
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
