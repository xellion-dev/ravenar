<script setup>
import { Meteor } from 'meteor/meteor';

import { ref, watch } from 'vue';
import ContentBox from './components/ContentBox.vue'
import SignupForm from './components/SignupForm.vue'
import { subscribe, autorun } from 'vue-meteor-tracker';


const hideCompleted = ref(false);
const isLogged = ref(false);
const user = autorun(() => Meteor.userId()).result;
const logout = () => Meteor.logout();
watch(
  () => user.value,
  (newUser) => {
    isLogged.value = !!newUser;
  },
  { immediate: true },
);
</script>

<template lang="pug">
div(v-if="isLogged")
  h1 Welcome back, {{ Meteor.user().username }} 
  ContentBox
  button(@click="logout" class="action") Log Out

div(v-else)
  SignupForm
</template>