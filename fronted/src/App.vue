<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>

  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'jquery/dist/jquery.js'
  import 'popper.js/dist/popper'
  import 'bootstrap/dist/js/bootstrap.js'
  export default {
    name: 'App',
    components: {

    },
  }
</script>

<style>
  html,body,#app,.login{
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .row{
    margin-left: 0;
  }
	.container {
    width: 100%;
    padding-right: 0;
    padding-left:0;
    margin-right: auto;
    margin-left: auto;
}
</style>
