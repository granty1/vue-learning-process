<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
import { setTimeout } from 'timers';
export default {
  name: 'CountTo',
  computed : {
    // 确保每个组件的Id都不相同，这里用字符串拼接一个element id
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass() {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data (){
    return {
      counter: {}
    }
  },
  methods: {
    getNumber () {
      return this.$refs.number.innerHTML
    },
    emitEndVal () {
      setTimeout(() => {
        this.$emit('on-num-update-end', this.getNumber())
      }, this.duration * 1000)
    }
  },
  props: {
    /**
     * 动画延迟时间
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * 起始值
     * 默认0
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * 最终值
     * 默认10
     * 必填项
     */
    endVal: {
      type: Number,
      default: 10,
      required: true
    },
    /**
     * 小数点后位数
     * 默认0
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * 渐变时长
     * 默认 1s
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * 使用先慢后快的效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * 是否分组，以，隔开
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * 分组符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * 小数点符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * class 属性
     */
    className: {
      type: String,
      default: ''
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndVal()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
    })

    setTimeout(()=> {
      this.counter.start()
      this.emitEndVal()
    }, this.delay)
  }
}
</script>

<style lang="less">
@import './count-to.less';
</style>

