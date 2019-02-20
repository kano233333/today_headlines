<template>
  <div @click.stop="modal1 = true">
    <div>
      <sicon name="delete" scale="2"></sicon>
    </div>

    <Modal v-model="modal1" @on-ok="ok" title="删除">
      <p>确认要删除？</p>
    </Modal>
  </div>
</template>


<script>
  export default {
    name: "delete",
    data(){
      return {
        modal1: false
      }
    },
    methods:{
      flushCom(){
        this.$store.state.freshIndex = false;
        let _this = this;
        this.$nextTick(() => (_this.$store.state.freshIndex = true))
      },
      ok(){
        let _this = this;
        this.obj['uid'] = this.$store.state.user.uid;
        this.$api.sendData('/api/deletePulished',this.obj).then((data)=>{
          if(data.static==1){
            _this.flushCom();
          }else{
            _this.$Message.info('失败');
          }
        })
      }
    },
    props:[
      'obj'
    ]
  }
</script>

<style scoped>

</style>