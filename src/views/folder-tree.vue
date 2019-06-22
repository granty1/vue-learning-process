<template>
  <div class="folder-wrapper">
    <Tree :data="folderTree" :render="renderFunc"></Tree>
  </div>
</template>

<script>
  import { getFilelist, getFolderList } from '../api/data'
  import { putFileInFolder, transferFolderToTree } from '../lib/util'

  export default {
    name: 'folder-tree',
    data () {
      return {
        fileList: [],
        folderList: [],
        folderTree: [],
        renderFunc: (h, { root, node, data }) => {
          console.log(data)
          return (
            <div class="tree-item">
              {data.type ? <icon type="ios-folder" color="#5cadff" style="margin-right:5px"/> : ''}
              { data.title }
            </div>
          )
        }
      }
    },
    mounted () {
      Promise.all([getFolderList(), getFilelist()]).then(res => {
        this.folderTree = transferFolderToTree(putFileInFolder(res[0].data, res[1].data))
      })
    }
  }
</script>

<style lang="less">
  .folder-wrapper {
    width: fit-content;
    height: 300px;
    .tree-item{
      display: inline-block;
      line-height: 30px;
    }
  }
</style>
