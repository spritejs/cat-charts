(window.webpackJsonpCatChartsVue=window.webpackJsonpCatChartsVue||[]).push([[44],{130:function(n,t,a){"use strict";a.r(t);var e={components:{}},o=a(0),i=Object(o.a)(e,function(){var n=this.$createElement,t=this._self._c||n;return t("section",[t("h2",[this._v("基础坐标轴")]),this._v(" "),t("p",[this._v("坐标轴组件会自己根据 chart 的 source 数据进行 layout 计算，并且进行默认布局，也会根据 chart 中的 visual 进行适配")]),this._v(" "),t("block-demo",{attrs:{tip:"基础坐标",source:"<template>\n  <s-chart :data=\"lineData\" :data-fields=\"dataFields\">\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis :attrs=\"{orient:'bottom'}\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        lineData: [\n          { month: 'Jan', city: 'London', value: 3.9 },\n          { month: 'Feb', city: 'London', value: 4.2 },\n          { month: 'Mar', city: 'London', value: 5.7 },\n          { month: 'Apr', city: 'London', value: 8.5 },\n          { month: 'May', city: 'London', value: 11.9 },\n          { month: 'Jun', city: 'London', value: 15.2 }\n        ],\n        dataFields: { row: 'city', value: 'value', text: 'month' }\n      }\n    }\n  }\n<\/script>\n\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[this._v("<template>\n  <s-chart :data=\"lineData\" :data-fields=\"dataFields\">\n    <s-axis :attrs=\"{orient:'left'}\" />\n    <s-axis :attrs=\"{orient:'bottom'}\" />\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        lineData: [\n          { month: 'Jan', city: 'London', value: 3.9 },\n          { month: 'Feb', city: 'London', value: 4.2 },\n          { month: 'Mar', city: 'London', value: 5.7 },\n          { month: 'Apr', city: 'London', value: 8.5 },\n          { month: 'May', city: 'London', value: 11.9 },\n          { month: 'Jun', city: 'London', value: 15.2 }\n        ],\n        dataFields: { row: 'city', value: 'value', text: 'month' }\n      }\n    }\n  }\n<\/script>\n\n")])])])],1)},[],!1,null,null,null);t.default=i.exports}}]);