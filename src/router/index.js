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
    // component에 함수를 사용하면 그거에 관련된 about 페이지는 app.js에서 받아오는 것이 아닌 about.js 독립적으로 사용할 수 있다.
    component: () =>
      // webpackChunkname에 따라 about 라우트를 클릭했을 때 네트워크에 표시되는, js파일 이름이 바뀐다.
      // webpackPretch를 넣어주면 status는 200으로 바뀌고, (원래는 304로 표시됨) 그리고, 캐시에 저장해줌. 개발자도구 <head>에 확인해보면 <link>로 prefetch되어있음. about 라우터를 클릭하면 캐시에 적용된 about.js를 사용하기 때문에 캐시에 있으므로 바로 사용하므로 사용자가 더 빠른 페이지를 받아볼 수 있음.
      // 사용자가 한번이상 들어갈 페이지 혹은 용량이 큰 페이지에 사용해주는 것이 좋음
      // 하지만 about을 사용하지 않을 수도 있기 때문에 꼭 들어가는 페이지에만 prefetch를 해주는 것이 좋음.
      import(/* webpackChunkName: "about"  */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: '/databindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" , webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: '/databindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" , webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: '/databindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" , webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
