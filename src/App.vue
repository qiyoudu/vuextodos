<template>
  <div id="app">
    <section class="todoapp">
      <todos-header></todos-header>
      <!-- This section should be hidden by default and shown when there are todos -->
      <todos-main></todos-main>
      <!-- This footer should hidden by default and shown when there are todos -->
      <todos-footer></todos-footer>
    </section>
  </div>
</template>
<script>
// 这里的组件不区分大小写 因为html中不区分大小写
import todosHeader from './components/TodosHeader.vue'
import TodosMain from './components/TodosMain'
import TodosFooter from './components/TodosFooter'

export default {
  components: {
    todosHeader,
    TodosMain,
    TodosFooter
  }
}
</script>

<style>
</style>
