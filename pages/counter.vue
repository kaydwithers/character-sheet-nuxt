<template lang="pug">
.ph3.ph5-ns.pv4.pv5-ns
  .mw9.center
    .w-25.w-50-m.w-100-l.pb4

      article.mw6.pa3.pa5-ns
        h1.f1 {{ counter }}

        app-button(
          primary, 
          :click='increment', 
          text='Increment'
        )
        app-button(
          primary, 
          :click='decrement', 
          text='Decrement'
        )
        app-button(
          :click='reset', 
          text='Reset'
        )

</template>

<script>
import { mapState, mapMutations } from 'vuex'
import appButton from '~/components/atoms/app-button'

export default {
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement',
      'reset'
    ])
  },
  components: {
    appButton
  }
}
</script>

<style>

</style>
