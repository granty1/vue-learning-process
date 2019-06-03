<template>
  <div>
    <gr-input v-model="inputValue"/>
    <p>{{ inputValue}}</p>
    <gr-show :content="contentValue"/>
    <p>last char is : {{ inputValueLast }}</p>
  </div>
</template>

<script>
import GrInput from '_c/GrInput.vue'
import GrShow from '_c/GrShow.vue'
export default {
  name: 'store',
  components:{
    GrInput,
    GrShow
  },
  data (){
    return {
      inputValue:''
    }
  },
  computed: {
    contentValue: function(){
      return this.inputValue
    },
    inputValueLast () {
      return this.inputValue.substr(-1,1)
    }
  }
}
</script>

<style>

</style>

