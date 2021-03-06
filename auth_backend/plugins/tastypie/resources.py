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

from auth_backend.plugins.utils import search_all_resources_authorized_actions


class BkSaaSLabeledDataResourceMixin(object):
    def dehydrate(self, bundle):
        username = bundle.request.user.username
        auth_resource = getattr(self._meta, 'auth_resource', None)
        if auth_resource is None:
            return bundle

        inspect = getattr(self._meta, 'inspect', None)
        scope_id = inspect.scope_id(bundle) if inspect else None

        resources_perms = search_all_resources_authorized_actions(username, auth_resource.rtype, auth_resource,
                                                                  scope_id=scope_id)
        obj_id = str(inspect.resource_id(bundle)) if inspect else str(bundle.obj.pk)
        auth_actions = resources_perms.get(obj_id, [])
        bundle.data['auth_actions'] = auth_actions
        return bundle

    def alter_list_data_to_serialize(self, request, data):
        auth_resource = getattr(self._meta, 'auth_resource', None)
        if auth_resource is None:
            return data
        data['meta']['auth_operations'] = auth_resource.operations
        data['meta']['auth_resource'] = auth_resource.base_info()
        return data

    def alter_detail_data_to_serialize(self, request, data):
        auth_resource = getattr(self._meta, 'auth_resource', None)
        if auth_resource is None:
            return data

        resource_info = auth_resource.base_info()
        if not resource_info['scope_id']:
            inspect = getattr(self._meta, 'inspect', None)
            resource_info['scope_id'] = inspect.scope_id(data) if inspect else None

        data.data['auth_operations'] = auth_resource.operations
        data.data['auth_resource'] = resource_info

        return data
