(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{434:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(125);var o=r(155),c=r(92);function d(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},435:function(t,e,r){"use strict";var n=r(6),o=r(90).find,c=r(152),d="find",l=!0;d in[]&&Array(1)[d]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},436:function(t,e,r){"use strict";r(38),r(27),r(45),r(32),r(46);var n=r(12),o=r(434),c=(r(13),r(91),r(435),r(21),r(36),r(39)),d=r(154),l=r(153),f=r(22);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={components:{AdsKeeper:d.a,AdsGoogle:l.a},data:function(){return{metaTitle:"",metaDescription:"",meta:""}},head:function(){var meta=[],t=[];this.metaDescription&&meta.push.apply(meta,Object(o.a)(this.metaDescription)),"index"===this.$route.name&&meta.push.apply(meta,Object(o.a)(this.$metas()));var e={};return e.link=[{rel:"icon",type:"image/x-icon",href:"".concat(this.$favicon())}],e.meta=meta,"index"===this.$route.name?e.title=this.$sitename():e.title="".concat(this.metaTitle," - ").concat(this.$sitename()),this.measurementId&&(t.push({async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(this.measurementId)}),t.push({innerHTML:"window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '".concat(this.measurementId,"');")})),this.metaYoastSeo&&t.push({innerHTML:JSON.stringify(this.metaYoastSeo),hid:"yoast-seo",type:"application/ld+json",class:"yoast-schema-graph"}),e.script=t,e.__dangerouslyDisableSanitizers=["script"],e},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({adsHeader:function(t){var e=t.common.storeLoadAds.ads.find((function(t){return t.position.id===f.l}));return e||null},adsPostDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.c}))},adsCategory:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.a}))},adsSearch:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.d}))},adsTag:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.e}))},adsPageDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.b}))},measurementId:function(t){return t.common.storeLoadInit.settings.analytic.measurement_id}})),mounted:function(){}}},445:function(t,e,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("476a2097",content,!0,{sourceMap:!1})},462:function(t,e,r){"use strict";r(445)},463:function(t,e,r){var n=r(4)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},471:function(t,e,r){"use strict";r.r(e);r(13);var n=r(2),o=(r(16),r(54),r(33),r(266),r(59),r(435),r(21),r(436)),c=r(22),d={layout:"TopLayout/TopLayout",mixins:[o.a],components:{},data:function(){return{postDetail:null,postBody:null,postBodyArray:[],isLoading:!1,contentAds:[]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$setLoading(!0),r={},n={api_key:t.env.API_KEY,website_id:t.env.WEBSITE_ID,post_slug:t.params.slug,get_meta:1},e.next=5,t.$axios.get("manager/posts/json/1.json",{params:n});case 5:return 1===(o=e.sent).data.status_code&&0!==o.data.data.length&&(r.postDetail=o.data.data[0],r.metaDescription=o.data.data[0].meta,r.metaTitle=o.data.data[0].name,r.postDetail.body&&(r.postBodyArray=r.postDetail.body.match(/<p>(.*?)<\/p>/g).map((function(t){return t.replace(/<\/?p>/g,"")})))),t.$setLoading(!1),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))()},methods:{},computed:{imageUrl:function(){return this.postDetail&&this.postDetail.image?this.postDetail.image:null},beforePostAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===c.k}));return t||null},beforeContentAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===c.i}));return t||null},beforeParagraphAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===c.j}));return t||null},afterPostAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===c.h}));return t||null},afterContentAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===c.f}));return t||null},afterParagraphAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===c.g}));return t||null}}},l=(r(462),r(0)),component=Object(l.a)(d,(function(){var t,e,r,n=this,o=n._self._c;return o("main",{staticClass:"site-main single",attrs:{id:"main"}},[n.postDetail?o("article",[o("div",{staticClass:"breadcrumbs"},[o("span",{staticClass:"breadcrumbs-nav"},[o("router-link",{attrs:{to:"/"}},[n._v("Home")]),n._v(" "),0!==n.postDetail.categories.length?o("span",{staticClass:"post-category"},[o("router-link",{attrs:{to:"/category/".concat(n.postDetail.categories[0].slug,"/")}},[n._v(n._s(n.postDetail.categories[0].name))])],1):n._e(),n._v(" "),o("span",{staticClass:"post-title",domProps:{innerHTML:n._s(n.postDetail.name)}})],1)]),n._v(" "),n.beforePostAds?[2===n.beforePostAds.type.id?o("ads-keeper",{attrs:{selector:"ads-before-post",contentAds:n.beforePostAds}}):n._e(),n._v(" "),1===n.beforePostAds.type.id?o("ads-google",{attrs:{selector:"ads-before-post",contentAds:n.beforePostAds}}):n._e()]:n._e(),n._v(" "),o("header",{staticClass:"entry-header clear"},[o("h1",{staticClass:"entry-title",domProps:{innerHTML:n._s(n.postDetail.name)}}),n._v(" "),o("div",{staticClass:"entry-meta clear"},[0!==n.postDetail.categories.length?o("span",{staticClass:"entry-category"},[o("router-link",{style:{backgroundColor:"#0099e5"},attrs:{to:"/category/".concat(n.postDetail.categories[0].slug,"/")}},[n._v(n._s(n.postDetail.categories[0].name))])],1):n._e(),n._v(" "),o("nuxt-link",{attrs:{to:"/author/".concat(n.postDetail.creater.username,"/")}},[o("span",{staticClass:"entry-author"},[o("span",[n._v(n._s(n.postDetail.creater.name))])])]),n._v(" "),o("span",{staticClass:"sep date-sep"},[n._v("·")]),n._v(" "),o("span",{staticClass:"entry-date"},[n._v(n._s(n.$timePost(n.postDetail.creater.created)))]),n._v(" "),null!==(t=n.postDetail)&&void 0!==t&&t.tags.length?[o("span",{staticClass:"sep date-sep"},[n._v("·")]),n._v(" "),o("span",{staticClass:"entry-tag"},[o("router-link",{attrs:{to:"/tag/".concat(null===(e=n.postDetail)||void 0===e?void 0:e.tags[0].slug,"/")}},[n._v(n._s(null===(r=n.postDetail)||void 0===r?void 0:r.tags[0].name))])],1)]:n._e()],2)]),n._v(" "),o("div",{staticClass:"entry-content"},[o("div",[n.beforeContentAds?[2===n.beforeContentAds.type.id?o("ads-keeper",{attrs:{selector:"ads-before-content",contentAds:n.beforeContentAds}}):n._e(),n._v(" "),1===n.beforeContentAds.type.id?o("ads-google",{attrs:{selector:"ads-before-content",contentAds:n.beforeContentAds}}):n._e()]:n._e(),n._v(" "),n._l(n.postBodyArray,(function(html,t){return[n.beforeParagraphAds&&t+1===n.beforeParagraphAds.class.number?[2===n.beforeParagraphAds.type.id?o("ads-keeper",{key:"before-".concat(t),attrs:{selector:"ads-before-content-".concat(t),contentAds:n.beforeParagraphAds}}):n._e(),n._v(" "),1===n.beforeParagraphAds.type.id?o("ads-google",{key:"before-".concat(t),attrs:{selector:"ads-before-content-".concat(t),contentAds:n.beforeParagraphAds}}):n._e()]:n._e(),n._v(" "),n.beforeParagraphAds&&(t+1-n.beforeParagraphAds.class.number)%n.beforeParagraphAds.class.repeat_content_number==0&&t-n.beforeParagraphAds.class.number>0?[2===n.beforeParagraphAds.type.id?o("ads-keeper",{key:"beforứare-".concat(t),attrs:{selector:"ads-before-content-".concat(t),contentAds:n.beforeParagraphAds}}):n._e(),n._v(" "),1===n.beforeParagraphAds.type.id?o("ads-google",{key:"before-".concat(t),attrs:{selector:"ads-before-content-".concat(t),contentAds:n.beforeParagraphAds}}):n._e()]:n._e(),n._v(" "),o("p",{key:t,domProps:{innerHTML:n._s(html)}}),n._v(" "),n.afterParagraphAds&&t+1===n.afterParagraphAds.class.number?[2===n.afterParagraphAds.type.id?o("ads-keeper",{key:"after-".concat(t),attrs:{selector:"ads-after-content-".concat(t),contentAds:n.afterParagraphAds}}):n._e(),n._v(" "),1===n.afterParagraphAds.type.id?o("ads-google",{key:"after-".concat(t),attrs:{selector:"ads-before-content-".concat(t),contentAds:n.afterParagraphAds}}):n._e()]:n._e(),n._v(" "),n.afterParagraphAds&&(t+1-n.afterParagraphAds.class.number)%n.afterParagraphAds.class.repeat_content_number==0&&t-n.afterParagraphAds.class.number>0?[2===n.afterParagraphAds.type.id?o("ads-keeper",{key:"after-".concat(t),attrs:{selector:"ads-after-content-".concat(t),contentAds:n.afterParagraphAds}}):n._e(),n._v(" "),1===n.afterParagraphAds.type.id?o("ads-google",{key:"after-".concat(t),attrs:{selector:"ads-before-content-".concat(t),contentAds:n.afterParagraphAds}}):n._e()]:n._e()]})),n._v(" "),n.afterContentAds?[2===n.afterContentAds.type.id?o("ads-keeper",{attrs:{selector:"ads-after-content",contentAds:n.afterContentAds}}):n._e(),n._v(" "),1===n.afterContentAds.type.id?o("ads-google",{attrs:{selector:"ads-after-content",contentAds:n.afterContentAds}}):n._e()]:n._e()],2)]),n._v(" "),n.afterPostAds?[2===n.beforePostAds.type.id?o("ads-keeper",{attrs:{selector:"ads-after-post",contentAds:n.beforePostAds}}):n._e(),n._v(" "),1===n.beforePostAds.type.id?o("ads-google",{attrs:{selector:"ads-after-post",contentAds:n.beforePostAds}}):n._e()]:n._e()],2):n._e()])}),[],!1,null,"3d7a35c9",null);e.default=component.exports}}]);