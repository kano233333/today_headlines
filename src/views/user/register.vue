<template>
  <div class="sign_main">
    <img class="main_bg" src="../../assets/img/sign_in_bg.png">
    <div class="username">
      <sicon name="email" scale="3"></sicon>
      <input v-model="email" type="text" placeholder="请输入邮箱">
    </div>
    <div v-show="otherShow" class="yzm">
      <sicon name="yz" scale="3.0"></sicon>
      <input type="text" placeholder="验证码" v-model="yzm">
    </div>
    <button class="send_btn" @click="flag && yzmClick()">
      <sicon name="send" scale="2"></sicon>
      {{yzmSend}}
    </button>
    <div v-show="otherShow" class="passwd">
      <sicon name="username" scale="3.0"></sicon>
      <input type="text" placeholder="自定义用户名" v-model="username">
    </div>
    <div v-show="otherShow" class="passwd">
      <sicon name="passwd" scale="3.0"></sicon>
      <input :type="inputType" placeholder="密码" v-model="passwd">
      <span @click="isSee=true">
          <sicon class="eye" name="see" scale="3.0" v-show="!isSee"></sicon>
        </span>
      <span @click="isSee=false">
          <sicon class="eye" name="not_see" scale="3.0" v-show="isSee"></sicon>
        </span>
    </div>

    <Button @click="registerSend()" class="bnt" type="primary" v-show="otherShow">注册</Button>
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
        flag:true,
        yzm:'',
        passwd:'',
        username:''
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
      registerSend(){
        let _this = this;

        if(this.auth_code==''){
          this.$Message.info('请输入验证码');
          return;
        }else if(this.passwd==''){
          this.$Message.info('请输入密码');
          return;
        }else if(this.username==''){
          this.$Message.info('请输入用户名');
          return;
        }else if(this.email==''){
          this.$Message.info('请输入邮箱');
          return;
        }

        this.$api.sendData('/userRegisterTest',{
          auth_code:this.yzm,
          email:this.email,
          username:this.username,
          passwd:this.passwd
        }).then((data)=>{
          if(data.static==-1){
            _this.$Message.info('验证码不对');
          }else if(data.static==0){
            _this.$Message.info('验证码失效');
          }else if(data.static==1){
            _this.$Message.info('注册成功');
            _this.$router.push('/sign/in')
          }else{
            _this.$Message.info('失败');
          }
        })
      },
      yzmClick(){
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if(this.email===''){
          this.$Message.info('请输入邮箱');
        }else if(!reg.test(this.email)){
          this.$Message.info('请输入正确的邮箱格式');
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

          this.$api.sendData('/userRegisterSendEmail',{
            "email":_this.email
          }).then(function(data){

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