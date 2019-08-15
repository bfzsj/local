import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/components/learn'
import session from '@/components/learns/session'
import lesson from '@/components/learns/lesson'
import login from '@/components/login'
import register from '@/components/user/register'
import admin from '@/components/crud/index'
import userlist from '@/components/crud/userlist'
import vipuser from '@/components/crud/vipuser'
import city from '@/components/crud/city'
import carousel from '@/components/carousel'
import county from '@/components/catalog/county'
import evolution from '@/components/crud/evolution'
import land from '@/components/crud/land'
import skill from '@/components/crud/skill'
import catalogs from '@/components/catalog/catalogs'
import details from '@/components/catalog/details'
import user from '@/components/crud/user'
import comity from '@/components/crud/comity'
import town from '@/components/crud/town'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'/register',
      name:'register',
      component:register,
    },
    {
      path:'/login',
      name:'login',
      component:login,
    },
    {
      path: '/',
      name: 'learn',
      component: learn,
      children:[
        {
          path:'/session',
          name:'session',
          component:session,
        },
        {
          path:'/',
          name:'carousel',
          component:carousel
        },
				{
					path:'/county',
					name:'county',
					component:county,
				},
        {
          path:'/catalogs',
          name:'catalogs',
          component:catalogs
        },
        {
          path:'/details',
          name:'details',
          component:details,
        }
      ]
    },
    {
      path:'/admin',
      name:'admin',
      component:admin,
			children:[
        {
          path:'/',
          name:'user',
          component:user
        },
				{
					path:'/userlist',
					name:'userlist',
					component:userlist,
				},
				{
						path:'/vipuser',
						name:'vipuser',
						component:vipuser,
				},
				{
					path:'/city',
					name:'city',
					component:city,
					},
					{
						path:'/evolution',
						name:'evolution',
						component:evolution,
					},
        {
          path:'/land',
          name:'land',
          component:land,
        },
        {
          path:'/skill',
          name:'skill',
          component:skill,
        },
        {
          path:'/comity',
          name:'comity',
          component:comity,
        },
        {
          path:'/town',
          name:'town',
          component:town,
        },
			]
    }
  ]
})

