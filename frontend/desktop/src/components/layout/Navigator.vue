/**
* Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community
* Edition) available.
* Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
* Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* http://opensource.org/licenses/MIT
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*/
<template>
    <header>
        <router-link v-if="userType === 'maintainer' && view_mode === 'app'" to="/" class="header-logo" @click.native="onGoToPath(homeRoute)">
            <img :src="logo" class="logo" />
            <span class="header-title">{{i18n.title}}</span>
        </router-link>
        <span v-else class="header-logo">
            <img :src="logo" class="logo" />
            <span class="header-title">{{i18n.title}}</span>
        </span>
        <nav>
            <div class="navigator" v-if="!appmakerDataLoading">
                <template v-for="route in routeList">
                    <div
                        v-if="route.children && route.children.length"
                        :key="route.key"
                        :class="['nav-item', { 'active': isNavActived(route) }]"
                        @click="jumpToFirstPath(route)">
                        <span>{{route.name}}</span>
                        <div class="sub-nav">
                            <router-link
                                v-for="subRoute in route.children"
                                tag="a"
                                :key="subRoute.key"
                                :class="['sub-nav-item', { 'selected': isSubNavActived(subRoute) }]"
                                :to="getPath(subRoute)"
                                @click.native.stop="onGoToPath(subRoute)">
                                {{subRoute.name}}
                            </router-link>
                        </div>
                    </div>
                    <router-link
                        v-else
                        tag="a"
                        :key="route.key"
                        :class="['nav-item', { 'active': isNavActived(route) }]"
                        :to="getPath(route)"
                        @click.native="onGoToPath(route)">
                        {{route.name}}
                    </router-link>
                </template>
            </div>
        </nav>
        <div class="header-right clearfix">
            <ProjectSelector v-if="showHeaderRight" :disabled="disabled"></ProjectSelector>
            <div class="help-doc">
                <a
                    class="common-icon-dark-circle-question"
                    href="http://docs.bk.tencent.com/product_white_paper/gcloud/"
                    target="_blank">
                </a>
            </div>
            <div class="user-avatar">
                <span
                    class="common-icon-dark-circle-avatar"
                    v-bk-tooltips="{
                        content: username,
                        placement: 'bottom-end',
                        theme: 'light',
                        zIndex: 1001
                    }">
                </span>
            </div>
        </div>
    </header>
</template>
<script>
    import '@/utils/i18n.js'
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
    import ProjectSelector from './ProjectSelector.vue'
    import { errorHandler } from '@/utils/errorHandler.js'

    const ROUTE_LIST = {
        // 职能化中心导航
        functor_router_list: [
            {
                key: 'function',
                path: '/function/home/',
                name: gettext('职能化中心')
            }
        ],
        // 职能化中心导航
        auditor_router_list: [
            {
                key: 'audit',
                path: '/audit/home/',
                name: gettext('审计中心')
            }
        ],
        // 通用导航
        maintainer_router_list: [
            {
                key: 'template',
                name: gettext('流程模板'),
                children: [
                    {
                        key: 'template',
                        name: gettext('项目流程'),
                        path: '/template/home/'
                    },
                    {
                        key: 'commonTemplate',
                        name: gettext('公共流程'),
                        path: '/template/common/'
                    }
                ]
            },
            {
                key: 'periodic',
                path: '/periodic/home/',
                name: gettext('周期任务')
            },
            {
                key: 'taskflow',
                path: '/taskflow/home/',
                name: gettext('任务记录')
            },
            {
                key: 'appmaker',
                path: '/appmaker/home/',
                name: gettext('轻应用')
            },
            {
                key: 'project',
                path: '/project/home/',
                name: gettext('项目管理')
            },
            {
                key: 'admin',
                name: gettext('管理员入口'),
                children: [
                    {
                        key: 'manage',
                        parent: 'admin',
                        name: gettext('后台管理'),
                        path: '/admin/manage/source_manage/'
                    },
                    {
                        key: 'statistics',
                        parent: 'admin',
                        name: gettext('运营数据'),
                        path: '/admin/statistics/template/'
                    },
                    {
                        key: 'common',
                        parent: 'admin',
                        name: gettext('公共流程'),
                        path: '/admin/common/template/'
                    }
                ]
            }
        ]
    }

    export default {
        inject: ['reload'],
        name: 'Navigator',
        components: {
            ProjectSelector
        },
        props: ['appmakerDataLoading'],
        data () {
            return {
                logo: require('../../assets/images/logo/logo_icon.svg'),
                i18n: {
                    help: gettext('帮助文档'),
                    title: gettext('标准运维')
                },
                hasAdminPerm: false, // 是否拥有管理员入口查看权限
                homeRoute: {
                    key: 'home',
                    path: '/home/'
                }
            }
        },
        computed: {
            ...mapState({
                site_url: state => state.site_url,
                username: state => state.username,
                userType: state => state.userType,
                app_id: state => state.app_id,
                view_mode: state => state.view_mode,
                notFoundPage: state => state.notFoundPage,
                isSuperUser: state => state.isSuperUser
            }),
            ...mapState('project', {
                project_id: state => state.project_id
            }),
            ...mapState('appmaker', {
                appmakerTemplateId: state => state.appmakerTemplateId
            }),
            ...mapGetters('project', {
                projectList: 'userCanViewProjects'
            }),
            showHeaderRight () {
                return this.userType === 'maintainer' && this.view_mode !== 'appmaker' && this.projectList.length > 0
            },
            routeList () {
                if (this.view_mode === 'appmaker') {
                    return [
                        {
                            key: 'appmakerTaskCreate',
                            path: `/appmaker/${this.app_id}/newtask/${this.project_id}/selectnode`,
                            query: { template_id: this.appmakerTemplateId },
                            name: gettext('新建任务')
                        },
                        {
                            key: 'appmakerTaskList',
                            path: `/appmaker/${this.app_id}/task_home/`,
                            name: gettext('任务记录')
                        }
                    ]
                } else {
                    let routes = ROUTE_LIST[`${this.userType}_router_list`]

                    // 非管理员用户去掉管理员入口
                    if (!this.hasAdminPerm) {
                        routes = routes.filter(item => item.key !== 'admin')
                    }
                    return routes
                }
            },
            disabled () {
                const route = this.$route
                return route.path.indexOf('/admin/') === 0
            }
        },
        mounted () {
            this.initHome()
        },
        methods: {
            ...mapActions([
                'queryUserPermission'
            ]),
            ...mapActions('project', [
                'loadProjectList'
            ]),
            ...mapMutations([
                'setBizId'
            ]),
            ...mapMutations('project', [
                'setProjectPerm'
            ]),
            async initHome () {
                if (this.userType === 'maintainer' && this.view_mode !== 'appmaker') {
                    this.getAdminPerm()
                    const res = await this.loadProjectList({ limit: 0 })
                    this.setProjectPerm(res.meta)
                }
            },
            async getAdminPerm () {
                try {
                    const res = await this.queryUserPermission({
                        resource_type: 'admin_operate',
                        action_ids: JSON.stringify(['view'])
                    })
    
                    const hasCreatePerm = !!res.data.details.find(item => {
                        return item.action_id === 'view' && item.is_pass
                    })
                    if (hasCreatePerm) {
                        this.hasAdminPerm = true
                    }
                } catch (err) {
                    errorHandler(err, this)
                }
            },
            isNavActived (route) {
                const key = route.key
                // 轻应用打开
                if (this.view_mode === 'appmaker') {
                    if (this.$route.name === 'appmakerTaskExecute' || this.$route.name === 'appmakerTaskHome') {
                        return key === 'appmakerTaskList'
                    } else {
                        return key === 'appmakerTaskCreate'
                    }
                }

                // 职能化中心、审计中心打开
                if (this.userType === 'functor') {
                    return key === 'function'
                } else if (this.userType === 'auditor') {
                    return key === 'audit'
                }
                return new RegExp('^\/' + key).test(this.$route.path)
            },
            isSubNavActived (route) {
                let index = route.path.indexOf('/')
                for (let i = 0; i < 2; i++) {
                    index = route.path.indexOf('/', index + 1)
                }
                const newPath = route.path.substring(0, index + 1)
                return new RegExp('^' + newPath).test(this.$route.path)
            },
            getPath (route) {
                /** 404 页面时，导航统一跳转到首页 */
                if (this.notFoundPage) {
                    if (['functor', 'auditor'].indexOf(this.userType) === -1
                        && this.view_mode !== 'appmaker'
                    ) {
                        return '/'
                    }
                }

                let path
                if (route.key === 'appmakerTaskCreate') {
                    path = `${route.path}?template_id=${this.appmakerTemplateId}`
                } else if (
                    this.userType !== 'maintainer'
                    || route.key === 'project'
                    || route.parent === 'admin'
                    || (isNaN(this.project_id) || this.project_id === '')
                ) {
                    path = `${route.path}`
                } else {
                    path = { path: `${route.path}${this.project_id}/`, query: route.query }
                }
                return path
            },
            onGoToPath (route) {
                const path = this.getPath(route)
                // 点击当前导航刷新页面
                if (path === this.$route.path || path.path === this.$route.path) {
                    this.refreshCurrentPage()
                }
            },
            onClickSubNav (route) {
                this.onGoToPath(route)
            },
            refreshCurrentPage () {
                this.reload()
            },
            /**
             * 默认跳转到第一个子级
             * @param {Object} route -路由对象
             */
            jumpToFirstPath (route) {
                const firstPath = this.getPath(route.children[0])
                if (this.$route.path === firstPath.path) return
                this.$router.push(firstPath)
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '@/scss/config.scss';
header {
    min-width: 1334px;
    padding: 0 25px;
    height: 50px;
    font-size: 14px;
    background: #182131;
    .header-logo{
        float: left;
        height: 100%;
        line-height: 50px;
        .logo,.header-title{
            display: inline-block;
            vertical-align: middle;
        }
        .logo {
            width: 28px;
            height: 28px;
        }
        .header-title{
            margin-left: 6px;
            font-size: 18px;
            color: #979ba5;
        }
    }
    nav {
        float: left;
        margin-left: 120px;
    }
    .nav-item {
        position: relative;
        display: inline-block;
        padding: 0 17px;
        min-width: 90px;
        height: 50px;
        line-height: 50px;
        color: #979ba5;;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        transition: all .5s linear;
        &:hover {
            color: $whiteDefault;
            .sub-nav {
                display: inline-block;
            }
        }
        &.active {
            color: $whiteDefault;
            background: $blackDefault;
        }
    }
    /*二级导航*/
    .sub-nav {
        display: none;
        position: absolute;
        top: 50px;
        left: 0;
        min-width: 100%;
        background: $whiteDefault;
        border: 1px solid #c4c6cc;
        border-radius: 2px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
        z-index: 1001;
        .sub-nav-item {
            display: block;
            padding: 0 10px;
            height: 35px;
            line-height: 35px;
            color: #63656E;
            white-space: nowrap;
            &.selected {
                color: #313238;
                background: #f0f1f5;
            }
            &:hover {
                color: #313238;
                background: #f0f1f5;
            }
        }
    }
    /*导航右侧区域*/
    .header-right {
        float: right;
        .help-doc {
            float: left;
            margin-left: 25px;
            height: 50px;
            font-size: 16px;
            .common-icon-dark-circle-question {
                margin-top: 17px;
                display: inline-block;
                color: #63656e;
                &:hover {
                    color: #616d7d;
                }
            }

        }
        .user-avatar {
            float: left;
            margin-left: 25px;
            height: 50px;
            font-size: 16px;
            color: #63656e;
            .common-icon-dark-circle-avatar {
                display: inline-block;
                margin-top: 17px;
            }
        }
        /deep/ .bk-select.is-disabled {
            background: none;
        }
    }
}
</style>
