<template>
  <div id="nav">
    <img src="../assets/img/logo.png">
    <ul class="nav_ul">
      <li v-for="(value,key,index) in constData['nav']" v-show="index<12">
        <router-link v-show="index<12" :to="value">{{key}}</router-link>
      </li>
      <li>
        <a>更多</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import constData from '../json/const.json'
  export default {
    name: "navPart",
    data(){
      return {
        constData:constData
      }
    }
  }
</script>

<style scoped lang="less">
  /*在小于768像素的屏幕*/
  @media (max-width: 767px) {
    html #nav {
      >img {
        width:0;
        height:0;
        display:block;
      }
      .nav_ul {
        display: flex;
      }
    }
  }
  /*在768和991像素之间的屏幕*/
  @media (min-width: 768px) and (max-width: 991px) {}
  /*在992和1199像素之间的屏幕*/
  @media (min-width: 992px) and (max-width: 1199px) {}
  /*在大于1200像素的屏幕*/
  @media (min-width: 1200px) {}

  #nav {
    min-width:120px;
    >img {
      width:100%;
      max-width:120px;
      max-height: 60px;
    }
    .nav_ul {
      display: block;
      li {
        text-align: center;
        min-width:40px;
        a {
          display: block;
          color:#666;
          padding:12px 0;
          margin:2px 0;
          transition:0.5s all;
        }
        a:hover {
          color:#fff;
          background-color:#ED4040;
          border-radius:5px;
        }
        .link_active {
          color:#fff;
          background-color:#ED4040;
          border-radius:5px;
        }
      }
    }
  }
</style>