<template>
  <nav>
      <ul>
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/game">Game</router-link>  </li>
        <li> <router-link to="/rules"> Rules </router-link> </li>
        <li id="title">Clubs Trump</li>
        <li style="float:right"> <router-link to="/about">About</router-link> </li>
      </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #17252A;
  border-radius: 5px;
}

li {
  float: left;
}

li a {
    float: left;
  display: block;
  color: #DEF2F1;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-right: 1px solid #bbb;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #2B7A78 ;
}

li:last-child {
  border-right: none;
  border-left: 1px solid #bbb;
}

ul li a.router-link-exact-active {
  background-color: #2B7A78 ;
}

#title{
  display: block;
  color: #DEF2F1;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

</style>