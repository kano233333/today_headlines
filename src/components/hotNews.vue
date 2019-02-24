<template>
  <div class="hot_news">
    <h3>24小时热闻</h3>
    <div class="news_list">
      <router-link :to="{'name':'article','params':{'data':item,'id':item.id,'type':'0'}}" type="0" class="list" v-for="item in list" :key="item.id">
        <news-bar :type="0" :data="item"></news-bar>
        <hr />
      </router-link>
    </div>
  </div>
</template>

<script>
  import NewsBar from './newsBar'

  export default {
    name: "hotNews",
    data(){
      return {
        list:[]
      }
    },
    components:{
      NewsBar
    },
    methods:{

    },
    mounted(){
      let _this = this;
      this.$api.getData('/hotArticle').then(function(data){
        for(let i=0;i<data.length; i++){
          data[i].time = _this.$store.state.GMTToStr(data[i].time);
        }
        _this.list = data;
      })
    }
  }
</script>

<style scoped lang="less">
  .hot_news {
    padding:20px 15px;
    background-color:#F4F5F6;
    border-top:5px solid #ef5353;
    animation:0.5s Show forwards;
    h3 {
      font-size:18px;
      font-weight:700;
    }
  }

  .news_list {
    .list {
      display: block;
      margin:15px 0;
      height:65/1499*100vw;
      font-size:14px;
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