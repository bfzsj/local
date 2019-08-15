<template>
	<div class="userlist">
		<!--<app-header></app-header>-->
		<el-main>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>用户账号列表</span>
					<el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">添加</el-button>
					<el-dialog title="添加用户" :visible.sync="dialogFormVisible">
						<el-form :model="form" ref="form" status-icon :rules="rules">
							<el-form-item label="用户名" :label-width="formLabelWidth" prop="USER_NAME">
								<el-input v-model="form.USER_NAME" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="用户等级" :label-width="formLabelWidth" prop="VIP_LEVEL">
								<!-- <el-input v-model="form.password" autocomplete="off" type="password"></el-input> -->
								<el-select v-model="form.VIP_LEVEL" autocomplete="off" placeholder="请选择">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.value"
										:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="手机号" :label-width="formLabelWidth" prop="PHONE_NUMBER">
								<el-input v-model="form.PHONE_NUMBER" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="账号" :label-width="formLabelWidth" prop="APPLE_ID">
								<el-input v-model="form.APPLE_ID" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="密码" :label-width="formLabelWidth" prop="PASSWORD">
								<el-input v-model="form.PASSWORD" autocomplete="off" type="password"></el-input>
							</el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="addUser('form')">确 定</el-button>
						</div>
					</el-dialog>

				</div>
				<div class="text item">
					<el-table :data="tableData" stripe style="width: 100%">
						<el-table-column type="index" width="50">
						</el-table-column>
						<el-table-column prop="APPLE_ID" label="账号" width="180">
						</el-table-column>
						<el-table-column prop="USER_NAME" label="用户名">
						</el-table-column>
						<el-table-column prop="VIP_LEVEL" label="用户等级">
						</el-table-column>
						<el-table-column prop="PHONE_NUMBER" label="手机号">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button @click="handleEdit(scope.$index,scope.row.USER_ID)" type="text" size="small">修改</el-button>
								<el-button @click="handleDel(scope.$index,scope.row.USER_ID)" type="text" size="small">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</el-card>
		</el-main>
	</div>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				tableData: [],
				dialogFormVisible: false,
				form: {
					USER_NAME: '',
					VIP_LEVEL: '',
					PHONE_NUMBER: '',
					APPLE_ID:'',
					PASSWORD:'',
				},
				formLabelWidth: '120px',
				options: [{
         
          value: '管理员'
        }, {
          
          value: 'VIP'
        }, {
         
          value: '普通客户'
        }],
				rules: {
					USER_NAME: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						}, //非空
						{
							min: 1,
							max: 5,
							message: '长度在1-5个字符',
							trigger: 'blur'
						} //长度
					],
					PASSWORD: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 5,
							max: 11,
							message: '长度在5-11个字符',
							trigger: 'blur'
						}
					],
					APPLE_ID: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 20,
							message: '长度在5-20个字符',
							trigger: 'blur'
						}
					],
					PHONE_NUMBER: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur'
						},
						{
							min: 5,
							max: 11,
							message: '长度在5-11个字符',
							trigger: 'blur'
						}
					],
					VIP_LEVEL: [{ required: true, message: '请选择等级', trigger: 'change' }
					],
				}
			}
		},
		created() {
			//正常取值
			/*this.$store.dispatch('GET_USERLIST').then(()=>{
			    this.tableData=this.userList
			})*/
			this.getUserList().then(() => {
				this.tableData = this.userList
			})
		},
		methods: {
			/*...mapActions(['GET_USERLIST']),*/
			...mapActions({
				getUserList: 'GET_USERLIST'
			}),
			handleEdit(id, username) {
				console.log("修改" + id + "姓名" + username)
			},
			handleDel(id, username) {
				
				this.postRequest('/user-information/delete',{USER_ID:username}).then(response=>{
				   if(response.data==true){
				     this.$store.commit('delete_USERLIST',id)
				     this.$message({
				       message:"删除成功",
				       type:"success"
				     })
				   }else{
				     this.$message.error("删除失败")
				   }
				});

				
			},
			/* this.postRequest('/username/login',{
			  username: _this.loginForm.username,
			  password: _this.loginForm.password,
			}).then(response=>{
			    console.log(response)
			  if(response.data.code==200){
			
			    
			    this.$message({
			      message:"恭喜你，登录成功",
			      type:"success"
			    })
			    _this.$router.push("/")
			  }else{
			    this.$message.error("请检查用户名或密码！")
			  }
			}) */
			 addUser(formName) {
			  this.$refs[formName].validate((valid) => {
				  console.log(valid)
			    this.dialogFormVisible = false
			    if (valid) {
			      //保留this
			      let _this=this;
				  //收集用户名和密码 发送给后端
			    
			       this.postRequest('/user-information/insert',_this.form).then(response=>{
					   console.log(response)
			          if(response.data.code===200){
			            _this.$store.commit('add_USERLIST',{
							USER_ID:response.data.data.USER_ID,
			              USER_NAME: _this.form.USER_NAME,
			              VIP_LEVEL: _this.form.VIP_LEVEL,
			              PHONE_NUMBER:_this.form.PHONE_NUMBER,
			              APPLE_ID:_this.form.APPLE_ID,
			              PASSWORD:_this.form.PASSWORD,
			            })
			            this.$message({
			              message:"恭喜你，添加成功",
			              type:"success"
			            })
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
		},
		computed: {
			...mapState({
				userList: state => state.userList
			})
		},
		components: {
			/* "app-header":Header, */
		},
	}
</script>
<style>
	.userlist {
		width: 100%;
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
</style>
