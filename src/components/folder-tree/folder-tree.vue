<template>
  <Tree :data="folderTree" :render="renderFunc" show-checkbox multiple></Tree>
</template>

<script>
  import { getFilelist, getFolderList } from '@/api/data'
  import { putFileInFolder, transferFolderToTree, expandSpecifiedFolder } from '@/lib/util'
  import clonedeep from 'clonedeep'
  export default {
    name: 'FolderTree',
    data () {
      return {
        folderTree: [],
        currentRenamingId: '',
        currentRenamingContent: '',
        renderFunc: (h, { root, node, data }) => {
          const dropList = data.type === 'folder' ? this.folderDropList : this.fileDropList
          const isRenaming = this.currentRenamingId === `${data.type || 'file'}_${data.id}`
          const dropdownRender = dropList.map(item => {
            return ( < dropdownItem
            name = { item.name
          }>
            {
              item.title
            }
          <
            /dropdownItem>)
          })
          return (
            < div
        class
          = 'tree-item' >
          { data.type ?
        <
          icon
          type = 'ios-folder'
          color = '#5cadff'
          style = 'margin-right:5px' / >
        :
        <
          icon
          type = 'md-document'
          style = 'margin-right:5px' / >
        }
          {
            isRenaming
              ?
          <
            span >
            <i-input
            style = 'width:100px'
            value = { data.title
          }
            on-input = { this.handleInput
          }><
            /i-input>
            <i-button
            size = 'small'
            type = 'text'
            on-click = { this.saveRename.bind(this, data)
          }><
            icon
            type = 'md-checkmark' / > < /i-button>
              <i-button
            size = 'small'
            type = 'text' > < icon
            type = 'md-close'
            on-click = { this.giveRename}/ > < /i-button>
              </span>
          : <
            span > { data.title
          }<
            /span>
          }
          {
            dropList && !isRenaming ?
          <
            dropdown
            placement = 'right-start'
            on-on-click = { this.handleDropDown.bind(this, data)
          }>
          <
            i-button
            size = 'small'
            type = 'text'
          class
            = 'tree-item-button' >
              < icon
            type = 'md-more'
            size = { 12 }
            />
            < /i-button>
            < dropdownMenu
            slot = 'list' >
              { dropdownRender }
              < /dropdownMenu>
              < /dropdown> : ''
          }
        <
          /div>
        )
        }
      }
    },
    props: {
      folderList: {
        type: Array,
        default: () => []
      },
      fileList: {
        type: Array,
        default: () => []
      },
      folderDropList: Array,
      fileDropList: Array
    },
    methods: {
      transData () {
        this.folderTree = transferFolderToTree(putFileInFolder(this.folderList, this.fileList))
      },
      handleDropDown (data, name) {
        const folderId = data.folder_id
        if (name === 'rename') {
          // rename
          this.currentRenamingId = `${data.type || 'file'}_${data.id}`
        } else if (name === 'del') {
          // del
          this.$Modal.confirm({
            title:'提示',
            content: `确定要删除${data.type === 'folder' ? '文件夹' : '文件'} ${data.title} 吗？`,
            onOk: () => {
              this.handleDelete(data)
              this.$nextTick(() => {
                expandSpecifiedFolder(this.folderTree, folderId)
              })
            }
          })
        } else {
          // add
        }
      },
      giveRename () {
        this.currentRenamingId = ''
      },
      handleInput (value) {
        this.currentRenamingContent = value
      },
      saveRename (data) {
        const id = data.id
        const type = data.type
        if (type === 'folder') {
          const list = this.updateList(clonedeep(this.folderList), id)
          this.$emit('update:folderList',list)
        } else {
          const list = this.updateList(clonedeep(this.fileList), id)
          this.$emit('update:fileList',list)
        }
        this.currentRenamingId = ''
      },
      updateList (list, id) {
        let i = -1
        let len = list.length
        while (++i < len) {
          let folderItem = list[i]
          if (folderItem.id === id) {
            folderItem.name = this.currentRenamingContent
            list.splice(i, 1, folderItem)
            break
          }
        }
        return list
      },
      handleDelete (data) {
        let isFolder = data.type === 'folder'
        let updateListName = isFolder ? 'folderList' : 'fileList'
        let list = isFolder ? clonedeep(this.folderList) : clonedeep(this.fileList)
        list = list.filter(item => item.id !== data.id)
        this.$emit(`update:${updateListName}`, list)
      }
    },
    mounted () {
      this.transData()
    },
    watch: {
      folderList () {
        this.transData()
      },
      fileList () {
        this.transData()
      }
    }
  }
</script>

<style lang="less">
  .tree-item {
    display: inline-block;
    line-height: 30px;
    & > .ivu-dropdown {
      float: right;
    }
    ul {
      padding-left: 0;
    }
    li {
      margin: 0;
      padding: 7px 16px;
    }
  }
</style>
