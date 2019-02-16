<template>
  <div class="art">
    <header-part></header-part>
    <art-header :type="proData.type"></art-header>
    <div class="art_main">
      <div class="main_left">
        <a href="#comment">
          <sicon name="comment_num" scale="5.5"></sicon>
          <p>{{proData.commentNum}}</p>
        </a>
      </div>
      <div class="main_center">
        <h1 class="title" v-if="proData.title">{{proData.title}}</h1>
        <div v-if="proData.title" class="f_title">{{proData.author}} · {{proData.time}}</div>
        <hr />
        <p v-html="artData.content" ref="article"></p>
        <div class="star_jb" v-if="proData.title">
          <div @click="star">
            <i :class="{'i_active':isStar}">⚝</i>收藏
          </div>
        </div>
        <comment :data="proData"></comment>
      </div>
      <div class="main_right" v-show="this.$route.params.type==1">
        <div class="user">
          <div class="user_head">
            <img src="this.$route.params.imgUrl" alt="">
            <router-link to="/usercenter">{{proData.author}}</router-link>
            <div class="follow">
              <follow :uid="2" :id="proData.id" :isfollow="1"></follow>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          proData:this.$route.params.data,
          artData:'',
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
        this.isStar = !this.isStar;
        if(this.isStar){
          //收藏
        }else{
          //取消收藏
        }
      }
    },
    mounted(){
      // this.$api.sendData('api/articleDetail',{
      //   'id':this.proData.id,
      //   'type':0
      // }).then((data)=>{
      //   console.log(data)
      //   _this.artData = data;
      // })
      // if(this.$route.params.type==1){
      //   this.artData['content'] = this.proData.content;
      // }
      //
      // this.$refs.article.innerHTML = this.artData['content'];
      // this.artData['content'] = this.$refs.article.innerText;
      // this.isStar = this.artData['isStar']==1 ? true : false;

      ajax({
        method:'POST',
        data:{
          id:'256',
          type:0
        },
        url:'/api/articleDetail',
        success:function(data){
          console.log(data)
        }
      })
    }
  }

  function ajax(obj) {
    var ajaxRequest = new XMLHttpRequest();
    var method = obj.method.toUpperCase();
    var url = obj.url;
    var data = obj.data;

    if (method === "GET") {
      if (data) {
        url = url + "?";
        for (var i in data) {
          url = url + i + "=" + data[i] + "&";
        }
        url = url.substring(0, url.length - 1);
      }
      ajaxRequest.open(method, url);
      ajaxRequest.send();
    } else if (method === "POST") {
      ajaxRequest.open(method, url);
      ajaxRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      ajaxRequest.send(data);
    }

    ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState === 4) {
        if (ajaxRequest.status === 200) {
          if (obj.success !== undefined) {
            obj.success(ajaxRequest.responseText);
          }
        } else {
          if (obj.fail !== undefined) {
            obj.fail(ajaxRequest.status);
          }
        }
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
        box-shadow: 1px 1px 5px #7c7d7d;
        color: #a5a6a6;
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