<template>
  <div class="com_com">
    <div class="com_img">
      <img :src="data.imgUrl" alt="#">
    </div>
    <div class="content">
      <a>{{data.from_name}}</a>
      <p><span  @click="routePush()" v-if="data.to_name">@{{data.to_name}}//:</span>{{data.content}}</p>
      <div class="dian_zan" @click="zanClick()">
        <sicon :name="'zan'+zan" scale="2"></sicon><span>{{data.zan}}</span>
      </div>
      <div>
        <span @click="replyShow=!replyShow">回复</span>
      </div>
      <write v-show="replyShow" :url="'/api/replyComment'" :to_id="data.from_id" :me_type="2" :cid="cid" :to_name="data.from_name"></write>
    </div>
  </div>
</template>

<script>
  import Write from './write'

  export default {
    name: "comment_com2",
    data(){
      return {
        replyShow:false,
        zan:0
      }
    },
    props:{
      cid:{},
      data:{},
      type:{
        default:1
      }
    },
    components:{
      Write
    },
    methods:{
      routePush(){
        this.$router.push('/user/'+this.data.to_id+'/wei')
      },
      add(){
        this.$parent.add();
      },
      reget(){
        this.$parent.reget();
      },
      zanClick(){
        let type = -1;
        let _this = this;
        if(this.zan == 0){
          this.$api.sendData('/api/dianZanComment',{
            uid:this.$store.state.user.uid,
            id:this.data.rid,
            type:type
          }).then((data)=>{
            if(data.static==1){
              _this.zan = 1;
              _this.data.zan++;
            }else{
              _this.zan = 0;
            }
          })
        }else if(this.zan==1){
          this.$api.sendData('/api/removeZanComment',{
            uid:this.$store.state.user.uid,
            id:this.data.rid,
            type:type
          }).then((data)=>{
            if(data.static==1){
              _this.zan = 0;
              _this.data.zan--;
            }else{
              _this.zan = 1;
            }
          })
        }
      },
      isZan(){
        let type = -1;
        let _this = this;
        if(this.$store.state.user.isLogin==0){
          this.$Message.info('请先登录')
          setTimeout(()=>{
            _this.$route.push('/sign/in')
          },2000)
        }
        this.$api.sendData('/api/isZan',{
          uid:this.$store.state.user.uid,
          id:this.data.rid,
          type:type
        }).then((data)=>{
          if(data.zan=='true'){
            _this.zan = 1;
          }else{
            _this.zan = 0;
          }
        })
      }
    },
    mounted(){
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