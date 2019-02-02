<template>
  <div id="nav">
    <ul>
      <li v-for="(value,key,index) in constData['nav']">
        <router-link :to="value">{{key}}</router-link>
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
    html #nav ul {
      display: flex;
    }
  }
  /*在768和991像素之间的屏幕*/
  @media (min-width: 768px) and (max-width: 991px) {}
  /*在992和1199像素之间的屏幕*/
  @media (min-width: 992px) and (max-width: 1199px) {}
  /*在大于1200像素的屏幕*/
  @media (min-width: 1200px) {}

  #nav {
    min-width:200px;
    ul {
      display: block;
      li {
        padding:8px 10px;
      }
    }
  }
</style>