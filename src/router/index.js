import VueRouter from "vue-router";
import Vue from "vue";
import Provider from "@/components/Provider";
import About from "@/components/About";
import User from "@/components/User";



const routes=[
    {
        path: "/",
        name:"Provider",
        component: Provider,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path:"/user/:name",
        name:"User",
        component:User ,
        props: true,
    }
]



const router = new VueRouter({
    routes,
    mode: "history",
});

Vue.use(VueRouter);

export default router;