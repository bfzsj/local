<template>
  <div class="user">

    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户信息卡</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div  class="text item">
          用户账号： {{user.APPLE_ID}}
        </div>
        <div  class="text item">
          用户等级： {{user.VIP_LEVEL}}
        </div>
        <div  class="text item">
          真实姓名： {{user.USER_NAME}}
        </div>
        <div class="text item">
          手机号码： {{user.PHONE_NUMBER}}
        </div>
      </el-card>
    </el-main>
  </div>
</template>
<script>
  //引入mapstate

  export default{
      data(){
        return{
          user:{}
        }
      },
    computed:{


    },
    created:function () {

      this.postRequest('/auth/checklogin',{
        APPLE_ID: JSON.parse(sessionStorage.getItem('userinfo')),
      }).then(response=>{
        if(response.data!="sxd"){
          this.user=response.data

        }else{
          this.$router.push("/login")
        }
      })
    },

  }
</script>
<style>
  .home{
    width: 100%;
  }
  .username{
    font-size: 20px;
    color: #409EFF;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {

  }
</style>
