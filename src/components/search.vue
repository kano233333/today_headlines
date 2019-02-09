<template>
  <div class="search">
    <input type="text" placeholder="请输入要搜索的内容" />
    <button>搜索</button>
  </div>
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style scoped lang="less">
  .search {
    padding:5px;
    font-size:15px;
    position:relative;
    input {
      border-radius:6px;
      width:100%;
      padding:0 10px;
      height:40px;
      color: #9c9c9c;
      background-color: #f4f5f6;
    }
    input:hover {
      border:1px solid #208eda;
      box-shadow: 0 0 3px #208eda;
    }
    input:focus {
      border:1px solid #208eda;
      box-shadow: 0 0 3px #208eda;
      color:#666;
    }
    button {
      background-color: #208eda;
      color:#fff;
      display: inline-block;
      height:42px;
      width:20%;
      border-radius:0 6px 6px 0;
      position:absolute;
      top:4px;
      right:5px;
      cursor:pointer;
    }
    button:hover {
      background-color: #2195e4;
    }
  }
</style>