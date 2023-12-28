<!--
<template lang="pug">
h1 Log In
sl-input(class="usrin" placeholder="Username / Email" pill)
sl-input(class="usrin" type="password" placeholder="Password" pill)
sl-button(class="action") Log In
</template>
-->

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
    <form class="flex flex-col justify-center items-center w-full max-w-md mx-auto my-8" @submit="submitForm">
        <div>
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input v-model="username" type="text" name="username" placeholder="Username" required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>

        <div class="mt-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input v-model="password" type="password" name="password" placeholder="Password" required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>

        <div>
            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline">
                Log in
            </button>
        </div>
    </form>
</template>