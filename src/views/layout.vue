<template>
    <div class="layout-wrapper">
        <Layout class="layout-outer">
            <Sider collapsible hide-trigger v-model="collapsed" breakpoint="md"></Sider>
            <Layout>
                <Header class="layout-header-bar" >
                    <Icon :class="triggerClasses" type="md-menu" :size="32" @click.native="handleCollapsed"></Icon>
                </Header>
                <Content class="content-con">
                    <Card class="page-card">
                        <router-view></router-view>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            collapsed: false
        }
    },
    methods:{
        handleCollapsed (){
            this.collapsed = !this.collapsed
        }
    },
    computed: {
        triggerClasses () {
            return [
                'trigger-icon',
                this.collapsed ? 'rotate' : ''
            ]
        }
    }
}
</script>
<style lang="less">
.layout-wrapper, .layout-outer{
    height: 100%;
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        padding: 0 20px;
        .trigger-icon{
            cursor: pointer;
            &.rotate {
                transform: rotate(-90deg);
                transition: transform .3s ease;
            }
        }
    }
}
.content-con{
    padding: 10px;
}
.page-card{
    min-height: 100%;
}
</style>
