<template>
  <div class="lesson container" style="margin-top: 20px">
    <div class="row">
      <div class="col-md-4">

				<div class="card">
				  <div class="card-header"><span style="color: #5982C7;font-weight: bold;"><h4>建制沿革</h4></span></div>
				  <div class="card-body" style="padding: 3px">
				    <div class="title-list-1">

						<p class="list-bt" v-for="item in filterCatalog('建制沿革')" @click="saveDetails(item)" ><span></span><router-link to="details">{{item.CAT_SUMMARY}}</router-link></p>

				    </div>
				  </div>

				</div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><span style="color: #5982C7;font-weight: bold;"><h4>山川风貌</h4></span></div>
          <div class="card-body" style="padding: 3px">
            <div class="title-list-1">

              <p class="list-bt" v-for="item in filterCatalog('山川风貌')" @click="saveDetails(item)" ><span></span><router-link to="details">{{item.CAT_SUMMARY}}</router-link></p>

            </div>
          </div>

        </div>

      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><span style="color: #5982C7;font-weight: bold;"><h4>传统技艺</h4></span></div>
          <div class="card-body" style="padding: 3px">
            <div class="title-list-1">

              <p class="list-bt" v-for="item in filterCatalog('传统技艺')" @click="saveDetails(item)" ><span></span><router-link to="details">{{item.CAT_SUMMARY}}</router-link></p>

            </div>
          </div>

        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><span style="color: #5982C7;font-weight: bold;"><h4>民俗礼仪</h4></span></div>
          <div class="card-body" style="padding: 3px">
            <div class="title-list-1">

              <p class="list-bt" v-for="item in filterCatalog('民俗礼仪')" @click="saveDetails(item)" ><span></span><router-link to="details">{{item.CAT_SUMMARY}}</router-link></p>

            </div>
          </div>

        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><span style="color: #5982C7;font-weight: bold;"><h4>乡贤档案</h4></span></div>
          <div class="card-body" style="padding: 3px">
            <div class="title-list-1">

              <p class="list-bt" v-for="item in filterCatalog('乡贤档案')" @click="saveDetails(item)" ><span></span><router-link to="details">{{item.CAT_SUMMARY}}</router-link></p>

            </div>
          </div>

        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><span style="color: #5982C7;font-weight: bold;"><h4>农商信息</h4></span></div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    name: 'lesson',
    data () {
      return {
        catalog:[]
      }
    },
    created() {
      /*this.county = this.$store.state.county;
       */
      this.getCatalog().then(() => {
        this.catalog = this.catalogs

      })
    },
    computed: {
      ...mapState({
        catalogs: state => state.catalogs,

      }),
    },
    methods:{
      ...mapActions({
        getCatalog: 'GET_CATALOG',

      }),
			filterCatalog(catalog){
			    let temp=[];

					temp= this.catalog.filter(function (item) {
						return item.CAT_DIRECTORY == catalog;
					})

			  if(temp.length==0){
			    temp.push({
			      CAT_NAME:"暂无",
			      CAT_SUMMARY:"暂无"
			    })
			  }else{
			    temp=temp.reverse()
			  }
			  return temp;
			},
      saveDetails(details){
        this.$store.commit('save_Details',details)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card{
		max-height: 100%;
		height: 100%;
	}
  .lesson{
    /*max-width: 1200px;*/
    /* padding: 6px; */
  }
  .col-md-4{
    padding: 5px;
    height: 422px;
		max-height: 422px;
		overflow: hidden;
  }
  h4{
    font-weight: 500;
    color: #a59422;
  }
	.title-list-1 h4 {
	  padding: 20px 10px;
	  margin-left: 0;
	  height: auto;
	  text-align: left;
	  color: black;
	  font-size: 16px;

	}
	.title-list-1  h4 a{
	  line-height: 30px;
	  height: auto;
	  color:black
	}
	.title-list-1 a{
	  color: black;
	}
	.title-list-1 img {
	  width: 120px;
	  height: 80px;
	  margin: 0 10px 20px;
	  float: left;
	}
	.title-list-1 .zy a {
	  font-size: 14px;
	  color: #7b7b7b;
	}
	.title-list-1 .list-bt {
	  width: 390px;
	  padding-right: 10px;
	  height: 40px;
	  line-height: 40px;
	  clear: both;
	  overflow: hidden;
	  margin-bottom: 0;
	}
	.title-list-1 .list-bt span {
	  display: inline-block;
	  width: 6px;
	  height: 6px;
	  background-color: #7B7B7B;
	  border-radius: 3px;
	  margin-left: 15px;
	}
	.title-list-1 .list-bt a {
	  color: black;
	  margin-left: 10px;
	  font-size: 14px;
	}
</style>
