(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[21],{108:function(s,a,t){"use strict";t.r(a);var r={components:{}},l=t(0),e=Object(l.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("基础雷达图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart>\n    <s-radar :attrs=\"attrs\" :data=\"radarData\" :dataFields=\"dataFields\" />\n    <s-tooltip :attrs=\"tooltipAttrs\" />\n    <s-legend />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          padding: 10\n        },\n        radarData: [\n          { label: '客服', category: '实际开销', value: 2 },\n          { label: '研发', category: '实际开销', value: 22 },\n          { label: '市场', category: '实际开销', value: 69 },\n          { label: '扯淡', category: '实际开销', value: 69 },\n          { label: '销售', category: '实际开销', value: 66 },\n          { label: '管理', category: '实际开销', value: 32 },\n          { label: '技术', category: '实际开销', value: 24 },\n\n          { label: '客服', category: '节能减排', value: 100 },\n          { label: '研发', category: '节能减排', value: 47 },\n          { label: '市场', category: '节能减排', value: 73 },\n          { label: '扯淡', category: '节能减排', value: 48 },\n          { label: '销售', category: '节能减排', value: 10 },\n          { label: '管理', category: '节能减排', value: 41 },\n          { label: '技术', category: '节能减排', value: 32 }\n        ],\n        tooltipAttrs:{\n        \tformatter: data => `${data.category}: ${data.label}-${data.value}`\n        },\n        dataFields: { x: 'label', y: 'value', category: 'category' }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-radar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radarData"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":dataFields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-tooltip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tooltipAttrs"')]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-legend")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radarData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'客服'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'实际开销'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'研发'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'实际开销'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("22")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'市场'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'实际开销'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("69")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'扯淡'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'实际开销'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("69")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'销售'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'实际开销'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("66")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'管理'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'实际开销'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'技术'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'实际开销'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("24")]),s._v(" },\n\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'客服'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'节能减排'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'研发'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'节能减排'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("47")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'市场'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'节能减排'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("73")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'扯淡'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'节能减排'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("48")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'销售'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'节能减排'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'管理'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'节能减排'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'技术'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'节能减排'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tooltipAttrs")]),s._v(":{\n        \t"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.category}")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.label}")]),s._v("-"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.value}")]),s._v("`")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("category")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'category'")]),s._v(" }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)},[],!1,null,null,null);a.default=e.exports}}]);