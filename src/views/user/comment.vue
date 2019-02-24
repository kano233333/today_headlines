<template>
  <div class="user_comment_list">
    <div v-if="data.length === 0" class="fans_list2">无</div>
    <div v-for="item in data" class="list_pad">
      <Delete v-if="isSelf" :obj="{id:item.id,type:0,cid:item.cid}" class="del"></Delete>
      {{item.content}}
      <router-link :to="{'name':'article','params':{'id':item.id,'data':item,'type':'0'}}" class="list" :key="item.id">
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
  import Delete from '../../components/delete'

  export default {
    components:{
      NewsBar,
      Loading,
      Delete
    },
    data(){
      return {
        data:[],
        busy:false,
        page:1,
        flag:true,
        isSelf:this.$store.state.uid == this.$route.params.uid
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
        this.$api.sendData('/getCommentList',{
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
  @media (max-width: 767px) {
    html .user_comment_list {
      .list {
        height:auto;
      }
    }
  }

  .user_comment_list {
    margin:20px;
    >div {
      animation: 0.5s Show forwards;
    }
    .list_pad {
      padding:20px;
      >a {
        animation:0.5s Show forwards;
      }
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
    .del {
      position:absolute;
      right:10px;
      top:10px;
      cursor: pointer;
      opacity: 0.5;
    }
    .del:hover {
      opacity: 0.8;
    }
  }
</style>