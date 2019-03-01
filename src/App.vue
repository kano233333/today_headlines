<template>
  <div id="app">
    <router-view  v-if="this.$store.state.freshIndex"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    // document.querySelector('body').style.width = document.documentElement.clientWidth + 'px';
  }
}
</script>

<style lang="less">
</style>
