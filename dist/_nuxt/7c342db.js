(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{390:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(118);var r=o(145),c=o(92);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},391:function(t,e,o){"use strict";o(31),o(23),o(33),o(24),o(34);var n=o(7),r=o(390),c=(o(14),o(75),o(246),o(17),o(27),o(21)),l=o(147),d=o(148),m=o(16);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}e.a={components:{AdsKeeper:l.a,AdsGoogle:d.a},data:function(){return{metaTitle:"",metaDescription:"",meta:""}},head:function(){var meta=[],t=[];this.metaDescription&&meta.push.apply(meta,Object(r.a)(this.metaDescription)),"index"===this.$route.name&&meta.push.apply(meta,Object(r.a)(this.$metas()));var e={};return e.link=[{rel:"icon",type:"image/x-icon",href:"".concat(this.$favicon())}],e.meta=meta,"index"===this.$route.name?e.title=this.$sitename():e.title="".concat(this.metaTitle," - ").concat(this.$sitename()),this.measurementId&&(t.push({async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(this.measurementId)}),t.push({innerHTML:"window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '".concat(this.measurementId,"');")})),this.metaYoastSeo&&t.push({innerHTML:JSON.stringify(this.metaYoastSeo),hid:"yoast-seo",type:"application/ld+json",class:"yoast-schema-graph"}),e.script=t,e.__dangerouslyDisableSanitizers=["script"],e},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({adsHeader:function(t){var e=t.common.storeLoadAds.ads.find((function(t){return t.position.id===m.n}));return e||null},adsPostDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===m.c}))},adsCategory:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===m.a}))},adsSearch:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===m.d}))},adsTag:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===m.e}))},adsPageDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===m.b}))},measurementId:function(t){return t.common.storeLoadInit.settings.analytic.measurement_id}})),mounted:function(){}}},392:function(t,e,o){var content=o(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("45043fa2",content,!0,{sourceMap:!1})},393:function(t,e,o){var content=o(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("7e1dac3c",content,!0,{sourceMap:!1})},394:function(t,e,o){"use strict";o(392)},395:function(t,e,o){var n=o(11)((function(i){return i[1]}));n.push([t.i,".loading[data-v-7bdb9fc2]{align-items:center;display:block;display:flex;height:100px;justify-content:center;overflow:hidden;position:relative;z-index:9999}.loading .bg[data-v-7bdb9fc2]{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.loading .spinner[data-v-7bdb9fc2]{position:relative}",""]),n.locals={},t.exports=n},396:function(t,e,o){"use strict";var n={props:{active:{type:Boolean,default:!1}}},r=(o(394),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.active?e("div",{staticClass:"loading"},[e("div",{staticClass:"bg"}),t._v(" "),e("div",{staticClass:"spinner"},[e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",stroke:"#007bff"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),t._v(" "),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])])]):t._e()}),[],!1,null,"7bdb9fc2",null);e.a=component.exports},397:function(t,e,o){var content=o(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("60d1c1b1",content,!0,{sourceMap:!1})},398:function(t,e,o){"use strict";o(393)},399:function(t,e,o){var n=o(11)((function(i){return i[1]}));n.push([t.i,".post-horizontal[data-v-4b0b5762]{display:flex;gap:23px;width:100%}.post-horizontal-image[data-v-4b0b5762]{height:160px;-o-object-fit:cover;object-fit:cover;width:240px}.post-horizontal-content[data-v-4b0b5762]{display:flex;flex-direction:column;gap:10px}.post-horizontal-metadata[data-v-4b0b5762]{display:flex;gap:15px}.post-horizontal-desc[data-v-4b0b5762]{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#888;display:-webkit-box;line-height:22px;overflow:hidden;width:100%}.post-horizontal-title[data-v-4b0b5762]{font-size:1.5rem}.post-horizontal-title[data-v-4b0b5762]:hover{color:#0099e5}.post-horizontal-author[data-v-4b0b5762]{font-weight:700}",""]),n.locals={},t.exports=n},400:function(t,e,o){"use strict";o(14),o(23),o(53);var n={props:{post:{type:Object,default:function(){}}}},r=(o(398),o(2)),component=Object(r.a)(n,(function(){var t,e,o,n,r,c,l,d,m=this,f=m._self._c;return f("div",{staticClass:"post-horizontal"},[f("nuxt-link",{attrs:{to:"/".concat(null===(t=m.post)||void 0===t?void 0:t.id)}},[f("img",{staticClass:"post-horizontal-image",attrs:{src:null===(e=m.post)||void 0===e?void 0:e.image,alt:""}})]),m._v(" "),f("div",{staticClass:"post-horizontal-content"},[f("nuxt-link",{attrs:{to:"/".concat(null===(o=m.post)||void 0===o?void 0:o.id)}},[f("h2",{staticClass:"post-horizontal-title"},[m._v("\n                "+m._s(null===(n=m.post)||void 0===n?void 0:n.name)+"\n            ")])]),m._v(" "),f("div",{staticClass:"post-horizontal-metadata"},[f("nuxt-link",{staticClass:"post-horizontal-author",attrs:{to:"/author/".concat(null===(r=m.post)||void 0===r||null===(r=r.author)||void 0===r?void 0:r.username)}},[m._v(m._s(null===(c=m.post)||void 0===c||null===(c=c.author)||void 0===c?void 0:c.name))]),m._v(" "),f("p",{staticClass:"post-horizontal-date"},[m._v("\n                "+m._s(null===(l=m.post)||void 0===l?void 0:l.created)+"\n            ")])],1),m._v(" "),f("p",{staticClass:"post-horizontal-desc"},[m._v("\n            "+m._s(null===(d=m.post)||void 0===d?void 0:d.description)+"\n        ")])],1)],1)}),[],!1,null,"4b0b5762",null);e.a=component.exports},401:function(t,e,o){"use strict";o(397)},402:function(t,e,o){var n=o(11)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},403:function(t,e,o){"use strict";o(14),o(23),o(53);var n={props:{item:{type:Object,default:null},category:{type:Object,default:null}},methods:{},computed:{imageUrl:function(){return this.item.image?this.item.image:this.$defaultImg()}}},r=(o(401),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"hentry clear"},[e("router-link",{staticClass:"thumbnail-link",attrs:{to:t.$permalink(t.item)}},[e("div",{staticClass:"thumbnail-wrap"},[e("img",{attrs:{src:t.imageUrl,alt:t.item.name}})])]),t._v(" "),e("div",{staticClass:"entry-header"},[e("h2",{staticClass:"entry-title"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[e("span",{domProps:{innerHTML:t._s(t.$omitText(t.item.name,60))}})])],1),t._v(" "),e("div",{staticClass:"entry-meta"},[e("nuxt-link",{attrs:{to:"/author/".concat(t.item.author.username,"/")}},[e("span",{staticClass:"entry-author"},[e("span",{attrs:{rel:"author"}},[t._v(t._s(t.item.author.name))])])]),t._v(" "),e("span",{staticClass:"sep date-sep"},[t._v("·")]),t._v(" "),e("span",{staticClass:"entry-date"},[t._v(t._s(t.$timePost(t.item.created)))])],1)]),t._v(" "),e("div",{staticClass:"entry-summary"},[e("p",{domProps:{innerHTML:t._s(t.item.description)}}),t._v(" "),e("span",{staticClass:"read-more"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[t._v("Read more")])],1)])],1):t._e()}),[],!1,null,null,null);e.a=component.exports},416:function(t,e,o){var content=o(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("88da17f6",content,!0,{sourceMap:!1})},448:function(t,e,o){"use strict";o(416)},449:function(t,e,o){var n=o(11)((function(i){return i[1]}));n.push([t.i,".section-heading[data-v-1d3202b9]{font-size:28px}.caption[data-v-1d3202b9]{font-size:15px;margin-top:10px}.post-list[data-v-1d3202b9]{display:flex;flex-direction:column;margin:0;padding:20px 0}.post-item[data-v-1d3202b9]{border-bottom:1px solid #e9e9e9;padding:40px 0}.post-item[data-v-1d3202b9]:first-child{border-top:1px solid #e9e9e9}",""]),n.locals={},t.exports=n},467:function(t,e,o){"use strict";o.r(e);o(14);var n=o(390),r=o(3),c=(o(26),o(76),o(403)),l=o(400),d=o(396),m={layout:"MainLayout/index",mixins:[o(391).a],data:function(){return{author:null,isLoading:!1,pageNo:1,totalPage:null,posts:[]}},components:{PostItemList:c.a,Loading:d.a,PostHorizontal:l.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$setLoading(!0),o={pageNo:1,totalPage:1},n={api_key:t.env.API_KEY,website_id:t.env.WEBSITE_ID,username:t.params.slug,get_posts:1,post_limit:10,post_page:1,get_meta:1},e.next=5,t.$axios.get("manager/authors/json/1.json",{params:n});case 5:return 1===(r=e.sent).data.status_code&&0!==r.data.data.length&&(o.author=r.data.data[0],o.posts=r.data.data[0].posts,o.totalPage=r.data.data[0].post_count_page,o.metaDescription=r.data.data[0].meta,o.metaTitle=r.data.data[0].user.name,o.pageNo++),t.$setLoading(!1),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))()},methods:{getPostByAuthor:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,o={api_key:"0906429283",website_id:22,username:t.$route.params.slug,get_posts:1,post_limit:10,post_page:t.pageNo},e.next=6,t.$axios.get("manager/authors/json/1.json",{params:o});case 6:1===(r=e.sent).data.status_code&&((c=t.posts).push.apply(c,Object(n.a)(r.data.data[0].posts)),console.log(t.posts)),t.pageNo++;case 9:case"end":return e.stop()}}),e)})))()}},computed:{},mounted:function(){var t=this;window.addEventListener("scroll",function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(o){var n,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelector("#infinite-list"),r=document.documentElement,c=r.scrollTop,r.scrollHeight,l=r.clientHeight,!(n&&c+l>=n.offsetTop)){e.next=8;break}if(!(t.isLoading||t.pageNo>t.totalPage||1===t.pageNo)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.getPostByAuthor();case 7:setTimeout((function(){t.isLoading=!1}),500);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},f=m,v=(o(448),o(2)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return t.author?e("div",{staticClass:"layout-flex-primary"},[e("h2",{staticClass:"section-heading"},[t._v(t._s(t.author.user.name))]),t._v(" "),t.adsCategory?[2===t.adsCategory.type.id?e("ads-keeper",{attrs:{selector:"ads-category",contentAds:t.adsCategory}}):t._e(),t._v(" "),1===t.adsCategory.type.id?e("ads-google",{attrs:{selector:"ads-category",contentAds:t.adsCategory}}):t._e()]:t._e(),t._v(" "),e("ul",{staticClass:"post-list"},[t._l(t.posts,(function(t,o){return e("li",{staticClass:"post-item"},[e("PostHorizontal",{key:o,attrs:{post:t}})],1)})),t._v(" "),e("div",{staticClass:"load-more",attrs:{id:"infinite-list"}}),t._v(" "),e("loading",{attrs:{active:t.isLoading}})],2)],2):t._e()}),[],!1,null,"1d3202b9",null);e.default=component.exports}}]);