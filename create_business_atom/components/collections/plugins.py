# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community
Edition) available.
Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""

import logging

from django.utils.translation import ugettext_lazy as _

from pipeline.core.flow.activity import Service
from pipeline.component_framework.component import Component
from config.__init__ import APP_ID, APP_TOKEN
from gcloud.conf import settings

logger = logging.getLogger('celery')
get_client_by_user = settings.ESB_GET_CLIENT_BY_USER

__group_name__ = _(u'测试专用(CMDB)')  # 标准插件所属分类（一般是对应 API 的系统简称，如配置平台(CMDB)


class CreateBusinessService(Service):  # 后台执行逻辑
    __need_schedule__ = False  # 是否是异步标准插件（包括异步轮询和异步回调），默认为 False

    def execute(self, data, parent_data):  # 标准插件执行逻辑，包含前端参数获取、API 参数组装、结果解析、结果输出
        executor = parent_data.inputs.executor
        client = get_client_by_user(executor)

        create_bk_biz_name = data.inputs.cmdb_bk_biz_name  # 业务名
        create_bk_biz_maintainer = data.inputs.cmdb_bk_biz_maintainer  # 运维人员
        create_bk_biz_productor = data.inputs.cmdb_bk_biz_productor  # 产品人员
        create_bk_biz_developer = data.inputs.cmdb_bk_biz_developer  # 开发人员
        create_bk_biz_tester = data.inputs.cmdb_bk_biz_tester  # 测试人员
        create_time_zone = data.inputs.cmdb_time_zone  # 时区
        create_language = data.inputs.cmdb_language  # 语言
        create_bk_supplier_id = data.inputs.cmdb_bk_supplier_id  # 开发商ID
        data_parameter = {
            'bk_biz_name': create_bk_biz_name,
            'bk_biz_maintainer': create_bk_biz_maintainer,
            'bk_biz_productor': create_bk_biz_productor,
            'bk_biz_developer': create_bk_biz_developer,
            'bk_biz_tester': create_bk_biz_tester,
            'time_zone': create_time_zone,
            'language': create_language,
            'bk_supplier_id': create_bk_supplier_id
        }
        api_kwargs = {
            'bk_app_code': APP_ID,
            'bk_app_secret': APP_TOKEN,
            'bk_username': executor,
            'data': data_parameter
        }

        api_result = client.cc.create_business(api_kwargs)  # 调用create_business接口
        logger.info('cc result: {result}, api_kwargs: {kwargs}'.format(result=api_result, kwargs=api_kwargs))
        if api_result['result']:
            data.set_outputs('bk_biz_id', api_result['bk_biz_id'])
            return True
        else:
            data.set_outputs('ex_data', api_result['message'])
            return False

    def outputs_format(self):
        return [
            self.OutputItem(name=_(u'结果数据1'), key='bk_biz_id', type='string')
        ]


class CreateBusinessComponent(Component):  # 标准插件定义，前后端服务绑定
    name = _(u'创建业务')
    code = 'cmdb_create_business'
    bound_service = CreateBusinessService
    # form = '%screate_business_atom/cmdb/create_business.js' % settings.STATIC_URL
    form = settings.STATIC_URL + '/create_business_atom/cmdb/create_business.js'


class CreateSetService(Service):  # 后台执行逻辑
    __need_schedule__ = False  # 是否是异步标准插件（包括异步轮询和异步回调），默认为 False

    def execute(self, data, parent_data):  # 标准插件执行逻辑，包含前端参数获取、API 参数组装、结果解析、结果输出
        executor = parent_data.inputs.executor
        client = get_client_by_user(executor)
        bk_cc_id = parent_data.inputs.biz_cc_id

        create_bk_set_name = data.inputs.cmdb_bk_set_name  # 集群名
        create_parent_id = bk_cc_id
        data_parameter = {
            'bk_parent_id': create_parent_id,
            'bk_set_name': create_bk_set_name
        }
        api_kwargs = {
            'bk_app_code': APP_ID,
            'bk_app_secret': APP_TOKEN,
            'bk_username': executor,
            'data': data_parameter
        }

        api_result = client.cc.create_set(api_kwargs)  # 调用create_set接口
        logger.info('cc result: {result}, api_kwargs: {kwargs}'.format(result=api_result, kwargs=api_kwargs))
        if api_result['result']:
            data.set_outputs('bk_set_id', api_result['bk_set_id'])
            return True
        else:
            data.set_outputs('ex_data', api_result['message'])
            return False

    def outputs_format(self):
        return [
            self.OutputItem(name=_(u'结果数据1'), key='bk_set_id', type='string')
        ]


class CreateSetComponent(Component):  # 标准插件定义，前后端服务绑定
    name = _(u'创建集群')
    code = 'cmdb_create_set'
    bound_service = CreateSetService
    # form = '%screate_business_atom/cmdb/create_set.js' % settings.STATIC_URL
    form = settings.STATIC_URL + 'create_business_atom/cmdb/create_set.js'


class CreateModuleService(Service):  # 后台执行逻辑
    __need_schedule__ = False  # 是否是异步标准插件（包括异步轮询和异步回调），默认为 False

    def execute(self, data, parent_data):  # 标准插件执行逻辑，包含前端参数获取、API 参数组装、结果解析、结果输出
        executor = parent_data.inputs.executor
        client = get_client_by_user(executor)

        create_bk_biz_id = data.inputs.cmdb_bk_biz_id  # 业务ID
        create_bk_set_id = data.inputs.cmdb_bk_set_id  # 集群ID
        create_bk_parent_id = data.inputs.cmdb_bk_parent_id  # 父节点ID
        create_bk_module_name = data.inputs.cmdb_bk_module_name  # 模块名
        data_parameter = {
            'bk_parent_id': create_bk_parent_id,
            'bk_module_name': create_bk_module_name,
        }
        api_kwargs = {
            'bk_app_code': APP_ID,
            'bk_app_secret': APP_TOKEN,
            'bk_username': executor,
            'bk_biz_id': create_bk_biz_id,
            'bk_set_id': create_bk_set_id,
            'data': data_parameter
        }

        api_result = client.cc.create_module(api_kwargs)  # 调用create_module接口
        logger.info('cc result: {result}, api_kwargs: {kwargs}'.format(result=api_result, kwargs=api_kwargs))
        if api_result['result']:
            data.set_outputs('bk_module_id', api_result['bk_module_id'])
            return True
        else:
            data.set_outputs('ex_data', api_result['message'])
            return False

    def outputs_format(self):
        return [
            self.OutputItem(name=_(u'结果数据1'), key='bk_module_id', type='string')
        ]


class CreateModuleComponent(Component):  # 标准插件定义，前后端服务绑定
    name = _(u'创建模块')
    code = 'cmdb_create_module'
    bound_service = CreateModuleService
    # form = '%screate_business_atom/cmdb/create_module.js' % settings.STATIC_URL
    form = settings.STATIC_URL + 'create_business_atom/cmdb/create_module.js'


class CreateHostService(Service):  # 后台执行逻辑
    __need_schedule__ = False  # 是否是异步标准插件（包括异步轮询和异步回调），默认为 False

    def execute(self, data, parent_data):  # 标准插件执行逻辑，包含前端参数获取、API 参数组装、结果解析、结果输出
        executor = parent_data.inputs.executor
        client = get_client_by_user(executor)

        create_bk_biz_id = data.inputs.cmdb_bk_biz_id  # 业务ID
        create_bk_host_innerip = data.cmdb.bk_host_innerip  # 主机内网IP
        create_import_from = '3'
        create_bk_cloud_id = data.cmdb_bk_cloud_id  # 主机云ID
        create_bk_module_id = data.cmdb_bk_module_id  # 主机云ID
        data_parameter = {
            'bk_host_innerip': create_bk_host_innerip,
            'import_from': create_import_from,
            'bk_cloud_id': create_bk_cloud_id
        }
        api_kwargs = {
            'bk_app_code': APP_ID,
            'bk_app_secret': APP_TOKEN,
            'bk_username': executor,
            'host_info': data_parameter
        }

        api_result_add_host = client.cc.add_host_to_resource(api_kwargs)  # 调用create_business接口
        logger.info('cc result: {result}, api_kwargs: {kwargs}'.format(result=api_result_add_host, kwargs=api_kwargs))
        if api_result_add_host['result']:
            api_kwargs = {
                'bk_app_code': APP_ID,
                'bk_app_secret': APP_TOKEN,
                'bk_username': executor,
                'host_property_filter': {
                    'condition': 'AND',
                    'rules': [{
                        'field': 'bk_host_innerip',
                        'operator': 'equal',
                        'value': create_bk_host_innerip
                    }]
                }
            }
            api_result_serach_host = client.cc.list_hosts_without_biz(api_kwargs)
            if api_result_serach_host['result']:
                bk_host_id = api_result_serach_host['data']['info'][0]['bk_host_id']
                api_kwargs = {
                    'bk_app_code': APP_ID,
                    'bk_app_secret': APP_TOKEN,
                    'bk_username': executor,
                    'bk_biz_id': create_bk_biz_id,
                    'bk_host_id': [
                        bk_host_id
                    ]
                }
                api_result_transfer_resourcehost_to_idlemodule = client.cc.transfer_resourcehost_to_idlemodule(
                    api_kwargs)
                if api_result_transfer_resourcehost_to_idlemodule['result']:
                    api_kwargs = {
                        'bk_app_code': APP_ID,
                        'bk_app_secret': APP_TOKEN,
                        'bk_username': executor,
                        'bk_biz_id': create_bk_biz_id,
                        'is_increment': True,
                        'bk_module_id': [
                            int(create_bk_module_id)
                        ],
                        'bk_host_id': [
                            bk_host_id
                        ],
                    }
                    api_result_transfer_host_module = client.cc.transfer_resourcehost_to_idlemodule(api_kwargs)
                    if api_result_transfer_host_module['result']:
                        data.set_outputs('bk_host_id', bk_host_id)
                        return True
                    else:
                        data.set_outputs('ex_data', api_result_transfer_host_module['message'])
                    pass
                else:
                    data.set_outputs('ex_data', api_result_transfer_resourcehost_to_idlemodule['message'])
            else:
                data.set_outputs('ex_data', api_result_serach_host['message'])
        else:
            data.set_outputs('ex_data', api_result_add_host['message'])
            return False

    def outputs_format(self):
        return [
            self.OutputItem(name=_(u'结果数据1'), key='bk_biz_id', type='string')
        ]


class CreateHostComponent(Component):  # 标准插件定义，前后端服务绑定
    name = _(u'创建主机')
    code = 'cmdb_create_host'
    bound_service = CreateHostService
    # form = '%screate_business_atom/cmdb/create_host.js' % settings.STATIC_URL
    form = settings.STATIC_URL + 'create_business_atom/cmdb/create_host.js'
