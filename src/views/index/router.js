import Recommend from '../recommend'
import Tech from '../tech'
import Hot from '../hot'
import Sports from '../sports'
import Game from '../game'
import Funny from '../funny'
import Finance from '../finance'
import Entertainment from '../entertainment'
import Car from '../car'
import Sign from '../user/sign'
import index from './index'
import Login from '../user/in'
import Register from '../user/register'
import Center from '../user/center'
import Search from '../search/index'
import Article from '../article/detail'

export default [
  {
    path: '/',
    redirect:'/recommend',
    component:index,
    meta: {
      keepAlive: true
    },
    children:[
      {
        path: '/recommend',
        name: "recommend",
        component: Recommend,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/tech',
        name: "tech",
        component: Tech,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/hot',
        name: "hot",
        component: Hot,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/sports',
        name: "sports",
        component: Sports,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/game',
        name: "game",
        component: Game,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/funny',
        name: "funny",
        component: Funny,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/finance',
        name: "finance",
        component: Finance,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/entertainment',
        name: "entertainment",
        component: Entertainment,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/car',
        name: "car",
        component: Finance,
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path:'/sign',
    name:'sign',
    component: Sign,
    children:[
      {
        path:'/sign/in',
        component:Login
      },
      {
        path:'/sign/register',
        component:Register
      }
    ]
  },
  {
    path:'/usercenter',
    component:Center
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/article/:id',
    component:Article
  }
]