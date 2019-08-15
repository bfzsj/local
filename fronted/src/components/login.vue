<template>


    <div class="login">
      <div style="position: absolute;top:0;left:30px"><router-link to="/" style="color: #000;font-size:3em;text-decoration: none" title="返回网站首页">←</router-link></div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <h3>
          <i class="el-icon-setting"> </i>
          用户登录
        </h3>

        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">清空</el-button>
        </el-form-item>
      </el-form>

    </div>


</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {ElButton},
    data() {

      return {
        //登录表单的数据
        loginForm: {
          username: '',
          password: ''
        },
        //验证规则
        rules: {
          username:[
            {required:true,message:'请输入用户名',trigger:'blur'},//非空
            {min:2,max:18,message:'长度在2-18个字符',trigger:'blur'}//长度
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'blur'},
            {min:5,max:18,message:'长度在5-18个字符',trigger:'blur'}
          ],
        }
      };
    },
    created() {

    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //保留this
            let _this=this;
            //收集用户名和密码 发送给后端
            this.postRequest('/auth/login',{
              APPLE_ID: _this.loginForm.username,
              PASSWORD: _this.loginForm.password,
            }).then(response=>{
                console.log(response)
              if(response.data!="200"){

                //把当前用户存入state
                _this.$store.commit('SAVE_USERINFO',response.data)
                this.$message({
                  message:"恭喜你，登录成功",
                  type:"success"
                })
                _this.$router.push("/admin")
              }else{
                this.$message.error("请检查用户名或密码！")
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  html,body,#app,.login{
    height: 100%;
  }
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-form{
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 45px 10px 10px;
  }
  .el-form .title{
    color: #333;
    font-size: 26px;
    font-weight: bold;
    padding: 20px 0 20px 60px;
  }
</style>
