<template>


  <div class="">
    <div class="container" style="padding-top: 12px;">

      <!--{{county}}-->

      <div class="row">
        <div class="col-md-12" style="padding-left: 0;">

        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-sm-12">
          <h3 style="padding: 2px 40px;border-bottom: 2px solid rgb(1,1,1);line-height: 60px"><span >{{county}}   </span><span >{{simpleCata}}</span></h3>

          <!-- 建制沿革-->
          <!--<div class="row" style="padding-top:20px">
            <div class="col-md-4 col-sm-12" style="padding: 0">
              <img src="../../assets/img/建制沿革配图.jpg" style="width: 100%;" height="135" alt="">
              <div class="peitu">建制沿革</div>
            </div>
            <div class="col-md-8 col-sm-12" style="">
              <div style="color: #a59422;font-size: 20px;max-height: 30px">
                {{filterEvol("建制沿革",county)[0].CAT_NAME}}
              </div>
              <div style="max-height: 100px;">
                {{filterEvol("建制沿革",county)[0].CAT_SUMMARY}} <div style="position: absolute;bottom: 0;right: 15px;"><span ><router-link to="catalogs">更多>></router-link></span></div>
              </div>
            </div>
          </div>-->

          <div class="row" style="padding-top:20px" v-for="item in filterEvol(simpleCata,county)">
            <div class="col-md-4 col-sm-12" style="padding: 0">
              <img v-bind:src="rootUrl+'static/img/'+filterImg(item.CAL_PICTURE)[0]" style="width: 100%;" height="135" alt="" >
              <!--<div v-for="src in filterImg(scope.row.CAL_PICTURE)" style="float: left;margin: 0 2px;">
									<img v-bind:src="rootUrl+'static/img/'+src" alt="" width="40" height="40" >
								</div>-->

            </div>
            <div class="col-md-8 col-sm-12" style="">
              <div style="color: #a59422;font-size: 20px;max-height: 30px">
                {{item.CAT_NAME}}
              </div>
              <div style="max-height: 100px;">
                {{item.CAT_SUMMARY}} <div style="position: absolute;bottom: 0;right: 15px;"><span @click="saveDetails(item)" v-if="item.CAT_NAME!='暂无'"><router-link to="details">详情>></router-link></span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <h4 style="padding: 24px 40px 0 40px;border-bottom: 2px solid rgb(1,1,1);line-height: 40px" >更多</h4>

            </div>
            <div class="col-md-12" v-for="item in filterCounty(county)">
              {{item.CAT_NAME}}
            </div>
          </div>
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
  export default{
    name: 'app-county',
    data(){
      return {
        catalog:[]
      }
    },
    created() {
      /*this.county = this.$store.state.county;
       */
      this.getCatalog().then(() => {
        this.catalog = this.catalogs
        console.log(this.catalog)
      })
    },
    computed: {
      ...mapState({
        catalogs: state => state.catalogs,

      }),
      county(){
        return this.$store.state.county
      },
      simpleCata(){
          return this.$store.state.simpleCata
      }
    },
    methods: {
      ...mapActions({
        getCatalog: 'GET_CATALOG',

      }),
      filterImg:function(srcs){
          let temp=[];
        if(srcs==""){

          temp[0]="暂无.jpg"
        }else{
          temp=srcs.split(",");
        }

        return temp;
      },
      filterEvol(catalog, county){
        var temp=[];

        if(county==''){
            temp=this.catalog.filter(function (item) {
              return item.CAT_DIRECTORY == catalog;
            })
        }else {
          temp = this.catalog.filter(function (item) {
            return item.CAT_CITY == county && item.CAT_DIRECTORY == catalog;
          })
        }


        if(temp.length==0){
          temp.push({
            CAT_NAME:"暂无",
            CAT_SUMMARY:"暂无",
            CAL_PICTURE:"暂无.jpg,"
          })
        }
        return temp
      },
      filterCounty(county){
          let temp=[];
          if(county==""){
            temp= this.catalog
          }else{
            temp= this.catalog.filter(function (item) {
              return item.CAT_CITY == county;
            })
          }

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
<style>
  .peitu {
    position: absolute;
    top: 0;
    line-height: 135px;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 30px;
    background: rgba(89, 89, 89, 0.6)
  }
  .col-md-4{

  }
</style>
