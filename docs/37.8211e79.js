(window.webpackJsonpCatChartsVue=window.webpackJsonpCatChartsVue||[]).push([[37],{104:function(t,v,_){"use strict";_.r(v);var r={components:{}},e=_(0),d=Object(e.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("section",[_("h2",[t._v("雷达图")]),t._v(" "),_("h3",[t._v("attrs")]),t._v(" "),_("p",[t._v("attrs 包含若干属性，可以初始化图表的时候对图表进行配置")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("pos")]),t._v(" "),_("td",[t._v("组件左上角偏移，可设置百分比或者像素")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("[0,0]")])]),t._v(" "),_("tr",[_("td",[t._v("size")]),t._v(" "),_("td",[t._v("组件大小，可设置百分比或者像素")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("['100%','100%']")])]),t._v(" "),_("tr",[_("td",[t._v("padding")]),t._v(" "),_("td",[t._v("图表的 padding")]),t._v(" "),_("td",[t._v("Number，Array")]),t._v(" "),_("td",[t._v("[0,0,0,0]")])]),t._v(" "),_("tr",[_("td",[t._v("gridType")]),t._v(" "),_("td",[t._v("网格的类型，可选值为'polygon'和'circle'")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("polygon")])]),t._v(" "),_("tr",[_("td",[t._v("splitNumber")]),t._v(" "),_("td",[t._v("背景网格的层数")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("4")])]),t._v(" "),_("tr",[_("td",[t._v("startAngle")]),t._v(" "),_("td",[t._v("坐标轴的起始角度")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("270")])]),t._v(" "),_("tr",[_("td",[t._v("radius")]),t._v(" "),_("td",[t._v("雷达图的轴长,范围[0,1]")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0.6")])]),t._v(" "),_("tr",[_("td",[t._v("labelOffset")]),t._v(" "),_("td",[t._v("雷达图轴标记偏移量")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("6")])])])]),t._v(" "),_("h3",[t._v("可配置 Style 名称")]),t._v(" "),_("pre",{pre:!0},[_("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" radar = "),_("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Radar()\nradar.style("),_("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'point'")]),t._v(", { "),_("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(": "),_("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("5")]),t._v(" })\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 或者函数模式")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// radar.style('point',(attr,data,i)=>{return {size:5}})")]),t._v("\n")])]),t._v(" "),_("p",[t._v("style 方式支持链式调用，第一个参数为 style 名称，第二个参数为设置的样式 Object，也可以为函数形式，对样式进行详细设置")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("guideline")]),t._v(" "),_("td",[t._v("指导线样式")])]),t._v(" "),_("tr",[_("td",[t._v("axis")]),t._v(" "),_("td",[t._v("坐标轴的样式")])]),t._v(" "),_("tr",[_("td",[t._v("axis:hover")]),t._v(" "),_("td",[t._v("坐标轴 hover 样式")])]),t._v(" "),_("tr",[_("td",[t._v("grid")]),t._v(" "),_("td",[t._v("雷达图背景网格样式")])]),t._v(" "),_("tr",[_("td",[t._v("grid:hover")]),t._v(" "),_("td",[t._v("雷达图背景网格 hover 样式")])]),t._v(" "),_("tr",[_("td",[t._v("label")]),t._v(" "),_("td",[t._v("类别指示文字的样式(x 轴)")])]),t._v(" "),_("tr",[_("td",[t._v("label:hover")]),t._v(" "),_("td",[t._v("类别指示文字的 hover 样式")])]),t._v(" "),_("tr",[_("td",[t._v("scale")]),t._v(" "),_("td",[t._v("数值指示文字,(y 轴)")])]),t._v(" "),_("tr",[_("td",[t._v("scale:hover")]),t._v(" "),_("td",[t._v("数值指示文字 hover 样式(y 轴)")])]),t._v(" "),_("tr",[_("td",[t._v("section")]),t._v(" "),_("td",[t._v("雷达图数据区样式")])]),t._v(" "),_("tr",[_("td",[t._v("section:hover")]),t._v(" "),_("td",[t._v("雷达图数据区 hover 样式")])])])])])}],!1,null,null,null);v.default=d.exports}}]);