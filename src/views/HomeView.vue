<template>
  <div class="home">
    <div id="container">
      <div id="title">
        <h1>Clubs Trump</h1>
        <h2>A Game of Skill & Chance</h2>
      </div>
      <div id="hero">
        <img src="https://images.pexels.com/photos/279009/pexels-photo-279009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cards">
      </div>
      <div id="buttons">
        <ul>
          <li> <router-link to="/game"><h2>Game</h2></router-link>  </li>
          <li> <router-link to="/rules"> <h2>Rules</h2> </router-link> </li>
          <li> <router-link to="/about"><h2>About</h2></router-link> </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

#container{
display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 
  "title title title title"
  "hero hero hero hero"
  "buttons buttons buttons buttons"
  ;

  height: 75vh;
}

#title{
grid-area: title;
}

#hero{
grid-area: hero;
}

#buttons{
grid-area: buttons;
}

ul{
  list-style: none;
  margin: auto;
}

li{
  display: inline-block;
  padding: 1% 2% 1% 2%;
  margin: 1%;
  background: #17252A;
  border-radius: 5px;
  border: #2B7A78;
}

ul :hover{
  background-color: #2B7A78 ;
}

li a{
  text-decoration: none;
  color: #DEF2F1;
}

.home{
background-color: #2B7A78;
background-color: rgba(0, 0, 0, .25);
color: #FEFFFF;
max-width: 70%;
margin: auto;
padding-bottom: 5%;
padding-top: 1%;
border-radius: 3%;
}

img{
  border-radius: 3%;
  max-width: 50%;
}
</style>
