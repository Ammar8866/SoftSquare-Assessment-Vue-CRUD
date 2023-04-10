import { createRouter,createWebHistory } from 'vue-router' 
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'
import Products from './components/Products.vue'
import ProductCreate from './components/ProductCreate.vue'
import ProductEdit from './components/ProductEdit.vue'

const routes = [
    {
        path:'/',
        redirect:'/Login'
  },
  {
    name:'Login',
    component:Login,
    path:'/Login'
},

  {
    path: '/admin',
    component: Admin,
    name: 'Admin',
    children: [
   
      { 
        path: '/products', 
        component: Products,
        name: 'Products' 
      },
      { 
        path: 'products/create', 
        component: ProductCreate,
        name: 'ProductCreate' 
      },
      { 
        path: 'products/:id/edit', 
        component: ProductEdit,
        name: 'ProductEdit', 
        props: true 
      }
    ]
  }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router
