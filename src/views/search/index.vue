<template>
  <div class="after_search">
    <header-part></header-part>
    <div class="wrap">
      <router-link to="/">
        <img src="../../assets/img/logo.png">
      </router-link>
      <div class="search_wrap">
        <search :searchVal="this.$route.query.keyWord" type="1"></search>
      </div>
    </div>
    <div class="search_list">
      <div class="search_nav">
        <p @click="searchOne(0)" :class="{'active':active(0)}">文章</p>
        <p @click="searchOne(1)" :class="{'active':active(1)}">用户</p>
      </div>
      <div class="list_wrap" v-show="!loadingShow">
        <router-link :to="{'name':'article','params':{'id':item.id,'data':item}}" class="list" v-for="item in this.$store.state.searchList" :key="item.id">
          <news-bar :data="item"></news-bar>
          <hr />
        </router-link>
      </div>
      <loading class="loading" v-show="loadingShow"></loading>
    </div>
  </div>
</template>

<script>
  import HeaderPart from '../../components/headerPart'
  import Search from '../../components/search'
  import Loading from '../loading'
  import NewsBar from '../../components/newsBar'

  export default {
    name: "index",
    data(){
      return {
        loadingShow: false,
        searchType:0,
      }
    },
    components:{
      HeaderPart,
      Search,
      Loading,
      NewsBar
    },
    methods:{
      active(type){
        if(type===this.searchType){
          return true;
        }else{
          return false;
        }
      },
      searchOne(type){
        if(this.searchType!==type){
          this.loadingShow = true;
          this.searchType=type;
        }
        if(type === 0){
          this.loadingShow = false;
        }
      }
    },
    mounted(){
      //axios
    }
  }
</script>

<style scoped lang="less">
  .after_search {
    background-color: #F1F2F3;
    min-height:100vh;
    .wrap {
      display: flex;
      align-items:center;
    }
    .search_wrap {
      width:40%;
    }
    img {
      transform: scale(0.6);
    }
    .search_list {
      margin:0 0 0 200px;
    }
    .search_nav {
      display: flex;
      font-size:18px;
      >p {
        margin:20px 20px;
        cursor: pointer;
      }
      .active{
        color:#ED4040;
      }
    }
    .list {
      display: block;
      margin:20px 0;
      height:100/1499*100vw;
      font-size:18px;
    }
    a {
      color:#666;
    }
    hr {
      margin:10.5px 0;
      height:1px;
      border:none;
      background-color: #dddedd
    }
    .list_wrap {
      width:60%;
      background-color: #fff;
      padding:5px 25px;
    }
    .loading {
      margin:150px 0 0 300px;
      transform: scale(0.7);
    }
  }
</style>