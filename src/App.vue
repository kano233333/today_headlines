<template>
  <div id="app">
    <header-part></header-part>



    <!--<keep-alive>-->
      <!--<router-view v-if="$route.meta.keepAlive">-->
        <!--&lt;!&ndash; 这里是会被缓存的视图组件&ndash;&gt;-->
      <!--</router-view>-->
    <!--</keep-alive>-->
    <!--<router-view v-if="!$route.meta.keepAlive">-->
      <!--&lt;!&ndash; 这里是不被缓存的视图组件&ndash;&gt;-->
    <!--</router-view>-->
  </div>
</template>

<script>
import HeaderPart from './components/headerPart'
export default {
  name: 'App',
  components:{
    HeaderPart
  }
}
</script>

<style>
#app{
  font-size: 18px;
}
</style>
