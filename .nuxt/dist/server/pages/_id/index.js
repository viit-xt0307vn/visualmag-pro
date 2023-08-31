exports.ids = [1];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdsKeeper_AdsKeeper_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _components_AdsGoogle_AdsGoogle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
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
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* HEADER */ "n"]);
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

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("cccd67b6", content, true, context)
};

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4585250d", content, true, context)
};

/***/ }),

/***/ 140:
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
  add("2040eac6", content, true, context)
};

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08a34b5d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08a34b5d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08a34b5d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08a34b5d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08a34b5d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".category-cart[data-v-08a34b5d]{background-color:#0099e5;color:#fff;font-size:12px;line-height:17px;padding:4px 10px;text-transform:uppercase}.category-cart p[data-v-08a34b5d]{font-size:12px}.category-cart[data-v-08a34b5d]:nth-child(2){background-color:#00c16e}.category-cart[data-v-08a34b5d]:nth-child(3){background-color:#8e43e7}.category-cart[data-v-08a34b5d]:nth-child(4){background-color:#b84592}.category-cart[data-v-08a34b5d]:nth-child(5){background-color:red}.category-cart[data-v-08a34b5d]:nth-child(6){background-color:#ff6900}.category-cart[data-v-08a34b5d]:nth-child(7){background-color:#fcb900}.category-cart[data-v-08a34b5d]:nth-child(8){background-color:#27808c}.category-cart[data-v-08a34b5d]:nth-child(9){background-color:#ff6b98}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_674e2ab2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_674e2ab2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_674e2ab2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_674e2ab2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_674e2ab2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".categories-card[data-v-674e2ab2]{display:flex;flex-wrap:wrap;gap:5px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_5d839b34_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_5d839b34_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_5d839b34_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_5d839b34_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_5d839b34_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post[data-v-5d839b34]{padding-top:10px}.post-paragraph[data-v-5d839b34]{line-height:28px;margin-top:32px}.post-carts[data-v-5d839b34]{display:flex;flex-wrap:wrap;gap:5px}.post-heading[data-v-5d839b34]{font-size:27px;font-weight:700;line-height:34px;margin-top:30px}.post-metadata[data-v-5d839b34]{font-size:13px;line-height:26px;margin-top:10px}.post-author[data-v-5d839b34]{font-weight:700}.post-author[data-v-5d839b34],.post-update[data-v-5d839b34]{font-size:inherit}.post-image[data-v-5d839b34]{width:100%}.post-content[data-v-5d839b34]{margin-top:32px}.post-textes[data-v-5d839b34]{display:flex;flex-direction:column;gap:32px 0;margin-top:40px;padding:0;width:100%}.post-textes .text[data-v-5d839b34]{line-height:26px}.post-tags[data-v-5d839b34]{display:flex;gap:0 5px;margin-top:32px}.post-tags .tag[data-v-5d839b34]{background-color:#e9e9e9;font-size:11px;line-height:15px;padding:4px 10px;text-transform:uppercase}.post-comments .comment[data-v-5d839b34]{border:1px solid #e9e9e9;margin-top:32px;padding:24px}.post-comments .user[data-v-5d839b34]{align-items:center;display:flex;gap:5px}.post-comments .user-image[data-v-5d839b34]{border-radius:50%;height:26px;width:26px}.post-comments .user-name[data-v-5d839b34]{line-height:24px}.post-comments .user-content[data-v-5d839b34]{line-height:26px;margin-top:10px}.error[data-v-5d839b34]{display:flex;flex-direction:column;gap:32px 0}.error-title[data-v-5d839b34]{font-size:35px;line-height:43px}.error-desc[data-v-5d839b34]{line-height:26px}.search[data-v-5d839b34]{display:flex;height:43px;width:100%}.search-input[data-v-5d839b34]{background-color:#f0f0f0;color:#333;display:inline-block;font-family:\"Inter\";font-size:14px;font-weight:600;height:100%;line-height:24.5px;padding:5px 0 5px 10px}.search-button[data-v-5d839b34]{align-items:center;background-color:#0099e5;color:#fff;display:flex;height:100%;justify-content:center;width:113px}.sugguest-title[data-v-5d839b34]{font-size:16px}.sugguest-list li[data-v-5d839b34]{color:#222;line-height:26px;list-style-position:inside;list-style-type:disc}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/_id/index.vue?vue&type=template&id=5d839b34&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "layout-flex-primary",
    attrs: {
      "id": "main"
    }
  }, [_vm.postDetail ? _vm._ssrNode("<article data-v-5d839b34>", "</article>", [_vm.beforePostAds ? [_vm.beforePostAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-before-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.beforePostAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-before-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-header\" data-v-5d839b34>", "</div>", [_c('Categories', {
    attrs: {
      "categories": _vm.postDetail.categories
    }
  }), _vm._ssrNode(" <h2 class=\"post-heading\" data-v-5d839b34>" + _vm._ssrEscape("\n        " + _vm._s(_vm.postDetail.name) + "\n      ") + "</h2> "), _vm._ssrNode("<p class=\"post-metadata\" data-v-5d839b34>", "</p>", [_vm._ssrNode("Posted by "), _c('nuxt-link', {
    staticClass: "post-author",
    attrs: {
      "to": `/author/${_vm.postDetail.creater.username}`
    }
  }, [_vm._v(_vm._s(_vm.postDetail.creater.name))]), _vm._ssrNode(" - <span class=\"post-update\" data-v-5d839b34>" + _vm._ssrEscape(_vm._s(_vm.postDetail.creater.created)) + "</span>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-content\" data-v-5d839b34>", "</div>", [_vm._ssrNode("<div data-v-5d839b34>", "</div>", [_vm.beforeContentAds ? [_vm.beforeContentAds.type.id === 2 ? _c('ads-keeper', {
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
    }) : _vm._e()] : _vm._e(), _vm._ssrNode(" <p class=\"post-paragraph\" data-v-5d839b34>" + _vm._s(html) + "</p> "), _vm.afterParagraphAds && index + 1 === _vm.afterParagraphAds.class.number ? [_vm.afterParagraphAds.type.id === 2 ? _c('ads-keeper', {
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
  }) : _vm._e()] : _vm._e()], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.status ? "<div class=\"error\" data-v-5d839b34><h1 class=\"error-title\" data-v-5d839b34>404 Error – Page Not Found</h1> <p class=\"error-desc\" data-v-5d839b34>Sorry, the page you are looking for is not available. Maybe you want to perform a\n      search?\n    </p> <div class=\"search\" data-v-5d839b34><input type=\"text\" class=\"search-input\" data-v-5d839b34> <button class=\"search-button\" data-v-5d839b34>Search</button></div> <h6 class=\"sugguest-title\" data-v-5d839b34>For best search results, mind the following suggestions:</h6> <div data-v-5d839b34><ul class=\"sugguest-list\" data-v-5d839b34><li data-v-5d839b34>Always double check your spelling.</li> <li data-v-5d839b34>Try similar keywords, for example: tablet instead of laptop.</li> <li data-v-5d839b34>Always double check your spelling.</li></ul></div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/_id/index.vue?vue&type=template&id=5d839b34&scoped=true&

// EXTERNAL MODULE: ./src/mixins/mixinApp.js
var mixinApp = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Categories/index.vue?vue&type=template&id=674e2ab2&scoped=true&
var Categoriesvue_type_template_id_674e2ab2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "categories-card"
  }, _vm._l(_vm.categories, function (category, index) {
    return _c('CategoryCard', {
      key: index,
      attrs: {
        "category": category
      }
    });
  }), 1);
};
var Categoriesvue_type_template_id_674e2ab2_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Categories/index.vue?vue&type=template&id=674e2ab2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CategoryCard/index.vue?vue&type=template&id=08a34b5d&scoped=true&
var CategoryCardvue_type_template_id_08a34b5d_scoped_true_render = function render() {
  var _vm$category, _vm$category2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('nuxt-link', {
    staticClass: "category-cart",
    attrs: {
      "to": `/category/${(_vm$category = _vm.category) === null || _vm$category === void 0 ? void 0 : _vm$category.slug}/`
    }
  }, [_c('p', [_vm._v(_vm._s((_vm$category2 = _vm.category) === null || _vm$category2 === void 0 ? void 0 : _vm$category2.name))])]);
};
var CategoryCardvue_type_template_id_08a34b5d_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/CategoryCard/index.vue?vue&type=template&id=08a34b5d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CategoryCard/index.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryCardvue_type_script_lang_js_ = ({
  props: {
    category: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/CategoryCard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryCardvue_type_script_lang_js_ = (CategoryCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/CategoryCard/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryCardvue_type_script_lang_js_,
  CategoryCardvue_type_template_id_08a34b5d_scoped_true_render,
  CategoryCardvue_type_template_id_08a34b5d_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "08a34b5d",
  "27bf2214"
  
)

/* harmony default export */ var CategoryCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Categories/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Categoriesvue_type_script_lang_js_ = ({
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CategoryCard: CategoryCard
  }
});
// CONCATENATED MODULE: ./src/components/Categories/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Categoriesvue_type_script_lang_js_ = (Categoriesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Categories/index.vue



function Categories_injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Categories_component = Object(componentNormalizer["a" /* default */])(
  components_Categoriesvue_type_script_lang_js_,
  Categoriesvue_type_template_id_674e2ab2_scoped_true_render,
  Categoriesvue_type_template_id_674e2ab2_scoped_true_staticRenderFns,
  false,
  Categories_injectStyles,
  "674e2ab2",
  "54e70ce4"
  
)

/* harmony default export */ var Categories = (Categories_component.exports);
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
    Categories: Categories
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
      }
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
      const ads = this.adsPostDetail.find(e => e.position.id === consts["l" /* BEFORE_POST */]);
      return ads ? ads : null;
    },
    /**
     * before content Ads
     * @returns {Object}
     */
    beforeContentAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["j" /* BEFORE_CONTENT */]);
      return ads ? ads : null;
    },
    /**
     * before Paragraph Ads
     * @returns {Object}
     */
    beforeParagraphAds() {
      if (!this.adsPostDetail.length) return null;
      const ads = this.adsPostDetail.find(e => e.position.id === consts["k" /* BEFORE_PARAGRAPH */]);
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
// CONCATENATED MODULE: ./src/pages/_id/index.vue



function _id_injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  pages_id_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "5d839b34",
  "588371c4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map