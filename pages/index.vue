<template lang="pug">
.ph3.ph5-ns.pv4.pv5-ns
  .mw9.center
    .w-25.w-50-m.w-100-l.pb4

      .stats.tc.pa4.ba
        p.f6.ttu.mt0 Strength
        input.tc(type='number' placeholder='0')

        p.f6.ttu Dexterity
        input.tc(type='number' placeholder='0')

        p.f6.ttu Constitution
        input.tc(type='number' placeholder='0')

        p.f6.ttu Intelligence
        input.tc(type='number' placeholder='0')

        p.f6.ttu Widsom
        input.tc(type='number' placeholder='0')

        p.f6.ttu Charisma
        input.tc(type='number' placeholder='0')

</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import appButton from '~/components/atoms/app-button'
import { init } from './shared'

export default {
  fetch: init,
  data () {
    return {
      task: 'hey'
    }
  },
  computed: {
    ...mapState({
      counter: state => state.counter,
      todos: state => state.todos
    })
  },
  methods: {
    ...mapActions([
      'add',
      'remove',
      'toggle'
    ]),
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
