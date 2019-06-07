<template>
  <div>
    <gr-input :value="stateValue" @input="changeStateValue"/>
    <p>{{ stateValue}}</p>
    <gr-input v-model="valueByGetSet"/>
    <p>{{ valueByGetSet}}</p>
    <gr-show :content="contentValue"/>
    <p>last char is : {{ inputValueLast }}</p>
    <button @click="hadleChangeAppName">Change</button>
    <button @click="handleGetData">获取服务端数据</button>
  </div>
</template>

<script>
import GrInput from '_c/GrInput.vue'
import GrShow from '_c/GrShow.vue'
import { mapActions, mapState, mapMutations } from 'vuex'
import { getUserInfo } from '@/api/user'
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
    },
    ...mapState({
      stateValue: state => state.stateValue
    }),
    valueByGetSet:{
      get () {
        return this.$store.state.valueByGetSet
      },
      set (val) {
        this.updateValueByGetSet(val)
      }
    }
  },
  methods: {
    ...mapActions([
      'updateAppName'
    ]),
    ...mapMutations([
      'updateStateValue',
      'updateValueByGetSet'
    ]),
    hadleChangeAppName () {
      this.$store.commit('SET_APP_NAME','Gguolin')
      this.updateAppName()
    },
    changeStateValue (val) {
      this.updateStateValue(val)
    },
    handleGetData () {
      getUserInfo().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>

