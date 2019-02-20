<template>
  <div id="other">
    <img-play v-if="this.$route.params.type == 'recommend' && !this.$store.state.user.isLogin"></img-play>
    <write v-if="this.$route.params.type == 'recommend' && this.$store.state.user.isLogin"  :url="'/api/userPublishArticle'" :me_type="3"></write>
    <div class="news_list">
      <router-link :to="{'name':'article','params':{'id':item.id,'data':item,'type':'0'}}" class="list" v-for="item in list" :key="item.title">
          <news-bar :data="item"></news-bar>
          <hr />
      </router-link>
    </div>

    <div v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="1000">
      <Loading v-show="flag" style="margin:0 auto; transform: scale(0.3)"></Loading>
      <p class="end" v-show="!flag">到底了</p>
    </div>

  </div>
</template>

<script>
  import imgPlay from '../../components/imgPlay'
  import newsBar from '../../components/newsBar'
  import Write from '../../components/write'
  import Loading from '../loading'

  let count = 0;
  export default {
    name: "index",
    data(){
      return {
        list:[],
        busy:false,
        page:1,
        flag:true
      }
    },
    components:{
      imgPlay,
      newsBar,
      Write,
      Loading
    },
    methods:{
      loadMore:function(){
        this.busy = true;
        let _this = this;
        setTimeout(()=> {
          _this.flag && _this.getData();
          _this.busy = false;
        },500)
     },
      getData(){
        let _this = this;
        let type = this.$store.state.constData['nav'][this.$route.params.type];
        this.$api.sendData('/api/getArticle',{
          'type':type,
          'page':this.page
        }).then(function(data){
          if((data.static && data.static==0) || data.length==0){
            _this.flag = false;
            return;
          }
          for(let i=0;i<data.length; i++){
            data[i].time = _this.$store.state.GMTToStr(data[i].time);
          }
          _this.list.push(...data);
          _this.page++;
        })
      }
    },
    mounted(){
      this.getData();
      window.scrollTo(0,0);
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