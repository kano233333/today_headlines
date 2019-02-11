<template>
  <div class="sign_main">
    <img class="main_bg" src="../../assets/img/sign_in_bg.png">
    <div class="username">
      <sicon name="email" scale="3"></sicon>
      <input v-model="email" type="text" placeholder="请输入邮箱">
    </div>
    <div v-show="otherShow" class="yzm">
      <sicon name="yz" scale="3.0"></sicon>
      <input type="text" placeholder="验证码">
    </div>
    <button class="send_btn" @click="flag && yzmClick()">
      <sicon name="send" scale="2"></sicon>
      {{yzmSend}}
    </button>
    <div v-show="otherShow" class="passwd">
      <sicon name="passwd" scale="3.0"></sicon>
      <input :type="inputType" placeholder="密码">
      <span @click="isSee=true">
          <sicon class="eye" name="see" scale="3.0" v-show="!isSee"></sicon>
        </span>
      <span @click="isSee=false">
          <sicon class="eye" name="not_see" scale="3.0" v-show="isSee"></sicon>
        </span>
    </div>
    <div v-show="otherShow" class="passwd">
      <sicon name="passwd" scale="3.0"></sicon>
      <input :type="inputType" placeholder="重新输入密码">
      <span @click="isSee=true">
          <sicon class="eye" name="see" scale="3.0" v-show="!isSee"></sicon>
        </span>
      <span @click="isSee=false">
          <sicon class="eye" name="not_see" scale="3.0" v-show="isSee"></sicon>
        </span>
    </div>

    <Button class="bnt" type="primary">注册</Button>
  </div>
</template>

<script>
  export default {
    name: "register",
    data(){
      return {
        isSee:false,
        yzmSend:'发送验证码',
        otherShow:false,
        email:'',
        flag:true
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
      yzmClick(){
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if(this.email===''){
          this.$Notice.warning({
            title: '警告',
            desc:'请输入邮箱'
          });
        }else if(!reg.test(this.email)){
          this.$Notice.warning({
            title: '警告',
            desc:'请输入正确的邮箱格式'
          });
        }else{
          this.flag = false;
          this.otherShow = true;
          let miao = 60;
          this.yzmSend = miao+'s';
          let _this = this;
          let timer = setInterval(function(){
            miao--;
            _this.yzmSend =miao+'s';
            if(miao===-1){
              _this.flag = true;
              _this.yzmSend = '重新发送';
              clearInterval(timer);
            }
          },1000);
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
      animation: 0.5s Show forwards;
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
        top:7px;
        left:5px;
      }
      .eye {
        left:auto;
        right:5px;
      }
    }
    .yzm {
      width:150px;
      display: inline-block;
      margin:10px 30px 10px 0;
      input {
        padding:0 10px 0 35px;
        letter-spacing: 8px;
      }
    }
  }
  .send_btn {
    background-color: #fff;
    font-size:16px;
    padding:5px 3px;
    border-radius:10px;
    cursor: pointer;
    position: relative;
    letter-spacing: 3px;
  }
  .send_btn:hover {
    border:1px solid #898aa1;
    box-shadow: 0 0 5px #898aa1;
    color: #8a8c8e;
  }
  .bnt {
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