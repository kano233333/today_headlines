<template>
  <div id="app">
    <router-view  v-if="this.$store.state.freshIndex"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
</style>
