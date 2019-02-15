<template>
  <div class="com_com">
    <div class="com_img">
      <img :src="data.imgUrl" alt="">
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
      <write v-show="replyShow"></write>
      <div v-if="replyContent && type==0" v-for="item in replyData">
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
        replyData:[],
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
        this.replyContent = !this.replyContent;
        if(this.replyContent) {
          this.replyData = [
            {
              username:'24241412',
              imgUrl:'https://b-ssl.duitang.com/uploads/item/201610/01/20161001123044_GH2NJ.thumb.700_0.jpeg',
              content:'我突然就额看来感觉',
              time:'',
              zan:'23',
              from:'',
              rid:'0'
            },
            {
              username:'24241412',
              imgUrl:'https://b-ssl.duitang.com/uploads/item/201610/01/20161001123044_GH2NJ.thumb.700_0.jpeg',
              content:'我突然就额看来感觉',
              time:'',
              zan:'23',
              from:'',
              rid:'0'
            },
            {
              username:'24241412',
              imgUrl:'https://b-ssl.duitang.com/uploads/item/201610/01/20161001123044_GH2NJ.thumb.700_0.jpeg',
              content:'我突然就额看来感觉',
              time:'',
              zan:'23',
              from:'',
              rid:'0'
            },
            {
              username:'24241412',
              imgUrl:'https://b-ssl.duitang.com/uploads/item/201610/01/20161001123044_GH2NJ.thumb.700_0.jpeg',
              content:'我突然就额看来感觉',
              time:'',
              zan:'23',
              from:'',
              rid:'0'
            }
          ]
        }
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