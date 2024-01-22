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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/libros',
    name: 'libros',
    component: ()=>import('../modules/pages/Libros.vue')
  }
  ,{
    path: '/librosAll',
    name: 'librosAll',
    component: ()=>import('../modules/pages/MostrarTodos.vue')
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: ()=>import('../modules/pages/ActualizarLibro.vue')
  },
  {
    path: '/consultar/:id',
    name: 'consultar',
    component: ()=>import('../modules/pages/BuscarLibro.vue')
  }
  ,
  {
    path: '/guardar',
    name: 'guardar',
    component: ()=>import('../modules/pages/IngresarLibro.vue')
  }
  ,
  {
    path: '/eliminar',
    name: 'eliminar',
    component: ()=>import('../modules/pages/EliminarLibro.vue')
  },



  {
    path: '/personas',
    name: 'personas',
    component: ()=>import('../modules/pages/Personas.vue')
  }
  ,{
    path: '/personasAll',
    name: 'personasAll',
    component: ()=>import('../modules/pages/MostrarTodos.vue')
  },
  {
    path: '/actualizarP',
    name: 'actualizarP',
    component: ()=>import('../modules/pages/ActualizarPersona.vue')
  },
  {
    path: '/consultarP/:id',
    name: 'consultarP',
    component: ()=>import('../modules/pages/BuscarPersona.vue')
  }
  ,
  {
    path: '/guardarP',
    name: 'guardarP',
    component: ()=>import('../modules/pages/IngresarPersona.vue')
  }
  ,
  {
    path: '/eliminarP',
    name: 'eliminarP',
    component: ()=>import('../modules/pages/EliminarPersona.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
