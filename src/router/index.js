import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "login",
    component: ()=>import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to,from,next)=>{
  if(to.name=="login"){
    next()
  }else{
    const token = localStorage.getItem("token")
    if(token){
      next()
    }else{
      next({name:"login"})
    }
  }
})
export default router;
