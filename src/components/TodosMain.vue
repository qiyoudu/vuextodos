<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        v-for="item in list"
        :key="item.id"
        @dblclick="editing(item.id)"
        :class="{completed:item.flag,editing:now===item.id}"
      >
        <!-- true -->
        <div class="view">
          <!-- 由于子组件不能直接修改store 所以分两步 第一步显示store中的数据 第二步触发mutaiton-->
          <input @input="changeFlag(item.id)" class="toggle" type="checkbox" :checked="item.flag" />
          <label>{{item.name}}</label>
          <button @click="delTodos(item.id)" class="destroy"></button>
        </div>
        <!-- 通过事件对象的里面获取文本框中的值 -->
        <input @keyup.enter="edited(item.id,$event)" class="edit" :value="item.name" />
      </li>
    </ul>
    {{cc}}
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      now: -1
    }
  },
  computed:
    // {
    //   list() {
    //     return this.$store.state.list
    //   },
    //   aa() {
    //     return this.$store.state.aa
    //   }
    // },

    // 重复使用辅助函数    返回了一个上面的对象
    // mapState(['list']),
    {
      ...mapState(['list']),
      // 传入一个对象是用来改名字的
      ...mapState({ cc: 'aa' })
    },
  // 传入对象的用法是用来改state中的名字的

  methods:
    // {
    //   // 处理表单的双向绑定 input事件
    //   changeFlag(id) {
    //     this.$store.commit('changeFlag', id)
    //   },
    //   delTodos(id) {
    //     // console.log(id)  提交commit 数据
    //     this.$store.commit('delTodos', id)
    //   }
    // }
    // 发现重复 使用mapMutations 返回了一个对象
    {
      ...mapMutations(['changeFlag', 'delTodos']),
      editing(id) {
        // console.log(id)
        // 显示修改框
        this.now = id
      },
      edited(id, e) {
        // console.log(1)
        // 消除class
        let obj = { id, value: e.target.value }
        this.now = -1
        this.$store.commit('edited', obj)
      }
    }
}
</script>
