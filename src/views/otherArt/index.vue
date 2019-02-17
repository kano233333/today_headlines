<template>
  <div id="other">
    <img-play v-if="this.$route.params.type == 'recommend' && !this.$store.state.user.isLogin"></img-play>
    <write v-if="this.$route.params.type == 'recommend' && this.$store.state.user.isLogin"  :url="'/api/userPublishArticle'" :me_type="3"></write>
    <div class="news_list">
      <router-link :to="{'name':'article','params':{'id':item.id,'data':item,'type':'0'}}" class="list" v-for="item in list" :key="item.id">
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
        list:[]
      }
    },
    components:{
      imgPlay,
      newsBar,
      Write
    },
    methods:{
    },
    mounted(){
      let _this = this;
      let type = this.$store.state.constData['nav'][this.$route.params.type];

      this.$api.sendData('/api/getArticle',{
        'type':type,
        'page':'1'
      }).then(function(data){
        for(let i=0;i<data.length; i++){
          data[i].time = _this.$store.state.GMTToStr(data[i].time);
        }
        _this.list = data;
      })
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