<script setup>
import { Meteor } from 'meteor/meteor'
import { ref } from 'vue'
import { Accounts } from 'meteor/accounts-base';
var username = ref('');
var password = ref('');

const submitForm = (event) => {
    event.preventDefault()
    Accounts.createUser({
        username: username.value,
        password: password.value
    })

    Meteor.loginWithPassword(username.value, password.value)
}

</script>

<template lang="pug">
form(@submit="submitForm" class="loginform")
  h1(class="login_h1") Sign Up
  input(v-model="username" id="username" type="text" name="username" placeholder="Username" class="usrin" required)
  input(v-model="password" id="password" type="password" name="password" placeholder="Password" class="usrin" required)
  p Already have an account? 
   a(class="logina" href="login") Log In!
  button(type="submit" class="action") Sign Up
</template>
