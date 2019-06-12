<template>
    <a-sub-menu>
        <div slot="title">{{ parent.title }}</div> 
        <template v-for="(item, i) in parent.children">
            <a-menu-item v-if="!item.children" :key="`a_menu_${index}_${i}`" >{{ item.title }}</a-menu-item>
            <re-sub-menu v-else :key="`re_sub_menu_${index}_${i}`" :parent="item" :index="`${index}_${i}`"></re-sub-menu>
        </template>
    </a-sub-menu>
</template>
<script>
import AMenuComponents from '@/components/menu'
export default {
    name:'ReSubMenu',
    components: {
        ...AMenuComponents
    },
    props: {
        parent: {
            type: Object,
            default: () => {
                return {}
            }
        },
        index : String
    }
}
</script>
