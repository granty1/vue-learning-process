<template>
    <div class="split-panr-wrapper" ref="outer">
        <div class="pane pane-left" :style="{ width: offSetLeftPercent }">
            <slot name="left"></slot>
        </div>
        <div class="pane-trigger-con" @mousedown="handleMouseMoveDown" :style="{ left: triggerLeft, width: `${triggerWidth}px`}"></div>
        <div class="pane pane-right" :style="{ left: offSetLeftPercent }">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SplitPane',
    props: {
        triggerWidth: {
            type: Number,
            default: 8
        },
        minWidth: {
            type: Number,
            default: 0.1
        },
        maxWidth : {
            type : Number,
            default: 0.9
        },
        value: {
            type: Number,
            default: 0.5
        }
    },
    data() {
        return {
            offSetLeft: this.value,
            canMove: false
        }
    },
    computed: {
        offSetLeftPercent () {
            return  `${this.offSetLeft*100}%`
        },
        triggerLeft () {
            return `calc(${this.offSetLeft*100}% - ${this.triggerWidth / 2}px)`
        }
    },
    methods: {
        addWidth () {
            this.offSetLeft+=0.1
        },
        handleMouseMoveDown (event) {
            document.addEventListener('mousemove', this.handleMouseMove)
            document.addEventListener('mouseup', this.handleMouseUp)
            this.canMove = true
        },
        handleMouseUp (event) {
            this.canMove = false
        },
        handleMouseMove (event) {
            if (!this.canMove) return
            const outer = this.$refs.outer.getBoundingClientRect()
            const offLeft = (event.pageX - outer.left) / outer.width
            if (offLeft * outer.width > outer.width / 2){
                this.offSetLeft = offLeft > this.maxWidth ? 
                                    this.maxWidth : offLeft
            }else{
                this.offSetLeft = offLeft < this.minWidth ?
                                    this.minWidth : offLeft
            }
        }
    }
}
</script>
<style lang="less">
.split-panr-wrapper{
    height: 100%;
    position: relative;
    .pane{
        top: 0;
        position: absolute;
        height: 100%;
        &-left{
            background: palegreen;
        }
        &-right{
            right: 0;
            bottom: 0;
            background: papayawhip;
        }
        &-trigger-con{
            width: 8px;
            height: 100%;
            background: #ffffff;
            position: absolute;
            top: 0;
            cursor: w-resize;
            z-index: 10;
            user-select: none;
        }
    }
}
</style>
