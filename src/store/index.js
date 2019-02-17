import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import constData from '../json/const.json'

export default new vuex.Store({
  state:{
    user:{
      isLogin:0,
      email:'',
      uid:'',
      imgUrl:'',
      fans:'',
      follow:''
    },
    searchList:{},
    constData:constData,
    freshIndex:true,
    freshIndex2:true,
    GMTToStr(time){
      let date = new Date(time)
      let Str=date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + ' ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds()
      return Str
    },
    handleScroll(el){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>30){
        document.querySelector(el).style.top = '0';
      }else{
        document.querySelector(el).style.top = '50px';
      }
    },
    commentData:[],
    replyData:[]
  },
  mutations:{
    getUserInfo(){
      // this.$api.sendData('/api/')
    }
  }
})