<template>
<div>
  <div class="about">
    <h1 id="title">About the Developer</h1>
    <img src="https://i.imgur.com/Y90zLHD.jpg" alt="Jeremy Pratt">
    <div id="text">
      <p>This site is a project developed by <a href="https://www.linkedin.com/in/jeremy-pratt/" target="_blank">Jeremy Pratt</a> to continue to hone his development skills. Jeremy is a dedicated Software Developer, swift learner, and analytical thinker with a background in data analysis and mortgage compliance. He strives to find business solutions that are efficient, effective, and user friendly.</p>
      <p>If you would like to check out more of Jeremy's work the link to his portfolio is here: portfolio</p>
      <p>If you would like to contact jeremy directly you can find him on linked in or you can reach out directly through the contact form below.</p>
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
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "title title title"
    "photo main-text main-text"
    "- contact contact"
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

a{
  text-decoration: none;
}

#contact{
  grid-area: contact;
}
</style>
