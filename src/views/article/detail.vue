<template>
  <div class="art">
    <header-part></header-part>
    <art-header :type="proData.type"></art-header>
    <div class="art_main">
      <div class="main_left">
        <a href="#comment">
          <sicon name="comment_num" scale="5.5"></sicon>
          <p>{{proData.commentNum}}</p>
        </a>
      </div>
      <div class="main_center">
        <h1 class="title" v-if="proData.title">{{proData.title}}</h1>
        <div v-if="proData.title" class="f_title">{{proData.author}} · {{proData.time}}</div>
        <hr />
        <p v-html="artData.content" ref="article"></p>
        <div class="star_jb" v-if="proData.title">
          <div @click="star">
            <i :class="{'i_active':isStar}">⚝</i>收藏
          </div>
        </div>
        <comment :data="proData"></comment>
      </div>
      <div class="main_right" v-show="this.$route.params.type==1">
        <div class="user">
          <div class="user_head">
            <img src="this.$route.params.imgUrl" alt="">
            <router-link to="/usercenter">{{proData.author}}</router-link>
            <div class="follow">
              <follow :uid="2" :id="proData.id" :isfollow="1"></follow>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderPart from '../../components/headerPart'
  import ArtHeader from '../../components/artHeader'
  import Follow from '../../components/follow'
  import Comment from '../../components/comment'

  export default {
    name: "detail",
    data(){
        return {
          proData:this.$route.params.data,
          artData:'',
          isStar:''
        }
    },
    components:{
      HeaderPart,
      ArtHeader,
      Follow,
      Comment
    },
    methods:{
      star(){
        this.isStar = !this.isStar;
        if(this.isStar){
          //收藏
        }else{
          //取消收藏
        }
      }
    },
    mounted(){
      // this.$api.sendData('',{
      //   id:this.proData.id
      // }).then((data)=>{
      //   this.artData = data;
      // })
      this.artData = {
          content:'&lt;p&gt;2月9日下午，一艘载有10名中国游客的快艇在普吉岛东部海域与一艘运油船相撞，快艇船头被撞变形，损毁严重。截至目前，事故造成7人受伤。其中包括快艇船长、1名船员，以及5名中国游客。&lt;/p&gt;&lt;img src&#x3D;&quot;http://p1.pstatp.com/large/pgc-image/RHdn7kpEanD7H9&quot; img_width&#x3D;&quot;800&quot; img_height&#x3D;&quot;525&quot; alt&#x3D;&quot;泰国普吉快艇又出事！撞上运油船致7人受伤送医，含5名中国游客&quot; inline&#x3D;&quot;0&quot;&gt;&lt;p&gt;当地时间2月9日星期六下午，在普吉岛东部海域，一艘载有多名中国游客的快艇撞上一艘运载石油的驳船。现场图片显示，快艇船头已变形，损毁严重，驳船左船头轻微受损。&lt;/p&gt;&lt;p&gt;据了解，这艘快艇名为sai nam号，9日上午从普吉岛雅木码头出发，开往皮皮岛进行一日游。船上载有12人，包括10名中国游客和2名船员。9日下午，在返程途中，sai nam号发生撞船事故。&lt;/p&gt;&lt;img src&#x3D;&quot;http://p3.pstatp.com/large/pgc-image/RHdn7l9GGzQZHc&quot; img_width&#x3D;&quot;696&quot; img_height&#x3D;&quot;462&quot; alt&#x3D;&quot;泰国普吉快艇又出事！撞上运油船致7人受伤送医，含5名中国游客&quot; inline&#x3D;&quot;0&quot;&gt;&lt;p&gt;截至目前，事故造成7人受伤，其中包括快艇船长、1名船员，以及5名中国游客。事发后，附近船只的工作人员赶来救援，并将被撞快艇拖回岸边。目前，7名伤者均被送至当地医院。&lt;/p&gt;&lt;p&gt;普吉海事办公室代理主任Wiwat Chidcherdwong表示，事故并未没有造成人员死亡，具体撞船原因还在调查中。&lt;/p&gt;&lt;p&gt;南都记者注意到，这已经是普吉岛本周发生的第二起涉中国人快艇事故。2月7日，另一艘载有23名中国游客的快艇在沙美岛附近翻船，快艇上两名中国游客受轻伤。快艇船长称，“行驶途中，快艇撞上水下岩石。”&lt;/p&gt;&lt;p&gt;采写：南都记者 毛淑杰&lt;/p&gt;',
          isStar:'1'
        };
      if(this.$route.params.type==1){
        this.artData['content'] = this.proData.content;
      }

      this.$refs.article.innerHTML = this.artData['content'];
      this.artData['content'] = this.$refs.article.innerText;
      this.isStar = this.artData['isStar']==1 ? true : false;
    }
  }
</script>

<style scoped lang="less">
  .art {
    .art_main {
      display: flex;
      justify-content: center;
      margin:30px 0;
      .main_left {
        >a:nth-of-type(1){
          p {
            text-align:center;
            font-size:20px;
            color:#ED4040;
          }
        }
      }
      .main_center {
        >hr{
          margin: 20px 0;
        }
        width:55%;
        margin:0 40px;
        letter-spacing: 1px;
        .title {
          font-size:25px;
          font-weight:700;
        }
        p {
          font-size:18px;
          text-indent:36px;
          line-height:1.6;
        }
      }
      .main_right {
        width:20%;
        .user {
          border-top:3px solid #ED4040;
          background-color: #F4F5F6;
          padding:20px;
          font-size:15px;
          a {
            color:#666;
          }
          a:hover {
            color: #9096aa
          }
        }
      }
    }
    .comment_num {
      position:relative;
        .comment_num:before {
          content:"\E649";
          font-size:25px;
          position:absolute;
          top:0;
        }
    }
    .f_title {
      font-size:14px;
      margin:10px 10px;
    }
    .star_jb {
      font-size:15px;
      font-weight:700;
      margin:20px 0;
      border-left:5px solid #a7a9a9;
      >div {
        display: inline-block;
        padding:5px;
        color: #b9b6b3;
        cursor: pointer;
      }
      >div:hover {
        box-shadow: 1px 1px 5px #7c7d7d;
        color: #a5a6a6;
        i {
          color:#575858;
        }
        .i_active {
          color: #edb02c;
          text-shadow: 1px 1px 4px #edb02c;
        }
      }
      i {
        vertical-align: center;
        font-size:20px;
        margin:0 5px;
      }
      .i_active,.i_active:hover {
        color: #edb02c;
        text-shadow: 1px 1px 4px #edb02c;
      }
    }
    .follow {
      width:60px;
      margin:20px 0 0 0;
    }
  }
</style>