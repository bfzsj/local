<template>
  <div class="hello">
    <app-header></app-header>
   
    <router-view/>
		<app-lesson></app-lesson>
    <app-footer></app-footer>
  </div>
</template>

<script>
  
  import Header from './header'
  import footer from './footer'
	import lesson from './learns/lesson'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      /* appCarousel:carousel, */
      appHeader: Header,
      appFooter:footer,
			appLesson:lesson,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
