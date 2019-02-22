<template>
  <div id="sign_in">
    <div class="header_logo">
      <router-link to="/">
        <img src="../../assets/img/logo.png" alt="">
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "sign"
  }
</script>

<style scoped lang="less">
  @media (max-width: 767px) {
    html #sign_in {
      min-height:100vh;
      overflow-y: auto;
      overflow-x: hidden;
      padding-bottom: 50px;
      .sign_main {
        width:80vw;
        .main_bg {
          transform: scale(0.5);
          position:absolute;
          top:-350px;
          left:-20px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {}
  @media (min-width: 992px) and (max-width: 1199px) {}
  @media (min-width: 1200px) {}
  #sign_in {
    width:100vw;
    height:100vh;
    background: url("../../assets/img/login_bg.png") center;
    overflow: hidden;
    .header_logo {
      margin:20px;
      img {
        width: 120px;
        height: 30px;
      }
    }
  }
</style>