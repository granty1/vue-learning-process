<template>
  <div>
    <input type="text" v-model="user.username" placeholder="用户名">
    <input type="password" v-model="user.passwd" placeholder="密码">
    <button @click="handleLogin">sign in</button>
    <Alert class="alert" v-show="alertFlag" type="error" show-icon>{{msg}}</Alert>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      user: {
        username: '',
        passwd: ''
      },
      msg: '',
      alertFlag: false,
      alerType: ''
    }
  },
  methods:{
    ...mapActions([
      'login'
    ]),
    handleLogin (){
      this.login(this.user).then(() => {
          console.log('success')
          this.$router.push({
            name: 'home'
          })
      }).catch( error => {
        this.alertFlag = !this.alertFlag
        this.msg = error
      })
    }
  }
}
</script>

<style <style lang="less">
.alert{
  width: fit-content;
}
</style>
