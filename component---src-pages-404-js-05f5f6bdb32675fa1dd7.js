(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(160),o=a(149),c=a(156),u=a(161),s=c.a.main.withConfig({displayName:"layout__ContentWrapper",componentId:"sc-1y9kz5x-0"})(["margin:0 auto;max-width:960px;height:calc(100% - 48px);padding:24px;"]),l=c.a.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-1y9kz5x-1"})(["height:100vh;"]),d=function(t){var e=t.children,a=t.location;return r.a.createElement(o.StaticQuery,{query:"755544856",render:function(t){return r.a.createElement(l,null,r.a.createElement(u.a,{location:a,siteTitle:t.site.siteMetadata.title}),r.a.createElement(s,null,e))},data:i})},p=a(165);e.default=function(){return r.a.createElement(d,null,r.a.createElement(p.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},149:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return y}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(148),u=a.n(c);a.d(e,"Link",function(){return u.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var s=a(154),l=a.n(s);a.d(e,"PageRenderer",function(){return l.a});var d=a(33);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(t,e,a){var n;t.exports=(n=a(159))&&n.default||n},159:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),u=a(2),s=function(t){var e=t.location,a=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},160:function(t){t.exports={data:{site:{siteMetadata:{title:"learn gatsby"}}}}},161:function(t,e,a){"use strict";a(178);var n=a(179),r=a.n(n),i=a(0),o=a.n(i),c=a(149),u=a(156),s=Object(u.a)(r.a).withConfig({displayName:"header__Wrapper",componentId:"q6kky9-0"})(["margin:0 auto;max-width:960px;"]);e.a=function(){return o.a.createElement(s,{mode:"horizontal"},o.a.createElement(r.a.Item,{key:"home"},o.a.createElement(c.Link,{to:"/"},"首页")),o.a.createElement(r.a.Item,{key:"blogs"},o.a.createElement(c.Link,{to:"/blogs"},"博客")))}},165:function(t,e,a){"use strict";var n=a(166),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(187),s=a.n(u),l=a(149);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"zh",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},166:function(t){t.exports={data:{site:{siteMetadata:{title:"learn gatsby",description:"学习使用 gatsby",author:"@NHF"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-05f5f6bdb32675fa1dd7.js.map