<template>
  <div class="set">
    <div class="username">
      <sicon name="username" scale="3.0"></sicon>
      <input type="text" placeholder="更改用户名" v-model="name">
    </div>
    <Button type="primary" @click="changeName()">确定</Button>
  </div>
</template>

<script>
  export default {
    name: "set",
    data(){
      return {
        name:''
      }
    },
    methods:{
      flushCom(){
        this.$store.state.freshIndex2 = false;
        let _this = this;
        this.$nextTick(() => (_this.$store.state.freshIndex2 = true))
      },
      changeName(){
        if(this.name===''){
          this.$Message.info('请填写新的用户名')
        }

        let _this = this;
        this.$api.sendData("/api/changeUsername",{
          uid:this.$store.state.user.uid,
          rename:this.name
        }).then((data)=>{
          if(data.static===1){
            _this.$Message.info('更改成功');
            _this.flushCom();
            let __this = _this;
            this.$api.sendData('/api/getUserInfo',{
              uid:_this.$route.params.uid
            }).then((data)=>{
              for(let index in data){
                __this.$store.state.user[index] = data[index]
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .set {
    margin:30px;
    .username {
      width:60%;
      margin:20px;
      height:40px;
      position:relative;
      input {
        display: block;
        width:100%;
        height:100%;
        padding:0 35px 0 35px;
        border-radius:10px;
        letter-spacing: 1px;
      }
      input:hover,input:focus {
        border:1px solid #898aa1;
        box-shadow: 0 0 5px #898aa1;
        color: #8a8c8e;
      }
      svg {
        position:absolute;
        top:5px;
        left:5px;
      }
    }
    button {
      font-size:16px;
      margin:20px;
    }
  }
</style>