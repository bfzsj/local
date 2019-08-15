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
          <h3 style="padding: 2px 40px;border-bottom: 2px solid rgb(1,1,1);line-height: 60px">{{county}}</h3>

          <!-- 建制沿革-->
          <div class="row" style="padding-top:20px">
            <div class="col-md-4 col-sm-12" style="padding: 0">
              <img src="../../assets/img/建制沿革配图.jpg" style="width: 100%;" height="135" alt="">
              <div class="peitu">建制沿革</div>
            </div>
            <div class="col-md-8 col-sm-12" style="">
              <div style="color: #a59422;font-size: 20px;max-height: 30px">
                {{filterEvol("建制沿革",county)[0].CAT_NAME}}
              </div>
              <div style="max-height: 100px;">
                {{filterEvol("建制沿革",county)[0].CAT_SUMMARY}} <div style="position: absolute;bottom: 0;right: 15px;"><span @click="saveCatalogs('建制沿革')"><router-link to="catalogs">更多>></router-link></span></div>
              </div>
            </div>
          </div>
        <!--山川风貌-->
          <div class="row" style="padding-top: 40px">
            <div class="col-md-4" style="padding: 0">
              <img src="../../assets/img/山川风貌配图.jpg" style="width: 100%;" height="135" alt="">
              <div class="peitu">山川风貌</div>
            </div>
            <div class="col-md-8 col-sm-12" style="">
              <div style="color: #a59422;font-size: 20px">
                {{filterEvol("山川风貌",county)[0].CAT_NAME}}
              </div>
              <div>
                {{filterEvol("山川风貌",county)[0].CAT_SUMMARY}}<div style="position: absolute;bottom: 0;right: 15px;"><span @click="saveCatalogs('山川风貌')"><router-link to="catalogs">更多>></router-link></span></div>
              </div>
            </div>
          </div>

          <!--传统技艺-->
          <div class="row" style="padding-top: 40px">
            <div class="col-md-4" style="padding: 0">
              <img src="../../assets/img/传统技艺配图.jpg" style="width: 100%;" height="135" alt="">
              <div class="peitu">传统技艺</div>
            </div>
            <div class="col-md-8 col-sm-12" style="">
              <div style="color: #a59422;font-size: 20px">
                {{filterEvol("传统技艺",county)[0].CAT_NAME}}
              </div>
              <div>
                {{filterEvol("传统技艺",county)[0].CAT_SUMMARY}}<div style="position: absolute;bottom: 0;right: 15px;"><span @click="saveCatalogs('传统技艺')"><router-link to="catalogs">更多>></router-link></span></div>
              </div>
            </div>
          </div>

          <!--民俗礼仪-->
          <div class="row" style="padding-top: 40px">
            <div class="col-md-4" style="padding: 0">
              <img src="../../assets/img/民俗礼仪配图.jpg" style="width: 100%;" height="135" alt="">
              <div class="peitu">民俗礼仪</div>
            </div>
            <div class="col-md-8 col-sm-12" style="">
              <div style="color: #a59422;font-size: 20px">
                {{filterEvol("民俗礼仪",county)[0].CAT_NAME}}
              </div>
              <div>
                {{filterEvol("民俗礼仪",county)[0].CAT_SUMMARY}}<div style="position: absolute;bottom: 0;right: 15px;"><span @click="saveCatalogs('民俗礼仪')"><router-link to="catalogs">更多>></router-link></span></div>
              </div>
            </div>
          </div>

          <!--乡贤档案-->
          <div class="row" style="padding-top: 40px">
            <div class="col-md-4" style="padding: 0">
              <img src="../../assets/img/乡贤档案配图.jpg" style="width: 100%;" height="135" alt="">
              <div class="peitu">乡贤档案</div>
            </div>
            <div class="col-md-8 col-sm-12" style="">
              <div style="color: #a59422;font-size: 20px">
                {{filterEvol("乡贤档案",county)[0].CAT_NAME}}
              </div>
              <div>
                {{filterEvol("乡贤档案",county)[0].CAT_SUMMARY}}<div style="position: absolute;bottom: 0;right: 15px;"><span @click="saveCatalogs('乡贤档案')"><router-link to="catalogs">更多>></router-link></span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <h4 style="padding: 24px 40px 0 40px;border-bottom: 2px solid rgb(1,1,1);line-height: 40px">更多</h4>

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
      }
    },
    methods: {
      ...mapActions({
        getCatalog: 'GET_CATALOG',

      }),
      filterEvol(catalog, county){

       var temp= this.catalog.filter(function (item) {
          return item.CAT_CITY == county && item.CAT_DIRECTORY == catalog;
        })

        if(temp.length==0){
            temp.push({
              CAT_NAME:"暂无",
              CAT_SUMMARY:"暂无"
            })
        }
        return temp
      },
      filterCounty(county){
          var temp= this.catalog.filter(function (item) {
            return item.CAT_CITY == county;
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
      saveCatalogs(catalogs){
        this.$store.commit('save_SIMPLECATA',catalogs)
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
