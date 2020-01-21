/**
 * Created by GuangYu on 2019-12-12 .
 */
(function () {
    $.atoms.create_disk = [
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
            tag_code: "category",
            type: "input",
            attrs: {
                name: gettext("磁盘类型"),
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
            tag_code: "diskSize",
            type: "input",
            attrs: {
                name: gettext("设置磁盘大小"),
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
            tag_code: "diskName",
            type: "input",
            attrs: {
                name: gettext("磁盘名称"),
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