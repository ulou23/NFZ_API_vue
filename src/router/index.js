import VueRouter from "vue-router";
import Provider from "@/components/Provider";
import About from "@/components/About";
import { userSetter } from "core-js/fn/symbol";

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


export default router