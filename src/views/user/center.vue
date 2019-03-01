<template>
  <div class="user_center">
    <header-part></header-part>
    <art-header></art-header>
    <div class="user_main">
      <div class="user_head">
        <img :src="userData.imgUrl" alt="" v-show="!isSelf">
        <p @click="routePush()" v-show="!isSelf">
          {{userData.username}}
        </p>

        <img style="cursor: pointer;" :src="this.$store.state.user.imgUrl" alt="" @click="modal1=true" v-show="isSelf">
        <p @click="routePush()" v-show="isSelf">
          {{userData.username}}
          <router-link :to="{'name':'userset'}">设置</router-link>
        </p>

        <button @click="modal2=true" v-if="isSelf">+发表微头条</button>
        <div v-if="!isSelf && isFollowNum!==''">
          <follow :uid="this.$store.state.user.uid" :follow_id="this.$route.params.uid" :is_follow="isFollowNum"></follow>
        </div>
      </div>
      <div class="user_lower">
        <div class="user_art">
          <ul>
            <li v-for="(value,key,index) in constData['userArt']" v-show="index>=arr[0] && index<=arr[1]">
              <router-link :to="{'name':'user'+key,'params':{'username':username,'imgUrl':userData.imgUrl}}">{{value}}{{localStr()}}</router-link>
            </li>
          </ul>
          <hr />
          <router-view></router-view>
        </div>
        <div class="user_num">
          <div>
            <p><router-link :to="{'name':'userfollow'}">{{userData.follow}}</router-link></p>
            <p>关注</p>
          </div>
          <div>
            <p><router-link :to="{'name':'userfans'}">{{userData.fans}}</router-link></p>
            <p>粉丝</p>
          </div>
        </div>
      </div>
    </div>


    <Modal v-model="modal1" title="更改头像" class="file" @on-ok="ok">
      <div class="file_wrap">
        <Button type="primary" class="input_out">上传头像</Button>
        <input type="file" @change="change()" id="file" ref="img">
        <img :src="imgSrc" v-show="imgSrc!==''">
      </div>
    </Modal>

    <Modal v-model="modal2" title="发表">
      <publish v-if="this.$store.state.freshIndex3"></publish>
      <div slot="footer"></div>
    </Modal>

    <BackTop></BackTop>
  </div>
</template>

<script>
  import HeaderPart from '../../components/headerPart'
  import ArtHeader from '../../components/artHeader'
  import constData from '../../json/const.json'
  import Follow from '../../components/follow'
  import Write from '../../components/write'
  import Publish from '../../components/publish'

  export default {
    name: "center",
    data(){
      return {
        constData:constData,
        userData:{},
        modal1:false,
        imgSrc:'',
        modal2:false,
        file:'',
        isSelf:false,
        isFollowNum:'',
        str:'',
        arr:[0,2]
      }
    },
    props:{
      username:{
        default:''
      }
    },
    components:{
      HeaderPart,
      ArtHeader,
      Follow,
      Write,
      Publish
    },
    created(){
      let _this = this;
      this.isDL();

      window.onscroll = function(){}
      this.$api.sendData('/getUserInfo',{
        uid:this.$route.params.uid
      }).then((data)=>{
        _this.userData = data;
      })
    },
    methods:{
      routePush(){
        this.$router.push('/user/'+this.$route.params.uid+'/wei')
      },
      localStr(){
        let url = location.href;
        let arr = url.split('/');
        this.str=arr[arr.length-1]
      },
      isFollow(){
        let _this = this;
        this.$api.sendData('/isFollow',{
          uid:this.$store.state.user.uid,
          follow_id:this.$route.params.uid
        }).then((data)=>{
          if(data.follow == 'true'){
            _this.isFollowNum = 1;
          }else{
            _this.isFollowNum = 0;
          }
        })
      },
      isDL(){
        let _this = this;
        this.$api.getData('/isLogin').then((data)=>{
          _this.$store.state.user.isLogin = data.static;
          if(data.static==1){
            _this.$store.state.user.uid = data.uid;
            _this.getUserData(_this);
            _this.isSelf = _this.$store.state.user.uid==_this.$route.params.uid ? true : false;
            _this.isFollow();
            // console.log(_this.isFollow())
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
      },
      change(){
        let file = this.$refs.img.files[0];
        let reader = new FileReader();
        let _this = this;
        reader.onload = function(evt) {
          _this.imgSrc = evt.target.result;
        };
        reader.readAsDataURL(file);
      },
      ok(){
        let _this = this;
        this.$api.sendData('/customeAvatar',{
          'pic':this.$refs.img.files[0],
          'uid':this.$store.state.user.uid
        }).then(function(data){
          if(data.static==1){
            _this.$Message.info('更改成功')
            _this.flushCom();
          }else {
            _this.$Message.info('失败')
          }
        })
      },
      flushCom(){
        this.$store.state.freshIndex = false;
        let _this = this;
        this.$nextTick(() => (_this.$store.state.freshIndex = true))
      }
    },
    watch:{
      str(val){
        this.arr = this.constData.userShowLi[val]
      }
    }
  }
</script>

<style scoped lang="less">
  @media (max-width: 800px) {
    html .user_center {
      background-color: #F4F5F6;
      min-height:100vh;
      .user_main {
        width:80%;
        margin:0 auto;
      }
      .user_head {
        background-color: #fff;
        margin-top:80px;
        height:60px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >img{
          width:80px;
          height:80px;
          border-radius:50%;
          position: absolute;
          top:-60px;
          left:40px;
        }
        >button {
          background-color: #208eda;
          padding:8px 15px;
          font-size:16px;
          letter-spacing: 3px;
          border-radius:5px;
          cursor: pointer;
          margin-right:30px;
          color:#fff;
        }
        >button:hover {
          background-color: #239bee;
        }
        >div {
          width:10%;
          margin-right:30px;
        }
      }
      .user_lower {
        display: flex;
        justify-content: space-between;
        margin-top:30px;
        .user_art {
          width:100%;
          background-color: #fff;
          >ul {
            display: flex;
            font-size:18px;
            li {
              margin:0 20px;
              padding: 10px 5px;
              box-sizing: border-box;
            }
            a{
              height:100%;
              color:#666;
              padding: 6px 5px;
            }
          }
        }
        .user_num {
          width:0;
          height:0;
          overflow: hidden;
        }
        .link_active {
          border-top:2px solid #ED4040;
        }
      }
    }
    .file {
      .file_wrap{position: relative;}
      .input_out {
        font-size:14px;
      }
      input[type='file'] {
        width:90px;
        height:40px;
        opacity: 0;
        position: absolute;
        top:0;
        left:-0;
        cursor: pointer;
      }
      img {
        max-width:200px;
        max-height:200px;
        display: block;
        padding:10px;
        margin:10px;
        border:1px solid #c3cacc;
        box-shadow: 0 0 10px #c3cacc;
        border-radius:5px;
        animation: 0.5s Show forwards;
      }
    }
  }

  .user_center {
    background-color: #F4F5F6;
    min-height:100vh;
    .user_main {
      width:80%;
      margin:0 auto;
    }
    .user_head {
      background-color: #fff;
      margin-top:80px;
      height:60px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      >img{
        width:100px;
        height:100px;
        border-radius:50%;
        position: absolute;
        top:-60px;
        left:40px;
      }
      >p {
        font-size:25px;
        font-weight:700;
        margin-left:140px;
        cursor: pointer;
        a {
          color:#cecece;
          font-size:15px;
          font-weight:200;
          border:1px solid #d8d9d8;
          border-radius: 5px;
        }
        a:hover {
          color:#828382;
          box-shadow: 0 0 3px #828282;
        }
      }
      >button {
        background-color: #208eda;
        padding:8px 15px;
        font-size:16px;
        letter-spacing: 3px;
        border-radius:5px;
        cursor: pointer;
        margin-right:30px;
        color:#fff;
      }
      >button:hover {
        background-color: #239bee;
      }
      >div {
        width:10%;
        margin-right:30px;
      }
    }
    .user_lower {
      display: flex;
      justify-content: space-between;
      margin-top:30px;
      .user_art {
        width:70%;
        background-color: #fff;
        >ul {
          display: flex;
          font-size:18px;
          li {
            margin:0 20px;
            padding: 10px 5px;
            box-sizing: border-box;
          }
          a{
            height:100%;
            color:#666;
            padding: 6px 5px;
          }
        }
      }
      .user_num {
        width:25%;
        height:100px;
        background-color: #fff;
        display: flex;
        align-items:center;
        >div {
          flex:1;
          color:#666;
          p {
            font-size:18px;
            text-align:center;
            line-height:2;
          }
          p:nth-of-type(1){
            font-weight:700;
          }
          a {
            color:#666;
            border:none;
          }
        }
      }
      .link_active {
        border-top:2px solid #ED4040;
      }
    }
  }
  .file {
    .file_wrap{position: relative;}
    .input_out {
      font-size:14px;
    }
    input[type='file'] {
      width:90px;
      height:40px;
      opacity: 0;
      position: absolute;
      top:0;
      left:-0;
      cursor: pointer;
    }
    img {
      max-width:200px;
      max-height:200px;
      display: block;
      padding:10px;
      margin:10px;
      border:1px solid #c3cacc;
      box-shadow: 0 0 10px #c3cacc;
      border-radius:5px;
      animation: 0.5s Show forwards;
    }
  }
</style>