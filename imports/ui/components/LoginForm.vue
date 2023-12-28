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

<template>
  <form @submit="submitForm">
    <div>
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" placeholder="Username" required>
    </div>

    <div class="mt-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input v-model="password" type="password" name="password" placeholder="Password" required>
    </div>

    <div>
      <button type="submit">
        Log in
      </button>
    </div>
  </form>
</template>