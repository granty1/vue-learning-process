<template>
    <dir class="side-outer">
        <slot></slot>
        <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
            <template v-for="(item, index) in list">
                <side-menu-submenu 
                v-if="item.children" 
                :key="`sub-menu-${index}`" 
                :parent="item"
                :index="`n-${index}`"></side-menu-submenu>
                <menu-item 
                v-else 
                :key="`sub-menu-${index}`" 
                :name="`n-${index}`">
                <Icon :type="item.icon" />
                {{item.title}}</menu-item>
            </template>
        </Menu>
        <div v-show="collapsed" class="drop-wrapper">
            <template v-for="(item, index) in list">
                <side-menu-dropd 
                v-if="item.children"
                :parent="item"
                icon-color="#fff"
                :show-title="false"
                icon-size="30"></side-menu-dropd>
                <Tooltip
                v-else 
                :content="item.title" 
                placement="right" 
                :key="`drop_${item.title}`">
                    <a class="drop-menu" @click="hadleClick(item.title)">
                        <Icon :type="item.icon" color="#fff" :size="30"/>
                    </a>
                </Tooltip>
            </template>
        </div>
    </dir>
</template>

<script>
import SideMenuSubmenu from './side-menu-submenu'
import SideMenuDropd from './side-menu-dropd'
export default {
    name: 'SideMenu',
    props: {
        collapsed: {
            type: Boolean,
            default: false
        },
        list : {
            type: Array,
            default: () => []
        }
    },
    components: {
        SideMenuSubmenu,
        SideMenuDropd
    },
    methods:{
        handleSelect (name) {
            console.log(name)
        },
        hadleClick (name){
            console.log(name)
        }
    }
}
</script>

<style lang="less">
.side-outer{
    width: 100%;
    padding: 0;
    margin: 0;
}
.ivu-tooltip, .drop-menu{
    width: 100%;
    display: block;
    padding: 8px;
}
.ivu-icon{
    padding: 0 auto;
}
</style>

