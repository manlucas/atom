(function () {
    $.atoms.create_ad_user = [      // 此处命名使用后台定义的 code
        {
            tag_code: "AD_server_host",    // 参数 code，请保持全局唯一，命名规范为“系统名参数名”
            type: "input",      // 前端表单类型，可选 input、textarea、radio、checkbox、select、datetime、datatable、upload、combine等
            attrs: {        // 对应type的属性设置
                name: gettext("AD域接口地址"),
                placeholder: gettext("请填写AD域接口地址,格式为 IP:端口号"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "AD_admin_account",
            type: "input",
            attrs: {
                name: gettext("管理员账户名"),
                placeholder: gettext("请填写管理员账户名，例'demo\\RobinYuan'"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "AD_admin_pwd",
            type: "input",
            attrs: {
                name: gettext("管理员账户密码"),
                placeholder: gettext("请填写管理员账户密码"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "AD_domain",
            type: "input",
            attrs: {
                name: gettext("域名"),
                placeholder: gettext("请填写域名，格式为 demo.club"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "new_username",
            type: "input",
            attrs: {
                name: gettext("登录名前缀"),
                placeholder: gettext("请填写新用户的登录名前缀（姓的全拼 + 名的首字母）"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "new_user_org",
            type: "input",
            attrs: {
                name: gettext("所属部门"),
                placeholder: gettext("请填写新用户所属部门，从低到高级以点号隔开，如'北京分公司.嘉为集团'"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "new_user_password",
            type: "input",
            attrs: {
                name: gettext("初始密码"),
                placeholder: gettext("请填写新用户的初始密码"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "new_user_group",
            type: "input",
            attrs: {
                name: gettext("所属权限组"),
                placeholder: gettext("请填写新用户所属权限组前置区分名，例'CN=Domain Admins,CN=Users'"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "new_user_is_outsourced",
            type: "radio",
            attrs: {
                name: gettext("是否为外包人员"),
                items: [
                    {value: true, name: gettext("是")},
                    {value: false, name: gettext("否")}
                ],
                default: false,
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        }
    ]
})();
