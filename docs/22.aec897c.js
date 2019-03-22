(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[22],{120:function(s,t,a){"use strict";a.r(t);var r={components:{}},n=a(0),e=Object(n.a)(r,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("数据更新")]),s._v(" "),a("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart>\n    <s-pie\n      :attrs=\"attrs\"\n      :data=\"pieData\"\n      :data-fields=\"dataFields\"\n      :sector=\"sector\"\n      :sector:hover=\"sectorHover\"\n      :css-text=\"text\"\n      :css-text:hover=\"textHover\"\n      :css-guideline=\"true\"\n      :css-guideline:hover=\"guideLineHover\"\n      :css-guidetext=\"true\"\n      :css-guidetext:hover=\"guideTextHover\"\n    />\n    <s-legend />\n    <s-tooltip :attrs=\"tooltipAttrs\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          radius: 0.6\n        },\n        pieData: [\n          { value: 3350, label: '直接访问' },\n          { value: 3100, label: '邮件营销' },\n          { value: 2340, label: '联盟广告' },\n          { value: 1350, label: '视频广告' },\n          { value: 1548, label: '搜索引擎' }\n        ],\n        tooltipAttrs:{\n        \tformatter: data => `${data.label} ${data.value}`\n        },\n        dataFields: { x: 'label', y: 'value' },\n        text: (attrs, data, i) => {\n          return { text: data.label }\n        },\n        textHover: (attrs, d, i) => ({\n          fontSize: '18px'\n        }),\n        sector: (attrs, d, i) => {\n          return { color: '#fff', lineWidth: 2 }\n        },\n        sectorHover: (attrs, data, i) => {\n          if (i == 2) {\n            return {\n              outerRadius: attrs['outerRadius'] + 20,\n              fillColor: 'red'\n            }\n          }\n          return { opacity: 0.5, fillColor: 'red' }\n        },\n        guideText: true,\n        guideTextHover: (attrs, d, i) => ({\n          color: 'red'\n        }),\n        guideLine: true,\n        guideLineHover: (attrs, d, i) => ({\n          color: 'red'\n        })\n      }\n    },\n    mounted() {\n      const step = () => {\n        setTimeout(() => {\n          this.pieData.push(\n            { value: 3600, label: '间接访问' },\n            { value: 4600, label: '非接访问' }\n          )\n\n          setTimeout(() => {\n            this.pieData.splice(5, 2)\n\n            setTimeout(() => requestAnimationFrame(step), 1000)\n          }, 5000)\n        }, 5000)\n      }\n\n      requestAnimationFrame(step)\n    }\n  }\n<\/script>\n"}},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-pie")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieData"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sector")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sector"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sector:hover")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sectorHover"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-text")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-text:hover")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"textHover"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideline:hover")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideLineHover"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guidetext")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guidetext:hover")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"guideTextHover"')]),s._v("\n    />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-legend")]),s._v(" />")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-tooltip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tooltipAttrs"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v("\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieData")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3350")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问'")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3100")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销'")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2340")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告'")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1350")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告'")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1548")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎'")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tooltipAttrs")]),s._v(":{\n        \t"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.label}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.value}")]),s._v("`")]),s._v("\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, data, i")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": data.label }\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("textHover")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'18px'")]),s._v("\n        }),\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sector")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fff'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" }\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sectorHover")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, data, i")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (i == "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outerRadius")]),s._v(": attrs["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'outerRadius'")]),s._v("] + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n            }\n          }\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("opacity")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(" }\n        },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideText")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideTextHover")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n        }),\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideLine")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("guideLineHover")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, d, i")]),s._v(") =>")]),s._v(" ({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n        })\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" step = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n        setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".pieData.push(\n            { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3600")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'间接访问'")]),s._v(" },\n            { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4600")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'非接访问'")]),s._v(" }\n          )\n\n          setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".pieData.splice("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n\n            setTimeout("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" requestAnimationFrame(step), "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n          }, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5000")]),s._v(")\n        }, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5000")]),s._v(")\n      }\n\n      requestAnimationFrame(step)\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)},[],!1,null,null,null);t.default=e.exports}}]);