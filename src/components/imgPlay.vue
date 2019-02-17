<template>
  <div id="img_play" @mouseenter="clear()" @mouseleave="play()">
    <div class="img_show" ref="imgs">
      <img v-for="(value,index) in imgs" :src="value.imgUrl" :style="{'opacity':imgOpacity(index)}">
      <p class="img_title">{{imgs[imgIndex].title}}</p>
    </div>
    <div class="img_nav">
      <ul>
        <li v-for="(value,index) in imgs" @mouseenter="mouseEnterShift(index)" :class="{'slide_active':index===imgIndex}">{{value.type}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "imgPlay",
    data(){
      return {
        imgIndex:0,
        imgs:[]
      }
    },
    methods:{
      play(){
        this.timer = setInterval(this.move,3000)
      },
      move(){
        this.imgIndex++;
        if(this.imgIndex === this.imgs.length){
          this.imgIndex = 0;
        }
      },
      imgOpacity(index){
        if(index===this.imgIndex){
          return '1';
        } else {
          return '0';
        }
      },
      mouseEnterShift(index){
        this.imgIndex = index;
        this.clear();
      },
      clear(){
        clearInterval(this.timer);
      }
    },
    created(){
      this.play();
      let _this = this;
      this.$api.getData('/api/slideArticle').then(function(data){
        _this.imgs = data;
      })
    }
  }
</script>

<style scoped lang="less">
  #img_play {
    height: 300px;
    display: flex;
    .img_show {
      width:90%;
      height:100%;
      position:relative;
      >img {
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        transition:0.3s all;
      }
      .img_title {
        position:absolute;
        bottom:0;
        padding:10px 8px 10px 10px;
        width:100%;
        max-width:100%;
        color:#fff;
        font-weight:800;
        font-size:18px;
        background: linear-gradient(rgba(87, 87, 87,0), rgba(87, 87, 87, 0.8));
      }
    }
    .img_nav {
      width:10%;
      max-width:10%;
      >ul {
        width:100%;
        height:100%;
        display: flex;
        flex-direction:column;
        justify-content: space-evenly;
        background-color:#000;
        color:#fff;
        >li {
          font-size:13px;
          text-align:center;
          padding:10px 0;
          cursor:pointer;
        }
        >li:hover {
          background-color: rgba(254, 0, 9, 0.8);
        }
        .slide_active {
          background-color: rgba(254, 0, 9, 0.8);
          position:relative;
        }
        .slide_active:before {
          width:0;
          height:0;
          content:'';
          border-width:5px 5px 5px 0;
          border-style:solid;
          border-color:transparent #CB0007 transparent transparent;
          position:absolute;
          top:35%;
          left:-5px;
        }
      }
    }
  }
</style>