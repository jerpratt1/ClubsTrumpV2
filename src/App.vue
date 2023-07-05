<template>
  <div id="app">
    <nav>
      <router-link to="/game">Game</router-link> |
      <router-link to="/rules"> Rules </router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

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
  background-size: cover;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2B7A78;
}

nav a.router-link-exact-active {
  color: #DEF2F1 ;
}

button{
  background: #17252A;
  color: #DEF2F1;
  border-radius: 5px;
  border: #2B7A78;
}
</style>
