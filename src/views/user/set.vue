<template>
  <div class="set">
    <div class="username">
      <sicon name="username" scale="3.0"></sicon>
      <input type="text" placeholder="更改用户名">
    </div>
    <Button type="primary">确定</Button>
  </div>
</template>

<script>
  export default {
    name: "set",
    data(){
      return {
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  .set {
    margin:30px;
    .username {
      width:60%;
      margin:20px;
      height:40px;
      position:relative;
      input {
        display: block;
        width:100%;
        height:100%;
        padding:0 35px 0 35px;
        border-radius:10px;
        letter-spacing: 1px;
      }
      input:hover,input:focus {
        border:1px solid #898aa1;
        box-shadow: 0 0 5px #898aa1;
        color: #8a8c8e;
      }
      svg {
        position:absolute;
        top:5px;
        left:5px;
      }
    }
    button {
      font-size:16px;
      margin:20px;
    }
  }
</style>