<template>
  <div class="publish">
    <textarea placeholder="写下您的看法..." v-model="content"></textarea>
    <button class="sub">
      <span @click="imgShow=!imgShow">上传图片</span>
      <div class="add_img" v-show="imgShow">
        <p>共{{imgNum}}张，最多上传4张</p>
        <div class="imgs">
          <img-fist :index="i" v-for=" i in arr" v-show="i<=imgNum"></img-fist>
        </div>
      </div>
    </button>
    <button class="sub" @click="sub()">提交</button>
  </div>
</template>

<script>
  import ImgFist from './img_first'

  export default {
    name: "publish",
    data(){
      return {
        imgNum:0,
        content:'',
        imgSrc:'',
        arr:[0,1,2,3],
        imgShow:false
      }
    },
    components:{
      ImgFist
    },
    methods:{
      imgAdd(){
        if(this.imgNum<4){
          this.imgNum++;
        }
      },
      flushCom(){
        this.$store.state.freshIndex3 = false;
        let _this = this;
        this.$nextTick(() => (_this.$store.state.freshIndex3 = true))
      },
      sub(){
        let _this = this;
        if(this.content==''){
          this.$Message.info('请填写内容');
          return;
        }
        this.$api.sendData('/userPublishArticle',{
          'content':this.content,
          'uid':this.$store.state.user.uid,
          'picX':this.$store.state.imgs
        }).then((data)=>{
          if(data.static==1){
            _this.$store.state.imgs = [];
            _this.flushCom();
            _this.$Message.info('发表成功');
          }else{
            _this.$Message.info('发表失败');
          }
        })
      },

    }
  }
</script>

<style scoped lang="less">
  .publish {
    position:relative;
    animation:0.5s Show forwards;
    textarea {
      width:100%;
      color: #d8d8d8;
      resize: none;
      outline: 0;
      height:40px;
      padding:10px;
      border:1px solid #bbbbbb;
      border-radius:5px;
    }
    .sub:nth-of-type(1){
      position:relative;
    }

    textarea:focus {
      height:200px;
      color: #858585;
      letter-spacing: 1px;
      box-shadow: 0 0 5px #8e89ff;
    }
    .add_img {
      animation: 0.5s Show forwards;
      height:160px;
      overflow: hidden;
      cursor: default;
      position:absolute;
      top:40px;
      left:0;
      min-width:200px;
      max-width:400px;
      box-shadow: 0 0 4px #777777;
      background-color: #fff;
      p {
        font-size:15px;
        color:#666;
        margin:20px;
        letter-spacing: 2px;
      }
      .imgs {
        display: flex;
        justify-content: space-between;
      }
      .imgs>div {
        width:80px;
        height:80px;
        margin:0 10px;
        border:1px dashed #bdbdbd;
        position:relative;
        input {
          width:100%;
          height:100%;
          padding-top:30px;
          position:relative;
          z-index: 222;
          cursor: pointer;
          opacity:0;
        }
        >img {
          max-width:100%;
          max-height:100%;
          display:block;
          position:absolute;
          top:0;
          right:0;
          left:0;
          bottom:0;
          margin:auto;
        }
      }
      >div svg {
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        margin:auto;
      }
    }
    .sub {
      width: 80px;
      height:40px;
      background-color: #8e89ff;
      color:#fff;
      font-size:15px;
      padding:5px;
      border-radius:5px;
      cursor:pointer;
    }
  }
</style>