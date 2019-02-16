<template>
  <div class="search">
    <input type="text" placeholder="请输入要搜索的内容" v-model="value" />
    <button @click="searchClick()">搜索</button>
  </div>
</template>

<script>
  export default {
    name: "search",
    data(){
      return {
        value:'',
        list:[]
      }
    },
    props:{
        'type':{},
        'searchVal':{
          default:''
        }
      },
    methods:{
      searchClick(){
        if(this.value===''){
          this.$Message.info('请输入搜索内容')
        }else{
          this.$api.getData('/api/searchComprehensiveData?keyWord='+this.value).then(function(data){
            this.list = data;
            this.loadingShow = false;
            this.$store.state.searchList = this.list;
            if(this.type == 0){
              this.$router.push({path:'/search',query:{keyWord:this.value}});
            }else if(this.type==1){

            }
          })
        }
      }
    },
    mounted(){
      this.value = this.searchVal;
      this.loadingShow = true;
      if(this.searchVal!==''){
        this.list = [
          {
            title:'洱海边洗车的刚走，烧烤的又来了！官方处罚结果通报',
            imgUrl:'https://p9.pstatp.com/list/240x240/pgc-image/fec2187d2c6b47e4b67dd2ea9700a777',
            id:1,
            author:'中国科技协会',
            time:'2018',
            recommendNum:5
          }
        ];
        this.$store.state.searchList = this.list;
      }
    }
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