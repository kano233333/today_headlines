<template>
  <div class="publish">
    <textarea placeholder="写下您的看法..." v-model="content"></textarea>
    <button class="sub">
      上传图片
      <div class="add_img">
        <p>共{{imgNum}}张，最多上传4张</p>
        <div class="imgs">
          <img-fist v-for=" i in arr" v-show="i<=imgNum"></img-fist>
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
        arr:[0,1,2,3]
      }
    },
    components:{
      ImgFist
    },
    methods:{
      imgAdd(){
        this.imgNum++;
      },
      sub(){
        let _this = this;
        this.$api.sendData('/userPublishArticle',{
          'content':this.content,
          'uid':this.$store.state.user.uid,
          'pic':this.$store.state.imgs
        }).then((data)=>{
          if(data.static==1){
            _this.content = '';
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
    .sub:nth-of-type(1):hover{
      position:relative;
      .add_img {
        width:auto;
        height:160px;
      }
    }
    textarea:focus {
      height:200px;
      color: #858585;
      letter-spacing: 1px;
      box-shadow: 0 0 5px #8e89ff;
    }
    .add_img {
      width:0;
      height:0;
      overflow: hidden;
      cursor: default;
      position:absolute;
      top:40px;
      left:0;
      min-width:200px;
      max-width:400px;
      /*height:160px;*/
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