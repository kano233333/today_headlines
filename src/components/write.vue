<template>
  <div class="write">
    <textarea placeholder="写下您的看法..." v-model="content"></textarea>
    <button class="sub" @click="postComment()">提交</button>
  </div>
</template>

<script>
  export default {
    name: "write",
    data(){
      return {
        content:''
      }
    },
    methods:{
      flushCom(x){
        this.$store.state[x] = false;
        let _this = this;
        this.$nextTick(() => (_this.$store.state[x] = true))
      },
      postComment(){
        let _this = this;

        if(this.$store.state.user.isLogin==0){
          this.$Message.info('请先登录');
          setTimeout(function(){
            _this.$router.push('/sign/in')
          },2000)
          return;
        }
        if(this.content===''){
          this.$Message.info('请填写内容');
          return;
        }

        if(this.me_type==1){
          this.$api.sendData(this.url,{
            uid:this.$store.state.user.uid,
            id:this.$route.params.id,
            content:this.content
          }).then((data)=>{
            if(data.static==1){
              _this.content = '';
              _this.$Message.info('发表成功');
              _this.$parent.add();
              _this.$api.sendData('/getComments',{
                id:_this.$route.params.id,
                page:1
              }).then((data)=>{
                _this.$store.state.commentData = data;
              })
            }else{
              _this.$Message.info('失败');
            }
          })
        }else if(this.me_type==2){
          this.obj.content = this.content;
          this.obj.from_id = this.$store.state.user.uid;
          this.$api.sendData(this.url,this.obj).then((data)=>{
            if(data.static==1){
              _this.$Message.info('回复成功');
              _this.content = '';
              _this.$parent.reget();
              _this.$parent.add();
            }else{
              this.$Message.info('失败');
            }
          })
        }else if(this.me_type==3){
          let _this = this;
          this.$api.sendData(this.url,{
            'content':this.content,
            'uid':this.$store.state.user.uid
          }).then((data)=>{
            if(data.static==1){
              _this.content = '';
              _this.flushCom('freshIndex');
              _this.$Message.info('发表成功');
            }else{
              _this.$Message.info('发表失败');
            }
          })
        }
      }
    },
    props:{'url':{},'me_type':{default:1},'cid':{},"obj":{}}
  }
</script>

<style scoped>
  .write {
    width:100%;
    position:relative;
    animation:0.5s Show forwards;
   }
  .write textarea {
    width:100%;
    color: #d8d8d8;
    resize: none;
    outline: 0;
    height:40px;
    padding:10px;
    border:1px solid #bbbbbb;
    border-radius:5px;
  }
  .write textarea:focus {
    height:200px;
    color: #858585;
    letter-spacing: 1px;
    box-shadow: 0 0 5px #8e89ff;
  }
  .write .sub {
    width: 80px;
    height:40px;
    background-color: #8e89ff;
    color:#fff;
    font-size:15px;
    padding:5px;
    border-radius:5px;
    position:absolute;
    right:0;
    bottom:2px;
  }
</style>