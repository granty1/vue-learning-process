<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{path: '/'}">Home</router-link> |
      <router-link :to="{name: 'about'}">About</router-link> | 
      <router-link :to="{ name: 'store' }">Store</router-link>|
      <a  href="#" v-text="currentUserName"></a>
    </div>
    <transition-group name="router">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
    <p v-text="appName"></p>
    <p v-text="appNameWithVersion"></p>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    // appName (){
    //   return this.$store.state.appName
    // },
    // currentUserName () {
    //   return this.$store.state.user.currentUserName
    // }
    ...mapState({
      appName: state => state.appName,
      currentUserName : state => state.user.currentUserName
    }),
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    }
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// 添加过度效果

// router-enter 页面还没有显示时的效果
.router-enter{
  opacity: 0;
}
// router-active 无-有 动态效果
.router-enter-active{
  transition: opacity 1s ease;
}
// router-enter-to 页面完全显示之后
.router-enter-to{
  opacity: 1;
}


// router-leave 页面即将离开
.router-leave{
  opacity: 1;
}
// router-leave-active 有-无 动态效果
.router-leave-active{
  transition: opacity 1s ease;
}
// router-enter-to 页面完全离开
.router-leave-to{
  opacity: 0;
}
</style>
