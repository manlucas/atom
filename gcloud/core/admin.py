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

from gcloud.core import models
from django.contrib import admin


@admin.register(models.Business)
class BusinessAdmin(admin.ModelAdmin):
    list_display = ['cc_id', 'cc_name', 'cc_company', 'executor']
    list_filter = ('cc_company',)
    search_fields = ['cc_name', 'cc_id', 'cc_company']
    editable_fields = ['cc_name', 'cc_id', 'cc_company', 'executor']


@admin.register(models.UserBusiness)
class UserBusinessAdmin(admin.ModelAdmin):
    list_display = ['user', 'default_buss']
    search_fields = ['user', 'default_buss']


@admin.register(models.EnvironmentVariables)
class EnvironmentVariablesAdmin(admin.ModelAdmin):
    list_display = ['key', 'name', 'value']
    search_fields = ['key', 'name']


@admin.register(models.Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'time_zone', 'creator', 'desc', 'from_cmdb', 'bk_biz_id', 'is_disable']
    search_fields = ['id', 'name']


@admin.register(models.UserDefaultProject)
class UserDefaultProjectAdmin(admin.ModelAdmin):
    list_display = ['username', 'default_project']
    search_fields = ['username']
