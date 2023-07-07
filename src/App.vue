<template>
  <div id="app">
    <the-header id ="header"/>
    <router-view id ="router-view"/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: { TheHeader },

}
</script>



<style>
/* 
Darkest Blue #17252A
Dark Blue #2B7A78 
Blue #3AAFA9 
Light Blue #DEF2F1
White #FEFFFF
*/



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DEF2F1;
  
}

body{
  background-color: #3AAFA9;
}

button{
  background: #17252A;
  color: #DEF2F1;
  border-radius: 5px;
  border: #2B7A78;
}

#header{
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

#router-view{
  margin-top: 1%;
  
}
</style>
