<template>
  <div class="user_comment_list">
    <div v-for="item in data">
      {{item.content}}
      <router-link :to="{'name':'article','params':{'id':item.id,'data':item}}" class="list" :key="item.id">
        <news-bar :data="item"></news-bar>
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
  import NewsBar from '../../components/newsBar'

  export default {
    components:{
      NewsBar
    },
    data(){
      return {
        data:[
          {
            id:'1',
            cid:'1',
            title:'sdasfa',//文章标题
            readNum:'23',//阅读数
            zanNum:'213',//点赞数
            commentNum:'23',//评论数
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',//图片的url
            time:'2018',//评论时间
            content:'打发士大夫大师傅士大夫方法都是粉色我认为亘古不变的地方大师傅大师傅十分士大夫'//评论的内容
          },
          {
            id:'1',
            cid:'1',
            title:'sdasfa',//文章标题
            readNum:'23',//阅读数
            zanNum:'213',//点赞数
            commentNum:'23',//评论数
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',//图片的url
            time:'2018',//评论时间
            content:'打发士大夫大师傅士大夫方法都是粉色我认为亘古不变的地方大师傅大师傅十分士大夫'//评论的内容
          },
          {
            id:'1',
            cid:'1',
            title:'sdasfa',//文章标题
            readNum:'23',//阅读数
            zanNum:'213',//点赞数
            commentNum:'23',//评论数
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',//图片的url
            time:'2018',//评论时间
            content:'打发士大夫大师傅士大夫方法都是粉色我认为亘古不变的地方大师傅大师傅十分士大夫'//评论的内容
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .user_comment_list {
    margin:20px;
    >div {
      padding:20px;
    }
    .list {
      display: block;
      margin:15px;
      padding:20px;
      background-color: #eeefee;
      height:100/1499*100vw;
      font-size:18px;
    }
    a {
      color:#666;
    }
    hr {
      margin:40px 0 0;
      height:1px;
      border:none;
      background-color: #dddedd
    }
  }
</style>