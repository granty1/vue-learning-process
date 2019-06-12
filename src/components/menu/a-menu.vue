<template>
    <div class="a-menu">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'AMenu'
}
</script>
<style lang="less">
.a-menu{
    list-style: none;
    ul{
        padding: 0px;
        margin: 0px;
    }
    color: aliceblue
}
</style>
