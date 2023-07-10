<template>
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
    <br>
    <input type="submit" value="Send">
  </form>
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
}

input{
    border: 1px solid #17252A;
    border-radius: 1.5rem;
    background: #17252A;
    color: #DEF2F1;
    padding: .5rem;
    margin: .5%;
}

#name{
    width:100%;
    align-self: left;
}

#email{
    width: 100%;
}

#message{
    width: 100%;
    
}


</style>