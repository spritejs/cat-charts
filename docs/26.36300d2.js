(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[26],{75:function(s,a,t){"use strict";t.r(a);var r={components:{}},p=t(0),n=Object(p.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("快速开始")]),s._v(" "),t("h3",[s._v("特点")]),s._v(" "),t("p",[s._v("CatCharts 是一个基于"),t("a",{attrs:{href:"https://www.spritejs.com"}},[s._v("sprites")]),s._v(","),t("a",{attrs:{href:"https://www.npmjs.com/package/q-charts"}},[s._v("qcharts")]),s._v("封装的Vue图表库，可以让用户以组件的形式组合出各种图表。")]),s._v(" "),t("h3",[s._v("如何使用")]),s._v(" "),t("p",[s._v("1.通过 npm 获取 CatCharts，我们提供了 CatCharts npm 包，通过下面的命令即可完成安装")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[s._v("npm install cat-charts --save\n")])]),s._v(" "),t("p",[s._v("2.通过 cdn 获取 CatCharts，通过下面的标签引入CatCharts")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/cat-charts/lib/index.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("开始绘制图表")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 通过cdn的方式使用CatCharts")]),s._v("\nVue.use(CatCharts);\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 通过模块引入的方式使用CatCharts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { install } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cat-charts'")]),s._v("\nVue.use(install)\n")])]),s._v(" "),t("p",[s._v("完成一个CatCharts的组件或者页面")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-line")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lineData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":dataFields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'left'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'bottom'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-tooltip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tooltipAttrs"')]),s._v("/>")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("]\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tooltipAttrs")]),s._v(":{\n        \t"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.city}")]),s._v("-"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.month}")]),s._v("-"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.value}")]),s._v("`")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n        }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("一张折线图就绘制成功")]),s._v(" "),t("img",{attrs:{src:"https://p5.ssl.qhimg.com/t0168ca8499a823f418.png",width:"600"}})])}],!1,null,null,null);a.default=n.exports}}]);