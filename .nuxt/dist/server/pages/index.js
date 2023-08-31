exports.ids = [5];
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("48e7126f", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4d0d5748", content, true, context)
};

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5c26aecd", content, true, context)
};

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("82de6d02", content, true, context)
};

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5a5708d0", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("fba28c4c", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("717d330f", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("56664698", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5ef47f1e", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 149:
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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetOneColumn_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetOneColumn_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetOneColumn_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetOneColumn_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetOneColumn_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 151:
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

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4936c156_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4936c156_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4936c156_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4936c156_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4936c156_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".featured-item{height:100%;position:relative;width:100%}.featured-item:first-child{grid-column:1/3;grid-row:1/3}.featured-item:first-child .featured-title{font-size:28px}.featured-item:nth-child(2) .card{background-color:#34bf49}.featured-item:nth-child(3) .card{background-color:#f90}.featured-item:nth-child(4) .card{background-color:#1cc7d0}.featured-item:nth-child(5) .card{background-color:#ff4f81}.featured-image{filter:brightness(.8);height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;width:100%}.featured-content{bottom:0;padding:20px;position:absolute}.featured-content .card{align-items:center;background-color:#0099e5;display:inline-flex;padding:4px 6px}.featured-content .card a{color:#fff;font-size:11px;font-weight:400;line-height:10px;text-transform:uppercase}.featured-title{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#fff;display:-webkit-box;font-size:17px;margin-top:10px;overflow:hidden;text-overflow:ellipsis}@media screen and (max-width:478px){.featured-item:not(.featured-item:first-child) .card{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0c4d72_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0c4d72_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0c4d72_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0c4d72_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1d0c4d72_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".featured[data-v-1d0c4d72]{grid-gap:8px;display:grid;gap:8px;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,1fr);height:384px;margin-top:20px;position:relative;width:100%}@media screen and (max-width:960px){.featured[data-v-1d0c4d72]{height:300px}}@media screen and (max-width:782px){.featured[data-v-1d0c4d72]{grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(4,192px);height:auto}.featured-item[data-v-1d0c4d72]:first-child{grid-column:1/3;grid-row:1/3}.featured-item:first-child .featured-title[data-v-1d0c4d72]{font-size:28px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095fcf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095fcf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095fcf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095fcf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6095fcf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post-large-image[data-v-6095fcf4]{width:100%}.post-large-metadata[data-v-6095fcf4]{display:flex;gap:15px;margin-top:16px}.post-large-title[data-v-6095fcf4]{font-size:21.6px;margin-top:10px}.post-large-title[data-v-6095fcf4]:hover{color:#0099e5}.post-large-desc[data-v-6095fcf4]{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#888;display:-webkit-box;line-height:22px;margin-top:10px;overflow:hidden;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90f3f86e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90f3f86e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90f3f86e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90f3f86e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_90f3f86e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post-tiny{display:flex;gap:15px}.post-tiny-image{height:80px;width:120px}.post-tiny-title{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:inline-block;display:-webkit-box;max-width:200px;overflow:hidden}.post-tiny-date{color:#888;margin-top:6px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2d875c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2d875c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2d875c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2d875c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2d875c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post-small[data-v-5d2d875c]{width:100%}.post-small-image[data-v-5d2d875c]{height:auto;width:100%}.post-small-caption[data-v-5d2d875c]{font-weight:400;margin-top:10px}.post-small-caption[data-v-5d2d875c]:hover{color:#0099e5}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_10a9222e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_10a9222e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_10a9222e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_10a9222e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_10a9222e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post-medium{position:relative;width:100%}.post-medium-image{filter:brightness(.8);height:auto;width:100%}.post-medium-title{bottom:0;font-size:18px;padding:0 20px 20px}.post-medium .card,.post-medium-title{color:#fff;font-weight:700;position:absolute}.post-medium .card{background-color:var(--clr);font-size:11px;padding:5px;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_318b7d1e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_318b7d1e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_318b7d1e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_318b7d1e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_318b7d1e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main[data-v-318b7d1e]{margin:0 auto;max-width:1180px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index.vue?vue&type=template&id=318b7d1e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "main"
  }, [_c('Featured'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-grid-triple gap32\" data-v-318b7d1e>", "</div>", [_vm._ssrNode("<main class=\"layout-flex-primary gap32\" data-v-318b7d1e>", "</main>", [_c('Football'), _vm._ssrNode(" "), _c('Nail'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-grid-double gap32\" data-v-318b7d1e>", "</div>", [_c('Car'), _vm._ssrNode(" "), _c('Fashion')], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"layout-flex-secondary gap32\" data-v-318b7d1e>", "</aside>", [_vm._ssrNode("<section class=\"followus\" data-v-318b7d1e>", "</section>", [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Follow us"
    }
  }), _vm._ssrNode(" "), _c('IconsConnect')], 2), _vm._ssrNode(" "), _c('Baby'), _vm._ssrNode(" "), _c('Tattoo'), _vm._ssrNode(" "), _c('Lifestyle')], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/index.vue?vue&type=template&id=318b7d1e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WidgetOneColumn/WidgetOneColumn.vue?vue&type=template&id=6bc4a2db&
var WidgetOneColumnvue_type_template_id_6bc4a2db_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.category ? _vm._ssrNode("<div class=\"widget widget-enjoynews-home-content\">", "</div>", [_vm._ssrNode("<div class=\"content-block content-block-1 clear\">", "</div>", [_vm._ssrNode("<div class=\"section-heading\"" + _vm._ssrStyle(null, {
    borderBottomColor: _vm.catBg
  }, null) + ">", "</div>", [_vm._ssrNode("<h3 class=\"section-title\"" + _vm._ssrStyle(null, {
    backgroundColor: _vm.catBg,
    color: _vm.catColor
  }, null) + ">", "</h3>", [_c('router-link', {
    attrs: {
      "to": `/category/${_vm.category.slug}/`
    }
  }, [_vm._v(_vm._s(_vm.catName))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<span class=\"section-more-link\">", "</span>", [_c('router-link', {
    attrs: {
      "to": `/category/${_vm.category.slug}/`
    }
  }, [_vm._v("More")])], 1)], 2), _vm._ssrNode(" "), _vm._l(_vm.category.posts, function (post, index) {
    return [_c('post-item', {
      key: index,
      attrs: {
        "index": index,
        "item": post,
        "className": _vm.className(index)
      }
    })];
  })], 2)]) : _vm._e()]);
};
var WidgetOneColumnvue_type_template_id_6bc4a2db_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/WidgetOneColumn/WidgetOneColumn.vue?vue&type=template&id=6bc4a2db&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostItem/PostItem.vue?vue&type=template&id=7029cdf9&
var PostItemvue_type_template_id_7029cdf9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: `${_vm.className}`
  }, [_c('router-link', {
    staticClass: "thumbnail-link",
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('div', {
    staticClass: "thumbnail-wrap"
  }, [_c('img', {
    staticClass: "attachment-enjoynews_featured_large_thumb size-enjoynews_featured_large_thumb wp-post-image",
    attrs: {
      "width": _vm.index === 0 ? 600 : 300,
      "height": _vm.index === 0 ? 400 : 200,
      "src": _vm.imageUrl,
      "alt": "",
      "decoding": "async",
      "sizes": "(max-width: 660px) 100vw, 660px"
    }
  })])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-header\">", "</div>", [_vm._ssrNode("<h2 class=\"entry-title\">", "</h2>", [_c('router-link', {
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.$omitText(_vm.item.name, 50))
    }
  })])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-meta\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `/author/${_vm.item.author.username}/`
    }
  }, [_c('span', {
    staticClass: "entry-author"
  }, [_c('span', {
    attrs: {
      "rel": "author"
    }
  }, [_vm._v(_vm._s(_vm.item.author.name))])])]), _vm._ssrNode(" <span class=\"sep\">·</span> <span class=\"entry-date\">" + _vm._ssrEscape(_vm._s(_vm.createDate)) + "</span>")], 2), _vm._ssrNode(" " + (_vm.index === 0 && _vm.item.description ? "<div class=\"entry-summary\">" + _vm._s(_vm.item.description) + "</div>" : "<!---->"))], 2);
};
var PostItemvue_type_template_id_7029cdf9_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostItem/PostItem.vue?vue&type=template&id=7029cdf9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/PostItem/PostItem.js?vue&type=script&lang=js&
/* harmony default export */ var PostItemvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    className: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    /**
     * imageUrl
     * @returns {String}
     */
    imageUrl() {
      if (!this.item) return `assets/img/default-thumbnail.jpeg`;
      return this.item.image;
    },
    /**
     * createDate
     * @returns {String}
     */
    createDate() {
      if (!this.item) return null;
      const date = this.item.created.split(' ');
      return date[0];
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostItem/PostItem.js?vue&type=script&lang=js&
 /* harmony default export */ var PostItem_PostItemvue_type_script_lang_js_ = (PostItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/PostItem/PostItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(148)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PostItem_PostItemvue_type_script_lang_js_,
  PostItemvue_type_template_id_7029cdf9_render,
  PostItemvue_type_template_id_7029cdf9_staticRenderFns,
  false,
  injectStyles,
  null,
  "3c163d0c"
  
)

/* harmony default export */ var PostItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/WidgetOneColumn/WidgetOneColumn.js?vue&type=script&lang=js&

/* harmony default export */ var WidgetOneColumnvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    categoryId: {
      type: [Number, String],
      default: null
    },
    limit: {
      type: [Number, String],
      default: null
    },
    category: {
      type: Object,
      default: () => {}
    }
  },
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    PostItem: PostItem
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    catName() {
      if (!this.category) return null;
      return this.category.name;
    },
    /**
     * cat color
     * @returns {String}
     */
    catColor() {
      var _this$category, _this$category2;
      if (!this.category || !((_this$category = this.category) !== null && _this$category !== void 0 && _this$category.color)) return null;
      return (_this$category2 = this.category) === null || _this$category2 === void 0 ? void 0 : _this$category2.color.text;
    },
    /**
     * background category
     * @returns {String}
     */
    catBg() {
      var _this$category3, _this$category4;
      if (!this.category || !((_this$category3 = this.category) !== null && _this$category3 !== void 0 && _this$category3.color)) return null;
      return (_this$category4 = this.category) === null || _this$category4 === void 0 ? void 0 : _this$category4.color.background;
    }
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    className(num) {
      if (num === 0) return `post-big hentry`;else return `post-small hentry`;
    }
  }
});
// CONCATENATED MODULE: ./src/components/WidgetOneColumn/WidgetOneColumn.js?vue&type=script&lang=js&
 /* harmony default export */ var WidgetOneColumn_WidgetOneColumnvue_type_script_lang_js_ = (WidgetOneColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/WidgetOneColumn/WidgetOneColumn.vue



function WidgetOneColumn_injectStyles (context) {
  
  var style0 = __webpack_require__(150)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var WidgetOneColumn_component = Object(componentNormalizer["a" /* default */])(
  WidgetOneColumn_WidgetOneColumnvue_type_script_lang_js_,
  WidgetOneColumnvue_type_template_id_6bc4a2db_render,
  WidgetOneColumnvue_type_template_id_6bc4a2db_staticRenderFns,
  false,
  WidgetOneColumn_injectStyles,
  null,
  "3ab62812"
  
)

/* harmony default export */ var WidgetOneColumn = (WidgetOneColumn_component.exports);
// EXTERNAL MODULE: ./src/components/Loading/Loading.vue + 4 modules
var Loading = __webpack_require__(114);

// EXTERNAL MODULE: ./src/mixins/mixinApp.js
var mixinApp = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Featured/index.vue?vue&type=template&id=1d0c4d72&scoped=true&
var Featuredvue_type_template_id_1d0c4d72_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "featured"
  }, _vm._l(_vm.posts, function (post, index) {
    return _c('FeaturedItem', {
      key: index,
      attrs: {
        "post": post
      }
    });
  }), 1);
};
var Featuredvue_type_template_id_1d0c4d72_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Featured/index.vue?vue&type=template&id=1d0c4d72&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeaturedItem/index.vue?vue&type=template&id=4936c156&
var FeaturedItemvue_type_template_id_4936c156_render = function render() {
  var _vm$post, _vm$post2, _vm$post2$categories$, _vm$post3;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "featured-item"
  }, [_c('nuxt-link', {
    attrs: {
      "to": `/${_vm.post.id}/`
    }
  }, [_c('img', {
    staticClass: "featured-image",
    attrs: {
      "src": (_vm$post = _vm.post) === null || _vm$post === void 0 ? void 0 : _vm$post.image,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "featured-content"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('a', {
    staticClass: "cart-name",
    attrs: {
      "href": ""
    }
  }, [_vm._v(_vm._s((_vm$post2 = _vm.post) === null || _vm$post2 === void 0 ? void 0 : (_vm$post2$categories$ = _vm$post2.categories[0]) === null || _vm$post2$categories$ === void 0 ? void 0 : _vm$post2$categories$.name))])]), _vm._v(" "), _c('h2', {
    staticClass: "featured-title"
  }, [_vm._v("\n                " + _vm._s((_vm$post3 = _vm.post) === null || _vm$post3 === void 0 ? void 0 : _vm$post3.name) + "\n            ")])])])], 1);
};
var FeaturedItemvue_type_template_id_4936c156_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/FeaturedItem/index.vue?vue&type=template&id=4936c156&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeaturedItem/index.vue?vue&type=script&lang=js&
/* harmony default export */ var FeaturedItemvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/FeaturedItem/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeaturedItemvue_type_script_lang_js_ = (FeaturedItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FeaturedItem/index.vue



function FeaturedItem_injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FeaturedItem_component = Object(componentNormalizer["a" /* default */])(
  components_FeaturedItemvue_type_script_lang_js_,
  FeaturedItemvue_type_template_id_4936c156_render,
  FeaturedItemvue_type_template_id_4936c156_staticRenderFns,
  false,
  FeaturedItem_injectStyles,
  null,
  "438f5a69"
  
)

/* harmony default export */ var FeaturedItem = (FeaturedItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Featured/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Featuredvue_type_script_lang_js_ = ({
  components: {
    FeaturedItem: FeaturedItem
  },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    await this.featurePost();
  },
  methods: {
    async featurePost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 5
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Featured/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Featuredvue_type_script_lang_js_ = (Featuredvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Featured/index.vue



function Featured_injectStyles (context) {
  
  var style0 = __webpack_require__(154)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Featured_component = Object(componentNormalizer["a" /* default */])(
  components_Featuredvue_type_script_lang_js_,
  Featuredvue_type_template_id_1d0c4d72_scoped_true_render,
  Featuredvue_type_template_id_1d0c4d72_scoped_true_staticRenderFns,
  false,
  Featured_injectStyles,
  "1d0c4d72",
  "e272fa14"
  
)

/* harmony default export */ var Featured = (Featured_component.exports);
// EXTERNAL MODULE: ./src/components/HeadingSection/index.vue + 4 modules
var HeadingSection = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostLarge/index.vue?vue&type=template&id=6095fcf4&scoped=true&
var PostLargevue_type_template_id_6095fcf4_scoped_true_render = function render() {
  var _vm$post, _vm$post2, _vm$post3, _vm$post3$creater, _vm$post4, _vm$post5, _vm$post6, _vm$post7;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "post-large"
  }, [_c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post = _vm.post) === null || _vm$post === void 0 ? void 0 : _vm$post.id}/`
    }
  }, [_c('img', {
    staticClass: "post-large-image",
    attrs: {
      "src": (_vm$post2 = _vm.post) === null || _vm$post2 === void 0 ? void 0 : _vm$post2.image,
      "alt": ""
    }
  })]), _vm._ssrNode(" <div class=\"post-large-metadata\" data-v-6095fcf4><h6 class=\"post-large-author\" data-v-6095fcf4>" + _vm._ssrEscape(_vm._s((_vm$post3 = _vm.post) === null || _vm$post3 === void 0 ? void 0 : (_vm$post3$creater = _vm$post3.creater) === null || _vm$post3$creater === void 0 ? void 0 : _vm$post3$creater.name)) + "</h6> <p class=\"post-large-date\" data-v-6095fcf4>" + _vm._ssrEscape(_vm._s((_vm$post4 = _vm.post) === null || _vm$post4 === void 0 ? void 0 : _vm$post4.creater.created)) + "</p></div> "), _c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post5 = _vm.post) === null || _vm$post5 === void 0 ? void 0 : _vm$post5.id}/`
    }
  }, [_c('h2', {
    staticClass: "post-large-title"
  }, [_vm._v("\n      " + _vm._s((_vm$post6 = _vm.post) === null || _vm$post6 === void 0 ? void 0 : _vm$post6.name) + "\n    ")])]), _vm._ssrNode(" <p class=\"post-large-desc\" data-v-6095fcf4>" + _vm._ssrEscape("\n    " + _vm._s((_vm$post7 = _vm.post) === null || _vm$post7 === void 0 ? void 0 : _vm$post7.description) + "\n  ") + "</p>")], 2);
};
var PostLargevue_type_template_id_6095fcf4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostLarge/index.vue?vue&type=template&id=6095fcf4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostLarge/index.vue?vue&type=script&lang=js&
/* harmony default export */ var PostLargevue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostLarge/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostLargevue_type_script_lang_js_ = (PostLargevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/PostLarge/index.vue



function PostLarge_injectStyles (context) {
  
  var style0 = __webpack_require__(156)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PostLarge_component = Object(componentNormalizer["a" /* default */])(
  components_PostLargevue_type_script_lang_js_,
  PostLargevue_type_template_id_6095fcf4_scoped_true_render,
  PostLargevue_type_template_id_6095fcf4_scoped_true_staticRenderFns,
  false,
  PostLarge_injectStyles,
  "6095fcf4",
  "2898e2cf"
  
)

/* harmony default export */ var PostLarge = (PostLarge_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostTiny/index.vue?vue&type=template&id=90f3f86e&
var PostTinyvue_type_template_id_90f3f86e_render = function render() {
  var _vm$post, _vm$post2, _vm$post3, _vm$post4, _vm$post5, _vm$post5$creater;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "post-tiny"
  }, [_c('nuxt-link', {
    staticClass: "post-tiny",
    attrs: {
      "to": `/${(_vm$post = _vm.post) === null || _vm$post === void 0 ? void 0 : _vm$post.id}/`
    }
  }, [_c('img', {
    staticClass: "post-tiny-image",
    attrs: {
      "src": (_vm$post2 = _vm.post) === null || _vm$post2 === void 0 ? void 0 : _vm$post2.image,
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-tiny-content\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post3 = _vm.post) === null || _vm$post3 === void 0 ? void 0 : _vm$post3.id}/`
    }
  }, [_c('h2', {
    staticClass: "post-tiny-title"
  }, [_vm._v("\n        " + _vm._s((_vm$post4 = _vm.post) === null || _vm$post4 === void 0 ? void 0 : _vm$post4.name) + "\n      ")])]), _vm._ssrNode(" <p class=\"post-tiny-date\">" + _vm._ssrEscape(_vm._s((_vm$post5 = _vm.post) === null || _vm$post5 === void 0 ? void 0 : (_vm$post5$creater = _vm$post5.creater) === null || _vm$post5$creater === void 0 ? void 0 : _vm$post5$creater.created)) + "</p>")], 2)], 2);
};
var PostTinyvue_type_template_id_90f3f86e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostTiny/index.vue?vue&type=template&id=90f3f86e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostTiny/index.vue?vue&type=script&lang=js&
/* harmony default export */ var PostTinyvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostTiny/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostTinyvue_type_script_lang_js_ = (PostTinyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/PostTiny/index.vue



function PostTiny_injectStyles (context) {
  
  var style0 = __webpack_require__(158)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PostTiny_component = Object(componentNormalizer["a" /* default */])(
  components_PostTinyvue_type_script_lang_js_,
  PostTinyvue_type_template_id_90f3f86e_render,
  PostTinyvue_type_template_id_90f3f86e_staticRenderFns,
  false,
  PostTiny_injectStyles,
  null,
  "3b2ce008"
  
)

/* harmony default export */ var PostTiny = (PostTiny_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostSmall/index.vue?vue&type=template&id=5d2d875c&scoped=true&
var PostSmallvue_type_template_id_5d2d875c_scoped_true_render = function render() {
  var _vm$post, _vm$post2, _vm$post3, _vm$post4;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "post-small"
  }, [_c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post = _vm.post) === null || _vm$post === void 0 ? void 0 : _vm$post.id}/`
    }
  }, [_c('img', {
    staticClass: "post-small-image",
    attrs: {
      "src": (_vm$post2 = _vm.post) === null || _vm$post2 === void 0 ? void 0 : _vm$post2.image,
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post3 = _vm.post) === null || _vm$post3 === void 0 ? void 0 : _vm$post3.id}/`
    }
  }, [_c('p', {
    staticClass: "post-small-caption heading-blogging"
  }, [_vm._v("\n      " + _vm._s((_vm$post4 = _vm.post) === null || _vm$post4 === void 0 ? void 0 : _vm$post4.name) + "\n    ")])])], 2);
};
var PostSmallvue_type_template_id_5d2d875c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostSmall/index.vue?vue&type=template&id=5d2d875c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostSmall/index.vue?vue&type=script&lang=js&
/* harmony default export */ var PostSmallvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostSmall/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostSmallvue_type_script_lang_js_ = (PostSmallvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/PostSmall/index.vue



function PostSmall_injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PostSmall_component = Object(componentNormalizer["a" /* default */])(
  components_PostSmallvue_type_script_lang_js_,
  PostSmallvue_type_template_id_5d2d875c_scoped_true_render,
  PostSmallvue_type_template_id_5d2d875c_scoped_true_staticRenderFns,
  false,
  PostSmall_injectStyles,
  "5d2d875c",
  "d3f824ca"
  
)

/* harmony default export */ var PostSmall = (PostSmall_component.exports);
// EXTERNAL MODULE: ./src/components/IconsConnect/index.vue + 4 modules
var IconsConnect = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostMedium/index.vue?vue&type=template&id=10a9222e&
var PostMediumvue_type_template_id_10a9222e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "post-medium"
  }, [_c('nuxt-link', {
    attrs: {
      "to": _vm.title
    }
  }, [_c('img', {
    staticClass: "post-medium-image",
    attrs: {
      "src": _vm.urlImage,
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": _vm.title
    }
  }, [_c('h2', {
    staticClass: "post-medium-title"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]), _vm._ssrNode(" " + (_vm.card ? "<p class=\"card\">SEO</p>" : "<!---->"))], 2);
};
var PostMediumvue_type_template_id_10a9222e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostMedium/index.vue?vue&type=template&id=10a9222e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostMedium/index.vue?vue&type=script&lang=js&
/* harmony default export */ var PostMediumvue_type_script_lang_js_ = ({
  props: ['card', 'urlImage', 'title']
});
// CONCATENATED MODULE: ./src/components/PostMedium/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostMediumvue_type_script_lang_js_ = (PostMediumvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/PostMedium/index.vue



function PostMedium_injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PostMedium_component = Object(componentNormalizer["a" /* default */])(
  components_PostMediumvue_type_script_lang_js_,
  PostMediumvue_type_template_id_10a9222e_render,
  PostMediumvue_type_template_id_10a9222e_staticRenderFns,
  false,
  PostMedium_injectStyles,
  null,
  "f5e65086"
  
)

/* harmony default export */ var PostMedium = (PostMedium_component.exports);
// EXTERNAL MODULE: ./src/components/PostHorizontal/index.vue + 4 modules
var PostHorizontal = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Football/index.vue?vue&type=template&id=2e8d6b12&scoped=true&
var Footballvue_type_template_id_2e8d6b12_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "layout-flex-vertical gap24"
  }, [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Football"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-grid-double gap32\" data-v-2e8d6b12>", "</div>", [_vm._l(_vm.posts, function (post, index) {
    return [index === 0 ? _c('PostLarge', {
      attrs: {
        "post": post
      }
    }) : _vm._e()];
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-flex-vertical gap24\" data-v-2e8d6b12>", "</div>", [_vm._l(_vm.posts, function (post, index) {
    return [index !== 0 ? _c('PostTiny', {
      attrs: {
        "post": post
      }
    }) : _vm._e()];
  })], 2)], 2)], 2);
};
var Footballvue_type_template_id_2e8d6b12_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Football/index.vue?vue&type=template&id=2e8d6b12&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Football/index.vue?vue&type=script&lang=js&



/* harmony default export */ var Footballvue_type_script_lang_js_ = ({
  // data
  data() {
    return {
      posts: []
    };
  },
  // conponents
  components: {
    PostLarge: PostLarge,
    PostTiny: PostTiny,
    HeadingSection: HeadingSection["a" /* default */]
  },
  // methods
  methods: {
    // get football post
    async footballPost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 5,
        category_slug: 'football',
        get_posts: 1,
        post_limit: 5,
        post_page: 1,
        get_meta: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  },
  // created
  async created() {
    await this.footballPost();
  }
});
// CONCATENATED MODULE: ./src/components/Football/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footballvue_type_script_lang_js_ = (Footballvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Football/index.vue



function Football_injectStyles (context) {
  
  
}

/* normalize component */

var Football_component = Object(componentNormalizer["a" /* default */])(
  components_Footballvue_type_script_lang_js_,
  Footballvue_type_template_id_2e8d6b12_scoped_true_render,
  Footballvue_type_template_id_2e8d6b12_scoped_true_staticRenderFns,
  false,
  Football_injectStyles,
  "2e8d6b12",
  "4e3b0775"
  
)

/* harmony default export */ var Football = (Football_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Nail/index.vue?vue&type=template&id=bdf1bc3a&
var Nailvue_type_template_id_bdf1bc3a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "layout-flex-vertical gap24"
  }, [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Nail"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-flex-horizontal gap24\">", "</div>", _vm._l(_vm.posts, function (post, index) {
    return _c('PostSmall', {
      key: index,
      attrs: {
        "post": post
      }
    });
  }), 1)], 2);
};
var Nailvue_type_template_id_bdf1bc3a_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Nail/index.vue?vue&type=template&id=bdf1bc3a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Nail/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Nailvue_type_script_lang_js_ = ({
  components: {
    PostSmall: PostSmall,
    HeadingSection: HeadingSection["a" /* default */]
  },
  data() {
    return {
      posts: []
    };
  },
  // methods
  methods: {
    // get football post
    async nailPost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 3,
        category_slug: 'nail',
        get_posts: 1,
        post_limit: 3,
        post_page: 1,
        get_meta: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  },
  // created
  async created() {
    await this.nailPost();
  }
});
// CONCATENATED MODULE: ./src/components/Nail/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Nailvue_type_script_lang_js_ = (Nailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Nail/index.vue





/* normalize component */

var Nail_component = Object(componentNormalizer["a" /* default */])(
  components_Nailvue_type_script_lang_js_,
  Nailvue_type_template_id_bdf1bc3a_render,
  Nailvue_type_template_id_bdf1bc3a_staticRenderFns,
  false,
  null,
  null,
  "012543de"
  
)

/* harmony default export */ var Nail = (Nail_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Car/index.vue?vue&type=template&id=8724bfa0&scoped=true&
var Carvue_type_template_id_8724bfa0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "layout-flex-vertical gap24"
  }, [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Car"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-flex-vertical gap24\" data-v-8724bfa0>", "</div>", [_vm._l(_vm.posts, function (post, index) {
    return [index === 0 ? _c('PostLarge', {
      attrs: {
        "post": post
      }
    }) : _vm._e(), _vm._ssrNode(" "), index !== 0 ? _c('PostTiny', {
      attrs: {
        "post": post
      }
    }) : _vm._e()];
  })], 2)], 2);
};
var Carvue_type_template_id_8724bfa0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Car/index.vue?vue&type=template&id=8724bfa0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Car/index.vue?vue&type=script&lang=js&



/* harmony default export */ var Carvue_type_script_lang_js_ = ({
  // data
  data() {
    return {
      posts: []
    };
  },
  components: {
    PostLarge: PostLarge,
    PostTiny: PostTiny,
    HeadingSection: HeadingSection["a" /* default */]
  },
  // methods
  methods: {
    // get football post
    async footballPost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 5,
        random: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  },
  // created
  async created() {
    await this.footballPost();
  }
});
// CONCATENATED MODULE: ./src/components/Car/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Carvue_type_script_lang_js_ = (Carvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Car/index.vue



function Car_injectStyles (context) {
  
  
}

/* normalize component */

var Car_component = Object(componentNormalizer["a" /* default */])(
  components_Carvue_type_script_lang_js_,
  Carvue_type_template_id_8724bfa0_scoped_true_render,
  Carvue_type_template_id_8724bfa0_scoped_true_staticRenderFns,
  false,
  Car_injectStyles,
  "8724bfa0",
  "722b0d68"
  
)

/* harmony default export */ var Car = (Car_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fashion/index.vue?vue&type=template&id=172c350a&scoped=true&
var Fashionvue_type_template_id_172c350a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "layout-flex-vertical gap24"
  }, [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Fashion"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-flex-vertical gap24\" data-v-172c350a>", "</div>", [_vm._l(_vm.posts, function (post, index) {
    return [index === 0 ? _c('PostLarge', {
      attrs: {
        "post": post
      }
    }) : _vm._e(), _vm._ssrNode(" "), index !== 0 ? _c('PostTiny', {
      attrs: {
        "post": post
      }
    }) : _vm._e()];
  })], 2)], 2);
};
var Fashionvue_type_template_id_172c350a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Fashion/index.vue?vue&type=template&id=172c350a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Fashion/index.vue?vue&type=script&lang=js&



/* harmony default export */ var Fashionvue_type_script_lang_js_ = ({
  // data
  data() {
    return {
      posts: []
    };
  },
  components: {
    PostLarge: PostLarge,
    PostTiny: PostTiny,
    HeadingSection: HeadingSection["a" /* default */]
  },
  // methods
  methods: {
    // get football post
    async footballPost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 5,
        category_slug: 'football',
        get_posts: 1,
        post_limit: 5,
        post_page: 1,
        get_meta: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  },
  // created
  async created() {
    await this.footballPost();
  }
});
// CONCATENATED MODULE: ./src/components/Fashion/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Fashionvue_type_script_lang_js_ = (Fashionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Fashion/index.vue



function Fashion_injectStyles (context) {
  
  
}

/* normalize component */

var Fashion_component = Object(componentNormalizer["a" /* default */])(
  components_Fashionvue_type_script_lang_js_,
  Fashionvue_type_template_id_172c350a_scoped_true_render,
  Fashionvue_type_template_id_172c350a_scoped_true_staticRenderFns,
  false,
  Fashion_injectStyles,
  "172c350a",
  "8864a968"
  
)

/* harmony default export */ var Fashion = (Fashion_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Baby/index.vue?vue&type=template&id=72ebcd20&scoped=true&
var Babyvue_type_template_id_72ebcd20_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "layout-flex-vertical gap24"
  }, [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Baby"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-grid-quad gap20\" data-v-72ebcd20>", "</div>", _vm._l(_vm.posts, function (post, index) {
    return _c('PostSmall', {
      key: index,
      attrs: {
        "post": post
      }
    });
  }), 1)], 2);
};
var Babyvue_type_template_id_72ebcd20_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Baby/index.vue?vue&type=template&id=72ebcd20&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Baby/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Babyvue_type_script_lang_js_ = ({
  // data
  data() {
    return {
      posts: []
    };
  },
  components: {
    PostSmall: PostSmall,
    HeadingSection: HeadingSection["a" /* default */]
  },
  // methods
  methods: {
    // get football post
    async footballPost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 4,
        random: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  },
  // created
  async created() {
    await this.footballPost();
  }
});
// CONCATENATED MODULE: ./src/components/Baby/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Babyvue_type_script_lang_js_ = (Babyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Baby/index.vue



function Baby_injectStyles (context) {
  
  
}

/* normalize component */

var Baby_component = Object(componentNormalizer["a" /* default */])(
  components_Babyvue_type_script_lang_js_,
  Babyvue_type_template_id_72ebcd20_scoped_true_render,
  Babyvue_type_template_id_72ebcd20_scoped_true_staticRenderFns,
  false,
  Baby_injectStyles,
  "72ebcd20",
  "76fd42c4"
  
)

/* harmony default export */ var Baby = (Baby_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tattoo/index.vue?vue&type=template&id=40bb1e19&scoped=true&
var Tattoovue_type_template_id_40bb1e19_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "layout-flex-vertical gap24"
  }, [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Tattoo"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-flex-vertical gap24\" data-v-40bb1e19>", "</div>", _vm._l(_vm.posts, function (post, index) {
    return _c('PostTiny', {
      key: index,
      attrs: {
        "post": post
      }
    });
  }), 1)], 2);
};
var Tattoovue_type_template_id_40bb1e19_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Tattoo/index.vue?vue&type=template&id=40bb1e19&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tattoo/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Tattoovue_type_script_lang_js_ = ({
  // data
  data() {
    return {
      posts: []
    };
  },
  components: {
    PostTiny: PostTiny,
    HeadingSection: HeadingSection["a" /* default */]
  },
  // methods
  methods: {
    // get football post
    async footballPost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 5,
        random: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  },
  // created
  async created() {
    await this.footballPost();
  }
});
// CONCATENATED MODULE: ./src/components/Tattoo/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tattoovue_type_script_lang_js_ = (Tattoovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tattoo/index.vue



function Tattoo_injectStyles (context) {
  
  
}

/* normalize component */

var Tattoo_component = Object(componentNormalizer["a" /* default */])(
  components_Tattoovue_type_script_lang_js_,
  Tattoovue_type_template_id_40bb1e19_scoped_true_render,
  Tattoovue_type_template_id_40bb1e19_scoped_true_staticRenderFns,
  false,
  Tattoo_injectStyles,
  "40bb1e19",
  "696b36d5"
  
)

/* harmony default export */ var Tattoo = (Tattoo_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Lifestyle/index.vue?vue&type=template&id=0f9824bf&scoped=true&
var Lifestylevue_type_template_id_0f9824bf_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "layout-flex-vertical gap24"
  }, [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Lifestyle"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-grid-quad gap20\" data-v-0f9824bf>", "</div>", _vm._l(_vm.posts, function (post, index) {
    return _c('PostSmall', {
      key: index,
      attrs: {
        "post": post
      }
    });
  }), 1)], 2);
};
var Lifestylevue_type_template_id_0f9824bf_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Lifestyle/index.vue?vue&type=template&id=0f9824bf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Lifestyle/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Lifestylevue_type_script_lang_js_ = ({
  // data
  data() {
    return {
      posts: []
    };
  },
  components: {
    PostSmall: PostSmall,
    HeadingSection: HeadingSection["a" /* default */]
  },
  // methods
  methods: {
    // get football post
    async footballPost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 4,
        category_slug: 'football',
        get_posts: 1,
        post_limit: 5,
        post_page: 1,
        get_meta: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  },
  // created
  async created() {
    await this.footballPost();
  }
});
// CONCATENATED MODULE: ./src/components/Lifestyle/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Lifestylevue_type_script_lang_js_ = (Lifestylevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Lifestyle/index.vue



function Lifestyle_injectStyles (context) {
  
  
}

/* normalize component */

var Lifestyle_component = Object(componentNormalizer["a" /* default */])(
  components_Lifestylevue_type_script_lang_js_,
  Lifestylevue_type_template_id_0f9824bf_scoped_true_render,
  Lifestylevue_type_template_id_0f9824bf_scoped_true_staticRenderFns,
  false,
  Lifestyle_injectStyles,
  "0f9824bf",
  "26485809"
  
)

/* harmony default export */ var Lifestyle = (Lifestyle_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/pages?vue&type=script&lang=js&


















/* harmony default export */ var pages_vue_type_script_lang_js_ = ({
  mixins: [mixinApp["a" /* default */]],
  /* --------------------------------------------------
  components
  -------------------------------------------------- */
  components: {
    WidgetOneColumn: WidgetOneColumn,
    Loading: Loading["a" /* default */],
    Featured: Featured,
    HeadingSection: HeadingSection["a" /* default */],
    PostLarge: PostLarge,
    PostTiny: PostTiny,
    PostSmall: PostSmall,
    IconsConnect: IconsConnect["a" /* default */],
    PostMedium: PostMedium,
    PostHorizontal: PostHorizontal["a" /* default */],
    Football: Football,
    Nail: Nail,
    Car: Car,
    Fashion: Fashion,
    Baby: Baby,
    Tattoo: Tattoo,
    Lifestyle: Lifestyle
  },
  /* --------------------------------------------------
  asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    context.$setLoading(true);
    const params = {
      api_key: context.env.API_KEY,
      website_id: context.env.WEBSITE_ID,
      status: 1,
      get_posts: 1,
      display_home: 1,
      limit: 3,
      page: 1,
      get_posts: 1
    };
    const pageData = {
      pageNo: 1
    };
    const response = await context.$axios.get(`manager/categories/json/1.json`, {
      params
    });
    if (response.data.status_code === 1) {
      pageData.categories = response.data.data;
      pageData.totalPage = response.data.total_page;
      pageData.pageNo++;
      pageData.metaDescription = "";
      pageData.metaYoastSeo = context.store.state.common.storeLoadInit.settings["yoast-seo"];
    }
    context.$setLoading(false);
    return pageData;
  },
  /* --------------------------------------------------
  data
  -------------------------------------------------- */
  data() {
    return {
      categories: [],
      totalPage: 0,
      pageNo: 1,
      ads: [],
      isLoading: false
    };
  },
  /* --------------------------------------------------
  methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get categories home
     */
    async getPosts() {
      if (this.isLoading) {
        return;
      }
      this.isLoading = true;
      const params = {
        api_key: "0906429283",
        website_id: 22,
        status: 1,
        get_posts: 1,
        display_home: 1,
        limit: 3,
        get_posts: 1,
        page: this.pageNo
      };
      const response = await this.$axios.get(`manager/categories/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.categories.push(...response.data.data);
      }
      this.pageNo++;
    },
    /**
     * Get ads
     */
    async getAds() {
      const params = {
        api_key: context.env.API_KEY,
        website_id: context.env.WEBSITE_ID
      };
      const response = await this.$axios.get(`manager/advertises/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.ads = response.data.data;
        this.isLoad = true;
      }
    }
  },
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
        await this.getPosts();
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/pages?vue&type=script&lang=js&
 /* harmony default export */ var src_pages_vue_type_script_lang_js_ = (pages_vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  src_pages_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "318b7d1e",
  "56c79766"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map