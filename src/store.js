import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

let state = {
  list: [
    { id: 1, name: '加油', flag: false },
    { id: 2, name: '齐友德', flag: true },
    { id: 3, name: '(^o^)/~', flag: false }
  ],
  aa: '齐友德'
}

let mutations = {
  changeFlag(state, id) {
    // 通过id找到对应的对象改变对应的值
    // state.list.filter(e => e.id === id)[0].flag = flag 笨
    // 通过id找到对应的下标取反就可以了
    // console.log(id)

    let todo = state.list.find(e => e.id === id)
    // console.log(todo)

    todo.flag = !todo.flag
  },
  delTodos(state, id) {
    // console.log(id)

    state.list = state.list.filter(e => e.id !== id)
  },
  edited(state, { id, value }) {
    // console.log(value)

    let todo = state.list.find(e => e.id === id)
    todo.name = value
  },
  addTodo(state, obj) {
    // console.log(obj)
    state.list.push(obj)
  },
  delAllCompleted(state) {
    state.list = state.list.filter(e => e.flag === false)
  }
}
let getters = {
  isShowFooter: () => {
    return state.list.length > 0
  },
  isShowClear: () => {
    return state.list.some(e => e.flag)
  },
  leftCount: () => {
    return state.list.filter(e => !e.flag).length
  }
}
let actions = {
  // context 指的是 store
  clearTodoAsync(context) {
    setTimeout(() => {
      context.commit('delAllCompleted')
    }, 1000)
  }
}
// 注意是构造函数 大写  注意s
// vuex的 action 封装异步操作在vuex中
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
