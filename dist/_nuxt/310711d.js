(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{390:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r(118);var n=r(145),d=r(92);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(n.a)(t)||Object(d.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},391:function(t,e,r){"use strict";r(31),r(23),r(33),r(24),r(34);var o=r(7),n=r(390),d=(r(14),r(75),r(246),r(17),r(27),r(21)),c=r(147),l=r(148),f=r(16);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={components:{AdsKeeper:c.a,AdsGoogle:l.a},data:function(){return{metaTitle:"",metaDescription:"",meta:""}},head:function(){var meta=[],t=[];this.metaDescription&&meta.push.apply(meta,Object(n.a)(this.metaDescription)),"index"===this.$route.name&&meta.push.apply(meta,Object(n.a)(this.$metas()));var e={};return e.link=[{rel:"icon",type:"image/x-icon",href:"".concat(this.$favicon())}],e.meta=meta,"index"===this.$route.name?e.title=this.$sitename():e.title="".concat(this.metaTitle," - ").concat(this.$sitename()),this.measurementId&&(t.push({async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(this.measurementId)}),t.push({innerHTML:"window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '".concat(this.measurementId,"');")})),this.metaYoastSeo&&t.push({innerHTML:JSON.stringify(this.metaYoastSeo),hid:"yoast-seo",type:"application/ld+json",class:"yoast-schema-graph"}),e.script=t,e.__dangerouslyDisableSanitizers=["script"],e},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({adsHeader:function(t){var e=t.common.storeLoadAds.ads.find((function(t){return t.position.id===f.n}));return e||null},adsPostDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.c}))},adsCategory:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.a}))},adsSearch:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.d}))},adsTag:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.e}))},adsPageDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.b}))},measurementId:function(t){return t.common.storeLoadInit.settings.analytic.measurement_id}})),mounted:function(){}}},420:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("cccd67b6",content,!0,{sourceMap:!1})},421:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("4585250d",content,!0,{sourceMap:!1})},422:function(t,e,r){var content=r(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("2040eac6",content,!0,{sourceMap:!1})},456:function(t,e,r){"use strict";r(420)},457:function(t,e,r){var o=r(11)((function(i){return i[1]}));o.push([t.i,".category-cart[data-v-08a34b5d]{background-color:#0099e5;color:#fff;font-size:12px;line-height:17px;padding:4px 10px;text-transform:uppercase}.category-cart p[data-v-08a34b5d]{font-size:12px}.category-cart[data-v-08a34b5d]:nth-child(2){background-color:#00c16e}.category-cart[data-v-08a34b5d]:nth-child(3){background-color:#8e43e7}.category-cart[data-v-08a34b5d]:nth-child(4){background-color:#b84592}.category-cart[data-v-08a34b5d]:nth-child(5){background-color:red}.category-cart[data-v-08a34b5d]:nth-child(6){background-color:#ff6900}.category-cart[data-v-08a34b5d]:nth-child(7){background-color:#fcb900}.category-cart[data-v-08a34b5d]:nth-child(8){background-color:#27808c}.category-cart[data-v-08a34b5d]:nth-child(9){background-color:#ff6b98}",""]),o.locals={},t.exports=o},458:function(t,e,r){"use strict";r(421)},459:function(t,e,r){var o=r(11)((function(i){return i[1]}));o.push([t.i,".categories-card[data-v-674e2ab2]{display:flex;flex-wrap:wrap;gap:5px}",""]),o.locals={},t.exports=o},460:function(t,e,r){"use strict";r(422)},461:function(t,e,r){var o=r(11)((function(i){return i[1]}));o.push([t.i,'.post[data-v-5d839b34]{padding-top:10px}.post-paragraph[data-v-5d839b34]{line-height:28px;margin-top:32px}.post-carts[data-v-5d839b34]{display:flex;flex-wrap:wrap;gap:5px}.post-heading[data-v-5d839b34]{font-size:27px;font-weight:700;line-height:34px;margin-top:30px}.post-metadata[data-v-5d839b34]{font-size:13px;line-height:26px;margin-top:10px}.post-author[data-v-5d839b34]{font-weight:700}.post-author[data-v-5d839b34],.post-update[data-v-5d839b34]{font-size:inherit}.post-image[data-v-5d839b34]{width:100%}.post-content[data-v-5d839b34]{margin-top:32px}.post-textes[data-v-5d839b34]{display:flex;flex-direction:column;gap:32px 0;margin-top:40px;padding:0;width:100%}.post-textes .text[data-v-5d839b34]{line-height:26px}.post-tags[data-v-5d839b34]{display:flex;gap:0 5px;margin-top:32px}.post-tags .tag[data-v-5d839b34]{background-color:#e9e9e9;font-size:11px;line-height:15px;padding:4px 10px;text-transform:uppercase}.post-comments .comment[data-v-5d839b34]{border:1px solid #e9e9e9;margin-top:32px;padding:24px}.post-comments .user[data-v-5d839b34]{align-items:center;display:flex;gap:5px}.post-comments .user-image[data-v-5d839b34]{border-radius:50%;height:26px;width:26px}.post-comments .user-name[data-v-5d839b34]{line-height:24px}.post-comments .user-content[data-v-5d839b34]{line-height:26px;margin-top:10px}.error[data-v-5d839b34]{display:flex;flex-direction:column;gap:32px 0}.error-title[data-v-5d839b34]{font-size:35px;line-height:43px}.error-desc[data-v-5d839b34]{line-height:26px}.search[data-v-5d839b34]{display:flex;height:43px;width:100%}.search-input[data-v-5d839b34]{background-color:#f0f0f0;color:#333;display:inline-block;font-family:"Inter";font-size:14px;font-weight:600;height:100%;line-height:24.5px;padding:5px 0 5px 10px}.search-button[data-v-5d839b34]{align-items:center;background-color:#0099e5;color:#fff;display:flex;height:100%;justify-content:center;width:113px}.sugguest-title[data-v-5d839b34]{font-size:16px}.sugguest-list li[data-v-5d839b34]{color:#222;line-height:26px;list-style-position:inside;list-style-type:disc}',""]),o.locals={},t.exports=o},465:function(t,e,r){"use strict";r.r(e);r(14);var o=r(3),n=(r(26),r(54),r(35),r(247),r(59),r(246),r(17),r(391)),d={props:{category:{type:Object,default:function(){}}}},c=(r(456),r(2)),l=Object(c.a)(d,(function(){var t,e,r=this,o=r._self._c;return o("nuxt-link",{staticClass:"category-cart",attrs:{to:"/category/".concat(null===(t=r.category)||void 0===t?void 0:t.slug,"/")}},[o("p",[r._v(r._s(null===(e=r.category)||void 0===e?void 0:e.name))])])}),[],!1,null,"08a34b5d",null).exports,f={props:{categories:{type:Array,default:function(){return[]}}},components:{CategoryCard:l}},h=(r(458),Object(c.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"categories-card"},t._l(t.categories,(function(t,r){return e("CategoryCard",{key:r,attrs:{category:t}})})),1)}),[],!1,null,"674e2ab2",null).exports),m=r(16),v={layout:"MainLayout/index",mixins:[n.a],components:{Categories:h},data:function(){return{postDetail:null,postBody:null,postBodyArray:[],isLoading:!1,contentAds:[],testAds:{body:'\x3c!-- Composite Start --\x3e \n<div id="M886209ScriptRootC1465593"></div> \n<script src="https://jsc.adskeeper.com/m/b/m.baly.online.1465593.js" async><\/script> \n\x3c!-- Composite End --\x3e'}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$setLoading(!0),r={},o={api_key:t.env.API_KEY,website_id:t.env.WEBSITE_ID,post_id:t.params.id,get_meta:1},e.next=5,t.$axios.get("manager/posts/json/1.json",{params:o});case 5:return 1===(n=e.sent).data.status_code&&0!==n.data.data.length?(r.postDetail=n.data.data[0],r.status=n.data.status_code,r.metaDescription=n.data.data[0].meta,r.metaTitle=n.data.data[0].name,r.metaYoastSeo=n.data.data[0]["yoast-seo"],r.postDetail.body&&(r.postBodyArray=r.postDetail.body.match(/<p>(.*?)<\/p>/g).map((function(t){return t.replace(/<\/?p>/g,"")})))):r.status=n.data.status_code,t.$setLoading(!1),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))()},methods:{},computed:{imageUrl:function(){return this.postDetail&&this.postDetail.image?this.postDetail.image:null},beforePostAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===m.l}));return t||null},beforeContentAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===m.j}));return t||null},beforeParagraphAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===m.k}));return t||null},afterPostAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===m.h}));return t||null},afterContentAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===m.f}));return t||null},afterParagraphAds:function(){if(!this.adsPostDetail.length)return null;var t=this.adsPostDetail.find((function(t){return t.position.id===m.g}));return t||null}}},y=(r(460),Object(c.a)(v,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"layout-flex-primary",attrs:{id:"main"}},[t.postDetail?e("article",[t.beforePostAds?[2===t.beforePostAds.type.id?e("ads-keeper",{attrs:{selector:"ads-before-post",contentAds:t.beforePostAds}}):t._e(),t._v(" "),1===t.beforePostAds.type.id?e("ads-google",{attrs:{selector:"ads-before-post",contentAds:t.beforePostAds}}):t._e()]:t._e(),t._v(" "),e("div",{staticClass:"post-header"},[e("Categories",{attrs:{categories:t.postDetail.categories}}),t._v(" "),e("h2",{staticClass:"post-heading"},[t._v("\n        "+t._s(t.postDetail.name)+"\n      ")]),t._v(" "),e("p",{staticClass:"post-metadata"},[t._v("Posted by "),e("nuxt-link",{staticClass:"post-author",attrs:{to:"/author/".concat(t.postDetail.creater.username)}},[t._v(t._s(t.postDetail.creater.name))]),t._v(" - "),e("span",{staticClass:"post-update"},[t._v(t._s(t.postDetail.creater.created))])],1)],1),t._v(" "),e("div",{staticClass:"entry-content"},[e("div",[t.beforeContentAds?[2===t.beforeContentAds.type.id?e("ads-keeper",{attrs:{selector:"ads-before-content",contentAds:t.beforeContentAds}}):t._e(),t._v(" "),1===t.beforeContentAds.type.id?e("ads-google",{attrs:{selector:"ads-before-content",contentAds:t.beforeContentAds}}):t._e()]:t._e(),t._v(" "),t._l(t.postBodyArray,(function(html,r){return[t.beforeParagraphAds&&r+1===t.beforeParagraphAds.class.number?[2===t.beforeParagraphAds.type.id?e("ads-keeper",{key:"before-".concat(r),attrs:{selector:"ads-before-content-".concat(r),contentAds:t.beforeParagraphAds}}):t._e(),t._v(" "),1===t.beforeParagraphAds.type.id?e("ads-google",{key:"before-".concat(r),attrs:{selector:"ads-before-content-".concat(r),contentAds:t.beforeParagraphAds}}):t._e()]:t._e(),t._v(" "),t.beforeParagraphAds&&(r+1-t.beforeParagraphAds.class.number)%t.beforeParagraphAds.class.repeat_content_number==0&&r-t.beforeParagraphAds.class.number>0?[2===t.beforeParagraphAds.type.id?e("ads-keeper",{key:"beforứare-".concat(r),attrs:{selector:"ads-before-content-".concat(r),contentAds:t.beforeParagraphAds}}):t._e(),t._v(" "),1===t.beforeParagraphAds.type.id?e("ads-google",{key:"before-".concat(r),attrs:{selector:"ads-before-content-".concat(r),contentAds:t.beforeParagraphAds}}):t._e()]:t._e(),t._v(" "),e("p",{key:r,staticClass:"post-paragraph",domProps:{innerHTML:t._s(html)}}),t._v(" "),t.afterParagraphAds&&r+1===t.afterParagraphAds.class.number?[2===t.afterParagraphAds.type.id?e("ads-keeper",{key:"after-".concat(r),attrs:{selector:"ads-after-content-".concat(r),contentAds:t.afterParagraphAds}}):t._e(),t._v(" "),1===t.afterParagraphAds.type.id?e("ads-google",{key:"after-".concat(r),attrs:{selector:"ads-before-content-".concat(r),contentAds:t.afterParagraphAds}}):t._e()]:t._e(),t._v(" "),t.afterParagraphAds&&(r+1-t.afterParagraphAds.class.number)%t.afterParagraphAds.class.repeat_content_number==0&&r-t.afterParagraphAds.class.number>0?[2===t.afterParagraphAds.type.id?e("ads-keeper",{key:"after-".concat(r),attrs:{selector:"ads-after-content-".concat(r),contentAds:t.afterParagraphAds}}):t._e(),t._v(" "),1===t.afterParagraphAds.type.id?e("ads-google",{key:"after-".concat(r),attrs:{selector:"ads-before-content-".concat(r),contentAds:t.afterParagraphAds}}):t._e()]:t._e()]})),t._v(" "),t.afterContentAds?[2===t.afterContentAds.type.id?e("ads-keeper",{attrs:{selector:"ads-after-content",contentAds:t.afterContentAds}}):t._e(),t._v(" "),1===t.afterContentAds.type.id?e("ads-google",{attrs:{selector:"ads-after-content",contentAds:t.afterContentAds}}):t._e()]:t._e()],2)]),t._v(" "),t.afterPostAds?[2===t.beforePostAds.type.id?e("ads-keeper",{attrs:{selector:"ads-after-post",contentAds:t.beforePostAds}}):t._e(),t._v(" "),1===t.beforePostAds.type.id?e("ads-google",{attrs:{selector:"ads-after-post",contentAds:t.beforePostAds}}):t._e()]:t._e()],2):t._e(),t._v(" "),t.status?e("div",{staticClass:"error"},[e("h1",{staticClass:"error-title"},[t._v("404 Error – Page Not Found")]),t._v(" "),e("p",{staticClass:"error-desc"},[t._v("Sorry, the page you are looking for is not available. Maybe you want to perform a\n      search?\n    ")]),t._v(" "),t._m(0),t._v(" "),e("h6",{staticClass:"sugguest-title"},[t._v("For best search results, mind the following suggestions:")]),t._v(" "),t._m(1)]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("input",{staticClass:"search-input",attrs:{type:"text"}}),t._v(" "),e("button",{staticClass:"search-button"},[t._v("Search")])])},function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"sugguest-list"},[e("li",[t._v("Always double check your spelling.")]),t._v(" "),e("li",[t._v("Try similar keywords, for example: tablet instead of laptop.")]),t._v(" "),e("li",[t._v("Always double check your spelling.")])])])}],!1,null,"5d839b34",null));e.default=y.exports}}]);