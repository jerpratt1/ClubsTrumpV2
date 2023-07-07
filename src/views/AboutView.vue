<template>
  <div class="about">
    <h1 id="title">About this Project</h1>
    <img src="https://i.imgur.com/Y90zLHD.jpg" alt="Jeremy Pratt">
    <div id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about{
 display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "title title title"
    "photo main-text main-text"
    ;
  width: 80%;
}

#text{
  grid-area: main-text;
  text-align: left;
}

#title{
  grid-area: title;
}

img{
  grid-area: photo;
  justify-self: center;
  max-width: 75%;
  max-height: 75%;
  border: 3px solid #17252A;
  border-radius: 50%;
}

</style>
