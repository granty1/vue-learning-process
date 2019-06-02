<template>
  <div class="mess">
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 1
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message ++
    })
  }
}
</script>
<style>
  .mess{
    border: 1px solid red
  }
</style>
