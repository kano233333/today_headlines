<template>
  <div class="signCard">
    <div class="main">
      <p>
        登录后可以保存您的浏览喜好、评论、收藏，并与APP同步更可以发布微头条
      </p>
      <router-link to="sign/in">
        <Button class="in">
          登录
        </Button>
      </router-link>
      <router-link to="sign/register">
        <Button type="primary">注册</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "signCard"
  }
</script>

<style scoped lang="less">
  .signCard {
    padding:5px;
    max-width:350px;
    background-color: #f4f5f6;
    .main {
      border:1px solid #e9e5e3;
      height:200px;
      margin:10px;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding:20px;
      background-color: #fff;
      p {
        font-size:12px;
        color:#b1aeac;
        text-align: center;
        line-height:1.5;
      }
      button {
        width:65%;
        display: block;
        margin:10px auto;
      }
      a {
        width:100%;
      }
    }
  }
</style>