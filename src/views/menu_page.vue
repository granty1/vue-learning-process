<template>
    <div class="menu-box">
        <a-menu>
            <template v-for="(item, index) in list">
                <a-menu-item v-if="!item.children" :key="`a-menu_item_${index}`">{{ item.title }}</a-menu-item>
                <re-sub-menu v-else :key="`re_sub_menu_${index}`" :parent="item" :index="`${index}`"></re-sub-menu>
            </template>
        </a-menu>
    </div>
</template>
<script>
import AMenuComponents from '@/components/menu'
import ReSubMenu from './re-submenu.vue'
export default {
    name: 'menu_page',
    components: {
        ...AMenuComponents,
        ReSubMenu
    },
    data() {
        return {
            list: [
                {
                    title: '111'
                },
                {
                    title: '222'
                },
                {
                    title: '333'
                },
                {
                    title: '444',
                    children:[
                        {
                            title: '4441'
                        },
                        {
                            title: '4442',
                            children: [
                                {
                                    title: '44421'
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less">
.menu-box{
    width: 300px;
    height: 400px;
}
</style>

