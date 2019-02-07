<template>
  <div id="app">
    <header-part></header-part>
    <div class="main">
      <div class="main_nav">
        <nav-part></nav-part>
      </div>
      <div class="main_news">
        <router-view></router-view>
      </div>
      <div class="main_other">right</div>
    </div>
    <!--<footer-part></footer-part>-->
  </div>
</template>

<script>
import HeaderPart from './components/headerPart'
import NavPart from './components/navPart'
import FooterPart from './components/footerPart'

export default {
  name: 'App',
  components:{
    HeaderPart,
    NavPart,
    FooterPart
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
    }
  }
  /*在768和991像素之间的屏幕*/
  @media (min-width: 768px) and (max-width: 991px) {}
  /*在992和1199像素之间的屏幕*/
  @media (min-width: 992px) and (max-width: 1199px) {}
  /*在大于1200像素的屏幕*/
  @media (min-width: 1200px) {}
  #app{
  display: flex;
  flex-direction:column;
}
  .main {
    display: flex;
    justify-content: center;
    /*min-height: calc(100vh - 150px);*/
    >div {
      border:1px solid chocolate;
    }
    .main_nav {
      max-width:20%;
    }
    .main_news {
      min-width:55%;
    }
    .main_other {
      min-width:25%;
    }
  }
</style>
