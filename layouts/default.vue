<template lang="pug">
div
  app-navigation
  Greeting
  nuxt
</template>

<script>
import Greeting from '~components/greeting'
import appNavigation from '~components/organisms/app-navigation'

export default {
  components: {
    appNavigation,
    Greeting
  }
}
</script>

<style>
@font-face {
  font-family: "Plain-Light";
  src: url("../assets/fonts/Plain-Light.woff") format("woff")
}

@font-face {
  font-family: "Plain-Thin";
  src: url("../assets/fonts/Plain-Thin.woff") format("woff")
}

@font-face {
  font-family: "Plain-Bold";
  src: url("../assets/fonts/Plain-Bold.woff") format("woff")
}

html {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0)}
  
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga", "kern"; 
  text-rendering: optimizelegibility;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  height: auto;
  overflow: auto;
  font-family: "Plain-Light", sans-serif;
}

img {
  -ms-interpolation-mode: bicubic;
}
</style>
