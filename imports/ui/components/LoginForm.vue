<!--
<template lang="pug">
h1 Log In
sl-input(class="usrin" placeholder="Username / Email" pill)
sl-input(class="usrin" type="password" placeholder="Password" pill)
sl-button(class="action") Log In
</template>
-->

<script setup>
import { Meteor } from 'meteor/meteor';
import { ref } from 'vue';
import { serialize } from '@shoelace-style/shoelace/dist/utilities/form.js';

const form = document.querySelector('form');
const data = serialize(form);

const username = ref('');
const password = ref('');



const submitForm = (event) => {
  event.preventDefault();
  Meteor.loginWithPassword(username.value, password.value);
};

</script>

<template>
  <form @submit="submitForm">
    <div>
      <sl-input type="username" label="Username" placeholder="username" required v-model="username"></sl-input>
 </div>

<div>
   <sl-input type="password" label="password"  v-model="username" placeholder="password123" required></sl-input></div>
 <div> <sl-button class="action" type="submit">Log in</sl-button> </div>
  </form>


</template>