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
    <div id="app">
        <navigator
            v-if="!hideHeader"
            :appmaker-data-loading="appmakerDataLoading" />
        <div class="main-container">
            <router-view v-if="isRouterViewShow"></router-view>
        </div>
        <UserLoginModal ref="userLogin"></UserLoginModal>
        <ErrorCodeModal ref="errorModal"></ErrorCodeModal>
        <PermissionModal ref="permissionModal"></PermissionModal>
        <permissionApply
            v-if="permissinApplyShow"
            ref="permissionApply"
            :permission-data="permissionData">
        </permissionApply>
    </div>
</template>
<script>
    import '@/utils/i18n.js'
    import { mapState, mapMutations, mapActions } from 'vuex'
    import bus from '@/utils/bus.js'
    import { errorHandler } from '@/utils/errorHandler.js'
    import { setConfigContext } from '@/config/setting.js'
    import permission from '@/mixins/permission.js'
    import UserLoginModal from '@/components/common/modal/UserLoginModal.vue'
    import ErrorCodeModal from '@/components/common/modal/ErrorCodeModal.vue'
    import PermissionModal from '@/components/common/modal/PermissionModal.vue'
    import Navigator from '@/components/layout/Navigator.vue'
    import permissionApply from '@/components/layout/permissionApply.vue'

    export default {
        name: 'App',
        components: {
            Navigator,
            UserLoginModal,
            ErrorCodeModal,
            permissionApply,
            PermissionModal
        },
        mixins: [permission],
        provide () {
            return {
                reload: this.reload
            }
        },
        data () {
            return {
                permissinApplyShow: false,
                permissionData: {
                    type: 'project', // 无权限类型: project、other
                    permission: []
                },
                isRouterAlive: false,
                appmakerDataLoading: false // 轻应用加载 app 详情,
            }
        },
        computed: {
            ...mapState({
                'hideHeader': state => state.hideHeader,
                'viewMode': state => state.view_mode,
                'appId': state => state.app_id,
                'site_url': state => state.site_url
            }),
            ...mapState('project', {
                'project_id': state => state.project_id
            }),
            isRouterViewShow () {
                return !this.permissinApplyShow && this.isRouterAlive
            }
        },
        watch: {
            '$route' (val) {
                this.handleRouteChange()
            }
        },
        created () {
            bus.$on('showLoginModal', src => {
                this.$refs.userLogin.show(src)
            })
            bus.$on('showErrorModal', (type, responseText, title) => {
                this.$refs.errorModal.show(type, responseText, title)
            })
            bus.$on('togglePermissionApplyPage', (show, type, permission) => {
                this.permissinApplyShow = show
                this.permissionData = {
                    type,
                    permission
                }
                if (!show) {
                    this.isRouterAlive = true
                }
            })
            bus.$on('showPermissionModal', data => {
                this.$refs.permissionModal.show(data)
            })
            bus.$on('showMessage', info => {
                this.$bkMessage({
                    message: info.message,
                    isSingleLine: false,
                    theme: info.theme || 'error'
                })
            })

            /**
             * 兼容标准插件配置项里，异步请求用到的全局弹窗提示
             */
            window.show_msg = (message, type) => {
                this.$bkMessage({
                    message,
                    isSingleLine: false,
                    theme: type
                })
            }
        },
        mounted () {
            this.initData()
        },
        methods: {
            ...mapActions('appmaker/', [
                'loadAppmakerDetail'
            ]),
            ...mapActions('project', [
                'loadProjectDetail'
            ]),
            ...mapMutations('appmaker/', [
                'setAppmakerTemplateId',
                'setAppmakerDetail'
            ]),
            ...mapMutations('project', [
                'setProjectName',
                'setProjectActions'
            ]),
            initData () {
                if (this.$route.meta.project && this.project_id !== '' && !isNaN(this.project_id)) {
                    this.getProjectDetail()
                }
                if (this.viewMode === 'appmaker') {
                    this.getAppmakerDetail()
                }
            },
            async getProjectDetail () {
                try {
                    const projectDetail = await this.loadProjectDetail(this.project_id)
                    this.setProjectName(projectDetail.name)
                    this.setProjectActions(projectDetail.auth_actions)
                    if (this.$route.name === 'templateEdit' && this.$route.query.common) {
                        setConfigContext(this.site_url)
                    } else {
                        setConfigContext(this.site_url, projectDetail)
                    }
                } catch (err) {
                    errorHandler(err, this)
                }
            },
            async getAppmakerDetail () {
                this.appmakerDataLoading = true
                try {
                    const res = await this.loadAppmakerDetail(this.appId)
                    this.setAppmakerDetail(res)
                } catch (e) {
                    errorHandler(e, this)
                } finally {
                    this.appmakerDataLoading = false
                }
            },
            handleRouteChange () {
                this.isRouterAlive = true
                if (!this.$route.meta.project) {
                    this.permissinApplyShow = false
                    setConfigContext(this.site_url)
                } else {
                    if (this.project_id !== '' && !isNaN(this.project_id)) {
                        this.permissinApplyShow = false
                        this.getProjectDetail()
                    } else { // 需要项目id页面，id为空是显示无权限页面，申请按钮跳转到项目管理页面
                        this.permissinApplyShow = true
                    }
                }
                if (this.$route.query.template_id !== undefined) {
                    this.setAppmakerTemplateId(this.$route.query.template_id)
                }
            },
            reload () {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>
<style lang="scss">
    @import './scss/app.scss';
    @import '@/scss/config.scss';
    html,body {
        height:100%;
    }
    body.bk-dialog-shown {
        overflow: hidden;
    }
    #app {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        min-width: 1320px;
    }
    .main-container {
        width: 100%;
        height: calc(100% - 50px);
        min-width: 1320px;
        min-height: calc(100% - 50px);
        overflow-x: hidden;
    }
</style>
