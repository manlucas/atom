/**
 * Created by Administrator on 2019/10/6.
 */
(function () {
    $.atoms.register_cmdb = [
        {
            tag_code: "host_list",
            type: "input",
            attrs: {
                name: gettext("主机IP列表"),
                placeholder: gettext("主机IP列表"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "bk_biz_id",
            type: "input",
            attrs: {
                name: gettext("业务ID"),
                placeholder: gettext("业务ID"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "bk_cloud_id",
            type: "input",
            attrs: {
                name: gettext("云区域ID"),
                placeholder: gettext("云区域ID"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
    ]
})();

