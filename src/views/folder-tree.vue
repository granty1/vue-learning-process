<template>
  <div class="folder-wrapper">
    <FolderTree
      :folder-list.sync="folderList"
      :file-list.sync="fileList"
      :folder-drop-list="folderDropList"
      :file-drop-list="fileDropList"
      :before-delete="beforeDelete"></FolderTree>
  </div>
</template>

<script>
  import { getFilelist, getFolderList } from '../api/data'
  import FolderTree from '@/components/folder-tree'
  export default {
    name: 'folder-tree',
    data () {
      return {
        fileList: [],
        folderList: [],
        folderTree: [],
        folderDropList: [
          {
            name: 'rename',
            title: '重命名'
          },
          {
            name: 'del',
            title: '删除文件夹'
          },
          {
            name: 'add',
            title: '添加子节点'
          }
        ],
        fileDropList: [
          {
            name: 'rename',
            title: '重命名'
          },
          {
            name: 'del',
            title: '删除文件'
          },
          {
            name: 'add',
            title: '添加节点'
          }
        ]
      }
    },
    components: {
      FolderTree
    },
    mounted () {
      Promise.all([getFolderList(), getFilelist()]).then(res => {
        this.folderList = res[0].data
        this.fileList = res[1].data
      })
    },
    methods: {
      beforeDelete() {
        return new Promise((resolve,reject) => {
          let error = null
          if (!error) {
            resolve()
          } else reject(error)
        })
      }
    }
  }
</script>

<style lang="less">
  .folder-wrapper {
    width: 300px;

  }
</style>
