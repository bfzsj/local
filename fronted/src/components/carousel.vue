<template>


  <div class="">
    <div class="container" style="padding-top: 12px;">
      <div class="row" style="margin-left: 0">
        <div class="col-md-4" style="padding: 0 5px">
          <div class="card">
            <div class="card-header"><span style="color: #5982C7;font-weight: bold;"> 方史志</span></div>
            <div class="card-body" style="padding: 3px">
              <div class="title-list-1">
                <h4><a href="http://www.sx.xinhuanet.com/2019-01/11/c_1123974463.htm">山西省委经济工作会议召开</a></h4>
                <a href="http://www.sx.xinhuanet.com/2019-01/11/c_1123974463.htm"><img src="../assets/img/logo.jpg" alt="山西省委经济工作会议召开" width="120" height=""></a>
                <p class="zy"><a href="http://www.sx.xinhuanet.com/2019-01/11/c_1123974463.htm">骆惠宁作重要讲话，楼阳生作具体安排。</a></p>
                <p class="list-bt"><span></span><a href="http://www.sx.xinhuanet.com/2019-01/08/c_1123958969.htm">山西省委召开常委会议</a></p>
                <p class="list-bt"><span></span><a href="http://www.sx.xinhuanet.com/2019-01/05/c_1123950404.htm">山西省与高水平大学战略合作座谈会暨签约仪式举行</a></p>
                <p class="list-bt"><span></span><a href="http://www.sx.xinhuanet.com/2019-01/03/c_1123939820.htm">山西省政府召开常务会议</a></p>
                <p class="list-bt"><span></span><a href="http://www.sx.xinhuanet.com/2018-12/28/c_1123916499.htm">山西省十三届人大常委会召开第15次主任会议</a></p>
              </div>
            </div>

          </div>

        </div>
        <div class="col-md-8">
          <div id="demo" class="carousel slide" data-ride="carousel">

            <!-- 指示符 -->
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>

            </ul>

            <!-- 轮播图片 -->
            <div class="carousel-inner">

              <div class="carousel-item active">
                <img src="../assets/img/img_fjords_wide.jpg">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/img_nature_wide.jpg">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/img_mountains_wide.jpg">
              </div>

            </div>

            <!-- 左右切换按钮 -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'app-carousel',
    data(){
      return {

			}
    }
  }
</script>
<style>
  .carousel-item img {
    width: 100%;
    height: 395px;
    border-radius: 8px;
  }

  .carousel-inner {
    border-radius: 8px;
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
  /*.grad{
    background: -webkit-linear-gradient(rgba(191, 240, 201, 0.5), white); !* Safari 5.1 - 6.0 *!
    background: -o-linear-gradient(rgba(191, 240, 201, 0.5), white); !* Opera 11.1 - 12.0 *!
    background: -moz-linear-gradient(rgba(191, 240, 201, 0.5), white); !* Firefox 3.6 - 15 *!
    background: linear-gradient(rgba(191, 240, 201, 0.5), white); !* 标准的语法（必须放在最后） *!
  }*/
</style>
