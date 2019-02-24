<template>
  <header>
    <div class="header_row">
      <ul class="header_left">
        <li class="left_img">
          <img @click="clickIndex('/')" src="../assets/img/logo.png" alt="">
        </li>
        <!--<li class="weather" @mouseenter="weatherDetail=true" @mouseleave="weatherDetail=false">-->
          <!--<span>{{city}}</span>-->
          <!--<span>{{tq}}</span>-->
          <!--<span>{{wd[0]}}</span>-->
          <!--<div class="weather_detail" v-show="weatherDetail">-->
            <!--<div class="weather_header">-->
              <!--<span class="city" @click="showWeather=!showWeather">{{city}}</span>-->
              <!--<span>{{wind}}</span>-->
              <!--&lt;!&ndash;<span class="weather_air">优</span>&ndash;&gt;-->
            <!--</div>-->
            <!--<hr />-->
            <!--<div class="weather_more" v-show="showWeather">-->
              <!--<div>-->
                <!--<p>今天</p>-->
                <!--<img src="../assets/img/weather1.png">-->
                <!--<p>{{wd[0]}}</p>-->
              <!--</div>-->
              <!--<div>-->
                <!--<p>明天</p>-->
                <!--<img src="../assets/img/weather2.png">-->
                <!--<p>{{wd[1]}}</p>-->
              <!--</div>-->
              <!--<div>-->
                <!--<p>后天</p>-->
                <!--<img src="../assets/img/weather3.png">-->
                <!--<p>{{wd[2]}}</p>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="choice_city" v-show="!showWeather">-->
              <!--<div class="choice_city1" @mouseenter="cityShow=true" @mouseleave="cityShow=false">-->
                <!--<div class="city_click">-->
                  <!--<button>-->
                    <!--{{constData['citys'][cityIndex].city}}-->
                    <!--<Icon type="ios-arrow-down"></Icon>-->
                  <!--</button>-->
                  <!--<div class="list_wrap" v-show="cityShow">-->
                    <!--<ul class="city_list">-->
                      <!--<li v-for="(value,index) in constData['citys']" @click="cityClick(index)">{{value.city}}</li>-->
                    <!--</ul>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--&lt;!&ndash;<div class="choice_city2" @mouseenter="countyShow=true" @mouseleave="countyShow=false">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="city_click">&ndash;&gt;-->
                  <!--&lt;!&ndash;<button>&ndash;&gt;-->
                    <!--&lt;!&ndash;{{citys[cityIndex].county[countyIndex]}}&ndash;&gt;-->
                    <!--&lt;!&ndash;<Icon type="ios-arrow-down"></Icon>&ndash;&gt;-->
                  <!--&lt;!&ndash;</button>&ndash;&gt;-->
                  <!--&lt;!&ndash;<div class="list_wrap" v-show="countyShow">&ndash;&gt;-->
                    <!--&lt;!&ndash;<ul class="city_list">&ndash;&gt;-->
                      <!--&lt;!&ndash;<li v-for="(value,index) in citys[cityIndex].county" @click="countyClick(index)">{{value}}</li>&ndash;&gt;-->
                    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                  <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--<Button type="primary" size="default">确定</Button>-->
              <!--<Button size="default">取消</Button>-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
      <ul class="header-right">
        <li @click="userClick()" v-if="this.$store.state.user.isLogin" class="li_img">
          <img :src="this.$store.state.user.imgUrl" alt="">
        </li>
        <li @click="loginClick()" v-if="!this.$store.state.user.isLogin==1">登录</li>
        <li>反馈</li>
        <li>投诉</li>
        <li class="user_head" @click="clickIndex('/search/article?keyWord=')">
          <sicon name="search" scale="3.0"></sicon>
        </li>
        <li class="user_head" @click="clickPush()">
          <sicon name="username" scale="3.0"></sicon>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: "headerPart",
    data(){
      return {
        wd:['','',''],
        tq:'',
        wind:'',
        showWeather:true,
        cityIndex:0,
        countyIndex:0,
        city:this.$store.state.constData.citys[0].city,
        weatherDetail:false,
        cityShow:false,
        countyShow:false,
        constData:this.$store.state.constData,
        weather:{},
        login:this.$store.state.isLogin
      }
    },
    created(){
      // this.getWeather();
    },
    methods:{
      clickIndex(str){
        this.$router.push(str);
      },
      loginClick(){
        this.$router.push('/sign/in');
      },
      userClick(){
        this.$router.push('/user/'+this.$store.state.user.uid+'/wei')
      },
      clickPush(){
        if(this.$store.state.user.isLogin==1){
          this.$router.push({
            'name':'userwei',
            "params":{
              uid:this.$store.state.user.uid
            }
          })
        }else{
          this.$router.push('/sign/in');
        }
      },
      cityClick(index){
        this.cityIndex=index;
        this.countyIndex=0;
        this.cityShow = false;
      },
      countyClick(index){
        this.countyIndex = index;
        this.countyShow = false;
      },
      getWeather(){
        let _this = this;
        this.$api.sendData('/getWeather',{
          city:this.constData['citys'][this.cityIndex].city
        }).then((data)=>{
          console.log(data)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @media (max-width: 800px) {
    html header {
      .header_row {
        padding: 10px 20px;
      }
      .left_img {
        height:25px;
        width:auto;
        cursor: pointer;
      }
      .header-right {
        >li {
          padding:2px;
          display: none;
        }
        .user_head {
          display: block;
        }
        >li:hover {
          background-color: transparent;
        }
      }
    }
  }

  header {
    background-color:#000;
    color: #fff;
    font-size:14px;
    .header_row{
      padding:0 20px;
      display: flex;
      justify-content: space-between;
      align-items:center;
    }
    .header_left {
      position:relative;
      .weather_detail {
        position:absolute;
        top:18px;
        left:0;
        width:200px;
        background-color: #fff;
        z-index:333;
        font-size:13px;
        color:#666;
        cursor: default;
        border:1px solid #dbdcdb;
        animation:0.5s Show forwards;
      }
    }
    .weather{
      cursor: pointer;
      display: flex;
      align-items: center;
      .city {
        cursor: pointer;
      }
    }
    .weather>span {
      margin:0 5px;
    }
    .weather_header {
      >span {
        display: inline-block;
        margin:4px 6px;
      }
    }
    .weather_more {
      display: flex;
      height:100px;
      >div {
        height:100%;
        flex:1;
        text-align:center;
        padding:10px 0;
        img {
          width:80%;
          height:50px;
        }
      }
    }
    .choice_city {
      height:100px;
      color:#666;
      >button {
        display: block;
        margin-top:10px;
        z-index: 0;
      }
      >button:nth-of-type(1){
        float: left;
        margin-left:30px;
      }
      >button:nth-of-type(2){
        float:right;
        margin-right:30px;
      }
    }
    .choice_city1 {
      /*float:left;*/
      text-align: center;
      margin:10px 0;
    }
    .choice_city2 {
      float: right;
      margin:10px 20px 0 0;
    }
    .header-right {
      display:flex;
      /*margin-right:50px;*/
      .li_img {
        padding:1px;
        img {
          width:30px;
          height:30px;
          border-radius:50%;
          background-color: #fff;
        }
      }
      .li_img:hover {
        background-color: transparent;
      }
      >li {
        padding:10px 15px;
        margin:0 5px;
        cursor: pointer;
        overflow: hidden;
      }
      .user_head{
        display: none;
      }
      >li:hover {
        background-color: #ED4A4A;
      }
    }
    a {
      color:#fff;
    }
    .city_click {
      position:relative;
      >button {
        padding:8px 15px;
        background-color: #fff;
        border-radius:10%;
        cursor: pointer;
      }
      >button:hover {
        border:1px solid #9e9f9e;
        box-shadow: 0 0 3px #9e9f9e;
        color: #757675;
      }
      .city_list {
        background-color: #fff;
        text-align:center;
        max-height:200px;
        overflow-y: scroll;
        box-sizing: content-box;
        width:120%;
        > li {
          display: block;
          width:100%;
          padding:8px 0;
          cursor: pointer;
        }
        >li:hover {
          background-color: #e9e9e9;
        }
      }
      .list_wrap {
        position:absolute;
        top:32px;
        left:0;
        right:0;
        margin:0 auto;
        width:75px;
        border:1px solid #c3c4c3;
        border-radius:5%;
        overflow: hidden;
        max-height:200px;
        z-index:333;
      }
    }
    .left_img {
      width:0;
      height:0;
      overflow: hidden;
      >img {
        /*width:100%;*/
        height:100%;
      }
    }
  }
</style>