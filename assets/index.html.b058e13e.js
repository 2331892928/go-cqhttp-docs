import{r as s,o as n,c as h,a as t,b as i,w as c,F as l,d as e,e as a}from"./app.a1c5de43.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const _={},p=t("h1",{id:"\u7B80\u4ECB",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#"),e(" \u7B80\u4ECB")],-1),u=t("h2",{id:"go-cqhttp",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#go-cqhttp","aria-hidden":"true"},"#"),e(" go-cqhttp")],-1),g=e("\u4F7F\u7528 "),m={href:"https://github.com/mamoe/mirai",target:"_blank",rel:"noopener noreferrer"},f=e("mirai"),b=e(" \u4EE5\u53CA "),k={href:"https://github.com/Mrs4s/MiraiGo",target:"_blank",rel:"noopener noreferrer"},q=e("MiraiGo"),x=e(" \u5F00\u53D1\u7684 cqhttp golang \u539F\u751F\u5B9E\u73B0, \u5E76\u5728 "),M={href:"https://github.com/richardchien/coolq-http-api",target:"_blank",rel:"noopener noreferrer"},T=e("cqhttp \u539F\u7248"),v=e(" \u7684\u57FA\u7840\u4E0A\u505A\u4E86\u90E8\u5206\u4FEE\u6539\u548C\u62D3\u5C55\u3002 \u6587\u6863\u76EE\u524D\u8FD8\u5728\u64B0\u5199\u4E2D\u3002"),P=e("\u6D4B\u8BD5\u7248\u53EF\u524D\u5F80 "),B={href:"https://github.com/Mrs4s/go-cqhttp/releases",target:"_blank",rel:"noopener noreferrer"},S=e("Release"),w=e(" \u4E0B\u8F7D\u3002"),I=a('<a href="https://github.com/Mrs4s/go-cqhttp/releases"><img src="https://img.shields.io/github/v/release/Mrs4s/go-cqhttp?color=blueviolet&amp;include_prereleases" alt="release"></a><a href="https://github.com/Mrs4s/go-cqhttp/actions"><img src="https://github.com/Mrs4s/go-cqhttp/workflows/CI/badge.svg" alt="action"></a><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E go-cqhttp \u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u6682\u672A\u53D1\u5E03\u6B63\u5F0F\u7248</p><p>\u672C\u6587\u6863\u5C06\u4EC5\u4FDD\u7559\u6700\u65B0\u7248\u7684\u6587\u6863</p><p>\u88AB\u9057\u5F03\u7684\u529F\u80FD\u7684\u6587\u6863\u5C06\u4F1A\u88AB\u4ECE\u6587\u6863\u4E2D\u5220\u9664</p></div><h2 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h2><h3 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h3><ul><li>HTTP API</li><li>\u53CD\u5411HTTP POST</li><li>\u6B63\u5411WebSocket</li><li>\u53CD\u5411WebSocket</li></ul><h3 id="\u62D3\u5C55\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u62D3\u5C55\u652F\u6301" aria-hidden="true">#</a> \u62D3\u5C55\u652F\u6301</h3>',7),G=e("\u62D3\u5C55API\u53EF\u524D\u5F80 "),L=e("\u6587\u6863"),N=e(" \u67E5\u770B"),V=a('<ul><li>HTTP POST\u591A\u70B9\u4E0A\u62A5</li><li>\u53CD\u5411WS\u591A\u70B9\u8FDE\u63A5</li><li>\u4FEE\u6539\u7FA4\u540D</li><li>\u6D88\u606F\u64A4\u56DE\u4E8B\u4EF6</li><li>\u89E3\u6790/\u53D1\u9001 \u56DE\u590D\u6D88\u606F</li><li>\u89E3\u6790/\u53D1\u9001 \u5408\u5E76\u8F6C\u53D1</li><li>\u4F7F\u7528\u4EE3\u7406\u8BF7\u6C42\u7F51\u7EDC\u56FE\u7247</li></ul><h2 id="\u5173\u4E8E-issue" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-issue" aria-hidden="true">#</a> \u5173\u4E8E issue</h2><p>\u4EE5\u4E0B issue \u4F1A\u88AB\u76F4\u63A5\u5173\u95ED</p><ul><li>\u63D0\u4EA4BUG\u4E0D\u4F7F\u7528Template</li><li>\u8BE2\u95EE\u5DF2\u77E5\u95EE\u9898</li><li>\u63D0\u95EE\u627E\u4E0D\u5230\u91CD\u70B9</li><li>\u91CD\u590D\u63D0\u95EE</li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5F00\u53D1\u8005\u5E76\u6CA1\u6709\u4E49\u52A1\u56DE\u590D\u60A8\u7684\u95EE\u9898, \u60A8\u5E94\u8BE5\u5177\u5907\u57FA\u672C\u7684\u63D0\u95EE\u6280\u5DE7\u3002</p></div><h2 id="\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD" aria-hidden="true">#</a> \u6027\u80FD</h2><p>\u5728\u5173\u95ED\u6570\u636E\u5E93\u7684\u60C5\u51B5\u4E0B, \u52A0\u8F7D 25 \u4E2A\u597D\u53CB 128 \u4E2A\u7FA4\u8FD0\u884C 24 \u5C0F\u65F6\u540E\u5185\u5B58\u4F7F\u7528\u4E3A 10MB \u5DE6\u53F3. \u5F00\u542F\u6570\u636E\u5E93\u540E\u5185\u5B58\u4F7F\u7528\u5C06\u6839\u636E\u6D88\u606F\u91CF\u589E\u52A0 10-20MB , \u5982\u679C\u7CFB\u7EDF\u5185\u5B58\u5C0F\u4E8E 128M \u5EFA\u8BAE\u5173\u95ED\u6570\u636E\u5E93\u4F7F\u7528\u3002</p><p>\u4E0B\u4E00\u7BC7: <a href="/guide/quick_start">Guide/\u5F00\u59CB</a></p>',8);function C(E,H){const o=s("ExternalLinkIcon"),r=s("RouterLink");return n(),h(l,null,[p,u,t("p",null,[g,t("a",m,[f,i(o)]),b,t("a",k,[q,i(o)]),x,t("a",M,[T,i(o)]),v]),t("p",null,[P,t("a",B,[S,i(o)]),w]),I,t("blockquote",null,[t("p",null,[G,i(r,{to:"/guide/docs/cqhttp.html"},{default:c(()=>[L]),_:1}),N])]),V],64)}var A=d(_,[["render",C]]);export{A as default};
