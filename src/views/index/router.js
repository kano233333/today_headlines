import Recommend from '../recommend'
import Tech from '../tech'
import Hot from '../hot'
import Sports from '../sports'
import Game from '../game'
import Funny from '../funny'
import Finance from '../finance'
import Entertainment from '../entertainment'
import Car from '../car'

export default [
  {
    path: '/',
    component:Recommend,
    meta: {
      keepAlive: true
    }
  },
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