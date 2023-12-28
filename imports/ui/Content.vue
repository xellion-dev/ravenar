<script setup>
import { Meteor } from 'meteor/meteor';

import { ref, watch } from 'vue';
import Task from './components/Task.vue';
import TaskForm from './components/TaskForm.vue';
import LoginForm from './components/LoginForm.vue';
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

<template>
<div v-if="isLogged">
    <header
      class="flex items-center justify-between px-4 py-4 bg-gray-100 border-t border-b border-gray-200"
    >
      <h1 class="text-4xl font-bold text-gray-800 my-4">
        🚀 To-Do List
        <span
          v-if="incompleteTasksCount > 0"
          class="text-lg font-light text-gray-600"
        >
          ({{ incompleteTasksCount }})</span
        >
      </h1>

      <button
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="logout"
      >
        Logout
      </button>
    </header>
  </div>

  <div v-else>
    <LoginForm />
  </div>
  </template>