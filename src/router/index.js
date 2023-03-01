import LoginContent from "@/views/Login/index.vue";
import ErrorPage from "@/views/NotFound/index.vue";
import HomePage from "@/views/Home/index.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginContent,
  },
  {
    path: "/(.*)",
    name: "404",
    component: ErrorPage,
  },
];
export default routes;
