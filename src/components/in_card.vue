<template>
  <div class="inCard">
    <div class="main">
      <div>
        <img :src="data.imgUrl" @click="clickPush('userwei')">
        <p>{{data.username}}</p>
      </div>
      <span class="tuichu" @click="logout()">退出登录</span>
      <div style="cursor: pointer" @click="clickPush('userfollow')">
        <span>{{data.follow}}</span>
        关注</div>
      <div style="cursor: pointer" @click="clickPush('userfans')">
        <span>{{data.fans}}</span>
        粉丝</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inCard",
    data(){
      return {
        data: this.$store.state.user
      }
    },
    methods:{
      logout(){
        let _this = this;
        this.$api.getData('/api/userLogout').then((data)=>{
          if(data.static==1){
            _this.$store.state.user.isLogin = 0;
          }else{
            _this.$Message.info('失败');
          }
        })
      },
      clickPush(name){
        this.$router.push({
          'name':name,
          "params":{
            uid:this.data.uid
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .inCard {
    padding:5px;
    max-width:350px;
    background-color: #f4f5f6;
    position: relative;
    .tuichu {
      position: absolute;
      right:22px;
      top:22px;
      font-size:14px;
      cursor: pointer;
      color: #454f92;
    }
    .tuichu:hover {
      color:#7277aa;
    }
    .main {
      border:1px solid #e9e5e3;
      height:200px;
      margin:10px;
      display:grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 60% 40%;
      align-items: center;
      text-align: center;
      padding:20px;
      background-color: #fff;
      >div:nth-of-type(1){
        grid-column-start: 1;
        grid-column-end: 3;
      }
      img {
        margin:0 auto;
        width:50px;
        height:50px;
        cursor: pointer;
        border-radius:50%;
      }
      p {
        font-size:18px;
        font-weight:700;
        color:#666;
        text-align: center;
      }
      a {
        width:100%;
      }
      >div>span{
        font-weight:700;
      }
    }
  }
</style>