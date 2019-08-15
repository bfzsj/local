<template>
  <footer>
    <p >{{ copyright }}{{title}}</p>

  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props:{
      title:{
        type:String
      }
    },
    data () {
      return {
        copyright: 'Copyright 2017 Vue Demo'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    /* background-color: rgb(137, 13, 12); */
    background: rgba(203, 184, 38, 0.7);
    padding: 10px;
    background: url(../assets/img/花纹.jpg)
  }
  p{
    color: #99a1a6;
    text-align: center;
  }
</style>
