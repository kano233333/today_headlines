<template>
  <div id="comment">
    <div>
      <span>{{artData.commentNum || 0}}</span>条评论
    </div>
    <div class="user_write">
      <img :src="this.$store.state.user.imgUrl">
      <div>
        <write :url="'/api/publishComment'" :me_type="'1'"></write>
      </div>
    </div>
    <hr />
    <div class="comment_content" v-for="item in this.$store.state.commentData">
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
    props:['artData'],
    mounted(){
      let _this = this;
      this.$api.sendData('/api/getComments',{
        id:this.artData.id,
        page:1
      }).then((data)=>{
        _this.$store.state.commentData = data;
        console.log(data)
      })
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