(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[31],{102:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),l=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("基础坐标轴")]),s._v(" "),t("block-demo",{attrs:{tip:"基础坐标",source:"<template>\n  <s-chart ref=\"chart\">\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis :attrs=\"{orient:'bottom'}\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          padding: [80, 30, 50, 50]\n        },\n        lineData: [\n          { month: 'Jan', city: 'London', value: 3.9 },\n          { month: 'Feb', city: 'London', value: 4.2 },\n          { month: 'Mar', city: 'London', value: 5.7 },\n          { month: 'Apr', city: 'London', value: 8.5 },\n          { month: 'May', city: 'London', value: 11.9 },\n          { month: 'Jun', city: 'London', value: 15.2 }\n        ],\n        dataFields: {\n          x: 'month',\n          y: 'value'\n        }\n      }\n    },\n    mounted(){\n      let chart = this.$refs['chart'].chart;\n      let padding = [60,30,30,50];\n      let scales = [{label: \"Jan\", offset: \"0%\"},{label: \"Apr\", offset: \"60%\"},{label: \"Jun\", offset: \"100%\"}];\n      chart.emit('axis:render', {orient:'bottom',pos:[100,100],size:[600,300],scales});\n      chart.emit('axis:render', {orient:'left',pos:[100,100],size:[600,300],scales});\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"chart"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'left'}\"")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-axis")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{orient:'bottom'}\"")]),s._v(" />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("padding")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("]\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineData")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jan'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Feb'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.2")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Mar'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.7")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Apr'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'May'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11.9")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("month")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Jun'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("city")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'London'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15.2")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'month'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'value'")]),s._v("\n        }\n      }\n    },\n    mounted(){\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" chart = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'chart'")]),s._v("].chart;\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" padding = ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("60")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("];\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" scales = [{"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jan"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0%"')]),s._v("},{"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Apr"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"60%"')]),s._v("},{"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jun"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100%"')]),s._v("}];\n      chart.emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'axis:render'")]),s._v(", {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom'")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("600")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],scales});\n      chart.emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'axis:render'")]),s._v(", {"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orient")]),s._v(":"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("],"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(":["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("600")]),s._v(","),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],scales});\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)},[],!1,null,null,null);a.default=l.exports}}]);