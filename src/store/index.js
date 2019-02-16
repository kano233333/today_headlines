import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import constData from '../json/const.json'

export default new vuex.Store({
  state:{
    user:{
      isLogin:false,
      email:'',
      uid:'',
      imgUrl:'',
      fans:'',
      follow:''
    },
    searchList:[],
    constData:constData
  }
})