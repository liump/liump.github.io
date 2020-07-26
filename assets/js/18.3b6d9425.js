(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{250:function(t,a,n){"use strict";n.r(a);var e=n(5),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("less基础")])]),t._v(" "),n("h2",{attrs:{id:"编译工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译工具"}},[t._v("#")]),t._v(" 编译工具")]),t._v(" "),n("p",[t._v("koala 编译")]),t._v(" "),n("h2",{attrs:{id:"注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),n("p",[t._v("// or /**/")]),t._v(" "),n("h2",{attrs:{id:"变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n@test_width:300px;\n\n.box{\n    width: @test_width;\n    height: @test_width;\n    background-color:yellow;\n}\n```\n")])])]),n("h2",{attrs:{id:"混合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#混合"}},[t._v("#")]),t._v(" 混合")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n    @test_width:300px;\n\n    .box{\n        width: @test_width;\n        height: @test_width;\n        background-color:yellow;\n\n        .border;\n    }\n\n    .border{\n        border: 1px solid pink;\n    }\n```\n")])])]),n("h3",{attrs:{id:"带参数的混合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带参数的混合"}},[t._v("#")]),t._v(" 带参数的混合")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n.border_02(@border_width){\n    border: @border_width solid yellow;\n}\n.test_hunhe{\n    .border_02(30px);\n}\n```\n")])])]),n("h3",{attrs:{id:"带默认值的混合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带默认值的混合"}},[t._v("#")]),t._v(" 带默认值的混合")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n.border_03(@border_width:10px){\n    border: @border_width solid green;\n}\n\n.test_hunhe_03{\n    .border_03();\n}\n```\n")])])]),n("h2",{attrs:{id:"匹配模式-相当于-js-的流程控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#匹配模式-相当于-js-的流程控制"}},[t._v("#")]),t._v(" 匹配模式(相当于 JS 的流程控制)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n/*\n.sanjiao{\n    width: 0;\n    height: 0;\n    overflow: hidden;\n\n    border-width: 10px;\n    border-color:  transparent transparent red transparent;\n    border-style: dashed dashed solid dashed;\n}\n*/\n.triangle(top,@w:5px,@c:#ccc){\n    border-width: @w;\n    border-color: transparent transparent @c transparent;\n    border-style: dashed dashed solid dashed;\n}\n.triangle(bottom,@w:5px,@c:#ccc){\n    border-width: @w;\n    border-color: @c transparent transparent  transparent;\n    border-style: solid dashed dashed  dashed;\n}\n.triangle(@_,@w:5px,@c:#ccc){\n    # @_ 表示不管匹配到哪一个始终带着这个,注意其他参数必须带上\n    width: 0;\n    height: 0;\n    overflow: hidden;\n}\n\n.sanjiao{\n    .triangle(top) # 通过字段匹配\n}\n```\n")])])]),n("h2",{attrs:{id:"运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运算"}},[t._v("#")]),t._v(" 运算")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n@test_01: 300px;\n\n.box_02{\n    width: (@test_01 - 20) * 5;\n}\n```\n")])])]),n("h2",{attrs:{id:"嵌套规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#嵌套规则"}},[t._v("#")]),t._v(" 嵌套规则")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n.list{\n    width: 600px;\n    height: 400px;\n\n    // 这里的 .li 相当于 .list .li\n    .li{\n        width: 200px;\n    }\n\n    a{\n        // & 代表上一层选择器,所以这里是 a:hover\n        &:hover{\n            color: red;\n        }\n    }\n}\n```\n")])])]),n("h2",{attrs:{id:"arguments-变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#arguments-变量"}},[t._v("#")]),t._v(" @arguments 变量")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n.border_arg(@w:30px,@c:red,@xx:solid){\n    border:@arguments;\n}\n\n.test_arguments{\n    .border_arg(40px);\n}\n```\n")])])]),n("h2",{attrs:{id:"避免编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免编译"}},[t._v("#")]),t._v(" 避免编译")]),t._v(" "),n("p",[t._v("计算/滤镜避免编译 使用 ~'避免编译的代码'")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("``` less\n.test_03{\n    width: ~'calc(300px - 30px)';\n}\n```")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);