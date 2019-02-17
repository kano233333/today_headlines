import Sign from '../user/sign'
import index from './index'
import Login from '../user/in'
import Register from '../user/register'
import Center from '../user/center'
import Search from '../search'
import Article from '../article/detail'
import Wei from '../user/wei'
import UComment from '../user/comment'
import Star from '../user/star'
import Follow from '../user/followLits'
import Fans from '../user/fansList'
import Set from '../user/set'
import Other from '../otherArt'

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
        path: '/:type',
        name: "other",
        component: Other
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
        component:Login,
        meta: {
          keepAlive: true
        }
      },
      {
        path:'/sign/register',
        component:Register,
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path:'/user/:uid',
    component:Center,
    redirect:'/user/:uid/wei',
    meta: {
      keepAlive: true
    },
    children:[
      {
        path:'/user/:uid/wei',
        name:'userwei',
        component:Wei
      },
      {
        path:'/user/:uid/comment',
        name:'usercomment',
        component:UComment
      },
      {
        path:'/user/:uid/star',
        name:'userstar',
        component:Star
      },
      {
        path:'/user/:uid/follow',
        name:'userfollow',
        component:Follow
      },
      {
        path:'/user/:uid/fans',
        name:'userfans',
        component:Fans
      },
      {
        path:'/user/:uid/set',
        name:'userset',
        component:Set
      }
    ]
  },
  {
    path:'/search/key',
    component:Search,
  },
  {
    path:'/article/:type/:id',
    component:Article,
    name:'article',
    meta: {
      keepAlive: true
    }
  }
]