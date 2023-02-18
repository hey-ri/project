import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 저장누를때 컨벤션 에러가 뜰 떄가 있는데,
    // quote는 싱글 ' 로 써야 error가  나지 않는다. 처음 코딩 컨벤션, 스텐다드로 설정했는데 거기서 '를 쓰기 때문에 그렇게 써야한다.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
