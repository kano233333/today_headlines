<template>
  <div class="after_search">
    <header-part></header-part>
    <div class="wrap">
      <router-link to="/">
        <img style="transform: scale(0.6)" class="aaa" src="../../assets/img/logo.png">
      </router-link>
      <div class="search_wrap">
        <search :searchVal="this.$route.query.keyWord" type="1"></search>
      </div>
    </div>
    <div class="search_list">
      <div class="search_nav">
        <router-link v-for="(value,key) in list" :to="xxx(key)" :key="value">{{value}}</router-link>
      </div>

      <router-view ref="searchArt" v-if="this.$store.state.freshIndex"></router-view>

    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import HeaderPart from '../../components/headerPart'
  import Search from '../../components/search'

  export default {
    name: "index",
    data(){
      return {
        list:{
          'article':'文章',
          'user':'用户'
        },
      }
    },
    components:{
      HeaderPart,
      Search
    },
    methods:{
      xxx(key){
        return {
          path:'/search/'+key+'?keyWord=',
          query:{
            keyWord:this.$route.query.keyWord
          }
        }
      }
    },
    mounted(){
      window.onscroll = function(){}
    }
  }
</script>

<style lang="less">
  @media (max-width: 800px) {
    html .after_search{
      .list {
        height:auto;
      }
      img {
        transform: scale(1);
      }
      .wrap .aaa {
        width:0;
        height:0;
        overflow: hidden;
        align-items:center;
      }
      .search_wrap {
        width:80%;
        margin:0 auto;
      }
      .search_list {
        width:80%;
        margin:0 auto;
        .list_wrap {
          width:100%;
        }
        .fans_list img {
          width:50px;
          height:50px;
          margin-right:20px;
        }
      }
    }
  }

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
    .search_list {
      margin:0 0 0 200px;
    }
    .search_nav {
      display: flex;
      font-size:18px;
      >a {
        margin:20px 20px;
        cursor: pointer;
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
      .fans_list {
        display: flex;
        align-items:center;
        animation:0.5s Show forwards;
        margin:10px;
        cursor: pointer;
        img {
          transform: scale(0.6);
        }
      }
      .fans_list:hover {
        color:cadetblue;
      }
      .fans_list >img {
        width:100px;
        height:100px;
        border-radius:50%;
        border:1px solid cadetblue;
      }
    }
    .loading {
      margin:150px 0 0 300px;
      transform: scale(0.7);
    }
    .link_active{
      color:#ED4040;
    }
  }
</style>