<template>
  <div class="star">
    <div v-if="list.length == 0" class="fans_list2">无</div>
    <router-link :to="{'name':'article','params':{'id':item.id,'data':item}}" class="list" v-for="item in list" :key="item.id" v-if="list.length !== 0">
      <news-bar :data="item"></news-bar>
      <hr />
    </router-link>
  </div>
</template>

<script>
  import NewsBar from '../../components/newsBar'
  export default {
    name: "star",
    components:{
      NewsBar
    },
    data(){
      return {
        list:[]
      }
    },
    created(){
      let _this = this;
      this.$api.sendData('/api/getStartList',{
        uid:this.$route.params.uid,
        page:1
      }).then((data)=>{
        _this.list = data;
      })
    }
  }
</script>

<style scoped lang="less">
  .star {
    margin:20px;
    .list {
      display: block;
      margin:15px 0;
      height:100/1499*100vw;
      font-size:18px;
    }
    a {
      color:#666;
    }
    hr {
      margin:7.5px 0;
      height:1px;
      border:none;
      background-color: #dddedd
    }
  }
</style>