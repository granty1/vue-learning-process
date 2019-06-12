<template>
    <ul>
        <div @click="handleClickTitle" class="a-submenu-title">
            <slot name="title"></slot>
        </div>
        <div v-show="showFlag" class="a-submenu-child">
            <slot></slot>
        </div>
        
    </ul>
</template>
<script>
export default {
    name: 'ASubMenu',
    data () {
        return{
            showFlag: false
        }
    },
    methods: {
        handleClickTitle () {
            this.showFlag = !this.showFlag
        }
    }
}
</script>
<style lang="less">
.a-submenu{
    &-title{
        background: palevioletred;
    }
    &-child{
        padding-left: 20px;
        li{
            list-style: none;
        }
    }
}
</style>

