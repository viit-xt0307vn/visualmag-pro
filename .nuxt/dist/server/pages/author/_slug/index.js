exports.ids = [3];
exports.modules = {

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdsKeeper_AdsKeeper_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _components_AdsGoogle_AdsGoogle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["a"] = ({
  /* --------------------------------------------------
  components
  -------------------------------------------------- */
  components: {
    AdsKeeper: _components_AdsKeeper_AdsKeeper_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    AdsGoogle: _components_AdsGoogle_AdsGoogle_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  /* --------------------------------------------------
  data
  -------------------------------------------------- */
  data() {
    return {
      metaTitle: "",
      metaDescription: "",
      meta: ""
    };
  },
  /* --------------------------------------------------
  head
  -------------------------------------------------- */
  head() {
    const meta = [];
    const scripts = [];
    if (this.metaDescription) {
      meta.push(...this.metaDescription);
    }
    if (this.$route.name === "index") {
      meta.push(...this.$metas());
    }
    const tMeta = {};
    tMeta.link = [{
      rel: "icon",
      type: "image/x-icon",
      href: `${this.$favicon()}`
    }];
    tMeta.meta = meta;
    if (this.$route.name === "index") {
      tMeta.title = this.$sitename();
    } else {
      tMeta.title = `${this.metaTitle} - ${this.$sitename()}`;
    }

    // script measurementId
    if (this.measurementId) {
      scripts.push({
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`
      });
      scripts.push({
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${this.measurementId}');`
      });
    }

    // script yoastSeo
    if (this.metaYoastSeo) {
      scripts.push({
        innerHTML: JSON.stringify(this.metaYoastSeo),
        hid: "yoast-seo",
        type: "application/ld+json",
        class: "yoast-schema-graph"
      });
    }
    tMeta.script = scripts;
    tMeta.__dangerouslyDisableSanitizers = ["script"];
    return tMeta;
  },
  /* --------------------------------------------------
  computed
  -------------------------------------------------- */
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
      adsHeader(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* HEADER */ "l"]);
        return ads ? ads : null;
      },
      adsPostDetail(state) {
        return state.common.storeLoadAds.ads.filter(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_POST_DETAIL_PAGE */ "c"]);
      },
      adsCategory(state) {
        return state.common.storeLoadAds.ads.find(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_CATEGORY_PAGE */ "a"]);
      },
      adsSearch(state) {
        return state.common.storeLoadAds.ads.find(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_SEARCH_PAGE */ "d"]);
      },
      adsTag(state) {
        return state.common.storeLoadAds.ads.find(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_TAG_PAGE */ "e"]);
      },
      adsPageDetail(state) {
        return state.common.storeLoadAds.ads.filter(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_DETAIL_PAGE */ "b"]);
      },
      measurementId(state) {
        return state.common.storeLoadInit.settings.analytic.measurement_id;
      }
    })
  },
  /* --------------------------------------------------
  mounted
  -------------------------------------------------- */
  mounted() {}
});

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ae301d78", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_522892d2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_522892d2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_522892d2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_522892d2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_522892d2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".section-heading[data-v-522892d2]{font-size:28px}.caption[data-v-522892d2]{font-size:15px;margin-top:10px}.post-list[data-v-522892d2]{display:flex;flex-direction:column;margin:0;padding:20px 0}.post-item[data-v-522892d2]{border-bottom:1px solid #e9e9e9;padding:40px 0}.post-item[data-v-522892d2]:first-child{border-top:1px solid #e9e9e9}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/author/_slug/index.vue?vue&type=template&id=522892d2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.author ? _c('div', {
    staticClass: "layout-flex-primary"
  }, [_vm._ssrNode("<h2 class=\"section-heading\" data-v-522892d2>" + _vm._ssrEscape(_vm._s(_vm.author.user.name)) + "</h2> "), _vm.adsCategory ? [_vm.adsCategory.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-category`,
      "contentAds": _vm.adsCategory
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsCategory.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-category`,
      "contentAds": _vm.adsCategory
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"post-list\" data-v-522892d2>", "</ul>", [_vm._l(_vm.posts, function (post, index) {
    return _vm._ssrNode("<li class=\"post-item\" data-v-522892d2>", "</li>", [_c('PostHorizontal', {
      key: index,
      attrs: {
        "post": post
      }
    })], 1);
  }), _vm._ssrNode(" <div id=\"infinite-list\" class=\"load-more\" data-v-522892d2></div> "), _c('loading', {
    attrs: {
      "active": _vm.isLoading
    }
  })], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/author/_slug/index.vue?vue&type=template&id=522892d2&scoped=true&

// EXTERNAL MODULE: ./src/components/index.js + 120 modules
var components = __webpack_require__(9);

// EXTERNAL MODULE: ./src/mixins/mixinApp.js
var mixinApp = __webpack_require__(154);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/pages/author/_slug?vue&type=script&lang=js&


/* harmony default export */ var _slug_vue_type_script_lang_js_ = ({
  /* --------------------------------------------------
  layout
  -------------------------------------------------- */
  layout: "MainLayout/index",
  /* --------------------------------------------------
  mixins
  -------------------------------------------------- */
  mixins: [mixinApp["a" /* default */]],
  /* --------------------------------------------------
  data
  -------------------------------------------------- */
  data() {
    return {
      author: null,
      isLoading: false,
      pageNo: 1,
      totalPage: null,
      posts: []
    };
  },
  /* --------------------------------------------------
  components
  -------------------------------------------------- */
  components: {
    Loading: components["k" /* Loading */],
    PostHorizontal: components["m" /* PostHorizontal */]
  },
  /* --------------------------------------------------
  asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    context.$setLoading(true);
    const pageData = {
      pageNo: 1,
      totalPage: 1
    };
    const params = {
      api_key: context.env.API_KEY,
      website_id: context.env.WEBSITE_ID,
      username: context.params.slug,
      get_posts: 1,
      post_limit: 10,
      post_page: 1,
      get_meta: 1
    };
    const response = await context.$axios.get(`manager/authors/json/1.json`, {
      params
    });
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      pageData.author = response.data.data[0];
      pageData.posts = response.data.data[0].posts;
      pageData.totalPage = response.data.data[0].post_count_page;
      pageData.metaDescription = response.data.data[0].meta;
      pageData.metaTitle = response.data.data[0].user.name;
      pageData.pageNo++;
    }
    context.$setLoading(false);
    return pageData;
  },
  /* --------------------------------------------------
  methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get post by author
     */
    async getPostByAuthor() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      const params = {
        api_key: "0906429283",
        website_id: 22,
        username: this.$route.params.slug,
        get_posts: 1,
        post_limit: 10,
        post_page: this.pageNo
      };
      const response = await this.$axios.get(`manager/authors/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts.push(...response.data.data[0].posts);
        console.log(this.posts);
      }
      this.pageNo++;
    }
  },
  /* --------------------------------------------------
  computed
  -------------------------------------------------- */
  computed: {},
  /* --------------------------------------------------
  mounted
  -------------------------------------------------- */
  mounted() {
    window.addEventListener("scroll", async e => {
      const listElm = document.querySelector("#infinite-list");
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.documentElement;
      if (listElm && scrollTop + clientHeight >= listElm.offsetTop) {
        if (this.isLoading || this.pageNo > this.totalPage || this.pageNo === 1) {
          return;
        }
        await this.getPostByAuthor();
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/pages/author/_slug?vue&type=script&lang=js&
 /* harmony default export */ var author_slug_vue_type_script_lang_js_ = (_slug_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/pages/author/_slug/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  author_slug_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "522892d2",
  "43bc166a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map