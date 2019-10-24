// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={debug:function(){},log:function(){},info:function(){},warn:function(){},error:function(){}}}
!function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){var s,n,l=[];l.push(i(1)),s=i(2);var a=i(6);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(Object.keys(s).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=s=s.default),"function"==typeof n&&(n=n.options),n.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/index.vue",n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-57509004",n.style=n.style||{},l.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,l),t.exports=s,t.exports.el="true",new Vue(t.exports)},function(t,e){t.exports={app:{flex:1},navbar:{width:"750",height:"100"},"navbar-main":{flexDirection:"row",alignItems:"center"},"navbar-logo":{width:"36",height:"36",marginRight:"18"},"navbar-title":{fontSize:"32",color:"#ffffff"},"navbar-icon":{width:"100",height:"100",color:"#ffffff"},list:{width:"750",flex:1},"list-title-box":{flexDirection:"row",alignItems:"center",backgroundColor:"#ffffff"},"list-title":{flex:1,paddingTop:"32",paddingRight:"24",paddingBottom:"32",paddingLeft:"24",fontSize:"28",color:"#757575",backgroundColor:"#ffffff"},"list-subtitle":{paddingRight:"24",fontSize:"24"},"list-item":{flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"100",width:"750",paddingLeft:"20",paddingRight:"20",borderTopWidth:"1",borderTopColor:"#f2f2f2",borderTopStyle:"solid"},"list-item-left":{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",height:"100",flex:1},"list-left-icon":{width:"60",height:"60",color:"#3EB4FF"},"list-left-title":{color:"#242424",paddingLeft:"12",width:"380",fontSize:"26",textOverflow:"ellipsis",lines:1},"list-left-title-history":{color:"#666666",paddingLeft:"12",width:"660",fontSize:"26",textOverflow:"ellipsis",lines:2},"list-right-title":{color:"#a2a2a2",paddingRight:"3",fontSize:"22",textOverflow:"ellipsis",lines:1},"list-right-icon":{fontSize:"24",width:"40",height:"40",color:"#C9C9CE",content:"'tb-right'"},"list-item-right":{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",height:"100"}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=app.requireModule("eeui"),n=app.requireModule("picker");i(3),e.default={data:function(){return{components:[{title:"轮播控件",title_en:"banner",icon:"md-easel",url:"component_banner.js"},{title:"常用按钮",title_en:"button",icon:"logo-youtube",url:"component_button.js"},{title:"网格容器",title_en:"grid",icon:"md-grid",url:"component_grid.js"},{title:"字体图标",title_en:"icon",icon:"logo-ionic",url:"component_icon.js"},{title:"跑马文字",title_en:"marquee",icon:"md-code-working",url:"component_marquee.js"},{title:"导航栏",title_en:"navbar",icon:"md-menu",url:"component_navbar.js"},{title:"列表容器",title_en:"scroll-view",icon:"md-list",url:"component_list.js"},{title:"滚动文字",title_en:"scroll-text",icon:"ios-more",url:"component_scroll_text.js"},{title:"侧边栏",title_en:"side-panel",icon:"md-albums",url:"component_side_panel.js"},{title:"标签页面",title_en:"tabbar",icon:"md-filing",url:"component_tabbar.js"}],uis:[{title:"Echarts图表",title_en:"w-echarts",icon:"md-trending-up",url:"ui_echarts.js"},{title:"Switch开关",title_en:"w-switch",icon:"md-switch",url:"ui_switch.js"}],module:[{title:"页面功能",title_en:"newPage",icon:"md-book",url:"module_page.js"},{title:"系统信息",title_en:"system",icon:"ios-cog",url:"module_system.js"},{title:"数据缓存",title_en:"storage",icon:"md-beaker",url:"module_caches.js"},{title:"确认对话框",title_en:"alert",icon:"md-alert",url:"module_alert.js"},{title:"等待弹窗",title_en:"loading",icon:"tb-loading",url:"module_loading.js"},{title:"验证弹窗",title_en:"captcha",icon:"md-checkmark-circle",url:"module_captcha.js"},{title:"二维码扫描",title_en:"scaner",icon:"tb-scan",url:"module_scaner.js"},{title:"跨域异步请求",title_en:"ajax",icon:"md-git-pull-request",url:"module_ajax.js"},{title:"剪切板",title_en:"clipboard",icon:"md-copy",url:"module_plate.js"},{title:"提示消息",title_en:"toast",icon:"md-notifications",url:"module_toast.js"},{title:"广告弹窗",title_en:"adDialog",icon:"logo-buffer",url:"module_ad_dialog.js"}],plugin:[{title:"城市选择器",title_en:"citypicker",icon:"md-pin",url:"plugin_citypicker.js"},{title:"图片选择器",title_en:"picture",icon:"md-camera",url:"plugin_picture.js"},{title:"组件截图",title_en:"screenshots",icon:"md-crop",url:"plugin_screenshots.js"},{title:"融云通信模块",title_en:"rongim",icon:"tb-community",url:"plugin_rongim.js"},{title:"友盟推送模块",title_en:"umeng",icon:"md-send",url:"plugin_umeng.js"},{title:"第三方支付(微信/支付宝)",title_en:"pay",icon:"tb-sponsor",url:"plugin_pay.js"},{title:"即时通讯",title_en:"websocket",icon:"md-repeat",url:"plugin_websocket.js"}],abouts:[{title:"开发文档",title_en:"document",icon:"md-code-working",url:"https://eeui.app"},{title:"托管平台",title_en:"github",icon:"logo-github",url:"https://github.com/kuaifan/eeui"},{title:"交流社区",title_en:"https://bbs.eeui.app",icon:"logo-rss",url:"https://bbs.eeui.app"},{title:"EEUI版本",title_en:s.getVersionName(),icon:"md-information-circle",url:"https://eeui.app"}],history:[],language:"system"}},created:function(){var t=this;this.history=this.jsonParse(s.getCachesString("scaner",[]),[]),s.setPageBackPressed(null,function(){s.confirm({title:t.lang("温馨提示"),message:t.lang("你确定要退出eeui.app吗？"),buttons:[t.lang("取消"),t.lang("确定")]},function(e){"click"===e.status&&e.title===t.lang("确定")&&s.closePage(null)})})},methods:{scaner:function(){var t=this;s.openScaner(null,function(e){"success"===e.status&&(t.history.unshift(e.text),s.setCachesString("scaner",t.jsonStringify(t.history),0),t.openAuto(e.text))})},refresh:function(){s.reloadPage()},openUrl:function(t){s.openPage({url:t,pageType:"app"})},openWeb:function(t){this.openViewUrl(t)},openAuto:function(t){s.openPage({url:t,pageType:"auto"})},clearHistory:function(){var t=this;s.confirm({title:this.lang("删除提示"),message:this.lang("你确定要删除扫码记录吗？"),buttons:[this.lang("取消"),this.lang("确定")]},function(e){"click"===e.status&&e.title===t.lang("确定")&&(t.history=[],s.setCachesString("scaner",t.jsonStringify(t.history),0))})},languageName:function(){var t=["system","en","zh"];return[this.lang("跟随系统"),"English","中文"][t.indexOf(this.language)]},languageSettings:function(){var t=this,e=["system","en","zh"],i=e.indexOf(this.getLanguage());n.pick({title:this.lang("切换语言"),index:i,items:[this.lang("跟随系统"),"English","中文"]},function(i){var s=i.result,n=i.data;"success"===s&&(t.setLanguage(e[n]),t.language=e[n])})}}}},function(t,e,i){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=app.requireModule("eeui"),l=app.requireModule("locale")||app.requireModule("local");Vue.mixin({data:function(){return{privateLanguageData:{en:i(4).default,zh:i(5).default},privateLanguageType:"system"}},created:function(){this.__loadLanguage(),this.__setLanguageListener()},methods:{__loadLanguage:function(){var t=this,e=n.getCachesString("EEUI_I18N_LANGUAGE","system");"system"===e?this.__getSystemLanguage(function(e){null===e&&(e="zh"),t.privateLanguageType=e}):this.privateLanguageType=e},__parseLanguage:function(t){var e=/(en|zh)\_?\w*/i,i=e.exec(t+"");return i&&i[1]?i[1]:""},__getSystemLanguage:function(t){var e=this;try{var i=!1,s=l.getLanguage(function(s){var n=e.__parseLanguage(s);n?i||t(n):t(null)}),n=this.__parseLanguage(s);n?(i=!0,t(n)):t(null)}catch(e){t(null)}},__setLanguageListener:function(){var t=this,e=n.getPageInfo();if(e&&e.pageName){var i=e.pageName,s=i+"::i18n-change",l=[];try{l=JSON.parse(n.getVariate("__i18n::listener","[]")),l instanceof Array||(l=[])}catch(t){l=[]}-1===l.indexOf(s)&&(l.push(s),n.setVariate("__i18n::listener",JSON.stringify(l))),n.setPageStatusListener({pageName:i,listenerName:s},function(e){e.status===s&&(n.setCachesString("EEUI_I18N_LANGUAGE",e.extra,0),t.__loadLanguage())})}},addLanguageData:function(t,e){t&&"object"===(void 0===e?"undefined":s(e))&&(void 0===this.privateLanguageData[t]&&(this.privateLanguageData[t]={}),Object.assign(this.privateLanguageData[t],e))},setLanguage:function(t){var e=[];try{e=JSON.parse(n.getVariate("__i18n::listener","[]")),e instanceof Array||(e=[])}catch(t){e=[]}e.forEach(function(e){if(e&&e.indexOf("::i18n-change")){var i=e.substring(0,e.indexOf("::i18n-change"));n.onPageStatusListener({listenerName:e,pageName:i,extra:t||"system"},e)}})},getLanguage:function(){return n.getCachesString("EEUI_I18N_LANGUAGE","system")},lang:function(t){return"object"===s(this.privateLanguageData[this.privateLanguageType])?this.privateLanguageData[this.privateLanguageType][t]||t:t}}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"组件":"Components","自定义组件":"Custom Component UI","模块":"Module","插件化":"Plugins","关于":"About EEUI","更多插件":"More Plug-in","扫码历史":"QRCode History","清空历史":"Clean History","轮播控件":"banner","常用按钮":"button","网格容器":"grid","字体图标":"icon","跑马文字":"marquee","导航栏":"navbar","列表容器":"scroll-view","滚动文字":"scroll-text","侧边栏":"side-panel","标签页面":"tabbar","Echarts图表":"Echarts","Switch开关":"Switch","页面功能":"Page function","系统信息":"System information","数据缓存":"Data storage","确认对话框":"Alert dialog","等待弹窗":"Loading popup","验证弹窗":"Captcha popup","二维码扫描":"Qr scaner","跨域异步请求":"Ajax request","剪切板":"Clipboard","提示消息":"Toast","广告弹窗":"Ad popups","城市选择器":"City picker","图片选择器":"Picture picker","组件截图":"Screenshots","融云通信模块":"Rongim","友盟推送模块":"Umeng push","第三方支付(微信/支付宝)":"Pay (wxpay/alipay)","即时通讯":"Websocket","开发文档":"Dev document","托管平台":"Github","交流社区":"Community","EEUI版本":"EEUI version","切换语言":"Switch Languages","跟随系统":"Follow System","语言":"Language","温馨提示":"Tips","删除提示":"Delete prompt","你确定要退出eeui.app吗？":"Are you sure you want to quit eeui.app?","你确定要删除扫码记录吗？":"Are you sure you want to delete the scan code record?","取消":"CANCEL","确定":"OK","标题":"Title"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"组件":"组件 Components","自定义组件":"自定义组件 UI","模块":"模块 Module","插件化":"插件化 Plugins","关于":"关于 About EEUI"}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["app"]},[i("navbar",{staticClass:["navbar"]},[i("navbar-item",{attrs:{type:"left"},on:{click:t.scaner}},[i("icon",{staticClass:["navbar-icon"],attrs:{eeui:{content:"tb-scan"}}})],1),i("navbar-item",{attrs:{type:"title"}},[i("div",{staticClass:["navbar-main"]},[i("image",{staticClass:["navbar-logo"],attrs:{src:"root://pages/logo-white.png"}}),i("text",{staticClass:["navbar-title"]},[t._v("EEUI")])])]),i("navbar-item",{attrs:{type:"right"},on:{click:t.refresh}},[i("icon",{staticClass:["navbar-icon"],attrs:{eeui:{content:"md-refresh"}}})],1)],1),i("scroll-view",{staticClass:["list"]},[i("scroll-header",[i("text",{staticClass:["list-title"]},[t._v(t._s(t.lang("组件")))])]),t._l(t.components,function(e,s){return i("div",{key:s,staticClass:["list-item"],on:{click:function(i){t.openUrl(t.resourceUrl+e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(t.lang(e.title)))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v("<"+t._s(e.title_en)+">")]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("scroll-header",[i("text",{staticClass:["list-title"]},[t._v(t._s(t.lang("自定义组件")))])]),t._l(t.uis,function(e,s){return i("div",{key:s,staticClass:["list-item"],on:{click:function(i){t.openUrl(t.resourceUrl+e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(t.lang(e.title)))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v("<"+t._s(e.title_en)+">")]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("scroll-header",[i("text",{staticClass:["list-title"]},[t._v(t._s(t.lang("模块")))])]),t._l(t.module,function(e,s){return i("div",{key:s,staticClass:["list-item"],on:{click:function(i){t.openUrl(t.resourceUrl+e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(t.lang(e.title)))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v(t._s(e.title_en))]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("scroll-header",[i("text",{staticClass:["list-title"]},[t._v(t._s(t.lang("插件化")))])]),t._l(t.plugin,function(e,s){return i("div",{key:s,staticClass:["list-item"],on:{click:function(i){t.openUrl(t.resourceUrl+e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(t.lang(e.title)))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v(t._s(e.title_en))]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("div",{staticClass:["list-item"],on:{click:function(e){t.openWeb("https://eeui.app/markets/")}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{content:"tb-more"}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(t.lang("更多插件")))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]}),i("icon",{staticClass:["list-right-icon"]})],1)]),i("scroll-header",[i("text",{staticClass:["list-title"]},[t._v(t._s(t.lang("关于")))])]),t._l(t.abouts,function(e,s){return i("div",{key:s,staticClass:["list-item"],on:{click:function(i){t.openWeb(e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(t.lang(e.title)))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v(t._s(e.title_en))]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("div",{staticClass:["list-item"],on:{click:t.languageSettings}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:"md-globe"}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(t.lang("语言")))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v(t._s(t.languageName()))]),i("icon",{staticClass:["list-right-icon"]})],1)]),t.history.length>0?i("scroll-header",{staticClass:["list-title-box"]},[i("text",{staticClass:["list-title"]},[t._v(t._s(t.lang("扫码历史")))]),i("text",{staticClass:["list-subtitle"],on:{click:function(e){t.clearHistory()}}},[t._v(t._s(t.lang("清空历史")))])]):t._e(),t.history.length>0?i("div",t._l(t.history,function(e,s){return i("div",{key:s,staticClass:["list-item"],on:{click:function(i){t.openAuto(e)}}},[i("div",{staticClass:["list-item-left"]},[i("text",{staticClass:["list-left-title-history"]},[t._v(t._s(e))])]),i("div",{staticClass:["list-item-right"]},[i("icon",{staticClass:["list-right-icon"]})],1)])})):t._e()],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}]);