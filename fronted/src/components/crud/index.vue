<template>
  <div class="index">

    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
       <!-- <div class="top-text">
        <h1 class="title">vuexms - 管理系统</h1>
        </div>-->
        <!--默认首页-->

        <!--导航一-->
        <el-menu :default-openeds="['1','3']" default-active="admin" router background-color="#545c64" text-color="#fff">
          <el-menu-item style="background: #333" index="/"><i class="el-icon-setting"></i>网站首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户管理</template>
            <el-menu-item index="admin">个人信息</el-menu-item>
              <el-menu-item index="userlist"  v-if="user.VIP_LEVEL=='管理员'">用户列表</el-menu-item>
              <el-menu-item index="vipuser"  v-if="user.VIP_LEVEL=='管理员'">vip用户</el-menu-item>

          </el-submenu>
          <el-submenu index="2" v-if="user.VIP_LEVEL=='管理员'">
            <template slot="title"><i class="el-icon-menu"></i>城市管理</template>
              <el-menu-item index="city">添加城市</el-menu-item>

          </el-submenu>
          <el-submenu index="3"  v-if="user.VIP_LEVEL=='管理员'">
            <template slot="title"><i class="el-icon-setting"></i>文章管理</template>
              <el-menu-item index="evolution">建制沿革</el-menu-item>
              <el-menu-item index="land">山川风貌</el-menu-item>
              <el-menu-item index="skill">传统技艺</el-menu-item>
              <el-menu-item index="comity">民俗礼仪</el-menu-item>
              <el-menu-item index="town">乡贤档案</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container style="flex-direction: column;">

        <app-crudh></app-crudh>

        <router-view></router-view>

      </el-container>

    </el-container>
  </div>
</template>
<script>
  import crudh from './crudh'
  export default{
    data() {

      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        user:{}
      }
    },
    methods:{

    },

    created:function () {

      this.postRequest('/auth/checklogin',{
        APPLE_ID: JSON.parse(sessionStorage.getItem('userinfo')),
      }).then(response=>{
        if(response.data!="sxd"){
          this.user=response.data
          console.log(this.user.VIP_LEVEL)
        }else{
          this.$router.push("/login")
        }
      })
    },
    components:{
      "app-crudh":crudh,
    },

  }
</script>
<style>
  html,body,#app,.index{
    height: 100%;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-menu{
    border-right: 0;
  }
  .el-aside {
    background-color: #545c64!important;
  }
  .el-container{
    height: 100%!important;
  }

  .top-text{
    text-align: center;
    padding: 40px 0;
    background-color: #333;
  }
 /* .top-text,.title{
    color:#fff;
    font-weight: bold;
  }*/
</style>
