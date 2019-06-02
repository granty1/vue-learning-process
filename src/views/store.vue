<template>
  <div>
    <gr-input v-model="inputValue"/>
    <p>{{inputValue}}</p>
    <gr-show :content="contentValue"/>
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
    }
  }
}
</script>

<style>

</style>

