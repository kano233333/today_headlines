<template>
  <div class="follow">
    <div v-for="item in data" class="follow_list">
      <img :src="item.imgUrl" alt="">
      <span>{{item.username}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "followLits",
    data(){
      return {
        data:[
          {
            username:'晒衣服',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201510/12/20151012184806_MCtvX.thumb.700_0.jpeg',
            uid:'2'
          },
          {
            username:'晒衣服',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201510/12/20151012184806_MCtvX.thumb.700_0.jpeg',
            uid:'2'
          },
          {
            username:'晒衣服',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201510/12/20151012184806_MCtvX.thumb.700_0.jpeg',
            uid:'2'
          },
          {
            username:'晒衣服',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201510/12/20151012184806_MCtvX.thumb.700_0.jpeg',
            uid:'2'
          },
          {
            username:'晒衣服',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201510/12/20151012184806_MCtvX.thumb.700_0.jpeg',
            uid:'2'
          },
          {
            username:'晒衣服',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201510/12/20151012184806_MCtvX.thumb.700_0.jpeg',
            uid:'2'
          },
          {
            username:'晒衣服',
            imgUrl:'https://b-ssl.duitang.com/uploads/item/201510/12/20151012184806_MCtvX.thumb.700_0.jpeg',
            uid:'2'
          }
        ]
      }
    },
    created(){
      //this.$route.params.uid
    }
  }
</script>

<style scoped>
  .follow_list {
    display: flex;
    align-items:center;
    animation:0.5s Show forwards;
    margin:10px;
  }
  .follow_list >img {
    width:50px;
    height:50px;
    border-radius:50%;
    margin:20px;
  }
</style>