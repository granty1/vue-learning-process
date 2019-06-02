<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <h2>{{food}}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue' 

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick (type) {
      // 获取当前路由示例 -1后退 1前进
      // this.$router.go(1 | -1)
      //this.$router.back()

      if(type === 'back') this.$router.back()
      else if (type === 'push') {
        // push 会加入浏览历史栈 ， 可以回退
        const name = 'Grant'
        this.$router.push({
          path: `/argu/${name}`
          // query: {
          //   name: 'Grant',
          //   age: 22
          // }
          // params: {
          //   name: 'Grant'
          // }
        })
      }
      else if (type === 'replace'){
        // replace 将当前浏览记录清空，记录为当前访问的页面
        this.$router.replace({
          name: 'parent'
        })
      }
     }
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    // to    当前路由对象
    // from  上一个路由对象 
    console.log( 'from :' + from.name) 
    console.log('now :' + to.name)
    // 但是在 next 之前，无法获取当前 vm 实例
    // 可以在next 内获取
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave: (to, from, next) => {
    // 在页面即将离开时调用该钩子
    // const leave = confirm('当前内容还没有保存，确定离开吗？')
    // if (leave) next()
    next()
  }
}
</script>
