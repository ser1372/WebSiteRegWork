import { createRouter, createWebHashHistory } from "vue-router";
import Choose from "./components/Choose.vue";
import Individual from "./components/Individual.vue";
import Buisness from './components/Buisness.vue';
import Login from './components/Login.vue';
import ResetPassword from './components/ResetPassword.vue';


export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/login', component: Login, alias:'/' },
        { path: '/choosen', component: Choose},
        { path: '/individual', component: Individual },
        { path: '/buisness', component: Buisness },
        { path: '/resetpassword', component: ResetPassword },
    ]
})