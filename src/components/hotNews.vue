<template>
  <div class="hot_news">
    <h3>24小时热闻</h3>
    <div class="news_list">
      <router-link :to="{'name':'article','params':{'data':item,'id':item.id,'type':'0'}}" type="0" class="list" v-for="item in list" :key="item.id">
        <news-bar :data="item"></news-bar>
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
        list:[
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:0
          },
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:1
          },
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:2
          },
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:3
          }
        ]
      }
    },
    components:{
      NewsBar
    },
    mounted(){
      let _this = this;
      this.$api.getData('/api/hotArticle').then(function(data){
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