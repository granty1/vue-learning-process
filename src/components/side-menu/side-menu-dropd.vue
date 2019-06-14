<template>
    <Dropdown placement="right-start" @on-click="handleClick"> 
        <span class="drop-menu-span" :style="spanStyle" >
            <Icon :type="parent.icon" :color="iconColor" :size="iconSize" :class="iconClass"/>
            <span v-if="showTitle">{{parent.title}}</span>
        </span>
        <DropdownMenu  slot="list">
            <template v-for="(item, i) in parent.children">
                <side-menu-dropd
                v-if="item.children" 
                :key="`side_menu_drop_${i}`" 
                :parent="item"></side-menu-dropd>
                <DropdownItem
                v-else
                :key="`drop-item-${i}`"
                :name="item.title">
                <Icon :type="item.icon" />
                {{item.title}}</DropdownItem>
            </template>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
import { type } from 'os';
export default {
    name: 'SideMenuDropd',
    props: {
        parent: {
            type: Object,
            default: () => ({})
        },
        iconColor:{
            type: String,
            default: '#515a6e'
        },
        showTitle: {
            type: Boolean,
            default: true
        },
        iconSize:{
            type: String,
            default: ''
        }
    },
    computed: {
        spanStyle () {
            return {
                textAlign: this.showTitle ? 'left' : 'center',
                paddingLeft: this.showTitle ? '16px' : '',
                cursor: 'pointer'
            }
        },
        iconClass (){
            return [
                this.showTitle ? '' : 'icon-style'
            ]
        }
    },
    methods: {
        handleClick (name){
            if(!this.showTitle)console.log(name)
        }
    }
}
</script>

<style lang="less">
.icon-style{
    margin-left: 14px;
    margin-top: 8px;
}
</style>

