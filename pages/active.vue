<template lang="pug">
.ph3.ph5-ns.pv4.pv5-ns
  .mw9.center
    .w-25.w-50-m.w-100-l.pb4

      article.mw6.pa3.pa5-ns

        h1.f4.bold.center Active Todos
        ul.list.pl0.ml0.center.ba.b--light-silver.br2
          li.flex.items.center.ph3.pv3.bb.b--light-silver(
            v-for='todo of todos'
          )
            span.flex-auto(
              :class='{strike: todo.complete}'
            ) {{ todo.id }}. {{ todo.task }}

</template>

<script>
import { mapState } from 'vuex'
import { init } from './shared'

export default {
  fetch: init,
  computed: {
    ...mapState({
      todos: state => state.todos.filter(todo => !todo.complete)
    })
  }
}
</script>

<style>

</style>
