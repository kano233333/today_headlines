<template>
  <div id="other">
    <img-play v-show="this.$route.params.type == 'recommend' && true"></img-play>
    <write v-show="this.$route.params.type == 'recommend' && false"></write>
    <div class="news_list">
      <router-link :to="{'name':'article','params':{'id':item.id,'data':item}}" class="list" v-for="item in list" :key="item.id">
        <news-bar :data="item"></news-bar>
        <hr />
      </router-link>
    </div>
  </div>
</template>

<script>
  import imgPlay from '../../components/imgPlay'
  import newsBar from '../../components/newsBar'
  import Write from '../../components/write'

  export default {
    name: "index",
    data(){
      return {
        list:[
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:0,
            author:'中国科技协会',
            time:'2018',
            type:'finance',
            commentNum:12
          },
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:1,
            author:'中国科技协会',
            time:'2018',
            type:'baby',
            commentNum:5
          },
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:2,
            author:'中国科技协会',
            time:'2018',
            type:'history',
            commentNum:15
          },
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:3,
            author:'中国科技协会',
            time:'2018',
            type:'tech',
            commentNum:18
          }
        ]
      }
    },
    components:{
      imgPlay,
      newsBar,
      Write
    }
  }
</script>

<style scoped lang="less">
  .news_list {
    margin-top:20px;
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