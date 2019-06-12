<template>
    <li>
        <div class="a-menu-item">
            <slot></slot>
        </div>
        
    </li>
</template>
<script>
export default {
    name: 'AMenuItem'
}
</script>
<style lang="less">
.a-menu-item{
    background: pink;
    padding: 0px;
}
</style>
