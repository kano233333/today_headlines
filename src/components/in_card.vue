<template>
  <div class="inCard">
    <div class="main">
      <div>
        <img :src="data.imgUrl" @click="imgClick()">
        <p>{{data.username}}</p>
      </div>
      <div>{{data.follow}}关注</div>
      <div>{{data.fans}}粉丝</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inCard",
    data(){
      return {
        data: this.$store.state.user

      }
    },
    methods:{
      imgClick(){
        this.$router.push({
          'name':'userwei',
          "params":{
            uid:this.data.uid
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .inCard {
    padding:5px;
    max-width:350px;
    background-color: #f4f5f6;
    .main {
      border:1px solid #e9e5e3;
      height:200px;
      margin:10px;
      display:grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 60% 40%;
      align-items: center;
      text-align: center;
      padding:20px;
      background-color: #fff;
      >div:nth-of-type(1){
        grid-column-start: 1;
        grid-column-end: 3;
      }
      img {
        margin:0 auto;
        width:50px;
        height:50px;
        cursor: pointer;
        border-radius:50%;
      }
      p {
        font-size:18px;
        font-weight:700;
        color:#666;
        text-align: center;
      }
      a {
        width:100%;
      }
    }
  }
</style>