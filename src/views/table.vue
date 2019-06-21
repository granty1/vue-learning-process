<template>
  <div>
    <edit-table :columns="columns" v-model="tableData">

    </edit-table>
  </div>
</template>

<script>
  import { getTableData } from '../api/data'
  import EditTable from '@/components/edit-table'

  export default {
    name: 'Table',
    components: {
      EditTable
    },
    mounted() {
      getTableData().then(res => {
        this.tableData = res.data
      })
    },
    methods: {
      handleClick () {
        getTableData().then(res => {
          console.log(res)
        })
      }
    },
    data () {
      return {
        tableData: [],
        columns: [
          { key: 'name', title: '姓名' },
          { key: 'age', title: '年龄', editable: true },
          { key: 'email', title: '邮箱', editable: true }
        ]
      }
    }
  }
</script>

<style lang="less">

</style>
