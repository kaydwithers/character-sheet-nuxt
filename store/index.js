
import axios from 'axios'
import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 0
      // todos: [
      //   { task: 'eat' },
      //   { task: 'sleep' },
      //   { task: 'code' }
      // ]
    },
    mutations: {
      add (state, todo) {
        state.todos = [...state.todos, todo]
      },
      remove (state, todo) {
        state.todos = state.todos.filter(t => t.id !== todo.id)
      },
      toggle (state, todo) {
        state.todos = state.todos.map(t =>
          t.id === todo.id ? todo : t
        )
      },
      init (state, todos) {
        state.todos = todos
      },
      increment (state) {
        state.counter++
      },
      decrement (state) {
        state.counter--
      },
      reset (state) {
        state.counter = 0
      }
    },
    actions: {
      async add ({commit}, task) {
        const res = await axios.post('https://todos-cuvsmolowg.now.sh/todos',
        { task, complete: false })

        commit('add', res.data)
      },
      async remove ({commit}, todo) {
        await axios.delete(`https://todos-cuvsmolowg.now.sh/todos/${todo.id}`)

        commit('remove', todo)
      },
      async toggle ({commit}, todo) {
        const res = await axios.patch(`https://todos-cuvsmolowg.now.sh/todos/${todo.id}`,
        { complete: !todo.complete })

        commit('toggle', res.data)
      }
    }
  })
}

export default store
