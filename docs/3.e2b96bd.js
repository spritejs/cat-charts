(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[3],{90:function(t,s,v){"use strict";v.r(s);var _={components:{}},r=v(0),a=Object(r.a)(_,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("section",[v("h3",[t._v("attrs")]),t._v(" "),v("p",[t._v("attrs 包含若干布局属性，将这些属性放入 Object 对象传入组件")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("barWidth")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("根据 size 宽度均匀绘制")]),t._v(" "),v("td",[t._v("描述柱形宽度")])]),t._v(" "),v("tr",[v("td",[t._v("pos")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("[0, 0]")])]),t._v(" "),v("td",[t._v("组件左上角偏移，可设置百分比或者像素")])]),t._v(" "),v("tr",[v("td",[t._v("size")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("['100%','100%']")])]),t._v(" "),v("td",[t._v("组件大小，可设置百分比或者像素")])]),t._v(" "),v("tr",[v("td",[t._v("stack")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("false")])]),t._v(" "),v("td",[t._v("是否设置为堆叠图，仅在三维数据上设置")])]),t._v(" "),v("tr",[v("td",[t._v("transpose")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("false")])]),t._v(" "),v("td",[t._v("是否设置为条形图")])])])]),t._v(" "),v("h3",[t._v("data")]),t._v(" "),v("p",[t._v("传入待展示数据，数据类型为 Array，参照 "),v("a",{attrs:{href:"#/demo/bar/default"}},[t._v("demo")])]),t._v(" "),v("h3",[t._v("data-fields")]),t._v(" "),v("p",[t._v("数据维度和坐标轴对应关系，数据类型为 Object，参照 "),v("a",{attrs:{href:"#/demo/bar/default"}},[t._v("demo")])]),t._v(" "),v("h3",[t._v("css 属性")]),t._v(" "),v("p",[t._v("组件中可以自定义 css 属性的元素如下表：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("css-backgroundpillar")]),t._v(" "),v("td",[t._v("背景柱子样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-backgroundpillar:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时背景柱子样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-pillar")]),t._v(" "),v("td",[t._v("柱子样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-pillar:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时柱子样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-text")]),t._v(" "),v("td",[t._v("文本样式")])]),t._v(" "),v("tr",[v("td",[t._v("css-text:hover")]),t._v(" "),v("td",[t._v("鼠标 hover 时文本样式")])])])]),t._v(" "),v("p",[t._v("使用方法可在"),v("a",{attrs:{href:"#/demo/bar/style"}},[t._v("定义样式 demo")]),t._v("中查看，用法如下：")]),t._v(" "),v("p",[v("code",{pre:!0},[t._v('<s-bar :css-pillar:hover="pillarHover" />')])]),t._v(" "),v("p",[t._v("在 data 中定义 pillarHover，可以是 Boolean、 obj 属性或者函数，例如：")]),t._v(" "),v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置true或false来隐藏组件元素")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//隐藏背景柱")]),t._v("\nbackgroundpillar: "),v("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置spritejs的attr属性来设置样式")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置鼠标移入柱子时样式")]),t._v("\npillarHover: {fillColor："),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#f00'")]),t._v(", "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("opacity")]),t._v(":"),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'0.5'")]),t._v("}\n\n"),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//attrs为元素绘制属性，data为元素对应数据，i为元素序列")]),t._v("\npillarHover: "),v("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),v("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("attrs, data, i")]),t._v(") =>")]),t._v(" {\n    "),v("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//将偶数序列的柱子设置圆角")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (i % "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(" === "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") {\n      "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("borderRadius")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10")]),t._v("\n      }\n    }\n    "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" { "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("opacity")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(", "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fillColor")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'blue'")]),t._v(" }\n  }\n")])]),t._v(" "),v("h3",[t._v("event")]),t._v(" "),v("p",[t._v("基本事件用法如下：\n"),v("code",{pre:!0},[t._v('<s-bar @pillar:click="handlerFunction" />')])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("附带数据")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("pillar:click")]),t._v(" "),v("td",[t._v("点击 pillar 事件监听")]),t._v(" "),v("td",[t._v("pillar 信息")])])])])])}],!1,null,null,null);s.default=a.exports}}]);