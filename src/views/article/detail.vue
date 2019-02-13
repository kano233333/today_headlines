<template>
  <div>
    <header-part></header-part>
    <art-header :type="proData.type"></art-header>
  </div>
</template>

<script>
  import HeaderPart from '../../components/headerPart'
  import ArtHeader from '../../components/artHeader'

  export default {
    name: "detail",
    data(){
        return {
          proData:this.$route.params.data
        }
    },
    components:{
      HeaderPart,
      ArtHeader
    }
  }
</script>

<style scoped>

</style>