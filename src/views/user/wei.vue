<template>
  <div class="wei">
    <div v-if="data.length === 0" class="fans_list2">无</div>
    <div v-for="item in data" class="list" @click="detail(item)">
      <Delete v-if="isSelf" :obj="{id:item.id,type:0}" class="del"></Delete>
      <p>{{item.content}}</p>
      <p>{{item.readNum}}阅读数 · {{item.time}}</p>
    </div>

    <div v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="1000">
      <Loading v-if="flag && data.length !== 0" style="margin:0 auto; transform: scale(0.3)"></Loading>
    </div>
  </div>
</template>

<script>
  import Article from '../article/detail'
  import Loading from '../loading'
  import Delete from '../../components/delete'

  export default {
    name: "wei",
    data(){
      return {
        data:[],
        busy:false,
        page:1,
        flag:true,
        isSelf:this.$store.state.uid == this.$route.params.uid
      }
    },
    components:{
      Article,
      Loading,
      Delete
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
      detail(item){
        this.$router.push({'name':'article','params':{'id':item.id,'data':item,'type':'1','imgUrl':this.$route.params.imgUrl}})
      },
      getData(sp) {
        let _this = this;
        this.$api.sendData('/getPublishList', {
          uid: this.$route.params.uid,
          page: this.page
        }).then((data) => {
          if ((data.static && data.static == 0) || data.length == 0) {
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

<style scoped>
  .wei .list {
    margin:20px 20px;
    padding:10px;
    background-color: #f3f3f3;
    cursor: pointer;
    animation:0.5s Show forwards;

  }
  .wei .list >p:nth-of-type(1){
    max-height:50px;
    font-size:16px;
    line-height:1.5;
    letter-spacing: 2px;
    overflow:hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .wei .list >p:nth-of-type(2) {
    font-size:14px;
    color:#868686;
    margin-top:20px;
  }
  .del {
    position:absolute;
    right:10px;
    top:10px;
    opacity: 0.5;
  }
  .del:hover {
    opacity: 0.8;
  }
</style>