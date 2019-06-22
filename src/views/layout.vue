<template>
    <div class="layout-wrapper">
        <Layout class="layout-outer">
            <Sider collapsible hide-trigger v-model="collapsed" breakpoint="md">
                <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
            </Sider>
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
import SideMenu from '@/components/side-menu'
export default {
    data () {
        return {
            collapsed: false,
            menuList: [
                {
                    title: '文章管理',
                    icon: 'ios-analytics'
                },
                {
                    title: '用户管理',
                    icon: 'ios-archive'
                },
                {
                    title: '权限管理',
                    icon: 'logo-apple',
                    children: [
                        {
                            title: '用户权限',
                            icon: 'ios-aperture'
                        },
                        {
                            title: '管理员权限',
                            icon: 'ios-cafe-outline',
                            children: [
                                {
                                    title: '前台',
                                    icon:'logo-chrome'
                                },
                                {
                                    title: '后台',
                                    icon:'md-cloudy-night'
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    },
    components: {
        SideMenu
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
    height: 100%
}
</style>
