<template>
  <div class="com_com">
    <div class="com_img">
      <img @click="routePush()" :src="data.imgUrl" alt="#">
    </div>
    <div class="content">
      <a @click="routePush()">{{data.username}}</a>
      <p>{{data.content}}</p>
      <div class="dian_zan" @click="clickParse && zanClick()">
        <sicon :name="'zan'+zan" scale="2"></sicon><span>{{data.zan}}</span>
      </div>
      <div>
        <span @click="replyClick()">回复</span>
        <span @click="getReply(1)" v-show="data.replyNum>0 && type==0"> · {{data.replyNum}}条回复</span>
      </div>
      <write v-show="replyShow" :url="'/replyComment'" :me_type="2" :obj="{to_id:data.uid,cid:data.cid,to_name:data.username,type:0}"></write>
      <div v-if="replyContent && type==0" v-for="item in data.replyData">
        <comment_com2 :cid="data.cid" :data="item" v-if="replyContent && type==0"></comment_com2>
      </div>
      <Button type="primary" v-if="replyContent && type==0 && more" @click="getMore()">加载更多</Button>
    </div>
  </div>
</template>

<script>
  import Write from './write'
  import Comment_com2 from './comment_com2'

  export default {
    name: "comment_com",
    data(){
      return {
        replyShow:false,
        replyContent:false,
        zan:0,
        page:1,
        more:true,
        clickParse:true
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
      Comment_com2
    },
    methods:{
      replyClick(){
        let _this = this;
        if(this.$store.state.user.isLogin==0){
          this.$Message.info('请先登录');
          setTimeout(function(){
            _this.$router.push('/sign/in')
          },2000)
          return;
        }
        this.replyShow=!this.replyShow;
      },
      routePush(){
        this.$router.push('/user/'+this.data.uid+'/wei')
      },
      add(){
        this.data.replyNum++;
      },
      getMore(){
        this.page++;
        this.getReply();
      },
      reget(){
        this.page = 1;
        this.more = true;
        this.replyContent = false;
        this.data.replyData = [];
        this.getReply();
      },
      getReply(type){
        if(type && this.replyContent==true){
          this.replyContent = false;
          return;
        }

        if(this.more === 0){
          this.replyContent = !this.replyContent;;
          return;
        }

        let _this = this;
        this.$api.sendData('/replyDetail',{
          id:this.$route.params.id,
          cid:this.data.cid,
          page:this.page
        }).then((data)=>{
          if(!_this.data.replyData){
            _this.data.replyData = [];
          }
          if(data.length<5 || (data.static && data.static==0)) {
            _this.more = 0;
            _this.data.replyData.push(...data);
            _this.page++;
            return;
          }
          _this.replyContent = true;
          _this.data.replyData.push(...data);
          _this.more = false;
          _this.more = true;
        })
      },
      zanClick(){
        let _this = this;
        if(this.$store.state.user.isLogin==0){
          this.$Message.info('请先登录');
          setTimeout(function(){
            _this.$router.push('/sign/in')
          },2000)
          return;
        }
        this.clickParse = false;
        let type = 0;
        if(this.zan == 0){
          this.$api.sendData('/dianZanComment',{
            uid:this.$store.state.user.uid,
            id:this.data.cid,
            type:type
          }).then((data)=>{
            if(data.static==1){
              _this.zan = 1;
              _this.data.zan++;
            }else{
              _this.zan = 0;
            }
            _this.clickParse = true;
          }).catch(function(){
            _this.$Message.info('错误');
            _this.clickParse = true;
          })
        }else if(this.zan==1){
          this.$api.sendData('/removeZanComment',{
            uid:this.$store.state.user.uid,
            id:this.data.cid,
            type:type
          }).then((data)=>{
            if(data.static==1){
              _this.zan = 0;
              _this.data.zan--;
            }else{
              _this.zan = 1;
            }
            _this.clickParse = true;
          }).catch(function(){
            _this.$Message.info('错误');
            _this.clickParse = true;
          })
        }
      },
      isZan(){
        let type = 0;
        let _this = this;
        this.$api.sendData('/isZan',{
          uid:this.$store.state.user.uid,
          id:this.data.cid,
          type:type
        }).then((data)=>{
          if(data.zan=='true'){
            _this.zan = 1;
          }else{
            _this.zan = 0;
          }
        })
      },
    },
    created(){
      this.isZan();
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
      cursor: pointer;
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
    button {
      width:200px;
      margin:20px auto;
      display: block;
    }
  }
</style>