<template>
<div>

  
   <div class="contact">
    
    <form ref="form" @submit.prevent="sendEmail">

    <label>Name: </label>
    <br>
    <input type="text" name="user_name" id="name">
    <br>
    <label>Email: </label>
    <br>
    <input type="email" name="user_email" id="email">
    <br>
    <label>Message: </label>
    <br>
    <input type="text" name="message" id="message">
    
    <input type="submit" value="Send">
  </form>
  </div>

</div>
 
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_zxnt6r8', 'template_bftqtx8', this.$refs.form, 'CV5TWJRz-RCMoD8mK')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.$refs.form.reset();
            window.alert("Message Sent")
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }

}
</script>

<style scoped>

.contact{
    display: flex;
    width: 100%;
    text-align: left;
    align-items: center;
    border: gray solid 6px;
    border-radius: 1rem;
    padding: 5px;
}

input{
    border: 6px solid #17252A;
    border-radius: 1.5rem;
    background: #17252A;
    color: #DEF2F1;
    padding: .5rem;
    margin: .75%;
}

#name{
    width:20vw;
    align-self: left;
}

#email{
    width: 20vw;
}

#message{
    width: 40vw;
    margin: .5%;
    
}

input:hover{
        background-color: #2B7A78 ;
    }

</style>