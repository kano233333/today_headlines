<template>
  <div id="nav">
    <img src="../assets/img/logo.png">
    <ul class="nav_ul">
      <li v-for="(value,key,index) in constData['nav']" v-show="index<12">
        <router-link @click.native="flushCom" :to="{'name':'other','params':{'type':key}}">{{value}}</router-link>
      </li>
      <div class="more" ref="more" @mouseenter="showMore()" @mouseleave="hiddenMore()">
        <li v-for="(value,key,index) in constData['nav']" v-show="index>=12">
          <router-link @click.native="flushCom" :to="{'name':'other','params':{'type':key}}">{{value}}</router-link>
        </li>
      </div>
      <li @mouseenter="showMore()" @mouseleave="hiddenMore()">
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
    },
    methods:{
      flushCom(){
        this.$store.state.freshIndex2 = false;
        let _this = this;
        this.$nextTick(() => (_this.$store.state.freshIndex2 = true))
      },
      showMore(){
        this.$refs.more.style.width = '120px';
        this.$refs.more.style.height = 'auto';
        this.$refs.more.style.padding = '10px';
      },
      hiddenMore(){
        this.$refs.more.style.width = '0';
        this.$refs.more.style.height = '0';
        this.$refs.more.style.padding = '0';
      },
      handleScroll(el){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>30){
          document.querySelector(el).style.top = '0';
        }else{
          document.querySelector(el).style.top = '50px';
        }
      }
    },
    mounted(){
      let _this = this;
      window.onscroll = function(){
        _this.$store.state.handleScroll('#nav')
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

  html .scrollTop {
    top:0;
  }
  #nav {
    position:fixed;
    top:50px;
    min-width:120px;
    animation: 0.5s Show forwards;
    >img {
      width:100%;
      max-width:120px;
      max-height: 60px;
    }
    .nav_ul {
      position:relative;
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
      .more {
        position:absolute;
        left:120px;
        bottom:0;
        background-color: #fff;
        width:0;
        height:0;
        padding:0;
        border-radius:10px;
        overflow: hidden;
        z-index: 222;
      }
    }
  }
</style>