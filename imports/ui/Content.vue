<script setup>
import { Meteor } from 'meteor/meteor';

import { ref, watch } from 'vue';
import LoginForm from './components/LoginForm.vue';
import ContentBox from './components/ContentBox.vue'
import { subscribe, autorun } from 'vue-meteor-tracker';


const hideCompleted = ref(false);
const isLogged = ref(false);
const name = Meteor.user().username;
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
  h1 Welcome back, {{ name }}.
  p(style="{margin-top: 12px;}") Here is your feed
  ContentBox
  button(@click="logout" class="action") Log Out

div(v-else)
  LoginForm
</template>
