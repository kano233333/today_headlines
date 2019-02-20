<template>
  <button :class="isfollowClass" @click="follow()">{{msg[isfollow]}}</button>
</template>

<script>
  export default {
    name: "follow",
    props:{
        'uid':{},
        'follow_id':{
          default:''
        },
        'is_follow':{
          default:0
        }
      },
    data(){
      return {
        msg:['+关注','已关注'],
        isfollowClass:'not_follow',
        isfollow:''
      }
    },
    methods:{
      flushCom(){
        this.$store.state.freshIndex = false;
        let _this = this;
        this.$nextTick(() => (_this.$store.state.freshIndex = true))
      },
      follow(){
        let _this = this;
        if(this.isfollow){
          this.$api.sendData('/api/userRemoveFollow',{
            uid:this.uid,
            follow_id:this.follow_id
          }).then((data)=>{
            if(data.static==1){
              _this.$Message.info('取消成功');
              _this.flushCom();
              _this.isfollowClass = 'not_follow';
              _this.isfollow =0;
            }else{
              _this.$Message.info('错误');
            }
          })
        }else{
          this.$api.sendData('/api/userFollow',{
            uid:this.uid,
            follow_id:this.follow_id
          }).then((data)=>{
            if(data.static==1){
              _this.$Message.info('关注成功');
              _this.flushCom();
              _this.isfollowClass = 'followed';
              _this.isfollow =1;
            }else{
              _this.$Message.info('错误');
            }
          })
        }
      }
    },
    created(){
      this.isfollow = this.is_follow;
      if(this.isfollow==1){
        this.isfollowClass = 'followed'
      }
    }
  }
</script>

<style scoped>
  button {
    font-size:15px;
    color:#fff;
    display: block;
    width:100%;
    letter-spacing: 1px;
    border-radius:5px;
    padding:5px;
    cursor: pointer;
    border:none;
  }
  .not_follow {
    background-color: #2195E4;
  }
  .not_follow:hover {
    background-color: #56a9e0;
    box-shadow: 1px 1px 5px #888683;;
  }
   .followed {
     background-color: transparent;
     border:1px solid #b8b5b1;
     color:#aca9a5;
   }
</style>