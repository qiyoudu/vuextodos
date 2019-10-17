<template>
  <footer class="footer" v-show="isShowFooter">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{leftCount}}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button @click="delAllCompleted" v-show="isShowClear" class="clear-completed">Clear completed</button>
  </footer>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    // leftCount() {
    //   return this.$store.getters.leftCount
    // },
    // isShowFooter() {
    //   return this.$store.getters.isShowFooter
    // },
    // isShowClear() {
    //   return this.$store.getters.isShowClear
    // }
    // 对于重复部分的简写
    ...mapGetters(['leftCount', 'isShowFooter', 'isShowClear'])
  },
  methods: {
    // delAllCompleted() {
    // let newList = this.$store.state.list.filter(e => e.flag === true)
    // this.$store.commit('delAllCompleted')
    //action
    // this.$store.dispatch('clearTodoAsync')

    // }
    ...mapActions({ delAllCompleted: 'clearTodoAsync' })
  }
}
</script>
