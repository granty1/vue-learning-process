<template>
  <div>
    <input type="text" placeholder="用户名">
    <input type="passwd" placeholder="密码">
    <button @click="login">sign in</button>
  </div>
</template>

<script>
export default {
  methods:{
    login (){
      console.log('user login ...')
    }
  }
}
</script>

<style>

</style>
