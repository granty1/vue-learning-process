<template>
  <div>
    <count-to ref="num" :end-val="endNum" @on-num-update-end="handelEndValue">
      <span slot="left">总收入:</span> 
      <span slot="right">元</span> 
    </count-to>
    <button @click="getNum">获取数值</button>
    <button @click="addNum">增加</button>
  </div>
</template>
<script>
import CountTo from '@/components/count-to'
export default {
  name: 'count_to',
  data () {
    return {
      endNum:2000
    } 
  },
  components: {
    CountTo
  },
  methods: {
    getNum () {
      this.$refs.num.getNumber()
    },
    addNum () {
      this.endNum += 1000000
    },
    handelEndValue (endVal) {
      console.log(endVal)
    }
  }
}
</script>
