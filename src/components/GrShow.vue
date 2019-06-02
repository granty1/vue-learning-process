<template>
  <div>
    <h3>GrShow value is => {{ content }}</h3>
  </div>
</template>
<script>
export default {
  name:'GrShow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
