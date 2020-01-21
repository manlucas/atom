/**
 * Created by GuangYu on 2019-12-12 .
 */
(function () {
    $.atoms.create_ecs = [
        {
            tag_code: "ori_url",
            type: "input",
            attrs: {
                name: gettext("dtcenter_api_url"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "AccessKeyId",
            type: "input",
            attrs: {
                name: gettext("AccessKeyId"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "AccessKeySecret",
            type: "input",
            attrs: {
                name: gettext("AccessKeySecret"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "SignatureMethod",
            type: "input",
            attrs: {
                name: gettext("签名方式"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "Version",
            type: "input",
            attrs: {
                name: gettext("API版本"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "regionId",
            type: "input",
            attrs: {
                name: gettext("区域 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "zoneId",
            type: "input",
            attrs: {
                name: gettext("可用区 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "departmentId",
            type: "input",
            attrs: {
                name: gettext("部门 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "projectId",
            type: "input",
            attrs: {
                name: gettext("项目 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "cpu",
            type: "input",
            attrs: {
                name: gettext("cpu 核数"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "memory",
            type: "input",
            attrs: {
                name: gettext("内存大小"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "imageId",
            type: "input",
            attrs: {
                name: gettext("镜像 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "vpcId",
            type: "input",
            attrs: {
                name: gettext("专有网络 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "vSwitchId",
            type: "input",
            attrs: {
                name: gettext("虚拟交换机 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "createEcsNum",
            type: "input",
            attrs: {
                name: gettext("待创建的 ECS 实例个数，取值范围为 1~50"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "systemDiskType",
            type: "input",
            attrs: {
                name: gettext("系统盘类型"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "securityGroupId",
            type: "input",
            attrs: {
                name: gettext("安全组 ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "chargeType",
            type: "input",
            attrs: {
                name: gettext("网络计费类型"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "bandwidth",
            type: "input",
            attrs: {
                name: gettext("公网出口带宽最大值"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "instanceType",
            type: "input",
            attrs: {
                name: gettext("实例类型"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "networkType",
            type: "input",
            attrs: {
                name: gettext("网络类型"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "instanceName",
            type: "input",
            attrs: {
                name: gettext("实例名称"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "diskTypeList",
            type: "input",
            attrs: {
                name: gettext("数据盘类型"),
                placeholder: gettext("非必填"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
         {
            tag_code: "diskSizeList",
            type: "input",
            attrs: {
                name: gettext("数据盘大小"),
                placeholder: gettext("非必填"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
         {
            tag_code: "diskDeviceList",
            type: "input",
            attrs: {
                name: gettext("数据盘挂载点"),
                placeholder: gettext("非必填"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
         {
            tag_code: "releaseWithEcs",
            type: "input",
            attrs: {
                name: gettext("设置数据盘是否随实例释放"),
                placeholder: gettext("非必填"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "password",
            type: "input",
            attrs: {
                name: gettext("设置实例密码"),
                placeholder: gettext("非必填"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "ioOptimized",
            type: "input",
            attrs: {
                name: gettext("I/O优化"),
                placeholder: gettext("非必填"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        }
   ]
})();