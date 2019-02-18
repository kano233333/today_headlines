<template>
  <div class="list_wrap">
    <div @click="fansCenter(item.uid)" v-for="item in list.users" class="fans_list">
      <img :src="item.imgUrl" alt="">
      <span>{{item.username}}</span>
    </div>
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
      fansCenter(uid){
        this.$router.push({
          'name':'userwei',
          "params":{
            uid:uid
          }
        })
      },
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
        this.$api.getData('/api/searchUserData?keyWord='+this.$route.query.keyWord+"&page="+this.page).then(function(data){
          if((data.static && data.static==0) || data.length==0){
            _this.flag = false;
            return;
          }
          _this.list.push(...data);
          _this.page++;
        })
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped>

</style>