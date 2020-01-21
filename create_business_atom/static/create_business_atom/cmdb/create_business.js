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

(function () {
    $.atoms.cmdb_create_business = [ /* create_business 标准插件后台定义的 code */
        {
            tag_code: 'cmdb_bk_biz_name', /* 参数 code，请保持全局唯一，命名规范为"系统名_参数名" */
            type: 'input', /* 前端表单类型，可选 input、textarea、radio、checkbox、select、datetime、datatable、upload、combine等 */
            attrs: { /* 对应type的属性设置，如 name、validation等 */
                name: gettext('业务名'),
                placeholder: gettext('请输入业务名'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_biz_maintainer',
            type: 'input',
            attrs: {
                name: gettext('运维人员'),
                placeholder: gettext('请输入运维人员'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_biz_productor',
            type: 'input',
            attrs: {
                name: gettext('产品人员'),
                placeholder: gettext('请输入产品人员'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_biz_developer',
            type: 'input',
            attrs: {
                name: gettext('开发人员'),
                placeholder: gettext('请输入开发人员'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_biz_tester',
            type: 'input',
            attrs: {
                name: gettext('测试人员'),
                placeholder: gettext('请输入测试人员'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_time_zone',
            type: 'input',
            attrs: {
                name: gettext('时区'),
                placeholder: gettext('请输入时区'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_language',
            type: 'input',
            attrs: {
                name: gettext('语言'),
                placeholder: gettext('"1"代表中文, "2"代表英文'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_supplier_id',
            type: 'input',
            attrs: {
                name: gettext('开发商ID'),
                placeholder: gettext('请输入开发商ID'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
    ]

})();


