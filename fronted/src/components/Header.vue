<template>
  <div>
    <header style="">
      <div style="width: 100%;height: 90px;background:rgba(248, 249, 250,0.59);">
        <nav class="navbar navbar-expand-lg navbar-light"
             style="margin:auto;width:1160px;font-size: 14px;padding: 0;">

          <a href="/" class="navbar-brand" style="margin-left: 10px"><img src="../assets/img/logo.png" alt="" width="80"
                                                                          height="80"></a>
          <ul class="navbar-nav">
            <li>
              <router-link to="/" class="nav-link" style="padding: 0;margin: 2px"><img src="../assets/img/广告1.jpg" alt="">
              </router-link>
            </li>
            <li>
              <router-link to="/session" class="nav-link" style="padding: 0;margin: 2px"><img src="../assets/img/广告2.jpg"
                                                                                              alt=""></router-link>
            </li>

          </ul>
          <ul class="navbar-nav ml-auto">
            <li><router-link to="login" class="nav-link">登录</router-link></li>
            <li class="nav-link">/</li>
            <li><router-link to="register" class="nav-link">注册</router-link></li>


          </ul>
        </nav>
      </div>
    </header>

    <div class="container" style="margin-top: 10px">
      <div class="col-md-12" style="padding: 0;"><img src="../assets/img/山西好风光.jpg"></div>
      <div class="col-md-12 col-sm-4" style="padding: 0;margin-top: 10px">
        <ul class="local_ul">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li @click="saveCatalogs('建制沿革')">
            <router-link to="catalogs">建制沿革</router-link>
          </li>
          <li @click="saveCatalogs('山川风貌')">
            <router-link to="catalogs">山川风貌</router-link>
          </li>
          <li @click="saveCatalogs('传统技艺')">
            <router-link to="catalogs">传统技艺</router-link>
          </li>
          <li @click="saveCatalogs('民俗礼仪')">
            <router-link to="catalogs">民俗礼仪</router-link>
          </li>
          <li @click="saveCatalogs('乡贤档案')">
            <router-link to="catalogs">乡贤档案</router-link>
          </li>
          <li>
            <router-link to="login">农商信息</router-link>
          </li>
          <li>暂定</li>
        </ul>
      </div>

      <div class="nav3" >
        <b>地方县市</b>

        <ul class="nav-list3">
					<li class="nav-dishi" v-for="(item,index) in citys" @mouseenter="over(index)" @mouseleave="leave(index)" >
						<a  style="color: rgb(132, 132, 132);">{{item.value}}</a>

					</li>

        </ul>
        <p class="clearfix" style="margin-bottom: 0"></p>
				<div>

					 <div class="nav-a-hover" v-show="show[index]"  v-for="(item,index) in citys">
						 <div class="xianshi  " @mouseenter="over(index)" @mouseleave="leave(index)">
							 <ul class="nav-list3">
								 <li class="nav-dishi" v-for="itenn in filterCounty(item.value)" @click="searchCounty(itenn.COUNTY,index)">

									 		<router-link to="county" style="color: rgb(132, 132, 132);" >{{itenn.COUNTY}}</router-link>
								 </li>
							 </ul>
						 </div>
					 </div>
				</div>
       <!-- <div class="nav-a-hover">3</div>
        <div class="nav-a-hover">4</div>
        <div class="nav-a-hover">5</div>
        <div class="nav-a-hover">1</div>
        <div class="nav-a-hover">2</div>
        <div class="nav-a-hover">3</div>
        <div class="nav-a-hover">4</div>
        <div class="nav-a-hover">5</div>
        <div class="nav-a-hover">1</div>-->

      </div>

    </div>

  </div>
</template>
<script>
  /*background:rgb(248, 249, 250);*/
	import {
		mapState,
		mapActions
	} from 'vuex'
   export default{
    data(){
      return {
          show:[false,false,false,false,false,false,false,false,false,false,false],
					citys: [
						{value: '太原'},
						{  value: '吕梁'},
						{  value: '大同'},
						{value: '长治'},
						{  value: '临汾'},
						{  value: '晋中'},
						{value: '忻州'},
						{  value: '朔州'},
						{  value: '阳泉'},
						{value: '运城'},
						{  value: '晋城'},

					],
					countys:[],
      }
    },
     beforeCreate:function () {

    },
		created() {
			//正常取值
			/*this.$store.dispatch('GET_USERLIST').then(()=>{
			    this.tableData=this.userList
			})*/
			this.getCity().then(() => {
				this.countys = this.city

			})
		},
     methods:{
			 ...mapActions({
			 	getCity: 'GET_CITY'
			 }),
        over(index){

          this.$set(this.show,index,true)
        },
       leave(index){
         this.$set(this.show,index,false)
       },
			 filterCounty:function(city){
				 return this.countys.filter(function(item){
					 return item.CITY==city;
				 })
			 },
			 searchCounty(county,index){
				 this.$set(this.show,index,false)


				 this.$store.commit('SAVE_CITY',county)
			 },
       saveCatalogs(catalogs){
         this.$store.commit('save_SIMPLECATA',catalogs)
         this.$store.commit('SAVE_CITY',"")
       }
     },

		 computed: {
		 	...mapState({
		 		city: state => state.city
		 	}),

		 },


  }
</script>
<style scoped="">
  header{
    background: url(../assets/img/花纹.jpg)
  }
  .nav-link {
    margin: 0 12px;
  }

  .ml-auto .nav-link {
    margin: 0;
  }

  .local_ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #6f0d0c;
    /* width: 1200px; */
    /* height: 60px; */
    border-radius: 5px 10px;
    overflow: hidden;
  }

  .local_ul li {
    text-align: center;
    line-height: 18px;
    height: 60px;
    padding-top: 20px;
    width: 120px;
    float: left;
    color: white;
    cursor: pointer;
  }

  .local_ul li a {
    color: white;
    text-decoration: none;
    display: block;
    min-width: 120px;
    /* border-right: 1px solid #3b1010;; */
  }

  .local_ul li:hover {
    /* background: rgba(147, 14, 14, 0.75); */
		background: #a59422;
    transition:background-color 0.6s ease;
		border-radius: 3px;
  }

  .local_ul li:hover a {
    color: white;
    text-decoration: none;
  }

  .nav3 b {
    display: block;
    width: 127px;
    height: 36px;
    background-image: url(../assets/img/ds-bg.jpg);
    color: white;
    font-size: 14px;
    margin-top: 10px;
    float: left;
    line-height: 36px;
    padding-left: 30px;

  }
  .nav3{
    border-bottom: 1px solid #dadada;
  }
  .nav3 li{
    list-style: none;
  }
  .nav-list3 {
    width: 1020px;
    height: 57px;
    float: left;
    padding: 0;
    margin-bottom: 6px;
  }
  .nav-dishi {
    width: 90px;
    height: 57px;
    float: left;
    font-size: 12px;
    line-height: 57px;
    text-align: center;
    position: relative;
		cursor: pointer;
  }
  .nav-a-hover{
    /*display: none;*/
    position: absolute;
    width: 100%;
    left: 0;
    height: 120px;
    background-color: white;
    z-index: 66666;
    margin-top: -10px;

  }
  .xianshi{
    width: 1200px;
    margin: auto;
    height: 120px;
    border:1px solid #dadada;
  }
</style>
