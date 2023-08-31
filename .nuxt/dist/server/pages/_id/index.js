exports.ids = [1];
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("8453a80e", content, true, context)
};

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_8c1ec6e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_8c1ec6e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_8c1ec6e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_8c1ec6e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_8c1ec6e4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post[data-v-8c1ec6e4]{padding-top:10px}.post-paragraph[data-v-8c1ec6e4]{line-height:28px;margin-top:32px}.post-carts[data-v-8c1ec6e4]{display:flex;flex-wrap:wrap;gap:5px}.post-heading[data-v-8c1ec6e4]{font-size:27px;font-weight:700;line-height:34px;margin-top:30px}.post-metadata[data-v-8c1ec6e4]{font-size:13px;line-height:26px;margin-top:10px}.post-author[data-v-8c1ec6e4]{font-weight:700}.post-author[data-v-8c1ec6e4],.post-update[data-v-8c1ec6e4]{font-size:inherit}.post-image[data-v-8c1ec6e4]{width:100%}.post-content[data-v-8c1ec6e4]{margin-top:32px}.post-textes[data-v-8c1ec6e4]{display:flex;flex-direction:column;gap:32px 0;margin-top:40px;padding:0;width:100%}.post-textes .text[data-v-8c1ec6e4]{line-height:26px}.post-tags[data-v-8c1ec6e4]{display:flex;gap:0 5px;margin-top:32px}.post-tags .tag[data-v-8c1ec6e4]{background-color:#e9e9e9;font-size:11px;line-height:15px;padding:4px 10px;text-transform:uppercase}.post-comments .comment[data-v-8c1ec6e4]{border:1px solid #e9e9e9;margin-top:32px;padding:24px}.post-comments .user[data-v-8c1ec6e4]{align-items:center;display:flex;gap:5px}.post-comments .user-image[data-v-8c1ec6e4]{border-radius:50%;height:26px;width:26px}.post-comments .user-name[data-v-8c1ec6e4]{line-height:24px}.post-comments .user-content[data-v-8c1ec6e4]{line-height:26px;margin-top:10px}.error[data-v-8c1ec6e4]{display:flex;flex-direction:column;gap:32px 0;width:100%}.error-title[data-v-8c1ec6e4]{font-size:35px;line-height:43px}.error-desc[data-v-8c1ec6e4]{line-height:26px}.search[data-v-8c1ec6e4]{display:flex;height:43px;width:100%}.search-input[data-v-8c1ec6e4]{background-color:#f0f0f0;color:#333;display:inline-block;flex:1;font-family:\"Inter\";font-size:14px;font-weight:600;height:100%;line-height:24.5px;padding:5px 0 5px 10px}.search-input[data-v-8c1ec6e4]:focus{border:1px solid #0099e5}.search-button[data-v-8c1ec6e4]{align-items:center;background-color:#0099e5;display:flex;height:100%;justify-content:center;width:113px}.search-text[data-v-8c1ec6e4]{color:#fff}.sugguest-title[data-v-8c1ec6e4]{font-size:16px}.sugguest-list li[data-v-8c1ec6e4]{color:#222;line-height:26px;list-style-position:inside;list-style-type:disc}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/_id/index.vue?vue&type=template&id=8c1ec6e4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "layout-flex-primary",
    attrs: {
      "id": "main"
    }
  }, [_vm.postDetail ? _vm._ssrNode("<article data-v-8c1ec6e4>", "</article>", [_vm.beforePostAds ? [_vm.beforePostAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-before-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.beforePostAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-before-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-header\" data-v-8c1ec6e4>", "</div>", [_c('Categories', {
    attrs: {
      "categories": _vm.postDetail.categories
    }
  }), _vm._ssrNode(" <h2 class=\"post-heading\" data-v-8c1ec6e4>" + _vm._ssrEscape("\n        " + _vm._s(_vm.postDetail.name) + "\n      ") + "</h2> "), _vm._ssrNode("<p class=\"post-metadata\" data-v-8c1ec6e4>", "</p>", [_vm._ssrNode("Posted by "), _c('nuxt-link', {
    staticClass: "post-author",
    attrs: {
      "to": `/author/${_vm.postDetail.creater.username}`
    }
  }, [_vm._v(_vm._s(_vm.postDetail.creater.name))]), _vm._ssrNode(" - <span class=\"post-update\" data-v-8c1ec6e4>" + _vm._ssrEscape(_vm._s(_vm.postDetail.creater.created)) + "</span>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-content\" data-v-8c1ec6e4>", "</div>", [_vm._ssrNode("<div data-v-8c1ec6e4>", "</div>", [_vm.beforeContentAds ? [_vm.beforeContentAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-before-content`,
      "contentAds": _vm.beforeContentAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.beforeContentAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-before-content`,
      "contentAds": _vm.beforeContentAds
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.postBodyArray, function (html, index) {
    return [_vm.beforeParagraphAds && index + 1 === _vm.beforeParagraphAds.class.number ? [_vm.beforeParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `before-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.beforeParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `before-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm.beforeParagraphAds && (index + 1 - _vm.beforeParagraphAds.class.number) % _vm.beforeParagraphAds.class.repeat_content_number === 0 && index - _vm.beforeParagraphAds.class.number > 0 ? [_vm.beforeParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `beforứare-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.beforeParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `before-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e()] : _vm._e(), _vm._ssrNode(" <p class=\"post-paragraph\" data-v-8c1ec6e4>" + _vm._s(html) + "</p> "), _vm.afterParagraphAds && index + 1 === _vm.afterParagraphAds.class.number ? [_vm.afterParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-after-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.afterParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm.afterParagraphAds && (index + 1 - _vm.afterParagraphAds.class.number) % _vm.afterParagraphAds.class.repeat_content_number === 0 && index - _vm.afterParagraphAds.class.number > 0 ? [_vm.afterParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-after-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.afterParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e()] : _vm._e()];
  }), _vm._ssrNode(" "), _vm.afterContentAds ? [_vm.afterContentAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-after-content`,
      "contentAds": _vm.afterContentAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.afterContentAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-after-content`,
      "contentAds": _vm.afterContentAds
    }
  }) : _vm._e()] : _vm._e()], 2)]), _vm._ssrNode(" "), _vm.afterPostAds ? [_vm.beforePostAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-after-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.beforePostAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-after-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._ssrNode(" "), _vm.status !== 1 ? _vm._ssrNode("<div class=\"error\" data-v-8c1ec6e4>", "</div>", [_vm._ssrNode("<h1 class=\"error-title\" data-v-8c1ec6e4>404 Error – Page Not Found</h1> <p class=\"error-desc\" data-v-8c1ec6e4>Sorry, the page you are looking for is not available. Maybe you want to perform a\n      search?\n    </p> "), _vm._ssrNode("<div class=\"search\" data-v-8c1ec6e4>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("value", _vm.inputSearch) + " class=\"search-input\" data-v-8c1ec6e4> "), _vm._ssrNode("<button class=\"search-button\" data-v-8c1ec6e4>", "</button>", [_c('nuxt-link', {
    staticClass: "search-text",
    attrs: {
      "to": `/search?keywords=${_vm.inputSearch}`
    }
  }, [_vm._v("Search")])], 1)], 2), _vm._ssrNode(" <h6 class=\"sugguest-title\" data-v-8c1ec6e4>For best search results, mind the following suggestions:</h6> <div data-v-8c1ec6e4><ul class=\"sugguest-list\" data-v-8c1ec6e4><li data-v-8c1ec6e4>Always double check your spelling.</li> <li data-v-8c1ec6e4>Try similar keywords, for example: tablet instead of laptop.</li> <li data-v-8c1ec6e4>Always double check your spelling.</li></ul></div>")], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/_id/index.vue?vue&type=template&id=8c1ec6e4&scoped=true&

// EXTERNAL MODULE: ./src/mixins/mixinApp.js
var mixinApp = __webpack_require__(154);

// EXTERNAL MODULE: ./src/components/index.js + 120 modules
var components = __webpack_require__(9);

// EXTERNAL MODULE: ./src/consts.js
var consts = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/pages/_id?vue&type=script&lang=js&



/* harmony default export */ var _id_vue_type_script_lang_js_ = ({
  /* --------------------------------------------------
  layout
  -------------------------------------------------- */
  layout: "MainLayout/index",
  /* --------------------------------------------------
  mixins
  -------------------------------------------------- */
  mixins: [mixinApp["a" /* default */]],
  /* --------------------------------------------------
  components
  -------------------------------------------------- */
  components: {
    Categories: components["c" /* Categories */]
  },
  /* --------------------------------------------------
  data
  -------------------------------------------------- */
  data() {
    return {
      postDetail: null,
      postBody: null,
      postBodyArray: [],
      isLoading: false,
      contentAds: [],
      testAds: {
        body: '<!-- Composite Start --> \n<div id="M886209ScriptRootC1465593"></div> \n<script src="https://jsc.adskeeper.com/m/b/m.baly.online.1465593.js" async></script> \n<!-- Composite End -->'
      },
      inputSearch: null
    };
  },
  /* --------------------------------------------------
  asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    context.$setLoading(true);
    const pageData = {};
    const params = {
      api_key: context.env.API_KEY,
      website_id: context.env.WEBSITE_ID,
      post_id: context.params.id,
      get_meta: 1
    };
    const response = await context.$axios.get(`manager/posts/json/1.json`, {
      params
    });
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      pageData.postDetail = response.data.data[0];
      pageData.status = response.data.status_code;
      pageData.metaDescription = response.data.data[0].meta;
      pageData.metaTitle = response.data.data[0].name;
      pageData.metaYoastSeo = response.data.data[0]["yoast-seo"];
      if (pageData.postDetail.body) {
        pageData.postBodyArray = pageData.postDetail.body.match(/<p>(.*?)<\/p>/g).map(val => {
          return val.replace(/<\/?p>/g, "");
        });
      }
    } else {
      pageData.status = response.data.status_code;
    }
    context.$setLoading(false);
    return pageData;
  },
  /* --------------------------------------------------
  methods
  -------------------------------------------------- */
  methods: {},
  /* --------------------------------------------------
  computed
  -------------------------------------------------- */
  computed: {
    /**
     * imageUrl
     * @returns {String}
     */
    imageUrl() {
      if (!this.postDetail || !this.postDetail.image) return null;
      return this.postDetail.image;
    },
    /**
     * before Post Ads
     * @returns {Object}
     */
    beforePostAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["k" /* BEFORE_POST */]);
      return ads ? ads : null;
    },
    /**
     * before content Ads
     * @returns {Object}
     */
    beforeContentAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["i" /* BEFORE_CONTENT */]);
      return ads ? ads : null;
    },
    /**
     * before Paragraph Ads
     * @returns {Object}
     */
    beforeParagraphAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["j" /* BEFORE_PARAGRAPH */]);
      return ads ? ads : null;
    },
    /**
     * after Post Ads
     * @returns {Object}
     */
    afterPostAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["h" /* AFTER_POST */]);
      return ads ? ads : null;
    },
    /**
     * after content Ads
     * @returns {Object}
     */
    afterContentAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["f" /* AFTER_CONTENT */]);
      return ads ? ads : null;
    },
    /**
     * after Paragraph Ads
     * @returns {Object}
     */
    afterParagraphAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["g" /* AFTER_PARAGRAPH */]);
      return ads ? ads : null;
    }
  }
});
// CONCATENATED MODULE: ./src/pages/_id?vue&type=script&lang=js&
 /* harmony default export */ var pages_id_vue_type_script_lang_js_ = (_id_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/pages/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_id_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8c1ec6e4",
  "588371c4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map