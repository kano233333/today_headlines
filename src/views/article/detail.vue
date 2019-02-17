<template>
  <div class="art">
    <header-part></header-part>
    <art-header :type="artData.type"></art-header>
    <div class="art_main">
      <div class="main_left">
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
        <div class="star_jb" v-if="artData.title">
          <div @click="star">
            <i :class="{'i_active':isStar}">⚝</i>收藏
          </div>
        </div>
        <comment :artData="artData"></comment>
      </div>
      <div class="main_right" v-show="this.$route.params.type==1">
        <div class="user">
          <div class="user_head">
            <img src="this.$route.params.imgUrl" alt="">
            <router-link to="/usercenter">{{artData.author}}</router-link>
            <div class="follow">
              <follow :uid="2" :id="artData.id" :isfollow="1"></follow>
            </div>
          </div>
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
          isStar:''
        }
    },
    components:{
      HeaderPart,
      ArtHeader,
      Follow,
      Comment
    },
    methods:{
      star(){
        let _this = this;
        if(this.isStar){
          this.$api.sendData('/api/removeStartArticle',{
            uid:this.$store.state.user.uid,
            id:this.$route.params.id
          }).then((data)=>{
            if(data.static===1){
              _this.isStar = !_this.isStar;
            }
          })
        }else{
          this.$api.sendData('/api/startArticle',{
            uid:this.$store.state.user.uid,
            id:this.$route.params.id
          }).then((data)=>{
            if(data.static===1){
              _this.isStar = !_this.isStar;
            }
          })
        }
      }
    },
    mounted(){
      let _this = this;

      window.onscroll = function(){}
      this.$api.sendData('/api/articleDetail',{
        'id':this.$route.params.id,
        'type':this.$route.params.type
      }).then((data)=>{
        data[0].time = _this.$store.state.GMTToStr(data[0].time);
        _this.artData = data[0];
        if(_this.$route.params.type==0){
          _this.$refs.article.innerHTML = _this.artData['content'];
          _this.artData['content'] = _this.$refs.article.innerText;
        }
        _this.isStar = _this.artData['isStar']==1 ? true : false;
      })

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
          left:200px;
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
        .user {
          border-top:3px solid #ED4040;
          background-color: #F4F5F6;
          padding:20px;
          font-size:15px;
          a {
            color:#666;
          }
          a:hover {
            color: #9096aa
          }
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