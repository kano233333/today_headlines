<template>
  <div class="news_bar">
    <div class="bar_img">
      <img :src="data.imgUrl" alt="">
    </div>
    <div class="bar_detail">
      <p>{{data.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newsBar",
    props:['data']
  }
</script>

<style scoped lang="less">
  .news_bar {
    display: flex;
    justify-content: space-between;
    align-items:center;
    height:100%;
    .bar_img {
      width:20%;
      height:100%;
      overflow: hidden;
      img {
        display:block;
        width:100%;
        height:100%;
        transition:0.5s all;
      }
      img:hover {
        width:120%;
        height:120%;
      }
    }
    .bar_detail {
      width:78%;
    }
  }
</style>