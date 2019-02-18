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

    <div v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="1000">
      <Loading v-if="flag && data.length !== 0" style="margin:0 auto; transform: scale(0.3)"></Loading>
    </div>
  </div>
</template>

<script>
  import NewsBar from '../../components/newsBar'
  import Loading from '../loading'

  export default {
    components:{
      NewsBar,
      Loading
    },
    data(){
      return {
        data:[],
        busy:false,
        page:1,
        flag:true
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
        this.$api.sendData('/api/getCommentList',{
          uid:this.$route.params.uid,
          page:this.page
        }).then((data)=>{
          if((data.static && data.static==0) || data.length==0){
            _this.flag = false;
            _this.busy = true;
            return;
          }
          _this.data.push(...data);
          this.page++;
        })
      }
    },
    created(){
      this.getData();
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