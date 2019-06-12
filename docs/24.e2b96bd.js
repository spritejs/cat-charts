(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[24],{111:function(t,s,v){"use strict";v.r(s);var _={components:{}},r=v(0),a=Object(r.a)(_,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("section",[v("h3",[t._v("attrs")]),t._v(" "),v("p",[t._v("attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("labelOffset")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("6")])]),t._v(" "),v("td",[t._v("雷达图轴标记偏移量")])]),t._v(" "),v("tr",[v("td",[t._v("pos")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("[0, 0]")])]),t._v(" "),v("td",[t._v("组件左上角偏移，可设置百分比或者像素")])]),t._v(" "),v("tr",[v("td",[t._v("radius")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0.6")])]),t._v(" "),v("td",[t._v("雷达图的轴长,范围[0,1]")])]),t._v(" "),v("tr",[v("td",[t._v("size")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("['100%','100%']")])]),t._v(" "),v("td",[t._v("组件大小，可设置百分比或者像素")])]),t._v(" "),v("tr",[v("td",[t._v("splitNumber")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("4")])]),t._v(" "),v("td",[t._v("背景网格的层数")])]),t._v(" "),v("tr",[v("td",[t._v("startAngle")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("-90")])]),t._v(" "),v("td",[t._v("坐标轴起始角度")])])])]),t._v(" "),v("h3",[t._v("data")]),t._v(" "),v("p",[t._v("传入待展示数据，数据类型为 Array，参照 "),v("a",{attrs:{href:"#/demo/radar/default"}},[t._v("demo")])]),t._v(" "),v("h3",[t._v("data-fields")]),t._v(" "),v("p",[t._v("数据维度和坐标轴对应关系，数据类型为 Object，参照 "),v("a",{attrs:{href:"#/demo/radar/default"}},[t._v("demo")])]),t._v(" "),v("h3",[t._v("css 属性")]),t._v(" "),v("p",[t._v("组件中可以自定义 css 属性的元素如下表：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("css-axis")]),t._v(" "),v("td",[t._v("轴线样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-axis:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时轴线样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-border")]),t._v(" "),v("td",[t._v("边框样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-border:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时边框样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-grid")]),t._v(" "),v("td",[t._v("网格样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-grid:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时网格样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-label")]),t._v(" "),v("td",[t._v("文字样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-label:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时文字样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-point")]),t._v(" "),v("td",[t._v("点样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-point:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时点样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-section")]),t._v(" "),v("td",[t._v("区域样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-section:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 示区域样式")])])])]),t._v(" "),v("p",[t._v("使用方法可在"),v("a",{attrs:{href:"#/demo/radar/style"}},[t._v("定义样式 demo")]),t._v("中查看，用法如下：")]),t._v(" "),v("p",[v("code",{pre:!0},[t._v('<s-radar :css-section="sectionStyle" />')])]),t._v(" "),v("p",[t._v("在 data 中定义 section obj 属性或者函数，例如：")]),t._v(" "),v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置true或false来隐藏组件元素")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//隐藏阴影面积元素")]),t._v("\nsection: "),v("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置spritejs的attr属性来设置样式")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置鼠标移入区域时样式")]),t._v("\nsectionStyle: {fillColor："),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#f00'")]),t._v(", "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("opacity")]),t._v(":"),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'0.5'")]),t._v("}\n\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//attrs为元素绘制属性，data为元素对应数据，i为元素序列")]),t._v("\nsectionStyle: "),v("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),v("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("attrs, data, i")]),t._v(") =>")]),t._v(" {\n    "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//将偶数序列的区域设置为红色")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (i % "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(" === "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") {\n      "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fillColor")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'red'")]),t._v("\n      }\n    }\n    "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("opacity")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(", "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fillColor")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'blue'")]),t._v(" }\n  }\n")])])])}],!1,null,null,null);s.default=a.exports}}]);