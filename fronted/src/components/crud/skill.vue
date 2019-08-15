<template>
	<div class="evolution">
		<!--<app-header></app-header>-->
		<el-main>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>传统技艺列表</span>
					<el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">添加</el-button>
					<el-dialog title="添加传统技艺" :visible.sync="dialogFormVisible">
						<el-form :model="form" ref="form" status-icon :rules="rules">
							<!-- <el-form-item label="用户名" :label-width="formLabelWidth" prop="USER_NAME">
								<el-input v-model="form.USER_NAME" autocomplete="off"></el-input>
							</el-form-item> -->
							<el-form-item label="城市" :label-width="formLabelWidth" >
								<!-- <el-input v-model="form.password" autocomplete="off" type="password"></el-input> -->
								<el-select v-model="simpleCity" autocomplete="off" placeholder="请选择">
									<el-option
										v-for="item in citys"
										:key="item.value"
										:label="item.value"
										:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="地区" :label-width="formLabelWidth" prop="CAT_CITY">
								<!-- <el-input v-model="form.password" autocomplete="off" type="password"></el-input> -->
								<el-select v-model="form.CAT_CITY" autocomplete="off" placeholder="请选择">
									<el-option
										v-for="item in filterCounty(simpleCity)"
										:key="item.COUNTY"
										:label="item.COUNTY"
										:value="item.COUNTY">
									</el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="标题" :label-width="formLabelWidth" prop="CAT_NAME">
								<el-input v-model="form.CAT_NAME" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="概述" :label-width="formLabelWidth" prop="CAT_SUMMARY">
								<el-input v-model="form.CAT_SUMMARY" autocomplete="off" type="textarea"></el-input>
							</el-form-item>
							<el-form-item label="具体内容" :label-width="formLabelWidth" prop="CAT_DETAILED">
								<el-input v-model="form.CAT_DETAILED" autocomplete="off" type="textarea"></el-input>
							</el-form-item>

						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="addCatalog('form')">确 定</el-button>
						</div>
					</el-dialog>

          <el-dialog title="修改传统技艺" :visible.sync="dialogUpdate">
            <el-form :model="form" ref="form" status-icon :rules="rules">
              <!-- <el-form-item label="用户名" :label-width="formLabelWidth" prop="USER_NAME">
                                <el-input v-model="form.USER_NAME" autocomplete="off"></el-input>
                            </el-form-item> -->

              <el-form-item label="标题" :label-width="formLabelWidth" prop="CAT_NAME">
                <el-input v-model="form.CAT_NAME" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="概述" :label-width="formLabelWidth" prop="CAT_SUMMARY">
                <el-input v-model="form.CAT_SUMMARY" autocomplete="off" type="textarea"></el-input>
              </el-form-item>


            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogUpdate = false">取 消</el-button>
              <el-button type="primary" @click="updateCatalog('form')">确 定</el-button>
            </div>
          </el-dialog>
				</div>
				<div class="text item">
					<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" height="550px">
						<el-table-column type="index" width="50">
						</el-table-column>
						<el-table-column prop="CAT_NAME" label="标题" width="180">
						</el-table-column>
						<el-table-column prop="CAT_SUMMARY" label="概述">
						</el-table-column>
						<el-table-column prop="CAT_DETAILED" label="具体内容" >
						</el-table-column>
						<el-table-column prop="CAT_CITY" label="地区">
						</el-table-column>
						<el-table-column prop="CAT_PICTURE" label="图片">
							<template slot-scope="scope">
								<div v-for="src in filterImg(scope.row.CAL_PICTURE)" style="float: left;margin: 0 2px;">
									<img v-bind:src="rootUrl+'static/img/'+src" alt="" width="40" height="40" >
								</div>

								<el-upload  class="uploadfile"  action=""  :http-request='uploadFileMethod' :data="{index:scope.row.CAT_ID,src:scope.row.CAL_PICTURE}" :show-file-list="false" multiple>
									  <el-button style="font-size:20px;padding: 0; width: 40px;height: 40px;" class="custom-btn" size="small">+</el-button>
								 </el-upload>
							 </template>
						</el-table-column>


						<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button @click="handleEdit(scope.$index,scope.row)" type="text" size="small">修改</el-button>
								<el-button @click="handleDel(scope.$index,scope.row.CAT_ID)" type="text" size="small">删除</el-button>
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
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
        currentPage:1, //初始页
        pagesize:10,
				tableData: [],
				dialogFormVisible: false,
				dialogUpdate:false,
				form: {
					CAT_NAME: '', //名称
					CAT_SUMMARY: '', //概述
					CAT_DETAILED: '',//详细信息
					CAL_PICTURE:'', //图片
					CAT_VIDEO:'',//视频
					CAT_DIRECTORY:'传统技艺',//所属模块
					CAT_CITY:'',//所属城市
					CAT_TYPE:0,//排版类型

				},
				formLabelWidth: '120px',
				simpleCity:'太原',
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
				rules: {
					CAT_NAME: [
						{required: true,message: '请输入标题名',trigger: 'blur'}, //非空
						{min: 1,max: 20,message: '最大20字符',trigger: 'blur'} //长度
					],
					CAT_SUMMARY: [
						{required: true,message: '请输入概述',trigger: 'blur'},
						{min: 20,max: 200,message: '20-200个字符',trigger: 'blur'}
					],
					CAT_DETAILED: [{
							required: true,
							message: '请输入内容',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 5000,
							message: '长度在2-5000个字符',
							trigger: 'blur'
						}
					],

					CAT_CITY: [{ required: true, message: '请选择城市', trigger: 'change' }
					],
				}
			}
		},
		created() {
			//正常取值
			/*this.$store.dispatch('GET_USERLIST').then(()=>{
			    this.tableData=this.userList
			})*/
			this.getCatalog().then(() => {
				this.tableData = this.catalogs.filter(function(item){
					return item.CAT_DIRECTORY=="传统技艺"
				})

			}),
			this.getCity().then(() => {
				this.countys = this.city
				console.log(this.countys)

			})

		},
		methods: {
			/*...mapActions(['GET_USERLIST']),*/
			...mapActions({
				getCatalog: 'GET_CATALOG',
				getCity:'GET_CITY',
				getUpload:'UploadFile'
			}),
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
      },
			uploadFileMethod(param) {
            /* const id = this.currentRowObject.id; */
				let fileObject = param.file;
				let index=param.data.index;
				let src=param.data.src;
				let formData = new FormData();
				formData.append("file", fileObject);
				formData.append("index",index)
				formData.append("src",src)

				this.uploadFile('/catalog/uploadIMG',formData).then(response=>{

					this.$store.commit('update_CATALOG',response.data)
					this.getCatalog().then(() => {
						this.tableData = this.catalogs.filter(function(item){
							return item.CAT_DIRECTORY=="传统技艺"
						})
					})
				})
			},
			handleEdit(id, username) {
        this.dialogUpdate=true;
        this.form.CAT_NAME=username.CAT_NAME
        this.form.CAT_SUMMARY=username.CAT_SUMMARY
        this.form.CAT_ID=username.CAT_ID
				console.log(username.CAT_NAME+"  "+username.CAT_SUMMARY+"   "+username.CAT_ID)
			},
			 handleDel(id, CAT_ID ){
        console.log(CAT_ID)
        this.postRequest('/catalog/delete',{CAT_ID:CAT_ID}).then(response=>{
             if(response.data==true){
               this.$store.commit('delete_CATALOG',CAT_ID)
               this.$message({
                 message:"删除成功",
                 type:"success"
               })
               this.tableData = this.catalogs.filter(function(item){
                 return item.CAT_DIRECTORY=="传统技艺"
               })
             }else{
               this.$message.error("删除失败")
             }
          });

			},

			 addCatalog(formName) {
			  this.$refs[formName].validate((valid) => {
				  console.log(valid)

			    if (valid) {
			      //保留this
			      let _this=this;
				  //收集用户名和密码 发送给后端
            this.dialogFormVisible = false
			       this.postRequest('/catalog/insert',_this.form).then(response=>{
					   console.log(response)
			          if(response.data.code===200){
			            _this.$store.commit('add_CATALOG',{
							      CAT_ID:response.data.data.CAT_ID,
			              CAT_NAME: _this.form.CAT_NAME,
			              CAT_SUMMARY: _this.form.CAT_SUMMARY,
			              CAT_DETAILED: _this.form.CAT_DETAILED,
			              CAL_PICTURE:_this.form.CAL_PICTURE,
			              CAT_VIDEO:_this.form.CAT_VIDEO,
			              CAT_DIRECTORY:'传统技艺',
			              CAT_CITY:_this.form.CAT_CITY,
			              CAT_TYPE:_this.form.CAT_TYPE,
			            })
						this.tableData = this.catalogs.filter(function(item){
							return item.CAT_DIRECTORY=="传统技艺"
						})
			            this.$message({
			              message:"恭喜你，成功",
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
      updateCatalog(formName){
        this.$refs[formName].validate((valid) => {
            if(valid){
              this.dialogUpdate=false;
              let _this=this;
              console.log(_this.form)
              this.postRequest('/catalog/update',_this.form).then(response=>{
                console.log(response)
                this.$store.commit('update_CATALOG',response.data)

                this.getCatalog().then(() => {
                  this.tableData = this.catalogs.filter(function(item){
                    return item.CAT_DIRECTORY=="传统技艺"
                  })
                })

              })
            }

        })
      },
			 filterCounty:function(city){
				 return this.countys.filter(function(item){
					 return item.CITY==city;
				 })
			},
			filterImg:function(srcs){
				return srcs.split(",");
			}
		},
		computed: {
			...mapState({
				catalogs: state => state.catalogs,
				city: state => state.city
			})
		},
		components: {
			/* "app-header":Header, */
		},
	}
</script>
<style>
	.evolution {
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
	.uploadfile{
		float: left;
		width: 40px;
		height: 40px;
	}
	.cell{
		max-height: 70px;
		overflow: hidden;
		}
</style>
