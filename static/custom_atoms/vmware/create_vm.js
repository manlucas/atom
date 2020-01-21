(function () {
    $.atoms.create_vm = [
        {
            tag_code: "host",
            type: "input",
            attrs: {
                name: gettext("VC地址"),
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
            tag_code: "username",
            type: "input",
            attrs: {
                name: gettext("VC账号"),
                placeholder: gettext("必填，VC账号"),
                hookable: true
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
                name: gettext("VC密码"),
                placeholder: gettext("必填，VC密码"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "state",
            type: "input",
            attrs: {
                name: gettext("群集模式"),
                placeholder: gettext("False/True"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "dc_moId",
            type: "input",
            attrs: {
                name: gettext("dc_moId"),
                placeholder: gettext("必填，datacenter moId"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "hc_moId",
            type: "input",
            attrs: {
                name: gettext("hc_moId"),
                placeholder: gettext("必填,独立主机/集群MoId"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "ds_moId",
            type: "input",
            attrs: {
                name: gettext("ds_moId"),
                placeholder: gettext("必填,存储MoId"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "vs_moId",
            type: "input",
            attrs: {
                name: gettext("vs_moId"),
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
            tag_code: "rp_moId",
            type: "input",
            attrs: {
                name: gettext("资源池"),
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
            tag_code: "vmtemplate_moId",
            type: "input",
            attrs: {
                name: gettext("teme_moId"),
                placeholder: gettext("必填，模板MoId"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "vm_name",
            type: "input",
            attrs: {
                name: gettext("vm_name"),
                placeholder: gettext("必填， VC上的机器名称"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "vmtemplate_os",
            type: "input",
            attrs: {
                name: gettext("系统类型"),
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
                name: gettext("cpu"),
                placeholder: gettext("必填，cpu大小"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "mem",
            type: "input",
            attrs: {
                name: gettext("内存"),
                placeholder: gettext("必填，内存大小"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "mem_re",
            type: "input",
            attrs: {
                name: gettext("预置内存"),
                placeholder: gettext("必填，内存大小"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "disk_type",
            type: "input",
            attrs: {
                name: gettext("数据盘"),
                placeholder: gettext("磁盘类型：thin/eager/thick"),
                hookable: true
            },
            validation: [
                {
                    type: "required"
                }
            ]
        },
        {
            tag_code: "disk_size",
            type: "input",
            attrs: {
                name: gettext("数据盘大小"),
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
            tag_code: "disk_spbm",
            type: "input",
            attrs: {
                name: gettext("存储策略"),
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
            tag_code: "computer_name",
            type: "input",
            attrs: {
                name: gettext("计算机名"),
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
            tag_code: "ip",
            type: "input",
            attrs: {
                name: gettext("ip"),
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
            tag_code: "mask",
            type: "input",
            attrs: {
                name: gettext("子网掩码"),
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
            tag_code: "gateway",
            type: "input",
            attrs: {
                name: gettext("网关"),
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
            tag_code: "dns",
            type: "input",
            attrs: {
                name: gettext("DNS列表"),
                placeholder: gettext("必填，多个以逗号分割"),
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

