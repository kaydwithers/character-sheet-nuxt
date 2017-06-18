<template lang="pug">
.ph3.ph5-ns.pv4.pv5-ns
  .mw9.center
    .w-25.w-50-m.w-100-l.pb4

      article.mw6.pa3.pa5-ns
        form.pb4(@submit.prevent='add(task)')
          input.tc(v-model='task' type='text' placeholder='umm')
          input(type='submit' value='Add')

        h1.f4.bold.center Things I need to do
        ul.list.pl0.ml0.center.ba.b--light-silver.br2
          li.flex.items.center.ph3.pv3.bb.b--light-silver(
            v-for='todo of todos'
          )
            span.flex-auto(
              :class='{strike: todo.complete}'
            ) {{ todo.id }}. {{ todo.task }}
            button(@click='toggle(todo)')
              img(src='https://icon.now.sh/check' alt='')
            button(@click='remove(todo)')
              img(src='https://icon.now.sh/trash' alt='')

</template>

<script>
import { mapActions, mapState } from 'vuex'
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
      todos: state => state.todos
    })
  },
  methods: {
    ...mapActions([
      'add',
      'remove',
      'toggle'
    ])
  },
  components: {
    appButton
  }
}
</script>

<style>

</style>
