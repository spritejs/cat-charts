(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[4],{104:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),n=Object(l.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("基础柱状图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart @render=\"chartRender\">\n    <s-bar\n      :attrs=\"attrs\"\n      :data=\"barData\"\n      :data-fields=\"dataFields\"\n      :css-text=\"text\"\n    />\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis :attrs=\"{orient:'bottom'}\" />\n    <s-grid />\n    <s-tooltip :attrs=\"tooltipAttrs\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          barWidth: 30,\n          margin: [50, 50, 50, 100]\n        },\n        barData: [\n          { value: 11, label: '直接访问-1' },\n          { value: 21, label: '邮件营销-2' },\n          { value: 67, label: '联盟广告-3' },\n          { value: 33, label: '视频广告-4' },\n          { value: 60, label: '搜索引擎-5' },\n          { value: 78, label: '直接访问-6' }\n        ],\n        tooltipAttrs: {\n          formatter: data => `${data.label} ${data.value}`\n        },\n        dataFields: { x: 'department', y: 'value' },\n        text: (attrs, data, i) => {\n          return { text: data.value }\n        }\n      }\n    },\n    methods: {\n      chartRender() {\n        console.log('chartRender')\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("render")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"chartRender"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-bar")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"barData"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'left'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'bottom'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-grid")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-tooltip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tooltipAttrs"')]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("barWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("margin")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("]\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("barData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问-1'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'邮件营销-2'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("67")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'联盟广告-3'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'视频广告-4'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'搜索引擎-5'")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("78")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'直接访问-6'")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tooltipAttrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.label}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.value}")]),s._v("`")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'department'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, data, i")]),s._v(") =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": data.value }\n        }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      chartRender() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'chartRender'")]),s._v(")\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)},[],!1,null,null,null);a.default=n.exports}}]);