(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(e,t,n){"use strict";n.r(t);n(324);var a=n(378),r=n.n(a),c=n(8),i=n.n(c),l=n(0),o=n.n(l),s=(n(229),n(233)),m=n.n(s),p=(n(101),n(322),n(97)),d=n.n(p),h=(n(40),n(290)),u=n(812),g=(n(203),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var n=t.textWrapper.children.map(function(e){var t=e.name,n=e.texty,a=d()(e,["name","texty"]);return t.match("button")?o.a.createElement(m.a,Object.assign({type:"primary",key:t},a),e.children):o.a.createElement("div",Object.assign({key:t},a),n?o.a.createElement(u.a,{type:"mask-bottom"},e.children):e.children)});return o.a.createElement("div",Object.assign({},e,t.wrapper),o.a.createElement(h.a,Object.assign({key:"QueueAnim",type:["bottom","top"],delay:200},t.textWrapper),n))},t}(o.a.PureComponent)),b=(n(300),n(318)),y=n.n(b),f=(n(302),n(320)),v=n.n(f),w=(n(286),n(41),n(239)),N=n(323),k=n.n(N),E=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/,O=function(e,t){var n=0===e.name.indexOf("title")?"h1":"div",a="string"==typeof e.children&&e.children.match(E)?o.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"==typeof e.children&&(a=o.a.createElement(m.a,Object.assign({},e.children))),o.a.createElement(n,Object.assign({key:t.toString()},e),a)},j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getDelay=function(e,t){return e%t*100+100*Math.floor(e/t)+100*t},t.getBlockChildren=function(e,n){var a=e.children,r={y:30,opacity:0,type:"from",ease:"easeOutQuad",delay:t.props.isMobile?50*n:t.getDelay(n,24/e.md)};return o.a.createElement(w.b,Object.assign({component:v.a,animation:r,key:n.toString()},e),o.a.createElement("div",a,o.a.createElement("div",Object.assign({className:"image-wrapper"},a.img),o.a.createElement("img",{src:a.img.children,alt:"img"})),o.a.createElement("h2",a.title,a.title.children),o.a.createElement("div",a.content,a.content.children)))},t}return i()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var n=t.block.children.map(this.getBlockChildren);return o.a.createElement("div",Object.assign({},e,t.wrapper),o.a.createElement("div",t.page,o.a.createElement("div",t.titleWrapper,t.titleWrapper.children.map(O)),o.a.createElement(k.a,t.OverPack,o.a.createElement(h.a,{type:"bottom",key:"img"},o.a.createElement(y.a,Object.assign({},t.block,{key:"img"}),n)))))},t}(o.a.PureComponent),x=(n(263),n(268)),C=n.n(x),S=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getBlockChildren=function(e,n){var a=t.props.isMobile,r=e.children,c=o.a.createElement(h.a,Object.assign({key:"text",leaveReverse:!0,delay:a?[0,100]:0},r.textWrapper),o.a.createElement("div",Object.assign({key:"time"},r.time),r.time.children),o.a.createElement("h2",Object.assign({key:"title"},r.title),o.a.createElement("i",r.icon,o.a.createElement(C.a,{src:r.icon.children})),r.title.children),o.a.createElement("div",Object.assign({key:"p"},r.content),r.content.children));return o.a.createElement(k.a,Object.assign({key:n.toString()},e),a&&c,o.a.createElement(h.a,Object.assign({className:"image-wrapper",key:"image",type:a?"right":"bottom",leaveReverse:!0,delay:a?[100,0]:0},r.imgWrapper),o.a.createElement("div",Object.assign({key:"image"},r.img),o.a.createElement(C.a,{style:{width:98,height:98},src:r.img.children})),o.a.createElement("div",{key:"name",className:"name-wrapper"},o.a.createElement("div",Object.assign({key:"name"},r.name),r.name.children),o.a.createElement("div",Object.assign({key:"post"},r.post),r.post.children))),!a&&c)},t}return i()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var n=t.block.children.map(this.getBlockChildren);return o.a.createElement("div",Object.assign({},e,t.wrapper),o.a.createElement("div",t.page,o.a.createElement("div",t.titleWrapper,t.titleWrapper.children.map(O)),o.a.createElement("div",t.block,n)))},t}(o.a.PureComponent),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=function(){window.open(n.props.dataSource.Content.children.url.children)},n.markerEnter=function(){n.setState({showInfo:!0})},n.markerLeave=function(){n.setState({showInfo:!1})},n.state={showInfo:t.isMobile},n}return i()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,o.a.createElement("div",Object.assign({},e,t.wrapper),o.a.createElement("div",Object.assign({},t.Content,{onMouseEnter:this.markerEnter,onMouseLeave:this.markerLeave,onClick:this.onClick,onTouchEnd:this.onClick}),o.a.createElement("div",t.Content.children.icon,o.a.createElement("img",{src:t.Content.children.icon.children,alt:"img"})),o.a.createElement("div",t.Content.children.iconShadow,o.a.createElement("img",{src:t.Content.children.iconShadow.children,alt:"img"}))),o.a.createElement(h.a,{type:"scale"},this.state.showInfo&&o.a.createElement("div",{className:"map-tip",key:"map"},o.a.createElement("h2",null,t.Content.children.title.children),o.a.createElement("p",null,t.Content.children.content.children))))},t}(o.a.PureComponent),M=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,o.a.createElement(k.a,Object.assign({},e,t.OverPack),o.a.createElement(h.a,Object.assign({type:"bottom",leaveReverse:!0,key:"page",delay:[0,100]},t.titleWrapper),t.titleWrapper.children.map(O)),o.a.createElement(w.b,Object.assign({key:"button",style:{textAlign:"center"}},t.button,{animation:{y:30,opacity:0,type:"from",delay:300}}),o.a.createElement(m.a,t.button.children.a,t.button.children.a.children)))},t}(o.a.PureComponent),W=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getChildrenToRender=function(e){return e.map(function(e){return o.a.createElement(v.a,Object.assign({key:e.name},e),o.a.createElement("div",e.children.wrapper,o.a.createElement("span",e.children.img,o.a.createElement("img",{style:{width:"100%"},src:e.children.img.children,alt:"img"}))))})},t}return i()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props),t=e.dataSource;delete e.dataSource,delete e.isMobile;var n=this.getChildrenToRender(t.block.children);return o.a.createElement("div",Object.assign({},e,t.wrapper),o.a.createElement("div",t.page,o.a.createElement("div",Object.assign({key:"title"},t.titleWrapper),t.titleWrapper.children.map(O)),o.a.createElement(k.a,Object.assign({className:"content-template "+e.className},t.OverPack),o.a.createElement(w.a,Object.assign({component:y.a,key:"ul",enter:{y:"+=30",opacity:0,type:"from",ease:"easeOutQuad"},leave:{y:"+=30",opacity:0,ease:"easeOutQuad"}},t.block),n))))},t}(o.a.PureComponent),P={wrapper:{className:"banner3"},textWrapper:{className:"banner3-text-wrapper",children:[{name:"nameEn",className:"banner3-name-en"},{name:"slogan",className:"banner3-slogan",children:"生活不止眼前的苟且",texty:!0},{name:"name",className:"banner3-name",children:"沧海一声笑"},{name:"button",className:"banner3-button",children:"Come on"},{name:"time",className:"banner3-time",children:"Five Hundred Miles"}]}},B={wrapper:{className:"home-page-wrapper content8-wrapper"},page:{className:"home-page content8"},OverPack:{playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"image",children:"https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",className:"title-image"},{name:"title",children:"@占位",className:"title-h1"}]},block:{className:"content-wrapper",children:[{name:"block0",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}},{name:"block1",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}},{name:"block2",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}},{name:"block3",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}},{name:"block4",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}},{name:"block5",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}},{name:"block6",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}},{name:"block7",md:6,xs:24,className:"content8-block-wrapper",children:{className:"content8-block",img:{className:"content8-img",children:"https://source.unsplash.com/random/1200x800"},title:{className:"content8-title",children:"暂无描述"},content:{className:"content8-content",children:"暂无描述"}}}]}},q={wrapper:{className:"home-page-wrapper content9-wrapper"},page:{className:"home-page content9"},titleWrapper:{className:"title-wrapper",children:[{name:"image",children:"https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",className:"title-image"},{name:"title",children:"暂无描述",className:"title-h1"}]},block:{className:"timeline",children:[{name:"block1",className:"block-wrapper",playScale:.3,children:{imgWrapper:{className:"image-wrapper"},textWrapper:{className:"text-wrapper"},img:{className:"block-img",children:"https://images.unsplash.com/photo-1564955703284-3e676413b7d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=1200"},icon:{className:"block-icon",children:"https://images.unsplash.com/photo-1524548209323-6fb4a0d4a4a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"},name:{className:"block-name",children:""},post:{className:"block-post",children:""},time:{className:"block-time",children:""},title:{className:"block-title",children:"空谷幽兰"},content:{className:"block-content",children:"纵有红颜 百生千劫\n难消君心 万古情愁\n青峰之巅 山外之山\n晚霞寂照 星夜无眠\n\n\n如幻大千 惊鸿一瞥\n一曲终了 悲欣交集\n夕阳之间 天外之天\n梅花清幽 独立春寒\n\n红尘中 你的无上清凉\n寂静光明 默默照耀世界\n行如风 如君一骑绝尘\n空谷绝响 至今谁在倾听\n\n一念净心 花开遍世界\n每临绝境 峰回路又转\n但凭净信 自在出乾坤\n恰似如梦初醒 归途在眼前\n\n行尽天涯 静默山水间\n倾听晚风 拂柳笛声残\n踏破芒鞋 烟雨任平生\n慧行坚勇 究畅恒无极"}}},{name:"block3",className:"block-wrapper",playScale:.3,children:{imgWrapper:{className:"image-wrapper"},textWrapper:{className:"text-wrapper"},img:{className:"block-img",children:"https://res.cloudinary.com/twenty20/private_images/t_standard-fit/v1442977525/photosp/8165a289-6466-4cde-948d-78fe8d527a7f/8165a289-6466-4cde-948d-78fe8d527a7f.jpg"},icon:{className:"block-icon",children:"https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg"},name:{className:"block-name",children:" "},post:{className:"block-post",children:""},time:{className:"block-time",children:""},title:{className:"block-title",children:"平凡之路"},content:{className:"block-content",children:"徘徊着的在路上的\n\n你要走吗\n易碎的骄傲着\n那也曾是我的模样\n沸腾着的不安着的\n你要去哪\n谜一样的沉默着的\n故事你真的在听吗\n我曾经跨过山和大海\n也穿过人山人海\n我曾经拥有着一切\n转眼都飘散如烟\n我曾经失落失望失掉所有方向\n直到看见平凡才是唯一的答案"}}}]}},I={wrapper:{className:"home-page-wrapper content10-wrapper"},Content:{className:"icon-wrapper",children:{icon:{className:"icon",children:"https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg",name:"主要图标"},iconShadow:{className:"icon-shadow",children:"https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg",name:"图标影阴"},url:{children:"https://gaode.com/place/B0FFH3KPBX",name:"跳转地址"},title:{children:"歌曲名称",name:"弹框标题"},content:{children:"ABCDEFG",name:"弹框内容"}}}},z={OverPack:{className:"home-page-wrapper content11-wrapper",playScale:.3},titleWrapper:{className:"title-wrapper",children:[{name:"image",children:"https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg",className:"title-image"},{name:"title",children:"水调歌头",className:"title-h1"},{name:"content",children:"你在那万人中央,感受着万丈荣光",className:"title-content"}]},button:{className:"",children:{a:{className:"button",href:"/",children:"唐诗三百首"}}}},Q={wrapper:{className:"home-page-wrapper content12-wrapper"},page:{className:"home-page content12"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"image",children:"https://source.unsplash.com/random/1200x800",className:"title-image"},{name:"title",children:"",className:"title-h1"}]},block:{className:"img-wrapper",children:[{name:"block0",children:{wrapper:{className:"block-content"},img:{children:"https://images.unsplash.com/photo-1566197530113-4dc7013a06a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=1200"}}}]}},R=(n(204),n(245)),A=n(241);n.d(t,"pageQuery",function(){return L});var H=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(R.a,{location:this.props.location,title:e},o.a.createElement(A.a,{title:"Home",keywords:["blog","gatsby","javascript","react","ant-design"]}),o.a.createElement(r.a,null),o.a.createElement(g,{id:"Banner3_0",key:"Banner3_0",dataSource:P}),o.a.createElement(j,{id:"Content8_0",key:"Content8_0",dataSource:B}),o.a.createElement(S,{id:"Content9_0",key:"Content9_0",dataSource:q}),o.a.createElement(_,{id:"Content10_0",key:"Content10_0",dataSource:I}),o.a.createElement(M,{id:"Content11_0",key:"Content11_0",dataSource:z}),o.a.createElement(W,{id:"Content12_0",key:"Content12_0",dataSource:Q}))},t}(o.a.Component),L=(t.default=H,"1097489062")},217:function(e,t,n){"use strict";n.d(t,"b",function(){return p});var a=n(0),r=n.n(a),c=n(5),i=n.n(c),l=n(38),o=n.n(l);n.d(t,"a",function(){return o.a}),n.d(t,"c",function(){return l.navigate});n(225);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,n=e.data,a=e.query,c=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&c(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,n=e.query,a=e.render,c=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:n,render:a||c,staticQueryData:e})})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},225:function(e,t,n){var a;e.exports=(a=n(240))&&a.default||a},232:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return l});var a=n(230),r=a.a.div.withConfig({displayName:"wrapper__LayoutWrapper",componentId:"sc-4hyxvf-0"})(["height:100vh;"]),c=a.a.main.withConfig({displayName:"wrapper__ContentWrapper",componentId:"sc-4hyxvf-1"})(["margin:0 auto;height:calc(100% - 48px);"]),i=(a.a.a.withConfig({displayName:"wrapper__BlogButtonWrapper",componentId:"sc-4hyxvf-2"})(["padding:8px 12px;text-align:center;text-transform:uppercase;transition:0.5s;background-size:200% auto;color:white;box-shadow:0 0 20px #eee;border-radius:10px;bacgkround:",";background-image:",";&:hover{background-position:right center;}"],function(e){return e.bg||"transparent"},function(e){return e.bgImage}),a.a.nav.withConfig({displayName:"wrapper__BlogLeafWrapper",componentId:"sc-4hyxvf-3"})(["display:flex;flex-wrap:wrap;justify-content:space-between;padding:24px;a{transition:all 0.2s linear;&:hover{text-shadow:1px 1px currentColor;}}"])),l=a.a.div.withConfig({displayName:"wrapper__FlexWrapper",componentId:"sc-4hyxvf-4"})(["display:flex;"])},240:function(e,t,n){"use strict";n.r(t);n(40);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),l=n(66),o=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},241:function(e,t,n){"use strict";var a=n(242),r=n(0),c=n.n(r),i=n(5),l=n.n(i),o=n(275),s=n.n(o),m=n(217);function p(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return c.a.createElement(m.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"zh",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var d="1025518380"},242:function(e){e.exports={data:{site:{siteMetadata:{title:"个人博客",description:"学习使用 gatsby",author:"凝聚者"}}}}},243:function(e){e.exports={data:{site:{siteMetadata:{title:"个人博客"}}}}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isScrollLink:!0,wrapper:{className:"header2 home-page-wrapper jrhtw9ph4a-editor_css"},page:{className:"home-page"},logo:{className:"header2-logo",children:"https://avatars3.githubusercontent.com/u/16014141?s=400&u=e432731469909d98b2e5ed969e7f80743c49c046&v=4"},LinkMenu:{className:"header2-menu",children:[{name:"home",to:"/",children:"首页",className:"menu-item"},{name:"blogs",to:"blogs",children:"博客",className:"menu-item"},{name:"about",to:"about",children:"关于我",className:"menu-item"}]},mobileMenu:{className:"header2-mobile-menu"},Menu:{children:[{name:"Banner3_0",to:"Banner3_0",children:"首页",className:"active menu-item"}]}}},245:function(e,t,n){"use strict";var a=n(243),r=n(0),c=n.n(r),i=n(217),l=(n(262),n(271)),o=n.n(l),s=(n(263),n(268)),m=n.n(s),p=(n(40),n(98),n(65),n(41),n(247),n(97)),d=n.n(p),h=n(8),u=n.n(h),g=n(239),b=n(244),y=n.n(b),f=(n(164),function(e){function t(t){var n;return(n=e.call(this,t)||this).phoneClick=function(){var e=!n.state.phoneOpen;n.setState({phoneOpen:e})},n.state={phoneOpen:!1},n}return u()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.isMobile,a=d()(t,["isMobile"]),r=this.state.phoneOpen,l=y.a.LinkMenu,o=l.children,s=Object.keys(o).map(function(e,t){return c.a.createElement(i.a,Object.assign({key:""+t},o[e]),o[e].children)}),p=void 0===r?300:null;return c.a.createElement(g.b,Object.assign({component:"header",animation:{opacity:0,type:"from"}},y.a.wrapper,a),c.a.createElement("div",Object.assign({},y.a.page,{className:y.a.page.className+(r?" open":"")}),c.a.createElement(g.b,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},y.a.logo),c.a.createElement(m.a,{src:y.a.logo.children})),n&&c.a.createElement("div",Object.assign({},y.a.mobileMenu,{onClick:function(){e.phoneClick()}})),c.a.createElement(g.b,Object.assign({},l,{animation:n?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:p,reverse:!!r}),s)))},t}(c.a.Component)),v=(n(278),n(279)),w=n.n(v),N=n(230);function k(){var e=Object(r.useState)(0),t=e[0],n=e[1];function a(){var e=window.innerHeight,t=window.scrollY,a=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);n(function(e,t){return e/t*100}(t,a-e))}return Object(r.useEffect)(function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[]),{percent:t}}var E=Object(N.a)(w.a).withConfig({displayName:"Progress__ProgressWrapper",componentId:"sc-1fl1jkt-0"})(["&.ant-progress{position:fixed;top:0;left:0;line-height:1;font-size:0;}.ant-progress-bg{height:5px !important;}"]);function O(){var e=k().percent;return e?c.a.createElement(E,{percent:e,showInfo:!1,strokeColor:{"0%":"#fff","100%":"#87d068"}}):null}var j=function(){return c.a.createElement(o.a,null,c.a.createElement(O,null),c.a.createElement(f,null))},x=n(232);t.a=function(e){var t=e.children,n=e.location;return c.a.createElement(i.b,{query:"2994927498",render:function(e){return c.a.createElement(x.d,null,c.a.createElement(j,{location:n,siteTitle:e.site.siteMetadata.title}),c.a.createElement(x.b,null,t))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-index-js-a1bf89c737b0223b8924.js.map