<template>
  <div id="recommend">
    <img-play></img-play>
    <news-list v-for="(value,index) in list"></news-list>
  </div>
</template>

<script>
  import imgPlay from '../../components/imgPlay'
  import newsList from '../../components/newsList'
  export default {
    name: "index",
    data(){
      return {
        list:[
          {},
          {},
          {},
          {},
          {},
          {},
        ]
      }
    },
    components:{
      imgPlay,
      newsList
    }
  }
</script>

<style scoped>

</style>