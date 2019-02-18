<template>
  <div class="follow">
    <div v-if="data.length === 0" class="fans_list2">无</div>
    <div @click="fansCenter(item.uid)" v-for="item in data" v-if="data.length !== 0" class="follow_list">
      <img :src="item.imgUrl" alt="">
      <span>{{item.name}}</span>
    </div>

    <div v-infinite-scroll ="loadMore" infinite-scroll-disabled ="busy" infinite-scroll-distance="1000">
      <Loading v-if="flag && data.length !== 0" style="margin:0 auto; transform: scale(0.3)"></Loading>
    </div>
  </div>
</template>

<script>
  import Loading from '../loading'

  export default {
    name: "followLits",
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
      fansCenter(uid){
        this.$router.push({
          'name':'userwei',
          "params":{
            uid:1
          }
        })
      },
      getData(){
        let _this = this;
        this.$api.sendData('/api/getFollows',{
          uid:this.$route.params.uid,
          page:this.page
        }).then((data)=>{
          if((data.static && data.static==0) || data.data.length==0){
            _this.flag = false;
            _this.busy = true;
            return;
          }
          _this.data.push(...data.data);
          this.page++;
        })
      }
    },
    created(){
      this.getData();
    },
    components:{
      Loading
    }
  }
</script>

<style scoped>
  .follow_list {
    display: flex;
    align-items:center;
    animation:0.5s Show forwards;
    margin:10px;
    cursor: pointer;
  }
  .follow_list >img {
    width:50px;
    height:50px;
    border-radius:50%;
    margin:20px;
  }
</style>