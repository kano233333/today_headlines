<template>
  <div id="index">
    <header-part></header-part>
    <div class="main">
      <div class="main_nav">
        <nav-part></nav-part>
      </div>
      <div class="main_news">
        <router-view></router-view>
      </div>
      <div class="main_other">
        <Search type="0"></Search>
        <sign-card class="sign_margin" v-if="false"></sign-card>
        <in-card></in-card>
        <hot-news></hot-news>
      </div>
      <BackTop></BackTop>
    </div>
  </div>
</template>

<script>
  import HeaderPart from '../../components/headerPart'
  import NavPart from '../../components/navPart'
  import FooterPart from '../../components/footerPart'
  import Search from '../../components/search'
  import SignCard from '../../components/signCard'
  import HotNews from '../../components/hotNews'
  import InCard from '../../components/in_card'

  export default {
    name: 'index',
    components:{
      HeaderPart,
      NavPart,
      FooterPart,
      Search,
      SignCard,
      HotNews,
      InCard
    }
  }
</script>

<style lang="less">
  /*在小于768像素的屏幕*/
  @media (max-width: 767px) {
    html .main {
      flex-direction: column;
      justify-content: flex-start;
      .main_nav {
        max-width:100%;
      }
      .main_other {
        height:0;
        width:0;
        overflow: hidden;
      }
      .main_news {
        margin-left:0;
      }
    }
  }
  /*在768和991像素之间的屏幕*/
  @media (min-width: 768px) and (max-width: 991px) {}
  /*在992和1199像素之间的屏幕*/
  @media (min-width: 992px) and (max-width: 1199px) {}
  /*在大于1200像素的屏幕*/
  @media (min-width: 1200px) {}
  #index{
    display: flex;
    flex-direction:column;
  }
  .main {
    /*z-index:-1;*/
    display: flex;
    justify-content: center;
    /*min-height: calc(100vh - 150px);*/
    >div {
      padding-top:15px;
      margin:0 5px;
      /*border:1px solid chartreuse;*/
    }
    .main_nav {
      max-width:20%;
    }
    .main_news {
      min-width:55%;
      margin-left:150px;
    }
    .main_other {
      max-width:25%;
      .sign_margin {
        margin:20px 0;
      }
    }
  }
</style>
