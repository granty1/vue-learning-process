<template>
  <Table :columns="insideColumns" :data="value">
  </Table>
</template>

<script>
  import  clonedeep from 'clonedeep'
  export default {
    name: 'EditTable',
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      value: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        insideColumns: [],
        edittingId: '',
        edittingContent: ''
      }
    },
    methods: {
      handleClick({row, index, column}) {
        if (this.edittingId === `${column.key}_${index}`){
          // to save
          let tableData = clonedeep(this.value)
          tableData[index][column.key] = this.edittingContent
          this.$emit('input', tableData)
          this.$emit('on-edit', {row, index, column, newValue: this.edittingContent})
          this.edittingId = ''
          this.edittingContent = ''
        }else {
          // to edit
          this.edittingId = `${column.key}_${index}`
        }

      },
      handleInput (newVal) {
        this.edittingContent = newVal
      },
      handleColumns () {
        const insideColumns = this.columns.map(item => {
          if (!item.render && item.editable) {
            item.render = (h, { row, index, column }) => {
              const isEditting = this.edittingId === `${column.key}_${index}`
              return (
                <div>
                {isEditting ? <i-input value={row[column.key]} on-input={this.handleInput} style="width: 60px;"></i-input> : <span>{row[column.key]}</span>}
                <i-button on-click={this.handleClick.bind(this, {row, index, column})}>{isEditting ? '保存': '编辑'}</i-button>
              </div>
            )
            }
            return item
          } else {
            return item
          }
        })
        this.insideColumns = insideColumns
      }
    },
    mounted () {
      this.handleColumns()
    },
    watch: {
      columns () {
        this.handleColumns()
      }
    }
  }
</script>

<style lang="less">

</style>
