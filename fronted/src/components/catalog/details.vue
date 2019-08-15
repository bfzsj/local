<template>


  <div class="">
    <div class="container" style="padding-top: 12px;">

      <!--{{county}}-->

      <div class="row">
        <div class="col-md-12" style="padding-left: 0;">


        </div>
      </div>
      <div class="row" onselectstart="return false" ref="sxd">
        <div class="col-md-8 col-sm-12">
          <h3 style="padding: 2px 40px;border-bottom: 2px solid rgb(1,1,1);line-height: 60px">{{detail.CAT_NAME}}</h3>

          <p style="text-indent: 2em">{{detail.CAT_SUMMARY}}</p>

          <div><img v-bind:src="rootUrl+'static/img/'+item" style="width: 100%;" v-if="detail.CAL_PICTURE"  alt="" v-for="item in filterImg(detail.CAL_PICTURE)">
          </div>
          <div v-html="sp(detail.CAT_DETAILED)">
            <!--{{detail.CAT_DETAILED}}-->{{sp(detail.CAT_DETAILED)}}
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

      })

    },
    computed: {
      ...mapState({
        catalogs: state => state.catalogs,

      }),
      county(){
        return this.$store.state.county
      },
      detail(){
        return this.$store.state.details
      },

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
      sp(detail){
         let str=detail.split("\n");
         let heng="";
         str.forEach(function (item) {
           if(item!=""){
               heng+="<p>"+item+"</p>"
           }
         })
        heng="<div>"+heng+"</div>";

        return heng;
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
  p{
    text-indent: 2em;
  }
</style>
