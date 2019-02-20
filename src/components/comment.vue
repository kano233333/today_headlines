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
      <comment-com :data="item" :type="0"></comment-com>
      <hr />
    </div>

    <Button type="primary" @click="getMore()" v-if="more">加载更多</Button>
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
      add(){
        this.artData.commentNum++;
      },
      getMore(){
        this.page++;
        this.getData();
      },
      getData(){
        let _this = this;
        this.$api.sendData('/api/getComments',{
          id:this.$route.params.id,
          page:this.page
        }).then((data)=>{
          if(data.length==0 || (data.static && data.static==0)){
            _this.more = false;
            if(_this.page==1){
              _this.$store.state.commentData = [];
            }
            return;
          }
          _this.$store.state.commentData.push(...data);
        })
      }
    },
    props:['artData'],
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped lang="less">
  #comment {
    margin:40px auto;
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