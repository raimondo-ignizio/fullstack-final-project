import Vue from "vue"
import VueRouter from "vue-router"
import home from "./routes/home";
import userbooks from "./routes/userbooks";
import books from "./routes/books.js";

Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    routes: [
        ...home,
        ...userbooks,
        ...books,
    ],
});
