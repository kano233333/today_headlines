<template>
  <div class="write">
    <textarea placeholder="写下您的看法..."></textarea>
    <button class="sub" @click="postComment()">提交</button>
  </div>
</template>

<script>
  export default {
    name: "write",
    components:{
      postComment(){

      }
    }
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