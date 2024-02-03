<script setup>
function loginhref(event) {
    window.location.assign('/login')
}

function signuphref(event) {
    window.location.assign('/signup')
}
</script>

<template lang="pug">
h1 Welcome to Ravenar
p Ravenar is currently in beta. Please log in or sign up to continue.
button(class="action" @click="loginhref")
    h2 Log in

button(class="action" @click="signuphref") 
    h2 Sign up
    
</template>
