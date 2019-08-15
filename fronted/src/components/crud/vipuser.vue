<template>
  <div class="useradd">
    <!-- <app-header></app-header> -->
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>vip账号列表</span>
          <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
        </div>
        <div  class="text item">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
						<el-table-column type="index" width="50">
						</el-table-column>
            <el-table-column
              prop="APPLE_ID"
              label="账号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="USER_NAME"
              label="用户名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="PHONE_NUMBER"
              label="手机号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="BUSINESS_LICEBSE"
              label="营业执照">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleEdit(scope.row.id)" type="text" size="small">修改</el-button>
                <el-button @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-main>
  </div>
</template>
<script>
  
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default{
    data() {
      return {
        tableData: []
      }
    },
    created(){
      /*this.getUserList().then(()=>{

        this.newUserList=this.userList.filter(v=>v.age>25)
        this.tableData=this.newUserList
      })*/
      this.getUserList().then(()=>{
          //获取全局的getters
          //this.tableData=this.$store.getters.vipUsers
        //使用辅助函数获取全局getters
        this.tableData=this.vipUsers;
      })
    },
    methods:{
        ...mapActions({
        getUserList:'GET_USERLIST'
      })
    },
    computed:{
      ...mapGetters(['vipUsers']),
      ...mapState({
        userList:state=>state.userList,
        username:state=>state.userinfo.username
      })
    },
    components:{
     /* "app-header":Header, */
    },
  }
</script>
<style>
  .useradd{
    width: 100%;
  }
  .username{
    font-size: 20px;
    color: #409EFF;
  }
</style>
