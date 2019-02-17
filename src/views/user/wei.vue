<template>
  <div class="wei">
    <div v-if="data.length === 0" class="fans_list2">无</div>
    <div v-for="item in data" class="list" @click="detail(item)">
      <p>{{item.content}}</p>
      <p>{{item.readNum}}阅读数 · {{item.zanNum}}点赞数 · {{item.time}}</p>
    </div>
  </div>
</template>

<script>
  import Article from '../article/detail'

  export default {
    name: "wei",
    data(){
      return {
        data:[]
      }
    },
    components:{
      Article
    },
    methods:{
      detail(item){
        this.$router.push({'name':'article','params':{'id':item.id,'data':item,'type':'1','imgUrl':this.$route.params.imgUrl}})
      }
    },
    created(){
      let _this = this;
      this.$api.sendData('/api/getPublishList',{
        uid:this.$route.params.uid,
        page:1
      }).then((data)=>{
        console.log(data)
        _this.data = data;
      })
    }
  }
</script>

<style scoped>
  .wei .list {
    margin:20px 20px;
    padding:10px;
    background-color: #f3f3f3;
    cursor: pointer;
    animation:0.5s Show forwards;

  }
  .wei .list >p:nth-of-type(1){
    max-height:50px;
    font-size:16px;
    line-height:1.5;
    letter-spacing: 2px;
    overflow:hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .wei .list >p:nth-of-type(2) {
    font-size:14px;
    color:#868686;
    margin-top:20px;
  }
</style>