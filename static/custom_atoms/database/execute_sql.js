(function () {
    $.atoms.execute_sql = [
        {
            tag_code: "host",
            type: "input",
            attrs: {
                name: gettext("主机"),
                placeholder: gettext("必填，主机IP"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "username",
            type: "input",
            attrs: {
                name: gettext("用户名"),
                placeholder: gettext("必填，用户名"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "pwd",
            type: "input",
            attrs: {
                name: gettext("密码"),
                placeholder: gettext("必填，密码"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "reg",
            type: "input",
            attrs: {
                name: gettext("数据校验正则"),
                placeholder: gettext("非必填，正则表达式"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
         {
            tag_code: "db_type",
            type: "input",
            attrs: {
                name: gettext("数据库类型"),
                placeholder: gettext("必填，数据库类型"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "db_name",
            type: "input",
            attrs: {
                name: gettext("数据库名称"),
                placeholder: gettext("必填，数据库名称"),
                hookable: false
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
         {
            tag_code: "sql_list",
            type: "input",
            attrs: {
                name: gettext("数据库语句，多条语句用$符号隔开"),
                placeholder: gettext("必填，数据库语句"),
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