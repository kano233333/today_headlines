<template>
  <button :class="isfollowClass" @click="follow">{{msg[isfollow]}}</button>
</template>

<script>
  export default {
    name: "follow",
    props:{
        'uid':{},
        'id':{},
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
      follow(){
        if(this.isfollow){
          this.isfollowClass = 'not_follow';
          this.isfollow =0;
        }else{
          this.isfollowClass = 'followed';
          this.isfollow =1;
        }
      }
    },
    created(){
      this.isfollow = this.is_follow;
      this.follow();
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