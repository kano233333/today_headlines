<template>
  <div id="comment">
    <div>
      <span>{{data.recommendNum}}</span>条评论
    </div>
    <div class="user_write">
      <img src="../assets/img/logo.png">
      <div>
        <write></write>
      </div>
    </div>
    <hr />
    <div class="comment_content" v-for="item in commentData">
      <comment-com :data="item" type="0"></comment-com>
      <hr />
    </div>
  </div>
</template>

<script>
  import Write from './write'
  import CommentCom from './comment_com'

  export default {
    name: "comment",
    components:{
      Write,
      CommentCom
    },
    data(){
      return {
        commentData:[
          {
            mid:'78',
            username:'jkljkkl',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201801/20/20180120202739_HrWlK.thumb.700_0.jpg',
            content:'的归属感非官方苟富贵',
            replyNum:'0',
            time:'2018.9.21',
            zan:'22',
            cid:'0'
          },
          {
            mid:'78',
            username:'jkljkkl',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201801/20/20180120202739_HrWlK.thumb.700_0.jpg',
            content:'的归属感非官方苟富贵',
            replyNum:'54',
            time:'2018.9.21',
            zan:'22',
            cid:'0'
          },
          {
            mid:'78',
            username:'jkljkkl',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201801/20/20180120202739_HrWlK.thumb.700_0.jpg',
            content:'的归属感非官方苟富贵',
            replyNum:'54',
            time:'2018.9.21',
            zan:'22',
            cid:'0'
          },
          {
            mid:'78',
            username:'jkljkkl',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201801/20/20180120202739_HrWlK.thumb.700_0.jpg',
            content:'的归属感非官方苟富贵',
            replyNum:'54',
            time:'2018.9.21',
            zan:'22',
            cid:'0'
          },
          {
            mid:'78',
            username:'jkljkkl',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201801/20/20180120202739_HrWlK.thumb.700_0.jpg',
            content:'的归属感非官方苟富贵',
            replyNum:'54',
            time:'2018.9.21',
            zan:'22',
            cid:'0'
          }
        ]
      }
    },
    props:['data'],
    created(){
      //axios

    }
  }
</script>

<style scoped lang="less">
  #comment {
    margin:40px auto;
    height:1000px;
    /*background-color: #edeeee;*/
    >div:nth-of-type(1){
      font-size:16px;
      letter-spacing: 3px;
      span{
        font-size:25px;
        color:#ED4040;
        font-weight:700;
      }
    }
    .user_write {
      padding:20px;
      display: flex;
      justify-content: space-between;
      align-items:flex-start;
      >img {
        width:40px;
        height:40px;
        border-radius:50%;
      }
      >div {
        width:93%;
      }
    }
    .comment_content {
      padding:20px;
    }
  }
</style>