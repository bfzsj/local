<template>
  <div class="home">
    <!--首页头部-->
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="href()">个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="user">{{username}}</span>
    </el-header>
  </div>
</template>
<script>
  //引入mapstate

  export default{
      data(){
        return{
          username:""
        }
      },
    computed:{
          //用户名
        /*username(){
            return this.$store.state.userinfo.username
        },*/
        //获取用户信息
        /*userinfo(){
            return this.$store.state.userinfo
        },*/
        //辅助函数 获取state数据

    },
    created:function () {
      this.postRequest('/auth/checklogin',{
        APPLE_ID: JSON.parse(sessionStorage.getItem('userinfo')),
      }).then(response=>{
        if(response.data!="sxd"){

          this.username=response.data.USER_NAME

        }else{
          this.$router.push("/login")
        }
      })
    },
    methods:{
          href:function () {
            this.$router.push("/admin")
          }
    }
  }
</script>
<style>
  .home{

    height: 56px;
  }
  .user{
    font-size: 20px;
    color: #3b1010;
  }
</style>
