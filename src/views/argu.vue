<template>
  <div>
    {{name}}
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    default: 'Grant'
  },
  beforeRouteUpdate (to, from, next){
    // 组件路由发生变化， url发生变化，且为复用组件
    console.log('to : '+to.name +' | '+ 'from ：' +from.name)
  }
}
</script>
