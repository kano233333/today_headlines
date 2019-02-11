<template>
  <div id="img_play" @mouseenter="clear()" @mouseleave="play()">
    <div class="img_show" ref="imgs">
      <img v-for="(value,index) in imgs" :src="value.src" :style="{'opacity':imgOpacity(index)}">
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
        imgs:[
          {
            src:'https://b-ssl.duitang.com/uploads/item/201902/04/20190204085521_hzMkB.jpeg',
            title:'利物浦1-1客平西汉姆，马内连场破门',
            type:'要闻'
          },
          {
            src:'https://b-ssl.duitang.com/uploads/item/201602/13/20160213125545_Rikrf.thumb.700_0.jpeg',
            title:'为什么以前的春节这么有意思？',
            type:'社会'
          },
          {
            src:'https://b-ssl.duitang.com/uploads/item/201611/19/20161119092213_Jrzye.thumb.700_0.jpeg',
            title:'利物浦1-1客平西汉姆，马内连场破门',
            type:'娱乐'
          },
          {
            src:'https://b-ssl.duitang.com/uploads/item/201705/25/20170525232242_vU3cT.thumb.700_0.jpeg',
            title:'为什么以前的春节这么有意思？',
            type:'体育'
          },
          {
            src:require('../assets/img/logo.png'),
            title:'利物浦1-1客平西汉姆，马内连场破门',
            type:'军事'
          },
          {
            src:require('../assets/logo.png'),
            title:'为什么以前的春节这么有意思？',
            type:'明星'
          }
        ]
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