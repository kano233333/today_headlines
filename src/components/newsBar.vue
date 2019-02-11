<template>
  <div class="news_bar">
    <div class="bar_img" v-show="data.imgUrl!==undefined">
      <img :src="data.imgUrl" alt="">
    </div>
    <div class="bar_detail">
      <p>{{data.title}}</p>
      <p class="from">
        <span :style="{'color':constData['nav_color'][data.type],'border':'1px solid '+constData['nav_color'][data.type]}" v-if="data.type!==undefined">{{constData['nav'][data.type]}}</span>
        <span class="author" v-if="data.author!==undefined">{{data.author}}</span>
        <span class="recommend" v-if="data.recommendNum!==undefined">·{{data.recommendNum}}评论·</span>
        <span v-if="data.time!==undefined">{{data.time}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import constData from '../json/const.json'

  export default {
    name: "newsBar",
    data(){
      return {
        constData:constData,
      }
    },
    props:['data']
  }
</script>

<style scoped lang="less">
  .news_bar {
    display: flex;
    justify-content: space-between;
    align-items:center;
    height:100%;
    cursor: default;
    .bar_img {
      width:20%;
      height:100%;
      overflow: hidden;
      cursor: pointer;
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
      p:nth-of-type(1){
        color:#414242;
        cursor: pointer;
      }
      p:nth-of-type(1):hover {
        color: #504399;
      }
      p {
        line-height:1.2;
      }
      .from {
        margin-top:2%;
        color:#666;
        font-size:14px;
        cursor: pointer;
      }
      .author:hover,.recommend:hover {
        color: #1b009e;
      }
    }
  }
</style>