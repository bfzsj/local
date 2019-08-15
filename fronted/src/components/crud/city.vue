<template>
	<div class="city">
		<!--<app-header></app-header>-->
		<el-main>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>城市列表</span>
					<el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">添加</el-button>
					<el-dialog title="添加用户" :visible.sync="dialogFormVisible">
						<el-form :model="form" ref="form" status-icon :rules="rules">
							<el-form-item label="城市" :label-width="formLabelWidth" prop="CITY">
								<!-- <el-input v-model="form.password" autocomplete="off" type="password"></el-input> -->
								<el-select v-model="form.CITY" autocomplete="off" placeholder="请选择">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.value"
										:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="城市名" :label-width="formLabelWidth" prop="COUNTY">
								<el-input v-model="form.COUNTY" autocomplete="off"></el-input>
							</el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="addUser('form')">确 定</el-button>
						</div>
					</el-dialog>

				</div>
				<div class="text item">
					<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" height="550px">
						<el-table-column type="index" width="50">
						</el-table-column>
						<el-table-column prop="COUNTY" label="地区" width="180">
						</el-table-column>
						<el-table-column prop="CITY" label="城市">
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button @click="handleEdit(scope.$index,scope.row.USER_ID)" type="text" size="small">修改</el-button>
								<el-button @click="handleDel(scope.$index,scope.row.USER_ID)" type="text" size="small">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 40]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="tableData.length">
                    </el-pagination>
				</div>
			</el-card>
		</el-main>
	</div>
</template>
<script>
	import {mapState,	mapActions	} from 'vuex'
	export default {
		data() {
			return {
				currentPage:1, //初始页
                pagesize:10,
				tableData: [],
				dialogFormVisible: false,
				form: {
					COUNTY: '',
					CITY: '',
					
				},
				formLabelWidth: '120px',
				options: [
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
				rules: {
					
					COUNTY: [{
							required: true,
							message: '请输入地区名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 10,
							message: '不超过10个字符',
							trigger: 'blur'
						}
					],
					CITY: [{ required: true, message: '请选择等级', trigger: 'change' }
					],
				}
			}
		},
		created() {
			//正常取值
			/*this.$store.dispatch('GET_USERLIST').then(()=>{
			    this.tableData=this.userList
			})*/
			this.getCity().then(() => {
				this.tableData = this.city
				
			})
			
		},
		methods: {
			/*...mapActions(['GET_USERLIST']),*/
			...mapActions({
				getCity: 'GET_CITY'
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
			handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
        
			 addUser(formName) {
			  this.$refs[formName].validate((valid) => {
				  console.log(valid)
			    this.dialogFormVisible = false
			    if (valid) {
			      //保留this
			      let _this=this;
				  //收集用户名和密码 发送给后端
					console.log(this.form.CITY,this.form.COUNTY)
			        this.postRequest('/shanxilocal/insert',_this.form).then(response=>{
					   console.log(response)
			          if(response.data.code===200){
			            _this.$store.commit('add_CITY',{
							LOCAL_ID:response.data.data.LOCAL_ID,
			              COUNTY: _this.form.COUNTY,
			              CITY: _this.form.CITY,
			              
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
				city: state => state.city
			})
		},
		components: {
			/* "app-header":Header, */
		},
	}
</script>
<style>
	.city {
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
