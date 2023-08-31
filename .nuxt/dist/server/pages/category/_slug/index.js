exports.ids = [4];
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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("45043fa2", content, true, context)
};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7e1dac3c", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading[data-v-7bdb9fc2]{align-items:center;display:block;display:flex;height:100px;justify-content:center;overflow:hidden;position:relative;z-index:9999}.loading .bg[data-v-7bdb9fc2]{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.loading .spinner[data-v-7bdb9fc2]{position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading/Loading.vue?vue&type=template&id=7bdb9fc2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.active ? _c('div', {
    staticClass: "loading"
  }, [_vm._ssrNode("<div class=\"bg\" data-v-7bdb9fc2></div> "), _vm._ssrNode("<div class=\"spinner\" data-v-7bdb9fc2>", "</div>", [_vm._ssrNode("<svg viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" stroke=\"#007bff\" data-v-7bdb9fc2>", "</svg>", [_vm._ssrNode("<g fill=\"none\" fill-rule=\"evenodd\" data-v-7bdb9fc2>", "</g>", [_vm._ssrNode("<g transform=\"translate(1 1)\" stroke-width=\"2\" data-v-7bdb9fc2>", "</g>", [_vm._ssrNode("<circle stroke-opacity=\".25\" cx=\"18\" cy=\"18\" r=\"18\" data-v-7bdb9fc2></circle> "), _vm._ssrNode("<path d=\"M36 18c0-9.94-8.06-18-18-18\" data-v-7bdb9fc2>", "</path>", [_c('animateTransform', {
    attrs: {
      "attributeName": "transform",
      "type": "rotate",
      "from": "0 18 18",
      "to": "360 18 18",
      "dur": "0.8s",
      "repeatCount": "indefinite"
    }
  })], 1)], 2)])])])], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Loading/Loading.vue?vue&type=template&id=7bdb9fc2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Loading/Loading.js?vue&type=script&lang=js&
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/Loading/Loading.js?vue&type=script&lang=js&
 /* harmony default export */ var Loading_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/Loading/Loading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7bdb9fc2",
  "3bd4b39a"
  
)

/* harmony default export */ var Loading = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("60d1c1b1", content, true, context)
};

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b0b5762_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b0b5762_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b0b5762_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b0b5762_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b0b5762_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post-horizontal[data-v-4b0b5762]{display:flex;gap:23px;width:100%}.post-horizontal-image[data-v-4b0b5762]{height:160px;-o-object-fit:cover;object-fit:cover;width:240px}.post-horizontal-content[data-v-4b0b5762]{display:flex;flex-direction:column;gap:10px}.post-horizontal-metadata[data-v-4b0b5762]{display:flex;gap:15px}.post-horizontal-desc[data-v-4b0b5762]{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#888;display:-webkit-box;line-height:22px;overflow:hidden;width:100%}.post-horizontal-title[data-v-4b0b5762]{font-size:1.5rem}.post-horizontal-title[data-v-4b0b5762]:hover{color:#0099e5}.post-horizontal-author[data-v-4b0b5762]{font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostHorizontal/index.vue?vue&type=template&id=4b0b5762&scoped=true&
var render = function render() {
  var _vm$post, _vm$post2, _vm$post3, _vm$post4, _vm$post5, _vm$post5$author, _vm$post6, _vm$post6$author, _vm$post7, _vm$post8;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "post-horizontal"
  }, [_c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post = _vm.post) === null || _vm$post === void 0 ? void 0 : _vm$post.id}`
    }
  }, [_c('img', {
    staticClass: "post-horizontal-image",
    attrs: {
      "src": (_vm$post2 = _vm.post) === null || _vm$post2 === void 0 ? void 0 : _vm$post2.image,
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-horizontal-content\" data-v-4b0b5762>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post3 = _vm.post) === null || _vm$post3 === void 0 ? void 0 : _vm$post3.id}`
    }
  }, [_c('h2', {
    staticClass: "post-horizontal-title"
  }, [_vm._v("\n                " + _vm._s((_vm$post4 = _vm.post) === null || _vm$post4 === void 0 ? void 0 : _vm$post4.name) + "\n            ")])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-horizontal-metadata\" data-v-4b0b5762>", "</div>", [_c('nuxt-link', {
    staticClass: "post-horizontal-author",
    attrs: {
      "to": `/author/${(_vm$post5 = _vm.post) === null || _vm$post5 === void 0 ? void 0 : (_vm$post5$author = _vm$post5.author) === null || _vm$post5$author === void 0 ? void 0 : _vm$post5$author.username}`
    }
  }, [_vm._v(_vm._s((_vm$post6 = _vm.post) === null || _vm$post6 === void 0 ? void 0 : (_vm$post6$author = _vm$post6.author) === null || _vm$post6$author === void 0 ? void 0 : _vm$post6$author.name))]), _vm._ssrNode(" <p class=\"post-horizontal-date\" data-v-4b0b5762>" + _vm._ssrEscape("\n                " + _vm._s((_vm$post7 = _vm.post) === null || _vm$post7 === void 0 ? void 0 : _vm$post7.created) + "\n            ") + "</p>")], 2), _vm._ssrNode(" <p class=\"post-horizontal-desc\" data-v-4b0b5762>" + _vm._ssrEscape("\n            " + _vm._s((_vm$post8 = _vm.post) === null || _vm$post8 === void 0 ? void 0 : _vm$post8.description) + "\n        ") + "</p>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostHorizontal/index.vue?vue&type=template&id=4b0b5762&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostHorizontal/index.vue?vue&type=script&lang=js&
/* harmony default export */ var PostHorizontalvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostHorizontal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostHorizontalvue_type_script_lang_js_ = (PostHorizontalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/PostHorizontal/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostHorizontalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b0b5762",
  "be280ea8"
  
)

/* harmony default export */ var PostHorizontal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostItemList/PostItemList.vue?vue&type=template&id=55051f02&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.item ? _c('div', {
    staticClass: "hentry clear"
  }, [_c('router-link', {
    staticClass: "thumbnail-link",
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('div', {
    staticClass: "thumbnail-wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imageUrl,
      "alt": _vm.item.name
    }
  })])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-header\">", "</div>", [_vm._ssrNode("<h2 class=\"entry-title\">", "</h2>", [_c('router-link', {
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.$omitText(_vm.item.name, 60))
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-meta\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `/author/${_vm.item.author.username}/`
    }
  }, [_c('span', {
    staticClass: "entry-author"
  }, [_c('span', {
    attrs: {
      "rel": "author"
    }
  }, [_vm._v(_vm._s(_vm.item.author.name))])])]), _vm._ssrNode(" <span class=\"sep date-sep\">·</span> <span class=\"entry-date\">" + _vm._ssrEscape(_vm._s(_vm.$timePost(_vm.item.created))) + "</span>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-summary\">", "</div>", [_vm._ssrNode("<p>" + _vm._s(_vm.item.description) + "</p> "), _vm._ssrNode("<span class=\"read-more\">", "</span>", [_c('router-link', {
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_vm._v("Read more")])], 1)], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostItemList/PostItemList.vue?vue&type=template&id=55051f02&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/PostItemList/PostItemList.js?vue&type=script&lang=js&
/* harmony default export */ var PostItemListvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    item: {
      type: Object,
      default: null
    },
    category: {
      type: Object,
      default: null
    }
  },
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
      if (!this.item.image) return this.$defaultImg();
      return this.item.image;
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostItemList/PostItemList.js?vue&type=script&lang=js&
 /* harmony default export */ var PostItemList_PostItemListvue_type_script_lang_js_ = (PostItemListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/PostItemList/PostItemList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PostItemList_PostItemListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5d95e3ba"
  
)

/* harmony default export */ var PostItemList = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("18dbe1dd", content, true, context)
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_51443c7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_51443c7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_51443c7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_51443c7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_51443c7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".section-heading[data-v-51443c7a]{font-size:28px}.caption[data-v-51443c7a]{font-size:15px;margin-top:10px}.post-list[data-v-51443c7a]{display:flex;flex-direction:column;margin:0;padding:20px 0}.post-item[data-v-51443c7a]{border-bottom:1px solid #e9e9e9;padding:40px 0}.post-item[data-v-51443c7a]:first-child{border-top:1px solid #e9e9e9}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/category/_slug/index.vue?vue&type=template&id=51443c7a&scoped=true&
var render = function render() {
  var _vm$category, _vm$category2;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.category ? _c('div', {
    staticClass: "layout-flex-primary"
  }, [_vm._ssrNode("<h2 class=\"section-heading\" data-v-51443c7a>" + _vm._ssrEscape(_vm._s((_vm$category = _vm.category) === null || _vm$category === void 0 ? void 0 : _vm$category.name)) + "</h2> <p class=\"caption\" data-v-51443c7a>" + _vm._ssrEscape(_vm._s((_vm$category2 = _vm.category) === null || _vm$category2 === void 0 ? void 0 : _vm$category2.description)) + "</p> "), _vm._ssrNode("<ul class=\"post-list\" data-v-51443c7a>", "</ul>", [_vm._l(_vm.posts, function (post, index) {
    return _vm._ssrNode("<li class=\"post-item\" data-v-51443c7a>", "</li>", [_c('PostHorizontal', {
      key: index,
      attrs: {
        "post": post
      }
    })], 1);
  }), _vm._ssrNode(" <div id=\"infinite-list\" class=\"load-more\" data-v-51443c7a></div> "), _c('loading', {
    attrs: {
      "active": _vm.isLoading
    }
  })], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/category/_slug/index.vue?vue&type=template&id=51443c7a&scoped=true&

// EXTERNAL MODULE: ./src/components/PostItemList/PostItemList.vue + 4 modules
var PostItemList = __webpack_require__(121);

// EXTERNAL MODULE: ./src/components/PostHorizontal/index.vue + 4 modules
var PostHorizontal = __webpack_require__(118);

// EXTERNAL MODULE: ./src/components/Loading/Loading.vue + 4 modules
var Loading = __webpack_require__(114);

// EXTERNAL MODULE: ./src/mixins/mixinApp.js
var mixinApp = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/pages/category/_slug?vue&type=script&lang=js&




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
      category: null,
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
    PostItemList: PostItemList["a" /* default */],
    Loading: Loading["a" /* default */],
    PostHorizontal: PostHorizontal["a" /* default */]
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
      category_slug: context.params.slug,
      get_posts: 1,
      post_limit: 10,
      post_page: 1,
      get_meta: 1
    };
    const response = await context.$axios.get(`manager/categories/json/1.json`, {
      params
    });
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      pageData.category = response.data.data[0];
      pageData.posts = response.data.data[0].posts;
      pageData.totalPage = response.data.data[0].post_count_page;
      pageData.metaDescription = response.data.data[0].meta;
      pageData.metaTitle = response.data.data[0].name;
      pageData.pageNo++;
      pageData.metaYoastSeo = response.data.data[0]["yoast-seo"];
    }
    context.$setLoading(false);
    return pageData;
  },
  /* --------------------------------------------------
  methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get post by category
     */
    async getPostByCategory() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      const params = {
        api_key: "0906429283",
        website_id: 22,
        category_slug: this.$route.params.slug,
        get_posts: 1,
        post_limit: 10,
        post_page: this.pageNo
      };
      const response = await this.$axios.get(`manager/categories/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts.push(...response.data.data[0].posts);
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
        await this.getPostByCategory();
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/pages/category/_slug?vue&type=script&lang=js&
 /* harmony default export */ var category_slug_vue_type_script_lang_js_ = (_slug_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/pages/category/_slug/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  category_slug_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51443c7a",
  "d4bd8d84"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map