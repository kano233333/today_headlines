<template>
  <div id="index">
    <header-part></header-part>
    <div class="main">
      <div class="main_nav">
        <nav-part></nav-part>
      </div>
      <div class="main_news">
        <!--刷新组件 重载数据-->
        <router-view v-if="this.$store.state.freshIndex2"></router-view>
      </div>
      <div class="main_other">
        <Search></Search>
        <sign-card class="sign_margin" v-if="!this.$store.state.user.isLogin"></sign-card>
        <in-card v-if="this.$store.state.user.isLogin"></in-card>
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
    },
    methods:{
      isDL(){
        let _this = this;
        this.$api.getData('/isLogin').then((data)=>{
          _this.$store.state.user.isLogin = data.static;
          if(data.static==1){
            _this.$store.state.user.uid = data.uid;
            _this.getUserData(_this);
          }
        })
      },
      getUserData(_this){
        let __this = _this;
        this.$api.sendData("/getUserInfo",{
          uid:_this.$store.state.user.uid
        }).then((data)=>{
          for(let i in data){
            __this.$store.state.user[i] = data[i]
          }
        })
      }
    },
    created(){
      this.isDL();
    }
  }
</script>

<style lang="less">
  /*在小于768像素的屏幕*/
  @media (max-width: 767px) {
    html .main {
      flex-direction: column;
      justify-content: flex-start;
      padding:0 2%;
      .main_nav {
        max-width:100%;
      }
      .main_other {
        height:0;
        width:0;
        overflow: hidden;
      }
      .main_news {
        width:100%;
        margin-left:0;
        padding-top:40px;
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
    padding:0 80px;
    display: flex;
    justify-content: space-between;
    >div {
      padding-top:15px;
      margin:0 5px;
    }
    .main_nav {
      max-width:20%;
    }
    .main_news {
      width:55%;
      /*display: none;*/
      margin-left:150px;
    }
    .main_other {
      max-width:26.5%;
      .sign_margin {
        margin:20px 0;
      }
    }
  }
</style>
