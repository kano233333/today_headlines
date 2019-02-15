<template>
  <div class="wei">
    <div v-for="item in data" class="list" @click="detail(item)">
      <p>{{item.content}}</p>
      <p>{{item.readNum}}阅读数 · {{item.zanNum}}点赞数 · {{item.time}}</p>
    </div>
  </div>
</template>

<script>
  import Article from '../article/detail'

  export default {
    name: "wei",
    data(){
      return {
        data:[]
      }
    },
    components:{
      Article
    },
    methods:{
      detail(item){
        this.$router.push({'name':'article','params':{'id':item.id,'data':item,'type':'1','imgUrl':this.$route.params.imgUrl}})
      }
    },
    created(){
      console.log(this.$route.params.uid);
      this.data = [
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'23',//评论数
          time:'2018 9-18'//发表时间
        },
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'',//评论数
          time:'2018 9-18'//发表时间
        },
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'',//评论数
          time:'2018 9-18'//发表时间
        },
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'',//评论数
          time:'2018 9-18'//发表时间
        },
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'',//评论数
          time:'2018 9-18'//发表时间
        },
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'',//评论数
          time:'2018 9-18'//发表时间
        },
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'',//评论数
          time:'2018 9-18'//发表时间
        },
        {
          id:'0',//文章id
          content:'JFK的就是考虑开发接口电路设计风口浪尖的都是垃圾分类节点是垃圾分厘卡东街口附近客服就打算离开JFK了但是尽量克服艰苦劳动房间昆仑山大家看来飞机迪斯科解放路口的搭街坊螺丝扣东街口附近的实力看见分厘卡的是解放螺丝钉JFK冷静的思考附近开了多少离开的数据分类的说法你分开覅哦恶法即刻的世界里疯狂就是打开链接覅哦加科夫斯卡',//文章内容
          readNum:'231',//阅读数
          zanNum:'32',//点赞数
          commentNum:'',//评论数
          time:'2018 9-18'//发表时间
        }
      ]
    }
  }
</script>

<style scoped>
  .wei .list {
    margin:20px 20px;
    padding:10px;
    background-color: #f3f3f3;
    cursor: pointer;
    animation:0.5s Show forwards;

  }
  .wei .list >p:nth-of-type(1){
    max-height:50px;
    font-size:16px;
    line-height:1.5;
    letter-spacing: 2px;
    overflow:hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .wei .list >p:nth-of-type(2) {
    font-size:14px;
    color:#868686;
    margin-top:20px;
  }
</style>