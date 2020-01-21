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

from __future__ import absolute_import

__all__ = ['celery_app', 'RUN_VER', 'APP_CODE', 'SECRET_KEY', 'BASE_DIR']

import os

# This will make sure the app is always imported when
# Django starts so that shared_task will use this app.
from blueapps.core.celery import celery_app

# app 基本信息默认设置，本地开发可以修改这里，预发布环境和正式环境会从环境变量自动获取
RUN_VER = 'open'
# APP_ID = 'bk_sops'
# APP_TOKEN = '124fcbe0-b49b-45ba-a133-79cb7b94a55c'  # TODO 填写APP_ID、APP_TOKEN、BK_PAAS_HOST
# BK_PAAS_HOST = 'https://paas.ho.ncits'

APP_ID = 'test-wxning'
APP_TOKEN = '018566de-5e53-4658-863b-4aef8593bbb7'
BK_PAAS_HOST = 'http://paas.bkwxning.com'

# APP_TOKEN = '312dda0e-7826-470a-acd5-598269185f11'
# BK_PAAS_HOST = 'http://paas.szbke.com'
BK_URL = BK_PAAS_HOST

APP_CODE = APP_ID = os.environ.get('APP_ID', APP_ID)
SECRET_KEY = APP_TOKEN = os.environ.get('APP_TOKEN', APP_TOKEN)
RUN_VER = os.environ.get('RUN_VER', RUN_VER)

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(
    __file__)))
