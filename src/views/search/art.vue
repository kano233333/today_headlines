<template>
  <div class="list_wrap">
    <router-link :to="{'name':'article','params':{'id':item.id,'data':item,'type':'0'}}" class="list" v-for="item in list" :key="'artX'+item.title">
      <news-bar :data="item"></news-bar>
      <hr />
    </router-link>

    <div v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="1000">
      <Loading v-show="flag" style="margin:0 auto; transform: scale(0.3)"></Loading>
      <p class="end" v-show="!flag">...</p>
    </div>

  </div>
</template>

<script>
  import Loading from '../loading'
  import NewsBar from '../../components/newsBar'

  export default {
    name: "art",
    components:{
      Loading,
      NewsBar
    },
    data(){
      return {
        list:[],
        busy:false,
        page:1,
        flag:true,
      }
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
        let wd = this.$route.query.keyWord;
        this.$api.getData('/api/searchComprehensiveData?keyWord='+wd+"&page="+this.page).then(function(data){
          if((data.static && data.static==0) || data.length==0){
            _this.flag = false;
            return;
          }
          for(let i=0;i<data.length;i++){
            let dataArr = data[i].title.split(wd);
            data[i].title = dataArr[0]+'<span style="color:#e36b57;">'+wd+'</span>'+dataArr[1];
            data[i].time = _this.$store.state.GMTToStr(data[i].time);
          }
          _this.list.push(...data);
          _this.page++;
        })
      }
    },
    mounted(){
      this.getData();
      let _this = this;
      this.$on('getData',function(){

        _this.getData();
      })
    }
  }
</script>

<style scoped>

</style>