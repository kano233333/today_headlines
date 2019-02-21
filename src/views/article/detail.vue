<template>
  <div class="art">
    <header-part></header-part>
    <art-header :type="artData.type"></art-header>
    <div class="art_main">
      <div class="main_left" v-if="type==0">
        <a href="#comment">
          <sicon name="comment_num" scale="5.5"></sicon>
          <p>{{artData.commentNum}}</p>
        </a>
      </div>
      <div class="main_center">
        <h1 class="title" v-if="artData.title">{{artData.title}}</h1>
        <div v-if="artData.title" class="f_title">{{artData.author}} · {{artData.time}}</div>
        <hr />
        <p v-html="artData.content" ref="article"></p>
        <div class="star_jb">
          <div @click="star" v-if="followIsShow()">
            <i :class="{'i_active':isStar}">⚝</i>收藏
          </div>
        </div>
        <comment v-if="type==0 && this.$store.state.freshComment" :artData="artData"></comment>
      </div>
      <div class="main_right" v-show="type==1">
        <div class="user">
          <router-link :to="{name:'userwei',params:{uid:artData.uid}}" class="user_head">
            <img src="authorData.imgUrl" alt="">
          <span>{{authorData.username}}</span>
          </router-link>
          <!--<div class="follow" v-if="followIsShow()">-->
            <!--<follow :uid="this.$store.state.user.uid" :follow_id="this.$route.params.uid" :isfollow="isFollow()"></follow>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import HeaderPart from '../../components/headerPart'
  import ArtHeader from '../../components/artHeader'
  import Follow from '../../components/follow'
  import Comment from '../../components/comment'

  export default {
    name: "detail",
    data(){
        return {
          type:this.$route.params.type,
          artData:{},
          isStar:'',
          authorData:{},
        }
    },
    components:{
      HeaderPart,
      ArtHeader,
      Follow,
      Comment
    },
    methods:{
      isFollow(){
        if(this.$store.state.user.isLogin==0){
          return 0;
        }else{
          this.$api.sendData('/isFollow',{
            uid:this.$store.state.user.uid,
            follow_id:this.artData.uid
          }).then((data)=>{
            if(data.follow){
              return 1;
            }else{
              return 0;
            }
          })
        }
      },
      followIsShow(){
        return this.$store.state.user.uid==this.artData.uid ? false :true;
      },
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
      },
      star(){
        let _this = this;
        if(this.$store.state.user.isLogin==0){
          this.$Message.info('请先登录');
          setTimeout(function(){
            _this.$router.push('/sign/in')
          },2000)
          return;
        }
        if(this.isStar){
          this.$api.sendData('/removeStartArticle',{
            uid:this.$store.state.user.uid,
            id:this.$route.params.id
          }).then((data)=>{
            if(data.static===1){
              _this.isStar = !_this.isStar;
            }
          })
        }else{
          this.$api.sendData('/startArticle',{
            uid:this.$store.state.user.uid,
            id:this.$route.params.id
          }).then((data)=>{
            if(data.static===1){
              _this.isStar = !_this.isStar;
            }
          })
        }
      },
      getContent(url){
        let _this = this;
        this.$api.sendData('/'+url,{
          'id':this.$route.params.id,
        }).then((data)=>{
          data[0].time = _this.$store.state.GMTToStr(data[0].time);
          _this.artData = data[0];
          // if(_this.$route.params.type==0){
          _this.$refs.article.innerHTML = _this.artData['content'];
          _this.artData['content'] = _this.$refs.article.innerText;
          // }
          _this.isStar = _this.artData['isStart']==1 ? true : false;
          if(_this.type==1){
            _this.getAuthor(_this.artData.uid,_this);
          }
        })
      },
      getAuthor(uid,_this){
        let __this = _this;
        this.$api.sendData("/getUserInfo",{
          uid:uid
        }).then((data)=>{
          __this.authorData = data;
        })
      }
    },
    mounted(){
      window.onscroll = function(){}
      this.isDL();
      if(this.type==0){
        this.getContent('articleDetail');
      }else if(this.type==1){
        this.getContent('weiDetail')
      }
    }
  }
</script>

<style scoped lang="less">
  .art {
    .art_main {
      display: flex;
      justify-content: center;
      margin:30px 0;
      .main_left {
        >a:nth-of-type(1){
          position:fixed;
          top:120px;
          left:70px;
          p {
            text-align:center;
            font-size:20px;
            color:#ED4040;
          }
        }
      }
      .main_center {
        >hr{
          margin: 20px 0;
        }
        width:55%;
        margin:0 40px;
        letter-spacing: 1px;
        .title {
          font-size:25px;
          font-weight:700;
        }
        p {
          font-size:18px;
          text-indent:36px;
          line-height:1.6;
        }
      }
      .main_right {
        width:20%;
        .user_head:hover span{
          color: #9096aa;
        }
        .user_head {
          display: flex;
          align-items: center;
          span {
            color:#666;
          }
          img {
            width:50px;
            height:50px;
            border-radius:50%;
            border:1px solid cadetblue;
            margin-right:20px;
          }
        }

        .user {
          border-top:3px solid #ED4040;
          background-color: #F4F5F6;
          padding:20px;
          font-size:15px;
        }
      }
    }
    .comment_num {
      position:relative;
        .comment_num:before {
          content:"\E649";
          font-size:25px;
          position:absolute;
          top:0;
        }
    }
    .f_title {
      font-size:14px;
      margin:10px 10px;
    }
    .star_jb {
      font-size:15px;
      font-weight:700;
      margin:20px 0;
      border-left:5px solid #a7a9a9;
      >div {
        display: inline-block;
        padding:5px;
        color: #b9b6b3;
        cursor: pointer;
      }
      >div:hover {
        i {
          color:#575858;
        }
        .i_active {
          color: #edb02c;
          text-shadow: 1px 1px 4px #edb02c;
        }
      }
      i {
        vertical-align: center;
        font-size:20px;
        margin:0 5px;
      }
      .i_active,.i_active:hover {
        color: #edb02c;
        text-shadow: 1px 1px 4px #edb02c;
      }
    }
    .follow {
      width:60px;
      margin:20px 0 0 0;
    }
  }
</style>