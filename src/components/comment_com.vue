<template>
  <div class="com_com">
    <div class="com_img">
      <img :src="data.imgUrl" alt="#">
    </div>
    <div class="content">
      <a>{{data.username}}</a>
      <p>{{data.content}}</p>
      <div class="dian_zan" @click="zan = zan==0 ? 1 : 0;">
        <sicon :name="'zan'+zan" scale="2"></sicon><span>{{data.zan}}</span>
      </div>
      <div>
        <span @click="replyShow=!replyShow">回复</span>
        <span @click="getReply()" v-show="data.replyNum>0 && type==0"> · {{data.replyNum}}条回复</span>
      </div>
      <write v-show="replyShow" :url="'/api/replyComment'" :to_id="data.uid" :me_type="2" :cid="data.cid" :to_name="data.username"></write>
      <div v-if="replyContent && type==0" v-for="item in this.$store.state.replyData">
        <comment_com :data="item" v-if="type==0"></comment_com>
      </div>
    </div>
  </div>
</template>

<script>
  import Write from './write'
  import Comment_com from './comment_com'

  export default {
    name: "comment_com",
    data(){
      return {
        replyShow:false,
        replyContent:false,
        zan:0
      }
    },
    props:{
      'data':{},
      'type':{
        default:1
      }
      },
    components:{
      Write,
      Comment_com
    },
    methods:{
      getReply(){
        let _this = this;
        this.$api.sendData('/api/replyDetail',{
          id:this.id,
          cid:this.cid,
          page:1
        }).then((data)=>{
          _this.$store.state.replyData = data;
          this.replyContent = !this.replyContent;
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .com_com {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /*padding:20px;*/
    animation:0.5s Show forwards;
    .com_img >img{
      width:40px;
      height:40px;
      border-radius:50%;
    }
    .content {
      width:93%;
      >a:nth-of-type(1) {
        font-size:14px;
        color:#2f2886
      }
      >p:nth-of-type(1) {
        margin:5px;
        font-size:14px;
      }
      .dian_zan {
        display: inline-block;
        cursor: pointer;
        /*height:10px;*/
        padding: 0 10px;
        font-size:14px;
        border-left:3px solid #ED4040;
        >span {
          margin-left:5px;
          position: relative;
          top:-3px;
        }
      }
      >div {
        margin:10px 0;
        font-size:15px;
        span {
          cursor: pointer;
          color:#a0a1a6;
        }
        span:hover {
          color: #849bce;
        }
      }
    }
  }
</style>