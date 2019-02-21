<template>
  <div class="art_header">
    <div class="img_wrap">
      <router-link to="/">
        <img src="../assets/img/logo.png">
      </router-link>
      <Breadcrumb v-if="type!==''">
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem :to="'/search/article?keyWord='+type">{{type}}</BreadcrumbItem>
        <BreadcrumbItem>正文</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="search_wrap">
      <search></search>
    </div>
  </div>
</template>

<script>
  import Search from '../components/search'
  import constData from '../json/const.json'

  export default {
    name: "artHeader",
    props:{
      'type':{
        default:''
      }
      },
    data(){
      return {
        constData:constData
      }
    },
    components:{
      Search
    }
  }
</script>

<style scoped lang="less">
  .art_header {
    padding:0 20px;
    height:60px;
    box-shadow: 0 0 8px #898a8b;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a img {
      transform: scale(0.65);
    }
    .ivu-breadcrumb {
      font-size:15px;
    }
    .img_wrap {
      display:flex;
      align-items: center;
    }
    .search_wrap {
      width:25%;
    }
  }
</style>