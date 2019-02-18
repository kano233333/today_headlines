<template>
  <div class="sign_main">
    <img class="main_bg" src="../../assets/img/sign_in_bg.png">
    <div class="username">
      <sicon name="username" scale="3.0"></sicon>
      <input v-model="email" type="text" placeholder="邮箱">
    </div>
    <div class="passwd">
      <sicon name="passwd" scale="3.0"></sicon>
      <input v-model="passwd" :type="inputType" placeholder="密码">
      <span @click="isSee=true">
        <sicon class="eye" name="see" scale="3.0" v-show="!isSee"></sicon>
      </span>
      <span @click="isSee=false">
        <sicon class="eye" name="not_see" scale="3.0" v-show="isSee"></sicon>
      </span>
    </div>
    <p class="tip">登录即表示你同意 <a>用户协议</a> 和 <a>隐私条款</a> <a>忘记密码</a></p>
    <Button class="in" @click="login()">登录</Button>
    <router-link to="/sign/register">
      <Button type="primary">注册</Button>
    </router-link>
    </div>
</template>

<script>
  export default {
    name: "in",
    data(){
      return {
        isSee:false,
        email:'',
        passwd:''
      }
    },
    computed:{
      inputType(){
        if(this.isSee){
          return "text";
        }else{
          return "password";
        }
      }
    },
    methods:{
      login() {
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if (this.email === '') {
          this.$Message.info('请输入邮箱');
        } else if (!reg.test(this.email)) {
          this.$Message.info('请输入正确的邮箱格式');
        } else if(this.passwd === ''){
          this.$Message.info('请输入密码');
        }else{
          let _this = this;
          this.$api.sendData('/api/userSignIn', {
            "email":this.email,
            "passwd":this.passwd
          }).then(function (data) {
            console.log(data);
            if (data.static === -1) {
              _this.$Message.info('用户名不存在')
            } else if (data.static === 0) {
              _this.$Message.info('密码错误')
            } else if (data.static === 1) {
              _this.$router.push('/');
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @media (max-width: 767px) {
    html .sign_main {
      width:80vw;
      .main_bg {
        transform: scale(0.5);
        position:absolute;
        top:-350px;
        left:-20px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {}
  @media (min-width: 992px) and (max-width: 1199px) {}
  @media (min-width: 1200px) {}
  .sign_main {
    width:400px;
    margin:150px auto 0 auto;
    background-color: #fff;
    border:1px solid #edf0f1;
    padding:3%;
    position: relative;
    animation: 0.5s Show forwards;
    >div{
      margin:20px auto;
      height:40px;
      position:relative;
      input {
        display: block;
        width:100%;
        height:100%;
        padding:0 35px 0 35px;
        border-radius:10px;
        letter-spacing: 1px;
      }
      input:hover,input:focus {
        border:1px solid #898aa1;
        box-shadow: 0 0 5px #898aa1;
        color: #8a8c8e;
      }
      svg {
        position:absolute;
        top:5px;
        left:5px;
      }
      .eye {
        left:auto;
        right:5px;
      }
    }
  }
  .tip {
    font-size:13px;
    color:#666;
    position: relative;
  }
  button {
    display: block;
    margin:20px auto;
    width:60%;
    z-index: 333;
    position: relative;
  }
  .main_bg {
    transform: scale(0.5);
    position:absolute;
    top:-330px;
    left:-80px;
  }
</style>