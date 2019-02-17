<template>
  <div class="follow">
    <div v-if="data.length === 0" class="fans_list2">无</div>
    <div @click="fansCenter(item.uid)" v-for="item in data" v-if="data.length !== 0" class="follow_list">
      <img :src="item.imgUrl" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "followLits",
    data(){
      return {
        data:[]
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
      }
    },
    created(){
      let _this = this;
      this.$api.sendData('/api/getFollows',{
        uid:this.$route.params.uid,
        page:1
      }).then((data)=>{
        _this.data = data.data;
      })
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