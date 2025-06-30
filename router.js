import { createRouter , createWebHistory } from "vue-router";   
import Home from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Signup from "./components/Signup.vue"

const routes =[
    { path: '/Dashboard', component: Home },
  { path: '/Login', component: Login },
  { path: '/Signup', component: Signup },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router