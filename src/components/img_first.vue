<template>
  <div class="img_first">
    <sicon name="add" scale="4"></sicon>
    <input type="file" @change="imgChange()" ref="img">
    <img :src="imgSrc" v-show="imgSrc!==''">
  </div>
</template>

<script>
  export default {
    name: "img_first",
    data(){
      return {
        imgSrc:''
      }
    },
    methods:{
      imgChange(){
        let file = this.$refs.img.files[0];
        let reader = new FileReader();
        let _this = this;
        reader.onload = function(evt) {
          _this.imgSrc = evt.target.result;
          _this.imgNum++;
          _this.$parent.imgAdd();

          if(!_this.$store.state.imgs){
            _this.$store.state.imgs = [];
          }
          _this.$store.state.imgs.push(_this.$refs.img.files[0]);
        };
        reader.readAsDataURL(file);
      }
    }
  }
</script>

<style scoped lang="less">
  .img_first {
    width:80px;
    height:80px;
    margin:0 10px;
    border:1px dashed #bdbdbd;
    position:relative;
    animation: 0.5s Show forwards;
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
    svg {
      position:absolute;
      top:0;
      right:0;
      left:0;
      bottom:0;
      margin:auto;
    }
  }
</style>