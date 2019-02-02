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
    path: '/Recommend',
    name: "Recommend",
    component: Recommend,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Tech',
    name: "Tech",
    component: Tech,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Hot',
    name: "Hot",
    component: Hot,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Sports',
    name: "Sports",
    component: Sports,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Game',
    name: "Game",
    component: Game,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Funny',
    name: "Funny",
    component: Funny,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Finance',
    name: "Finance",
    component: Finance,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Entertainment',
    name: "Entertainment",
    component: Entertainment,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Car',
    name: "Car",
    component: Finance,
    meta: {
      keepAlive: true
    }
  }
]