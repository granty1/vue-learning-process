<template>
  <div>
    <gr-input v-model="inputValue"/>
    <p>{{ inputValue}}</p>
    <gr-show :content="contentValue"/>
    <p>last char is : {{ inputValueLast }}</p>
    <button @click="hadleChangeAppName">Change</button>
  </div>
</template>

<script>
import GrInput from '_c/GrInput.vue'
import GrShow from '_c/GrShow.vue'
import { mapActions } from 'vuex'
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
  },
  methods: {
    ...mapActions([
      'updateAppName'
    ]),
    hadleChangeAppName () {
      this.$store.commit('SET_APP_NAME','Gguolin')
      this.updateAppName()
    }
  }
}
</script>

<style>

</style>

