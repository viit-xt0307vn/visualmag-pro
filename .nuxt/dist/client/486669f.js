(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{390:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(118);var o=n(145),c=n(92);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},391:function(t,e,n){"use strict";n(31),n(23),n(33),n(24),n(34);var r=n(7),o=n(390),c=(n(14),n(75),n(246),n(17),n(27),n(21)),l=n(147),d=n(148),f=n(16);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={components:{AdsKeeper:l.a,AdsGoogle:d.a},data:function(){return{metaTitle:"",metaDescription:"",meta:""}},head:function(){var meta=[],t=[];this.metaDescription&&meta.push.apply(meta,Object(o.a)(this.metaDescription)),"index"===this.$route.name&&meta.push.apply(meta,Object(o.a)(this.$metas()));var e={};return e.link=[{rel:"icon",type:"image/x-icon",href:"".concat(this.$favicon())}],e.meta=meta,"index"===this.$route.name?e.title=this.$sitename():e.title="".concat(this.metaTitle," - ").concat(this.$sitename()),this.measurementId&&(t.push({async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(this.measurementId)}),t.push({innerHTML:"window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '".concat(this.measurementId,"');")})),this.metaYoastSeo&&t.push({innerHTML:JSON.stringify(this.metaYoastSeo),hid:"yoast-seo",type:"application/ld+json",class:"yoast-schema-graph"}),e.script=t,e.__dangerouslyDisableSanitizers=["script"],e},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({adsHeader:function(t){var e=t.common.storeLoadAds.ads.find((function(t){return t.position.id===f.n}));return e||null},adsPostDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.c}))},adsCategory:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.a}))},adsSearch:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.d}))},adsTag:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===f.e}))},adsPageDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===f.b}))},measurementId:function(t){return t.common.storeLoadInit.settings.analytic.measurement_id}})),mounted:function(){}}},392:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("45043fa2",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n(392)},395:function(t,e,n){var r=n(11)((function(i){return i[1]}));r.push([t.i,".loading[data-v-7bdb9fc2]{align-items:center;display:block;display:flex;height:100px;justify-content:center;overflow:hidden;position:relative;z-index:9999}.loading .bg[data-v-7bdb9fc2]{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.loading .spinner[data-v-7bdb9fc2]{position:relative}",""]),r.locals={},t.exports=r},396:function(t,e,n){"use strict";var r={props:{active:{type:Boolean,default:!1}}},o=(n(394),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.active?e("div",{staticClass:"loading"},[e("div",{staticClass:"bg"}),t._v(" "),e("div",{staticClass:"spinner"},[e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",stroke:"#007bff"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),t._v(" "),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])])]):t._e()}),[],!1,null,"7bdb9fc2",null);e.a=component.exports},404:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("217351e7",content,!0,{sourceMap:!1})},405:function(t,e,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7007993a",content,!0,{sourceMap:!1})},406:function(t,e,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("bc5aef3a",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n(404)},425:function(t,e,n){var r=n(11)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},426:function(t,e,n){"use strict";n(405)},427:function(t,e,n){var r=n(11)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},428:function(t,e,n){"use strict";n(406)},429:function(t,e,n){var r=n(11)((function(i){return i[1]}));r.push([t.i,".search-title[data-v-ffa9167c]{font-size:27px}",""]),r.locals={},t.exports=r},466:function(t,e,n){"use strict";n.r(e);var r=n(390),o=n(3),c=(n(76),n(26),n(14),n(23),n(53),{props:{item:{type:Object,default:null}},methods:{},computed:{imageUrl:function(){return this.item.image?this.item.image:this.$defaultImg()}}}),l=(n(424),n(2)),d=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"hentry clear"},[e("router-link",{staticClass:"thumbnail-link",attrs:{to:t.$permalink(t.item)}},[e("div",{staticClass:"thumbnail-wrap"},[e("img",{attrs:{src:t.imageUrl,alt:t.item.name}})])]),t._v(" "),e("div",{staticClass:"entry-header"},[e("h2",{staticClass:"entry-title"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[e("span",{domProps:{innerHTML:t._s(t.item.name)}})])],1),t._v(" "),e("div",{staticClass:"entry-meta clear"},[0!==t.item.categories.length?e("span",{staticClass:"entry-category"},[e("router-link",{attrs:{to:"/category/".concat(t.item.categories[0].slug,"/")}},[t._v(t._s(t.item.categories[0].name))])],1):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/author/".concat(t.item.author.username,"/")}},[e("span",{staticClass:"entry-author"},[e("span",{attrs:{rel:"author"}},[t._v(t._s(t.item.creater.name))])])]),t._v(" "),e("span",{staticClass:"sep date-sep"},[t._v("·")]),t._v(" "),e("span",{staticClass:"entry-date"},[t._v(t._s(t.$timePost(t.item.creater.created)))]),t._v(" "),0!==t.item.tags.length?[e("span",{staticClass:"sep date-sep"},[t._v("·")]),t._v(" "),e("span",{staticClass:"entry-tag"},[e("router-link",{attrs:{to:"/tag/".concat(t.item.tags[0].slug,"/")}},[t._v(t._s(t.item.tags[0].name))])],1)]:t._e()],2)]),t._v(" "),e("div",{staticClass:"entry-summary"},[e("p",{domProps:{innerHTML:t._s(t.item.description)}}),t._v(" "),e("span",{staticClass:"read-more"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[t._v("Read more")])],1)])],1):t._e()}),[],!1,null,null,null).exports,f=n(396),m=n(391),h=(n(16),{layout:"MainLayout/index",mixins:[m.a],data:function(){return{isLoading:!1,pageNo:1,totalPage:null,posts:[]}},components:{PostItemSearch:d,Loading:f.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={pageNo:1,totalPage:1},r={api_key:"0906429283",website_id:72,keywords:t.query.keywords,page:1,limit:10,get_meta:1},e.next=4,t.$axios.get("manager/posts/json/1.json",{params:r});case 4:return 1===(o=e.sent).data.status_code&&(n.posts=o.data.data,n.totalPage=o.data.post_count_page,n.metaTitle=t.query.keywords,n.pageNo++),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},methods:{getPostByKeyword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,n={api_key:"0906429283",website_id:72,keywords:t.$route.query.keywords,get_posts:1,page:1,limit:10},e.next=6,t.$axios.get("manager/posts/json/1.json",{params:n});case 6:1===(o=e.sent).data.status_code&&(c=t.posts).push.apply(c,Object(r.a)(o.data.data)),t.pageNo++;case 9:case"end":return e.stop()}}),e)})))()}},computed:{},mounted:function(){var t=this;window.addEventListener("scroll",function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.querySelector("#infinite-list"),o=document.documentElement,c=o.scrollTop,o.scrollHeight,l=o.clientHeight,!(r&&c+l>=r.offsetTop)){e.next=8;break}if(!(t.isLoading||t.pageNo>t.totalPage||1===t.pageNo)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.getPostByKeyword();case 7:setTimeout((function(){t.isLoading=!1}),500);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("SEARCH")}}),v=h,y=(n(426),n(428),Object(l.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-flex-vertical gap32"},[e("h2",{staticClass:"search-title"},[t._v('Search results for: "'+t._s(t.$route.query.keywords)+'" ')])])}),[],!1,null,"ffa9167c",null));e.default=y.exports}}]);