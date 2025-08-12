<script setup>
const Title = "x1pc unveil"
const Uploader = "xel inc"
const Date = "1/21/8"

import { VuePlayer } from '@display-studio/vue-player'

const sources = [
  {
    src: './Images/video.webm',
    type: 'video/webm',
    media: "(min-width: 900px)"
  },
  {
    src: './Images/video.webm',
    type: 'video/webm',
  }
]
</script>

<template lang="pug">
div(class="main_content")
    video(width="300" height="150" class="video" controls)
    <VuePlayer class="vue-player" :sources="sources" poster="..." @play="...">
            // Your custom controls here
    </VuePlayer>

    h1 {{ Title  }}
    h2 {{Uploader}}
    p  {{ Date }}
    
</template>