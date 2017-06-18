<template lang="pug">
button.f6.link.dim.ph3.pv2.dib.white(
  :class="{ 'bg-hot-pink': danger, 'bg-green': primary }"
  @click='click'
) {{ text }}
</template>

<script>
export default {
  name: 'app-button',
  props: {
    click: { default: 'explosion' },
    text: { default: 'Do not click!' },
    danger: { default: true },
    primary: { default: false }
  }
}
</script>

<style>

</style>
