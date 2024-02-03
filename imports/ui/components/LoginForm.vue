<script setup>
import { Meteor } from 'meteor/meteor'
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const submitForm = (event) => {
    event.preventDefault()
    Meteor.loginWithPassword(username.value, password.value)
}

</script>

<template lang="pug">
form(@submit="submitForm" class="loginform")
  h1(class="login_h1") Log In
  input(v-model="username" type="text" name="username" placeholder="Username" class="usrin" required)
  input(v-model="password" type="password" name="password" placeholder="Password" class="usrin" required)
  p Don't have an account? 
   a(class="logina" href="signup") Sign up!
  button(type="submit" class="action") Log in
</template>
