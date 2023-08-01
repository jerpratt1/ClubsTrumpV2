<template>
<div>
  <div class="about">
    <div id="site" class="card">
      <h1 >About the Site</h1>
      <p>This site emerged from a common issue when playing the card game Clubs Trump with friends—no pen and paper available, or someone not wanting to keep score. The primary goal of this site is to tackle that problem by acting as a scorekeeper for the game.</p>
      <p> Beyond solving the scorekeeping issue, it also serves as a valuable project for the developer to sharpen their development skills continuously.</p>
    </div>
    <!-- <img src="https://i.imgur.com/Y90zLHD.jpg" alt="Jeremy Pratt"> -->
    <div id="dev" class="card">
      <h1 >About the Developer</h1>
      <p>This site is the brainchild of <a href="https://www.linkedin.com/in/jeremy-pratt/" target="_blank">Jeremy Pratt</a>, a dedicated Software Developer with a strong background in data analysis and financial compliance. Jeremy is a swift learner and analytical thinker, constantly refining his development skills to create efficient, effective, and user-friendly business solutions.</p>
      <p>Explore Jeremy's work in his portfolio: [portfolio link to come]</p>
      <p>For direct contact, find Jeremy on <a href="https://www.linkedin.com/in/jeremy-pratt/" target="_blank">LinkedIn</a> or use the form below.</p>
    </div>
    <div id="contact">
      <contact-form />
    </div>
  </div>
  
</div>  
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
  export default{
  components: { ContactForm },
    
  }
</script>

<style scoped>
.about{
 display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-areas: 
    "dev dev site site"
    "dev dev site site"
    ". contact contact ."
    ;
  width: 100%;
  height: 90vh;
  column-gap: 10px;
  row-gap: 10px;
}

#site{
  grid-area: site;
}

#dev{
  grid-area: dev;
}

/* img{
  grid-area: photo;
  justify-self: center;
  max-width: 75%;
  max-height: 75%;
  border: 3px solid #17252A;
  border-radius: 50%;
} */

a{
  text-decoration: none;
}

p{
  text-align: left;
  margin: 1%;
}

.card{
  border: gray solid 6px;
  border-radius: 1rem;
}

#contact{
  grid-area: contact;
}
</style>
