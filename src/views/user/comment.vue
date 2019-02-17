<template>
  <div class="user_comment_list">
    <div v-if="data.length === 0" class="fans_list2">无</div>
    <div v-for="item in data">
      {{item.content}}
      <router-link :to="{'name':'article','params':{'id':item.id,'data':item}}" class="list" :key="item.id">
        <news-bar :data="item"></news-bar>
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
  import NewsBar from '../../components/newsBar'

  export default {
    components:{
      NewsBar
    },
    data(){
      return {
        data:[]
      }
    },
    created(){
      let _this = this;
      this.$api.sendData('/api/getCommentList',{
        uid:this.$route.params.uid,
        page:1
      }).then((data)=>{
        _this.data = data;
      })
    }
  }
</script>

<style scoped lang="less">
  .user_comment_list {
    margin:20px;
    >div {
      padding:20px;
    }
    .list {
      display: block;
      margin:15px;
      padding:20px;
      background-color: #eeefee;
      height:100/1499*100vw;
      font-size:18px;
    }
    a {
      color:#666;
    }
    hr {
      margin:40px 0 0;
      height:1px;
      border:none;
      background-color: #dddedd
    }
  }
</style>