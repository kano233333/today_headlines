<template>
  <header>
    <Row class="header_row">
      <Col span="2" offset="1">天气</Col>
      <Col span="1" offset="17">登录</Col>
      <Col span="1">反馈</Col>
      <Col span="1">投诉</Col>
      <Col span="1">产品</Col>
    </Row>
  </header>
</template>

<script>
  export default {
    name: "headerPart"
  }
</script>

<style scoped lang="less">
  header {
    background-color:#000;
    color:#fff;
    font-size:15px;
    .header_row>div{
      padding:5px 0;
    }
  }
</style>