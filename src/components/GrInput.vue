<template>
  <input :value="value" @input="handleInput">
</template>
<script>
export default {
  name: 'GrInput',
  props: {
    value: {
      type: [String,Number],
      default: ''
    }
  },
  methods:{
    handleInput (event) {
      const value = event.target.value
      this.$emit('input',value)
    }
  }
}
</script>

