<template>
  <button @click="handleClick">Click</button>
</template>
<script>
export default {
  mounted () {
    console.log(this.$bus)
  },
  methods: {
    handleClick () {
      // 只能在当前组件上进行监听
      this.$emit('on-click', 'hello')
      // 可以在全局 通过$bus对象 进行监听
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    this.$on('on-click', mes => {
      console.log(mes)
    })
  }
}
</script>
