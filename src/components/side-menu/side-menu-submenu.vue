<template>
    <Submenu :name="index">
        <template slot="title">
            <Icon 
            :type="parent.icon"/>
            {{parent.title}}
        </template>
        <template v-for="(item, i) in parent.children">
                <side-menu-submenu 
                v-if="item.children" 
                :key="`sub-menu-sub-menu-chil-${i}`" 
                :parent="item"
                :index="`${index}-${i}`"></side-menu-submenu>
                <menu-item 
                v-else 
                :key="`sub-menu-chil-${i}`" 
                :name="`${index}-${i}`">
                <Icon :type="item.icon" />
                {{item.title}}</menu-item>
            </template>
    </Submenu>
</template>
<script>
export default {
    name: 'SideMenuSubmenu',
    props: {
        parent: {
            type: Object,
            default: () => ({})
        },
        index: {
            type: String,
            default: 0
        }
    }
}
</script>
<style lang="less">

</style>
