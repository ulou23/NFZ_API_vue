import VueRouter from "vue-router";
import Vue from "vue";
import Provider from "@/components/Provider";
import About from "@/components/About";
import User from "@/components/User";
import DisplayPro from "@/components/DisplayPro";



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
        path:"/user",
        name:"User",
        component:User ,
        
    },
    {
        path:"/edit",
        name: "Edit",
        component: DisplayPro,
    }
]



const router = new VueRouter({
    routes,
    mode: "history",
});

Vue.use(VueRouter);

export default router;