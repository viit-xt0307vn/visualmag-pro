(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{390:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(118);var r=n(145),c=n(92);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},391:function(t,e,n){"use strict";n(31),n(23),n(33),n(24),n(34);var o=n(7),r=n(390),c=(n(14),n(75),n(246),n(17),n(27),n(21)),l=n(147),d=n(148),f=n(16);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={components:{AdsKeeper:l.a,AdsGoogle:d.a},data:function(){return{metaTitle:"",metaDescription:"",meta:""}},head:function(){var meta=[],t=[];this.metaDescription&&meta.push.apply(meta,Object(r.a)(this.metaDescription)),"index"===this.$route.name&&meta.push.apply(meta,Object(r.a)(this.$metas()));var e={};return e.link=[{rel:"icon",type:"image/x-icon",href:"".concat(this.$favicon())}],e.meta=meta,"index"===this.$route.name?e.title=this.$sitename():e.title="".concat(this.metaTitle," - ").concat(this.$sitename()),this.measurementId&&(t.push({async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(this.measurementId)}),t.push({innerHTML:"window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '".concat(this.measurementId,"');")})),this.metaYoastSeo&&t.push({innerHTML:JSON.stringify(this.metaYoastSeo),hid:"yoast-seo",type:"application/ld+json",class:"yoast-schema-graph"}),e.script=t,e.__dangerouslyDisableSanitizers=["script"],e},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({adsHeader:function(t){var e=t.common.storeLoadAds.ads.find((function(t){return t.position.id===f.n}));return e||null},adsPostDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.c}))},adsCategory:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.a}))},adsSearch:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.d}))},adsTag:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.e}))},adsPageDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.b}))},measurementId:function(t){return t.common.storeLoadInit.settings.analytic.measurement_id}})),mounted:function(){}}},392:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("45043fa2",content,!0,{sourceMap:!1})},393:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7e1dac3c",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n(392)},395:function(t,e,n){var o=n(11)((function(i){return i[1]}));o.push([t.i,".loading[data-v-7bdb9fc2]{align-items:center;display:block;display:flex;height:100px;justify-content:center;overflow:hidden;position:relative;z-index:9999}.loading .bg[data-v-7bdb9fc2]{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.loading .spinner[data-v-7bdb9fc2]{position:relative}",""]),o.locals={},t.exports=o},396:function(t,e,n){"use strict";var o={props:{active:{type:Boolean,default:!1}}},r=(n(394),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.active?e("div",{staticClass:"loading"},[e("div",{staticClass:"bg"}),t._v(" "),e("div",{staticClass:"spinner"},[e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",stroke:"#007bff"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),t._v(" "),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])])]):t._e()}),[],!1,null,"7bdb9fc2",null);e.a=component.exports},397:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("60d1c1b1",content,!0,{sourceMap:!1})},398:function(t,e,n){"use strict";n(393)},399:function(t,e,n){var o=n(11)((function(i){return i[1]}));o.push([t.i,".post-horizontal[data-v-4b0b5762]{display:flex;gap:23px;width:100%}.post-horizontal-image[data-v-4b0b5762]{height:160px;-o-object-fit:cover;object-fit:cover;width:240px}.post-horizontal-content[data-v-4b0b5762]{display:flex;flex-direction:column;gap:10px}.post-horizontal-metadata[data-v-4b0b5762]{display:flex;gap:15px}.post-horizontal-desc[data-v-4b0b5762]{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#888;display:-webkit-box;line-height:22px;overflow:hidden;width:100%}.post-horizontal-title[data-v-4b0b5762]{font-size:1.5rem}.post-horizontal-title[data-v-4b0b5762]:hover{color:#0099e5}.post-horizontal-author[data-v-4b0b5762]{font-weight:700}",""]),o.locals={},t.exports=o},400:function(t,e,n){"use strict";n(14),n(23),n(53);var o={props:{post:{type:Object,default:function(){}}}},r=(n(398),n(2)),component=Object(r.a)(o,(function(){var t,e,n,o,r,c,l,d,f=this,m=f._self._c;return m("div",{staticClass:"post-horizontal"},[m("nuxt-link",{attrs:{to:"/".concat(null===(t=f.post)||void 0===t?void 0:t.id)}},[m("img",{staticClass:"post-horizontal-image",attrs:{src:null===(e=f.post)||void 0===e?void 0:e.image,alt:""}})]),f._v(" "),m("div",{staticClass:"post-horizontal-content"},[m("nuxt-link",{attrs:{to:"/".concat(null===(n=f.post)||void 0===n?void 0:n.id)}},[m("h2",{staticClass:"post-horizontal-title"},[f._v("\n                "+f._s(null===(o=f.post)||void 0===o?void 0:o.name)+"\n            ")])]),f._v(" "),m("div",{staticClass:"post-horizontal-metadata"},[m("nuxt-link",{staticClass:"post-horizontal-author",attrs:{to:"/author/".concat(null===(r=f.post)||void 0===r||null===(r=r.author)||void 0===r?void 0:r.username)}},[f._v(f._s(null===(c=f.post)||void 0===c||null===(c=c.author)||void 0===c?void 0:c.name))]),f._v(" "),m("p",{staticClass:"post-horizontal-date"},[f._v("\n                "+f._s(null===(l=f.post)||void 0===l?void 0:l.created)+"\n            ")])],1),f._v(" "),m("p",{staticClass:"post-horizontal-desc"},[f._v("\n            "+f._s(null===(d=f.post)||void 0===d?void 0:d.description)+"\n        ")])],1)],1)}),[],!1,null,"4b0b5762",null);e.a=component.exports},401:function(t,e,n){"use strict";n(397)},402:function(t,e,n){var o=n(11)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},403:function(t,e,n){"use strict";n(14),n(23),n(53);var o={props:{item:{type:Object,default:null},category:{type:Object,default:null}},methods:{},computed:{imageUrl:function(){return this.item.image?this.item.image:this.$defaultImg()}}},r=(n(401),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"hentry clear"},[e("router-link",{staticClass:"thumbnail-link",attrs:{to:t.$permalink(t.item)}},[e("div",{staticClass:"thumbnail-wrap"},[e("img",{attrs:{src:t.imageUrl,alt:t.item.name}})])]),t._v(" "),e("div",{staticClass:"entry-header"},[e("h2",{staticClass:"entry-title"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[e("span",{domProps:{innerHTML:t._s(t.$omitText(t.item.name,60))}})])],1),t._v(" "),e("div",{staticClass:"entry-meta"},[e("nuxt-link",{attrs:{to:"/author/".concat(t.item.author.username,"/")}},[e("span",{staticClass:"entry-author"},[e("span",{attrs:{rel:"author"}},[t._v(t._s(t.item.author.name))])])]),t._v(" "),e("span",{staticClass:"sep date-sep"},[t._v("·")]),t._v(" "),e("span",{staticClass:"entry-date"},[t._v(t._s(t.$timePost(t.item.created)))])],1)]),t._v(" "),e("div",{staticClass:"entry-summary"},[e("p",{domProps:{innerHTML:t._s(t.item.description)}}),t._v(" "),e("span",{staticClass:"read-more"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[t._v("Read more")])],1)])],1):t._e()}),[],!1,null,null,null);e.a=component.exports},419:function(t,e,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("2bcd4410",content,!0,{sourceMap:!1})},454:function(t,e,n){"use strict";n(419)},455:function(t,e,n){var o=n(11)((function(i){return i[1]}));o.push([t.i,".section-heading[data-v-c9ab3cac]{font-size:28px}.caption[data-v-c9ab3cac]{font-size:15px;margin-top:10px}.post-list[data-v-c9ab3cac]{display:flex;flex-direction:column;margin:0;padding:20px 0}.post-item[data-v-c9ab3cac]{border-bottom:1px solid #e9e9e9;padding:40px 0}.post-item[data-v-c9ab3cac]:first-child{border-top:1px solid #e9e9e9}",""]),o.locals={},t.exports=o},470:function(t,e,n){"use strict";n.r(e);n(14),n(31),n(23),n(27),n(17),n(33),n(24),n(34);var o=n(7),r=n(390),c=n(3),l=(n(26),n(76),n(403)),d=n(396),f=n(400),m=n(391),v=(n(16),n(21));function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={layout:"MainLayout/index",mixins:[m.a],data:function(){return{tag:null,isLoading:!1,pageNo:1,totalPage:null,posts:[]}},components:{PostItemList:l.a,Loading:d.a,PostHorizontal:f.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={pageNo:1,totalPage:1},o={api_key:t.env.API_KEY,website_id:t.env.WEBSITE_ID,tag_slug:t.params.slug,get_posts:1,post_limit:10,post_page:1,get_meta:1},e.next=4,t.$axios.get("manager/tags/json/1.json",{params:o});case 4:return 1===(r=e.sent).data.status_code&&0!==r.data.data.length&&(n.tag=r.data.data[0],n.posts=r.data.data[0].posts,n.totalPage=r.data.data[0].post_count_page,n.pageNo++,n.metaDescription=r.data.data[0].meta,n.metaTitle=r.data.data[0].name,n.metaYoastSeo=r.data.data[0]["yoast-seo"]),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},methods:{getPostByTag:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,n={api_key:"0906429283",website_id:22,category_slug:t.$route.params.slug,get_posts:1,post_limit:10,post_page:t.pageNo},e.next=6,t.$axios.get("manager/tags/json/1.json",{params:n});case 6:1===(o=e.sent).data.status_code&&(c=t.posts).push.apply(c,Object(r.a)(o.data.data[0].posts)),t.pageNo++;case 9:case"end":return e.stop()}}),e)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(v.b)({})),mounted:function(){var t=this;window.addEventListener("scroll",function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(n){var o,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=document.querySelector("#infinite-list"),r=document.documentElement,c=r.scrollTop,r.scrollHeight,l=r.clientHeight,!(o&&c+l>=o.offsetTop)){e.next=8;break}if(!(t.isLoading||t.pageNo>t.totalPage||1===t.pageNo)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.getPostByTag();case 7:setTimeout((function(){t.isLoading=!1}),500);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},_=y,x=(n(454),n(2)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return t.tag?e("div",{staticClass:"layout-flex-primary"},[e("h2",{staticClass:"section-heading"},[t._v(t._s(t.tag.name))]),t._v(" "),t.adsCategory?[2===t.adsCategory.type.id?e("ads-keeper",{attrs:{selector:"ads-category",contentAds:t.adsCategory}}):t._e(),t._v(" "),1===t.adsCategory.type.id?e("ads-google",{attrs:{selector:"ads-category",contentAds:t.adsCategory}}):t._e()]:t._e(),t._v(" "),e("ul",{staticClass:"post-list"},[t._l(t.posts,(function(t,n){return e("li",{staticClass:"post-item"},[e("PostHorizontal",{key:n,attrs:{post:t}})],1)})),t._v(" "),e("div",{staticClass:"load-more",attrs:{id:"infinite-list"}}),t._v(" "),e("loading",{attrs:{active:t.isLoading}})],2)],2):t._e()}),[],!1,null,"c9ab3cac",null);e.default=component.exports}}]);