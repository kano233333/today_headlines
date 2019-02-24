<template>
  <div class="star">
    <div v-show="list.length == 0" class="fans_list2">无</div>
    <router-link :to="{'name':'article','params':{'id':item.id,'data':item,'type':item.type}}" class="list" v-for="item in list" v-if="list.length !== 0">
      <news-bar :data="item"></news-bar>
      <hr />
    </router-link>

    <div v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="1000">
      <Loading v-if="flag && list.length !== 0" style="margin:0 auto; transform: scale(0.3)"></Loading>
    </div>
  </div>
</template>

<script>
  import NewsBar from '../../components/newsBar'
  import Loading from '../loading'
  export default {
    name: "star",
    components:{
      NewsBar,
      Loading
    },
    data(){
      return {
        list:[],
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
        this.$api.sendData('/getStartList',{
          uid:this.$route.params.uid,
          page:this.page
        }).then((data)=>{
          if((data.static && data.static==0) || data.length==0){
            _this.flag = false;
            _this.busy = true;
            return;
          }
          for (let i in data) {
            data[i].time = _this.$store.state.GMTToStr(data[i].time)
          }
          _this.list.push(...data);
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
  @media (max-width: 767px) {
    html .star {
      .list {
        height:auto;
      }
    }
  }
  .star {
    margin:20px;
    .list {
      display: block;
      margin:15px 0;
      height:100/1499*100vw;
      font-size:18px;
      animation: 0.5s Show forwards;
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