<template>
    <div class="split-pane-on">
        <split-pane :value="0.5">
                <split-pane slot="left"></split-pane>
            <div slot="right">
                <span>right</span>
            </div>
        </split-pane>
    </div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
    components: {
        SplitPane
    }
}
</script>
<style lang="less">
.split-pane-on{
    height: 300px;
    width: 600px;
    background: paleturquoise;
}
</style>

