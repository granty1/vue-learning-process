<template>
  <div>
    <input type="text" v-model="username" placeholder="用户名">
    <input type="passwd" placeholder="密码">
    <button @click="login">sign in</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods:{
    login (){
      this.$store.commit('USER_LOGIN',this.username)
    }
  }
}
</script>

<style>

</style>
