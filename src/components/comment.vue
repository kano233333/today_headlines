<template>
  <div id="comment">
    <div>
      <span>{{artData.commentNum || 0}}</span>条评论
    </div>
    <div class="user_write">
     <img @click="routePush()" :src="this.$store.state.user.imgUrl">
      <div>
        <write :url="'/publishComment'" :me_type="'1'"></write>
      </div>
    </div>
    <hr />
    <div class="comment_content" v-for="item in this.$store.state.commentData">
      <comment-com :data="item" :type="0"></comment-com>
      <hr />
    </div>

    <Button type="primary" @click="getMore()" v-if="this.$store.state.commentData.length<artData.commentNum">加载更多</Button>
  </div>
</template>

<script>
  import Write from './write'
  import CommentCom from './comment_com'

  export default {
    name: "comment",
    data(){
      return {
        page:1,
        more:true
      }
    },
    components:{
      Write,
      CommentCom
    },
    methods:{
      routePush(){
        this.$router.push('/user/'+this.$store.state.user.uid+'/wei')
      },
      add(){
        this.artData.commentNum++;
      },
      getMore(){
        this.page++;
        this.getData();
      },
      getData(){
        let _this = this;
        this.$api.sendData('/getComments',{
          id:this.$route.params.id,
          page:this.page
        }).then((data)=>{
          if(data.length==0 || (data.static && data.static==0)){
            _this.more = false;
            return;
          }
          _this.$store.state.commentData.push(...data);
        })
      }
    },
    props:['artData'],
    mounted(){
      this.$store.state.commentData = [];
      this.getData();
    }
  }
</script>

<style scoped lang="less">
  #comment {
    margin:40px auto;
    animation: 1s Show forwards;
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
    button {
      width:200px;
      margin:0 auto;
      display: block;
    }
  }
</style>