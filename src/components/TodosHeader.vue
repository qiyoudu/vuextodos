<template>
  <header class="header">
    <h1>Nihao</h1>
    <input @keyup.enter="addTodo" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<script>
export default {
  // 可以使用v-model
  methods: {
    addTodo(e) {
      // console.log()
      let obj = {
        id: +new Date(),
        name: e.target.value,
        flag: false
      }
      e.target.value = ''
      this.$store.commit('addTodo', obj)
    }
  }
}
</script>


