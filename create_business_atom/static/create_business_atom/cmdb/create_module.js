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
    $.atoms.cmdb_create_module = [ /* create_business 标准插件后台定义的 code */
        {
            tag_code: 'cmdb_bk_biz_id', /* 参数 code，请保持全局唯一，命名规范为"系统名_参数名" */
            type: 'input', /* 前端表单类型，可选 input、textarea、radio、checkbox、select、datetime、datatable、upload、combine等 */
            attrs: { /* 对应type的属性设置，如 name、validation等 */
                name: gettext('业务ID'),
                placeholder: gettext('请输入业务ID'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_set_id',
            type: 'input',
            attrs: {
                name: gettext('集群ID'),
                placeholder: gettext('请输入集群ID'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_parent_id',
            type: 'input',
            attrs: {
                name: gettext('父节点ID'),
                placeholder: gettext('请输入父节点ID'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        },
        {
            tag_code: 'cmdb_bk_module_name',
            type: 'input',
            attrs: {
                name: gettext('模块名'),
                placeholder: gettext('请输入模块名'),
                hookable: true,
                validation: [
                    {
                        type: 'required'
                    }
                ]
            }
        }
    ]

})();


