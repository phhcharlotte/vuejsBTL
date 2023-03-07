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
    let setImageWrapperStyle = (e) => {
      e.style.width = "100%";
      e.style.height = "100%";
    };
    let setImageDefault = (e) => {
      e.style.width = "200px";
      e.style.height = "100px";
    };
    el.addEventListener("click", () => {
      const wrapper = document.querySelector(".img");
      const previewImg = document.querySelector("div.preview-img");
      if (!previewImg) {
        // Create Wrapper
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("preview-img");
        setImageWrapperStyle(imgWrapper);

        // Clone the image node
        const clone = el.cloneNode(true);
        setImageWrapperStyle(clone);

        imgWrapper.appendChild(clone);
        wrapper.appendChild(imgWrapper);
      } else {
        wrapper.removeChild(document.querySelector("div.preview-img"));
        setImageDefault(wrapper);
      }
    });
  },
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
