/**
 * Created by GuangYu on 2019-12-12 .
 */
(function () {
    $.atoms.attach_disk = [
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
            tag_code: "device",
            type: "input",
            attrs: {
                name: gettext("挂载点"),
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
            tag_code: "deleteWithInstance",
            type: "input",
            attrs: {
                name: gettext("设置是否随实例释放"),
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
            tag_code: "instanceId",
            type: "input",
            attrs: {
                name: gettext("ECS实例ID"),
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
            tag_code: "diskId",
            type: "input",
            attrs: {
                name: gettext("磁盘ID"),
                placeholder: gettext("必填"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        }
   ]
})();