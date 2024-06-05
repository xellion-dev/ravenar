<script setup>
const Title = "x1pc unveil"
const Uploader = "xel inc"
const Date = "1/21/8"
</script>

<template lang="pug">
div(class="main_content")
    video(width="300" height="150" class="video" controls)
        source(src="video.mp4" type="video/mp4")
        source(src="video.ogg" type="video/ogg")
        source(src="Images/video.webm" type="video/webm")
        h1 hello my friends wasup let's💵💵💵 do this thang oppo hehe💵💵💰💰💰💰💰🤑🤑🤑🤑🤑🤑👄👄 

        div(class="controls")
        div(class="progress")
        div(class="progress__filled")
            button(class="controls__button toggleButton" title="Toggle Play") ►

    h1 {{ Title  }}
    h2 {{Uploader}}
    p  {{ Date }}
    
</template>