<template>
  <div id="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  #loading {
    width:150px;
    height:100px;
    position:relative;
  }
  #loading>div {
    width:15px;
    height:0;
    background-color: #5f9ea0;
    position:absolute;
    bottom: 0;
    animation: 1.5s shift infinite linear;
  }

  #loading div:nth-child(1) {
    /*animation-delay:;*/
    left:0;
  }
  #loading div:nth-child(2) {
    animation-delay:-0.25s;
    left:22%;
  }
  #loading div:nth-child(3) {
    animation-delay:-0.5s;
    left:45%;
  }
  #loading div:nth-child(4) {
    animation-delay:-0.75s;
    right:22%;
  }
  #loading div:nth-child(5) {
    animation-delay:-1s;
    right:0;
  }

  @keyframes shift {
    0% {
      height:0;
    }
    50% {
      height:100%;
    }
    100% {
      height:0;
    }
  }
</style>