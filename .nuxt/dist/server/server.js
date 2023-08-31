module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_id/index","2":"pages/_slug/index","3":"pages/author/_slug/index","4":"pages/category/_slug/index","5":"pages/index","6":"pages/page/_slug/index","7":"pages/search/index","8":"pages/tag/_slug/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TOOGLE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return STORE_UPDATE_MENUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return STORE_SETTINGS_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return STORE_SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return STORE_SET_ADS; });
/* unused harmony export ADS_HOME_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADS_POST_DETAIL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADS_CATEGORY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADS_TAG_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADS_DETAIL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADS_SEARCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return BEFORE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return BEFORE_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return BEFORE_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AFTER_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AFTER_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AFTER_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return AUTO_HEAD; });
/* unused harmony export ADS_GOOGLE */
/* unused harmony export ADS_KEEPER */
const SET_DATA = 'SET_DATA';
const TOOGLE_MENU = 'TOOGLE_MENU';
const STORE_UPDATE_MENUS = 'UPDATE_MENU';
const STORE_SETTINGS_APP = 'STORE_SETTINGS_APP';
const STORE_SET_LOADING = 'STORE_SET_LOADING';
const STORE_SET_ADS = 'STORE_SET_ADS';
const ADS_HOME_PAGE = 1;
const ADS_POST_DETAIL_PAGE = 2;
const ADS_CATEGORY_PAGE = 3;
const ADS_TAG_PAGE = 4;
const ADS_DETAIL_PAGE = 5;
const ADS_SEARCH_PAGE = 6;
const BEFORE_POST = 1;
const BEFORE_CONTENT = 2;
const BEFORE_PARAGRAPH = 3;
const AFTER_POST = 8;
const AFTER_CONTENT = 7;
const AFTER_PARAGRAPH = 4;
const HEADER = 18;
const FOOTER = 19;
const AUTO_HEAD = 21;
const ADS_GOOGLE = 1;
const ADS_KEEPER = 2;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-google-adsense");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeadingSection/index.vue?vue&type=template&id=77e97a90&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h2', {
    staticClass: "heading-section-box"
  }, [_vm._ssrNode("<a href=\"#\" class=\"heading-section\" data-v-77e97a90>" + _vm._ssrEscape(_vm._s(_vm.nameHeading)) + "</a>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/HeadingSection/index.vue?vue&type=template&id=77e97a90&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeadingSection/index.vue?vue&type=script&lang=js&
/* harmony default export */ var HeadingSectionvue_type_script_lang_js_ = ({
  props: ['nameHeading']
});
// CONCATENATED MODULE: ./src/components/HeadingSection/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeadingSectionvue_type_script_lang_js_ = (HeadingSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/HeadingSection/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeadingSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77e97a90",
  "331f378b"
  
)

/* harmony default export */ var HeadingSection = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AdsKeeper/AdsKeeper.vue?vue&type=template&id=1eb32dd4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": `${_vm.selector}`
    },
    domProps: {
      "innerHTML": _vm._s(_vm.contentAds.body)
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/AdsKeeper/AdsKeeper.vue?vue&type=template&id=1eb32dd4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/AdsKeeper/AdsKeeper.js?vue&type=script&lang=js&
/* harmony default export */ var AdsKeepervue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    selector: {
      type: String,
      default: null
    },
    contentAds: {
      type: Object,
      default: () => {}
    },
    position: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      element: null,
      ads: '<!-- Composite Start --> \n<div id="M886209ScriptRootC1465588"></div> \n<script src="https://jsc.adskeeper.com/m/b/m.baly.online.1465588.js" async></script> \n<!-- Composite End -->'
    };
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Load ads keeper
     */
    loadAdsKeeper() {
      this.element = document.getElementById(this.selector);
      const nodes = this.element.getElementsByTagName('script');
      if (!nodes) return;
      if (this.position) {
        for (let index = 0; index < nodes.length; index++) {
          const url_ads = nodes[index].getAttribute('src');
          const scriptEl = document.createElement('script');
          scriptEl.src = null;
          scriptEl.src = url_ads;
          if (this.position === 'head') {
            document.getElementsByTagName('head')[0].appendChild(scriptEl);
          }
          if (this.position === 'footer') {
            document.documentElement.appendChild(scriptEl);
          }
        }
        this.element.remove();
      } else {
        let url_ads = nodes[0].getAttribute('src');
        let scriptEl = document.createElement('script');
        scriptEl.src = url_ads;
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.referrerpolicy = 'strict-origin-when-cross-origin';
        this.element.appendChild(scriptEl);
      }
    }
  },
  beforeRouterLeave(from, to, next) {
    this.element.remove();
    next();
  },
  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted() {
    this.$nextTick(() => {
      setTimeout(async () => {
        await this.loadAdsKeeper();
      }, 2000);
    });
  }
});
// CONCATENATED MODULE: ./src/components/AdsKeeper/AdsKeeper.js?vue&type=script&lang=js&
 /* harmony default export */ var AdsKeeper_AdsKeepervue_type_script_lang_js_ = (AdsKeepervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/AdsKeeper/AdsKeeper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AdsKeeper_AdsKeepervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eb32dd4",
  "03b17026"
  
)

/* harmony default export */ var AdsKeeper = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AdsGoogle/AdsGoogle.vue?vue&type=template&id=7ab26cd8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": `${_vm.selector}`
    },
    domProps: {
      "innerHTML": _vm._s(_vm.googleAds)
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/AdsGoogle/AdsGoogle.vue?vue&type=template&id=7ab26cd8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/AdsGoogle/AdsGoogle.js?vue&type=script&lang=js&
/* harmony default export */ var AdsGooglevue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    selector: {
      type: String,
      default: null
    },
    contentAds: {
      type: Object,
      default: () => {}
    },
    position: {
      type: String,
      default: null
    }
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      googleAds: '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4862497484826970" crossorigin="anonymous"></script><!-- LifePC 780X400 --><ins class="adsbygoogle" style="display:inline-block;width:780px;height:400px" data-ad-client="ca-pub-4862497412826970" data-ad-slot="2773090032"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'
    };
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    loadGoogleAds() {
      const element = document.getElementById(this.selector);
      const inlineScript = document.createElement("script");
      inlineScript.type = "text/javascript";
      inlineScript.text = '(adsbygoogle = window.adsbygoogle || []).push({});';
      element.appendChild(inlineScript);
    }
  },
  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  async mounted() {
    await this.loadGoogleAds();
  }
});
// CONCATENATED MODULE: ./src/components/AdsGoogle/AdsGoogle.js?vue&type=script&lang=js&
 /* harmony default export */ var AdsGoogle_AdsGooglevue_type_script_lang_js_ = (AdsGooglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/AdsGoogle/AdsGoogle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AdsGoogle_AdsGooglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ab26cd8",
  "17d992f4"
  
)

/* harmony default export */ var AdsGoogle = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4fbc47bc", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5796d84e", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d9754e28", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4974865e", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6992718f", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a908b290", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5a62aeb9", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("53038416", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("43d82438", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4aed2604", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("72fb8a94", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d7986af4", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0e9d1e96", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2953bfa7", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6e8df861", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("201b0a1c", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6ae97846", content, true, context)
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("12135895", content, true, context)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4817664e", content, true, context)
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4bb7b7e7", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7f002cea", content, true, context)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("22d2dd10", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("08fdd86a", content, true, context)
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IconsConnect/index.vue?vue&type=template&id=750c37ed&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "icons"
  }, [_vm._ssrNode("<div class=\"icon-box\" data-v-750c37ed>", "</div>", [_vm._ssrNode("<div data-v-750c37ed>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    staticStyle: {
      "--icon-clr": "#1da1f2"
    },
    attrs: {
      "icon": "fa-brands fa-twitter"
    }
  })], 1), _vm._ssrNode(" <p class=\"followus-name\" data-v-750c37ed>Twitter</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-box\" data-v-750c37ed>", "</div>", [_vm._ssrNode("<div data-v-750c37ed>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    staticStyle: {
      "--icon-clr": "#1778f2"
    },
    attrs: {
      "icon": "fa-brands fa-facebook"
    }
  })], 1), _vm._ssrNode(" <p class=\"followus-name\" data-v-750c37ed>Facebook</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-box\" data-v-750c37ed>", "</div>", [_vm._ssrNode("<div data-v-750c37ed>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    staticStyle: {
      "--icon-clr": "#f33f97"
    },
    attrs: {
      "icon": "fa-brands fa-instagram"
    }
  })], 1), _vm._ssrNode(" <p class=\"followus-name\" data-v-750c37ed>Instagram</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-box\" data-v-750c37ed>", "</div>", [_vm._ssrNode("<div data-v-750c37ed>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    staticStyle: {
      "--icon-clr": "#fa0000"
    },
    attrs: {
      "icon": "fa-brands fa-youtube"
    }
  })], 1), _vm._ssrNode(" <p class=\"followus-name\" data-v-750c37ed>YouTube</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-box\" data-v-750c37ed>", "</div>", [_vm._ssrNode("<div data-v-750c37ed>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    staticStyle: {
      "--icon-clr": "#e64b87"
    },
    attrs: {
      "icon": "fa-brands fa-dribbble"
    }
  })], 1), _vm._ssrNode(" <p class=\"followus-name\" data-v-750c37ed>Dribbble</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-box\" data-v-750c37ed>", "</div>", [_vm._ssrNode("<div data-v-750c37ed>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    staticStyle: {
      "--icon-clr": "#0d66c2"
    },
    attrs: {
      "icon": "fa-brands fa-linkedin"
    }
  })], 1), _vm._ssrNode(" <p class=\"followus-name\" data-v-750c37ed>LinkedIn</p>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/IconsConnect/index.vue?vue&type=template&id=750c37ed&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IconsConnect/index.vue?vue&type=script&setup=true&lang=js&
/* harmony default export */ var IconsConnectvue_type_script_setup_true_lang_js_ = ({
  __name: 'index',
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
// CONCATENATED MODULE: ./src/components/IconsConnect/index.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var components_IconsConnectvue_type_script_setup_true_lang_js_ = (IconsConnectvue_type_script_setup_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IconsConnect/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IconsConnectvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "750c37ed",
  "3ef9b3b8"
  
)

/* harmony default export */ var IconsConnect = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/utc");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/timezone");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_07de5417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_07de5417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_07de5417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_07de5417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_07de5417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error[data-v-07de5417]{display:flex;flex-direction:column;gap:32px 0}.error-title[data-v-07de5417]{font-size:35px;line-height:43px}.error-desc[data-v-07de5417]{line-height:26px}.search[data-v-07de5417]{display:flex;height:43px;width:100%}.search-input[data-v-07de5417]{background-color:#f0f0f0;color:#333;display:inline-block;font-family:\"Inter\";font-size:14px;font-weight:600;height:100%;line-height:24.5px;padding:5px 0 5px 10px}.search-button[data-v-07de5417]{align-items:center;background-color:#0099e5;color:#fff;display:flex;height:100%;justify-content:center;width:113px}.sugguest-title[data-v-07de5417]{font-size:16px}.sugguest-list li[data-v-07de5417]{color:#222;line-height:26px;list-style-position:inside;list-style-type:disc}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#0099e5;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("00122704", content, true)

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":host,:root{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Solid\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Regular\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Light\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Thin\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-regular:normal 400 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-light:normal 300 1em/1 \"Font Awesome 6 Sharp\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{box-sizing:content-box;overflow:visible}.svg-inline--fa{display:inline-block;display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.07143em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:.3em;margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{top:.25em;width:2em;width:var(--fa-li-width,2em)}.svg-inline--fa.fa-fw{width:1.25em;width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:#ff253a;background-color:var(--fa-counter-background-color,#ff253a);border-radius:1em;border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:#fff;color:var(--fa-inverse,#fff);line-height:1;line-height:var(--fa-counter-line-height,1);max-width:5em;max-width:var(--fa-counter-max-width,5em);min-width:1.5em;min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:.25em .5em;padding:var(--fa-counter-padding,.25em .5em);right:0;right:var(--fa-right,0);text-overflow:ellipsis;top:0;top:var(--fa-top,0);transform:scale(.25);transform:scale(var(--fa-counter-scale,.25));transform-origin:top right}.fa-layers-bottom-right{bottom:0;bottom:var(--fa-bottom,0);right:0;right:var(--fa-right,0);top:auto;transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;bottom:var(--fa-bottom,0);left:0;left:var(--fa-left,0);right:auto;top:auto;transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:bottom left}.fa-layers-top-right{right:0;right:var(--fa-right,0);top:0;top:var(--fa-top,0);transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:top right}.fa-layers-top-left{left:0;left:var(--fa-left,0);right:auto;top:0;top:var(--fa-top,0);transform:scale(.25);transform:scale(var(--fa-layers-scale,.25));transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;left:calc(var(--fa-li-width, 2em)*-1);line-height:inherit;position:absolute;text-align:center;width:2em;width:var(--fa-li-width,2em)}.fa-border{border-color:#eee;border-color:var(--fa-border-color,#eee);border-radius:.1em;border-radius:var(--fa-border-radius,.1em);border-style:solid;border-style:var(--fa-border-style,solid);border-width:.08em;border-width:var(--fa-border-width,.08em);padding:.2em .25em .15em;padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:.3em;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:.3em;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-beat;animation-timing-function:ease-in-out;animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-bounce;animation-timing-function:cubic-bezier(.28,.84,.42,1);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-fade;animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-beat-fade;animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-flip;animation-timing-function:ease-in-out;animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-shake;animation-timing-function:linear;animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{animation-delay:0s;animation-delay:var(--fa-animation-delay,0s);animation-direction:normal;animation-direction:var(--fa-animation-direction,normal)}.fa-spin{animation-duration:2s;animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-spin;animation-timing-function:linear;animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-direction:normal;animation-direction:var(--fa-animation-direction,normal);animation-duration:1s;animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:infinite;animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-name:fa-spin;animation-timing-function:steps(8);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{animation-delay:-1ms;animation-duration:1ms;animation-iteration-count:1;transition-delay:0s;transition-duration:0s}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(1.25);transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1) translateY(0)}10%{transform:scale(1.1,.9) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(.9,1.1) translateY(-.5em);transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(1.05,.95) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1) translateY(-.125em);transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}@keyframes fa-fade{50%{opacity:.4;opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,to{opacity:.4;opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(1.125);transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotateY(-180deg);transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}24%,8%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}40%,to{transform:rotate(0deg)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}.fa-rotate-by{transform:rotate(none);transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:auto;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor)}.svg-inline--fa .fa-secondary,.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("c767e93e", content, true)

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Kumbh+Sans:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{box-sizing:border-box;font-family:\"Kumbh Sans\";font-size:16px;margin:0;padding:0}body,html{position:relative;scroll-behavior:smooth}a{color:#000;-webkit-text-decoration:none;text-decoration:none}button,input{border:none;outline:none}li{list-style-type:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("3c39f274", content, true)

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".heading-section-box{border-bottom:1px solid rgba(0,0,0,.184);height:40px;width:100%}.heading-section,.heading-section-box{align-items:center;display:flex;position:relative}.heading-section{color:#000;font-size:22px;font-weight:700;height:100%;text-transform:capitalize}.heading-section:hover{color:#0099e5}.heading-section:before{border-bottom:2px solid #0099e5;bottom:0;content:\" \";display:inline-block;height:100%;position:absolute;width:100%;z-index:9}.post-title{color:#000;cursor:pointer;font-weight:700}.post-title:hover{color:#0099e5}.gohead{align-items:center;background-color:#0099e5;bottom:0;display:flex;height:30px;justify-content:center;margin:10px;position:fixed;right:0;width:30px}.gohead i{color:#fff;font-size:11px}.layout-flex-horizontal{display:flex}.layout-flex-vertical{display:flex;flex-direction:column}.layout-grid-quad{display:grid;grid-template:repeat(2,1fr)/repeat(2,1fr)}.layout-grid-double{display:grid;grid-template-columns:1fr 1fr;width:100%}.layout-grid-triple{display:grid;grid-template-columns:repeat(3,1fr);margin-top:32px}.layout-flex-primary{display:flex;flex-direction:column;grid-column:1/3}.layout-primary{margin:0 auto;max-width:1180px}.layout-flex-secondary{display:flex;flex-direction:column}.gap20{gap:20px}.gap24{gap:24px}.gap32{gap:32px}.mt32{margin-top:32px}.wrap{flex-wrap:wrap}@media screen and (max-width:1180px){.layout-primary{padding:15px}}@media screen and (max-width:782px){.layout-grid-double,.layout-grid-triple{display:flex;flex-direction:column}}@media screen and (max-width:600px){.layout-grid-quad{display:flex;flex-direction:column}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4343eb8e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4343eb8e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4343eb8e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4343eb8e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4343eb8e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-4343eb8e]{box-shadow:0 0 15px rgba(0,0,0,.188);height:76px;width:100%}.navigation-secondary[data-v-4343eb8e]{background-color:#fff;display:none;height:200vh;justify-content:space-between;padding:30px;position:absolute;right:0;top:0;width:100%;z-index:99}.navigation-secondary .menu-secondary[data-v-4343eb8e]{display:flex;flex-direction:column;gap:20px 0}.navigation-secondary .menu-close[data-v-4343eb8e]{align-items:center;display:flex;height:36px;justify-content:center;width:36px}.navigation-secondary .menu-close .icon-xmark[data-v-4343eb8e]{color:#000;display:block;height:20px;width:20px}.navigation[data-v-4343eb8e]{align-items:center;display:flex;height:100%;margin:0 auto;max-width:1180px}.logo[data-v-4343eb8e]{display:inline-block;filter:brightness(100%,100%);height:76px;-o-object-fit:cover;object-fit:cover;width:220px}.menu[data-v-4343eb8e]{display:flex;gap:0 24px;margin-left:auto;margin-right:32px}.search[data-v-4343eb8e]{display:flex;height:36px;width:200px}.search-input[data-v-4343eb8e]{background-color:#f0f0f0;height:36px;padding:5px;width:calc(100% - 36px)}.search-button[data-v-4343eb8e]{align-items:center;background-color:#0099e5;display:flex;height:100%;justify-content:center;width:36px}.search-button .icon-glass[data-v-4343eb8e]{color:#fff;font-size:16px;height:16px;transform:scaleX(-1);width:16px}.menu-icon[data-v-4343eb8e]{align-items:center;border:1px solid #e9e9e9;display:none;height:36px;justify-content:center;width:36px}.icon-bars[data-v-4343eb8e]{color:#222;font-size:16px;height:18px;width:18px}.close-menu[data-v-4343eb8e],.open-menu[data-v-4343eb8e]{display:flex}@media screen and (max-width:1180px){.search[data-v-4343eb8e]{display:none}.header[data-v-4343eb8e]{padding:0 15px}.menu[data-v-4343eb8e]{margin-right:0}}@media screen and (max-width:960px){.navigation[data-v-4343eb8e]{display:flex;justify-content:space-between}.menu[data-v-4343eb8e]{display:none}.menu-icon[data-v-4343eb8e]{display:flex}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441854ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441854ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441854ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441854ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_441854ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rollup-box[data-v-441854ca]{align-items:center;background-color:#068dda;bottom:0;display:none;height:30px;justify-content:center;margin:15px;position:fixed;right:0;width:30px}.icon-rollup[data-v-441854ca]{color:#fff;height:10px;widows:10px}.footer[data-v-441854ca]{background-color:#000;color:#fff;margin-top:40px;position:relative;width:100%}.footer-box-list[data-v-441854ca]{grid-gap:0 32px;display:grid;gap:0 32px;grid-template-columns:repeat(4,1fr);padding:40px 0}.footer-box[data-v-441854ca]{color:#fff;display:flex;flex-direction:column}.footer-heading[data-v-441854ca]{font-size:18px;line-height:26px}.footer-list[data-v-441854ca]{display:flex;flex-direction:column;gap:12px;line-height:26px;margin-top:10px}.footer-list .subscribe[data-v-441854ca]{margin-top:5px}.footer-list .subscribe-link[data-v-441854ca]{background-color:#068dda;box-sizing:content-box;color:#fff;line-height:27px;margin-top:50px;padding:10px 20px}.footer-more[data-v-441854ca]{display:flex;gap:20px;justify-content:center;padding:30px 0}.footer-more-item[data-v-441854ca]{display:inline-block;font-size:15px}.footer-themeby[data-v-441854ca]{font-size:15px;text-align:center}.footer-connect[data-v-441854ca]{display:flex;gap:0 15px;justify-content:center;padding:20px 0 32px}.footer-connect .icon-wrapper[data-v-441854ca]{align-items:center;background-color:var(--clr);border-radius:50%;display:flex;height:26px;justify-content:center;width:26px}.footer-connect .icon[data-v-441854ca]{height:15px;width:15px}.wrapper[data-v-441854ca]{margin:0 auto;max-width:1180px}@media screen and (max-width:1180px){.footer[data-v-441854ca]{padding:0 40px}}@media screen and (max-width:780px){.footer[data-v-441854ca]{padding:0 15px}.footer-box-list[data-v-441854ca]{display:flex;flex-direction:column;gap:40px 0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_e6fb196a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_e6fb196a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_e6fb196a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_e6fb196a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_e6fb196a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-e6fb196a]{width:100%}.container[data-v-e6fb196a]{grid-gap:30px;display:grid;gap:30px;grid-template-columns:repeat(3,1fr);margin:20px auto 0}.container .main[data-v-e6fb196a]{grid-column:1/3}@media screen and (max-width:1180px){.main[data-v-e6fb196a]{padding:0 15px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77e97a90_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77e97a90_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77e97a90_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77e97a90_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_77e97a90_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".heading-section-box[data-v-77e97a90]{border-bottom:1px solid rgba(0,0,0,.184);height:40px;width:100%}.heading-section[data-v-77e97a90],.heading-section-box[data-v-77e97a90]{align-items:center;display:flex;position:relative}.heading-section[data-v-77e97a90]{color:#000;font-size:22px;font-weight:700;height:100%;text-transform:capitalize}.heading-section[data-v-77e97a90]:hover{color:#0099e5}.heading-section[data-v-77e97a90]:before{border-bottom:2px solid #0099e5;bottom:0;content:\" \";display:inline-block;height:100%;position:absolute;width:100%;z-index:9}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_546aa5cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_546aa5cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_546aa5cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_546aa5cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_546aa5cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post-recent[data-v-546aa5cc]{display:flex;gap:15px}.post-recent-image[data-v-546aa5cc]{height:80px;-o-object-fit:cover;object-fit:cover;width:80px}.post-recent-title[data-v-546aa5cc]{display:inline-block}.post-recent-title[data-v-546aa5cc]:hover{color:#0099e5}.post-recent-date[data-v-546aa5cc]{color:#888;margin-top:6px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4cd11cf0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4cd11cf0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4cd11cf0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4cd11cf0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4cd11cf0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".category[data-v-4cd11cf0]{align-items:flex-start;border-bottom:1px solid #e9e9e9;display:flex;height:40px;justify-content:space-between;width:100%}.category-name[data-v-4cd11cf0]{cursor:pointer}.category-number[data-v-4cd11cf0]{align-items:center;background-color:#e9e9e9;color:#666;display:flex;font-size:11px;height:24px;justify-content:center;width:24px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5727fb8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5727fb8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5727fb8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5727fb8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5727fb8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tag[data-v-5727fb8a]{background-color:#f0f0f0;color:#555;cursor:pointer;display:inline-block;font-size:13px;padding:4px 8px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_750c37ed_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_750c37ed_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_750c37ed_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_750c37ed_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_750c37ed_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".icons[data-v-750c37ed]{display:flex;flex-wrap:wrap;gap:9px;justify-content:space-between;margin-top:20px;width:100%}.icon-box[data-v-750c37ed]{align-items:center;display:flex;gap:10px;height:33px}.icon-box[data-v-750c37ed]:hover{transform:scale(1.1);transition:all .1s linear}.icon[data-v-750c37ed]{align-items:center;color:var(--icon-clr);display:flex;height:25px;justify-content:center;width:25px}.followus-name[data-v-750c37ed]{cursor:pointer}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a550b19_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a550b19_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a550b19_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a550b19_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a550b19_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".followus-container[data-v-2a550b19]{display:flex;flex-wrap:wrap;gap:9px;justify-content:space-between;width:100%}.recents[data-v-2a550b19]{margin-top:31px;width:100%}.recents-container[data-v-2a550b19]{display:flex;flex-direction:column;gap:24px;margin-top:24px}.categories[data-v-2a550b19]{margin-top:30px}.categories-container[data-v-2a550b19]{display:flex;flex-direction:column;gap:12px 0;margin-top:24px}.tags[data-v-2a550b19]{margin-top:30px}.tags-container[data-v-2a550b19]{display:flex;flex-wrap:wrap;gap:5px;margin-top:24px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fe7f19a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fe7f19a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fe7f19a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fe7f19a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9fe7f19a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-9fe7f19a]{grid-gap:30px;display:grid;gap:30px;grid-template-columns:repeat(3,1fr);margin:20px auto 0;max-width:1180px}.container .main[data-v-9fe7f19a]{grid-column:1/3}@media screen and (max-width:1180px){.container[data-v-9fe7f19a]{padding:0 15px}}@media screen and (max-width:782px){.container[data-v-9fe7f19a]{display:flex;flex-direction:column;gap:60px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header{border-bottom:1px solid #e9e9e9;box-shadow:0 0 10px #c5c5c5;height:76px}.is-layout-flex{align-items:center;display:flex;flex-wrap:nowrap;gap:2rem}#logo{height:100%;line-height:1}#logo img{display:inline-block;height:100%;-o-object-fit:cover;object-fit:cover;width:120px}.header-container{height:100%;margin:0 auto;max-width:1200px;padding:0}.header{padding:15px 0}.header-group{justify-content:space-between}.header-group,.header-left{align-items:center;height:100%}.header-left{display:flex}.header-right{flex-wrap:nowrap;justify-content:flex-end}.menu ul{display:flex;flex-grow:1;gap:1.5em}.menu ul li{align-items:center;display:flex;position:relative}.menu ul li a{padding-bottom:10px;padding-top:10px}.menu ul li a span{word-wrap:break-word;color:#333;word-break:normal}.form-search{height:36px;width:200px}.form-search .input-search{background-color:#f0f0f0;border-style:none;display:flex;flex-wrap:nowrap;height:100%;max-width:100%;padding:0}.form-search .input-search input[type=search]{background-color:#f0f0f0;border:1px solid #e9e9e9;color:#333;font-size:14px;height:100%;line-height:1.75;padding:5px 0 5px 10px;width:calc(100% - 36px)}.form-search .input-search input[type=search]:focus{border:1px solid #0099e5;box-shadow:none;outline:none}.form-search .input-search .wp-block-search__button{background-color:#0099e5;border:0 solid #ccc;border-radius:0;cursor:pointer;height:100%;line-height:0;margin-left:0;padding:5px 7px;-webkit-text-decoration:none;text-decoration:none;width:36px}.form-search .input-search .wp-block-search__button svg{fill:currentColor;min-height:1.5em;min-width:1.5em;vertical-align:text-bottom}@media screen and (max-width:1080px){.form-search{display:none}}@media only screen and (min-width:1080px)and (max-width:1200px){.header-container{margin:0 auto;max-width:1060px}}@media only screen and (min-width:960px)and (max-width:1080px){.header-container{margin:0 auto;max-width:940px}}@media only screen and (max-width:959px){.hidden-sp{display:none}.header{position:relative}}@media only screen and (max-width:768px){.header-container{padding:15px 5px}.site-title{margin:0}.header-toggles,.nav-toggle{position:static}.header-right{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 85 */
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
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media only screen and (max-width:959px){.widget-area.sidebar{display:flex;flex-flow:column-reverse}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 89 */
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
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-cover{height:100%;overflow:hidden;position:relative;width:100%;z-index:1}.image-cover img{display:block;height:100%!important;-o-object-fit:cover;object-fit:cover;width:100%}@media screen and (min-width:768px){.featured-large.hentry{height:440px;overflow:hidden}.featured-large.hentry img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.featured-small.hentry{height:218px!important;overflow:hidden}.featured-small.hentry img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 93 */
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
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading_wrapper[data-v-3fbbd417]{align-items:center;background-color:hsla(0,0%,100%,.55);display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;margin:auto;position:fixed;right:0;top:0;width:100%;z-index:999}.loading_overlay[data-v-3fbbd417]{background:rgba(51,51,51,.5)}.loading_content[data-v-3fbbd417]{animation-duration:1s;animation-iteration-count:infinite;animation-name:spin-3fbbd417;animation-timing-function:linear;border:2px solid #0099e5;border-bottom:#0099e5;border-radius:50%;height:60px;width:60px}@keyframes spin-3fbbd417{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 97 */
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
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 99 */
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
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 101 */
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
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const state = () => ({
  menu: false
});
const mutations = {
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* TOOGLE_MENU */ "t"]](state, val) {
    state.menu = val;
  }
};

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const state = () => ({
  ads: []
});
const getters = {};
const actions = {
  async initLoadAds({
    commit,
    state
  }) {
    const params = {
      api_key: "0906429283",
      website_id: 22
    };
    const response = await this.$axios.$get(`manager/advertises/json/1.json`, {
      params
    });
    if (response.status_code === 1) {
      commit(_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SET_ADS */ "q"], response.data);
    }
  }
};
const mutations = {
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SET_ADS */ "q"]](state, data) {
    state.ads = data;
  }
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const state = () => ({
  menus: [],
  settings: null,
  isLoading: false
});
const getters = {
  permalinkId: state => {
    var _state$settings, _state$settings$setti, _state$settings$setti2;
    return ((_state$settings = state.settings) === null || _state$settings === void 0 ? void 0 : (_state$settings$setti = _state$settings.setting) === null || _state$settings$setti === void 0 ? void 0 : (_state$settings$setti2 = _state$settings$setti.permalink) === null || _state$settings$setti2 === void 0 ? void 0 : _state$settings$setti2.name) === 'ID';
  },
  measurement_id: state => {
    var _state$settings2, _state$settings2$anal;
    return (_state$settings2 = state.settings) === null || _state$settings2 === void 0 ? void 0 : (_state$settings2$anal = _state$settings2.analytic) === null || _state$settings2$anal === void 0 ? void 0 : _state$settings2$anal.measurement_id;
  }
};
const actions = {
  async initMenuApp({
    commit,
    state
  }, payloadContext) {
    const params = {
      api_key: "0906429283",
      website_id: 22
    };
    const response = await this.$axios.$get(`menus/links/json/1.json`, {
      params
    });
    if (response.status_code === 1) {
      commit(_consts__WEBPACK_IMPORTED_MODULE_0__[/* SET_DATA */ "o"], response.data);
    }
  },
  async initSettingApp({
    commit,
    state
  }, payloadContext) {
    const params = {
      api_key: "0906429283",
      website_id: 22,
      get_meta: 1
    };
    const response = await this.$axios.$get(`manager/websites/json/1.json`, {
      params
    });
    if (response.status_code === 1) {
      commit(_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SETTINGS_APP */ "p"], response.data);
    }
  }
};
const mutations = {
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* SET_DATA */ "o"]](state, data) {
    state.menus = data.map(e => {
      return {
        ...e,
        hasSubMenu: false
      };
    });
  },
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_UPDATE_MENUS */ "s"]](state, menu) {
    state.menus[menu.index].hasSubMenu = menu.value;
  },
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SETTINGS_APP */ "p"]](state, settings) {
    state.settings = settings[0];
  },
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SET_LOADING */ "r"]](state, val) {
    state.isLoading = val;
  }
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/en");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/ja");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("vue-script2");

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(6);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(41);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "BASE_URL": "http://localhost:3000",
        "API_END_POINT": "https://genplusmedia.online/",
        "API_KEY": "0906429283",
        "WEBSITE_ID": 22,
        "SITE_DOMAIN": "http://localhost:3000"
      }
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(42);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _382aa540 = () => interopDefault(__webpack_require__.e(/* import() | pages/search/index */ 7).then(__webpack_require__.bind(null, 184)));
const _0dea74f0 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 5).then(__webpack_require__.bind(null, 182)));
const _d3f8b2e6 = () => interopDefault(__webpack_require__.e(/* import() | pages/author/_slug/index */ 3).then(__webpack_require__.bind(null, 185)));
const _2e47aac0 = () => interopDefault(__webpack_require__.e(/* import() | pages/category/_slug/index */ 4).then(__webpack_require__.bind(null, 186)));
const _5c870f11 = () => interopDefault(__webpack_require__.e(/* import() | pages/page/_slug/index */ 6).then(__webpack_require__.bind(null, 187)));
const _03e467d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/tag/_slug/index */ 8).then(__webpack_require__.bind(null, 188)));
const _30d3bc92 = () => interopDefault(__webpack_require__.e(/* import() | pages/_id/index */ 1).then(__webpack_require__.bind(null, 183)));
const _f1ce2f7c = () => interopDefault(__webpack_require__.e(/* import() | pages/_slug/index */ 2).then(__webpack_require__.bind(null, 189)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/search",
    component: _382aa540,
    name: "search"
  }, {
    path: "/",
    component: _0dea74f0,
    name: "index"
  }, {
    path: "/author/:slug",
    component: _d3f8b2e6,
    name: "author-slug"
  }, {
    path: "/category/:slug",
    component: _2e47aac0,
    name: "category-slug"
  }, {
    path: "/page/:slug",
    component: _5c870f11,
    name: "page-slug"
  }, {
    path: "/tag/:slug",
    component: _03e467d8,
    name: "tag-slug"
  }, {
    path: "/:id",
    component: _30d3bc92,
    name: "id"
  }, {
    path: "/:slug",
    component: _f1ce2f7c,
    name: "slug"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=template&id=07de5417&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "error"
  }, [_vm._ssrNode("<h1 class=\"error-title\" data-v-07de5417>404 Error – Page Not Found</h1> <p class=\"error-desc\" data-v-07de5417>Sorry, the page you are looking for is not available. Maybe you want to perform a\n        search?\n    </p> <div class=\"search\" data-v-07de5417><input type=\"text\" class=\"search-input\" data-v-07de5417> <button class=\"search-button\" data-v-07de5417>Search</button></div> <h6 class=\"sugguest-title\" data-v-07de5417>For best search results, mind the following suggestions:</h6> <div data-v-07de5417><ul class=\"sugguest-list\" data-v-07de5417><li data-v-07de5417>Always double check your spelling.</li> <li data-v-07de5417>Try similar keywords, for example: tablet instead of laptop.</li> <li data-v-07de5417>Always double check your spelling.</li></ul></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=template&id=07de5417&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=script&lang=js&
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  layout: "MainLayout/index"
});
// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "07de5417",
  "2bfa6dbe"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "109b44f1"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(54);

// EXTERNAL MODULE: ./src/assets/css/reset.css
var css_reset = __webpack_require__(56);

// EXTERNAL MODULE: ./src/assets/sass/global.scss
var sass_global = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=e6fb196a&scoped=true&
var defaultvue_type_template_id_e6fb196a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('TheHeader'), _vm._ssrNode(" "), _c('nuxt'), _vm._ssrNode(" "), _c('TheFooter')], 2);
};
var defaultvue_type_template_id_e6fb196a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=e6fb196a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TheHeader/index.vue?vue&type=template&id=4343eb8e&scoped=true&
var TheHeadervue_type_template_id_4343eb8e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "header"
  }, [_vm._ssrNode("<nav class=\"navigation\" data-v-4343eb8e>", "</nav>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.settings.setting.logo,
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"menu\" data-v-4343eb8e>", "</ul>", _vm._l(_vm.primaryMenus, function (menu, index) {
    return _vm._ssrNode("<li class=\"menu-item\" data-v-4343eb8e>", "</li>", [_c('NuxtLink', {
      staticClass: "menu-link",
      attrs: {
        "to": menu.url
      }
    }, [_vm._v(_vm._s(menu.name))])], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"search\" data-v-4343eb8e>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("value", _vm.searchInput) + " class=\"search-input\" data-v-4343eb8e> "), _vm._ssrNode("<button class=\"search-button\" data-v-4343eb8e>", "</button>", [_c('nuxt-link', {
    attrs: {
      "to": `/search?keywords=${_vm.searchInput}`
    }
  }, [_c('font-awesome-icon', {
    staticClass: "icon-glass",
    attrs: {
      "icon": "fa-solid fa-magnifying-glass"
    }
  })], 1)], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"menu-icon\" data-v-4343eb8e>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon-bars",
    attrs: {
      "icon": "fa-solid fa-bars"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<nav class=\"navigation-secondary\"" + _vm._ssrStyle(null, {
    display: _vm.isOpenMenu ? 'flex' : 'none'
  }, null) + " data-v-4343eb8e>", "</nav>", [_vm._ssrNode("<ul class=\"menu-secondary\" data-v-4343eb8e>", "</ul>", _vm._l(_vm.primaryMenus, function (menu, index) {
    return _vm._ssrNode("<li class=\"menu-item\" data-v-4343eb8e>", "</li>", [_c('NuxtLink', {
      staticClass: "menu-link",
      attrs: {
        "to": menu.url
      }
    }, [_vm._v(_vm._s(menu.name))])], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"menu-close\" data-v-4343eb8e>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon-xmark",
    attrs: {
      "icon": "fa-solid fa-xmark"
    }
  })], 1)], 2)], 2);
};
var TheHeadervue_type_template_id_4343eb8e_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/TheHeader/index.vue?vue&type=template&id=4343eb8e&scoped=true&

// EXTERNAL MODULE: ./src/consts.js
var consts = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TheHeader/index.vue?vue&type=script&lang=js&


/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {},
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      searchModel: null,
      isOpenMenu: false,
      searchInput: ''
    };
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * primaryMenus
       * @returns {Array}
       */
      primaryMenus() {
        return this.$store.state.common.storeLoadInit.menus.filter(e => e.type.name === 'Main Menu');
      },
      /**
       * menu
       * @returns {Boolean}
       */
      menu() {
        return this.$store.state.storeMenuSP.menu;
      },
      settings() {
        return this.$store.state.common.storeLoadInit.settings;
      }
    })
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Search
     */
    search() {
      this.$router.push({
        name: 'search',
        query: {
          keywords: this.searchModel
        }
      });
    },
    /**
     * openMenu SP
     */
    openMenu() {
      this.$store.commit(`storeMenuSP/${consts["t" /* TOOGLE_MENU */]}`, true);
    },
    // function click menu
    handleClickMenu() {
      this.isOpenMenu = true;
    },
    // function close menu
    handleClickCloseMenu() {
      this.isOpenMenu = false;
    }
  },
  mounted() {
    const openMenu = document.querySelector(".menu-icon");
    const closeMenu = document.querySelector(".menu-close");
    openMenu.addEventListener("click", () => this.handleClickMenu());
    closeMenu.addEventListener("click", () => this.handleClickCloseMenu());
  }
});
// CONCATENATED MODULE: ./src/components/TheHeader/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TheHeader/index.vue



function TheHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TheHeader_component = Object(componentNormalizer["a" /* default */])(
  components_TheHeadervue_type_script_lang_js_,
  TheHeadervue_type_template_id_4343eb8e_scoped_true_render,
  TheHeadervue_type_template_id_4343eb8e_scoped_true_staticRenderFns,
  false,
  TheHeader_injectStyles,
  "4343eb8e",
  "0c65c2f2"
  
)

/* harmony default export */ var TheHeader = (TheHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TheFooter/index.vue?vue&type=template&id=441854ca&scoped=true&
var TheFootervue_type_template_id_441854ca_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "footer"
  }, [_vm._ssrNode("<div class=\"wrapper\" data-v-441854ca>", "</div>", [_vm._ssrNode("<div class=\"footer-box-list\" data-v-441854ca><div class=\"footer-box\" data-v-441854ca><h1 class=\"footer-heading\" data-v-441854ca>Introduction</h1> <ul class=\"footer-list\" data-v-441854ca><li class=\"footer-item\" data-v-441854ca>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing\n                        elit. Mauris enim velit, laoreet non feugiat et,\n                        gravida a nibh. Sed at ex.\n                    </li></ul></div> <div class=\"footer-box\" data-v-441854ca><h1 class=\"footer-heading\" data-v-441854ca>Company</h1> <ul class=\"footer-list\" data-v-441854ca><li class=\"footer-item\" data-v-441854ca>About Us</li> <li class=\"footer-item\" data-v-441854ca>Meet Our Team</li> <li class=\"footer-item\" data-v-441854ca>News</li> <li class=\"footer-item\" data-v-441854ca>Contact Us</li></ul></div> <div class=\"footer-box\" data-v-441854ca><h1 class=\"footer-heading\" data-v-441854ca>Products</h1> <ul class=\"footer-list\" data-v-441854ca><li class=\"footer-item\" data-v-441854ca>Services</li> <li class=\"footer-item\" data-v-441854ca>Products List</li> <li class=\"footer-item\" data-v-441854ca>Plans &amp; Pricing</li> <li class=\"footer-item\" data-v-441854ca>Partners</li></ul></div> <div class=\"footer-box\" data-v-441854ca><h1 class=\"footer-heading\" data-v-441854ca>Newsletter</h1> <ul class=\"footer-list\" data-v-441854ca><li class=\"footer-item\" data-v-441854ca>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing\n                        elit.\n                    </li> <li class=\"footer-item subscribe\" data-v-441854ca><a href=\"#\" class=\"subscribe-link\" data-v-441854ca>Subscribe now!</a></li></ul></div></div> <div class=\"footer-more\" data-v-441854ca><p class=\"footer-more-item\" data-v-441854ca>Single Page</p> <p class=\"footer-more-item\" data-v-441854ca>Full Width</p> <p class=\"footer-more-item\" data-v-441854ca>404 Page</p> <p class=\"footer-more-item\" data-v-441854ca>Search Results</p></div> <p class=\"footer-themeby\" data-v-441854ca>WordPress Theme by WPEnjoy</p> "), _vm._ssrNode("<div class=\"footer-connect\" data-v-441854ca>", "</div>", [_vm._ssrNode("<div class=\"icon-wrapper\" style=\"--clr: #1da1f2\" data-v-441854ca>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": "fa-brands fa-facebook"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-wrapper\" style=\"--clr: #1778f2\" data-v-441854ca>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": "fa-brands fa-twitter"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-wrapper\" style=\"--clr: #f53f97\" data-v-441854ca>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": "fa-brands fa-instagram"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-wrapper\" style=\"--clr: #fa0000\" data-v-441854ca>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": "fa-brands fa-youtube"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-wrapper\" style=\"--clr: #e64b87\" data-v-441854ca>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": "fa-brands fa-dribbble"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-wrapper\" style=\"--clr: #0d66c2\" data-v-441854ca>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon",
    attrs: {
      "icon": "fa-brands fa-linkedin"
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"rollup-box\"" + _vm._ssrStyle(null, {
    'display': _vm.styles.display
  }, null) + " data-v-441854ca>", "</div>", [_c('font-awesome-icon', {
    staticClass: "icon-rollup",
    attrs: {
      "icon": "fa-solid fa-arrow-up"
    }
  })], 1)], 2);
};
var TheFootervue_type_template_id_441854ca_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/TheFooter/index.vue?vue&type=template&id=441854ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TheFooter/index.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({
  data() {
    return {
      styles: {
        display: "none"
      }
    };
  },
  methods: {},
  mounted() {
    // visible rollup box when rolldown
    window.addEventListener("scroll", e => {
      e.currentTarget.scrollY >= 200 ? this.styles.display = "flex" : this.styles.display = "none";
    });

    // handle click rollup box
    const rollUp = document.querySelector(".rollup-box");
    rollUp.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });
  }
});
// CONCATENATED MODULE: ./src/components/TheFooter/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TheFooter/index.vue



function TheFooter_injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TheFooter_component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  TheFootervue_type_template_id_441854ca_scoped_true_render,
  TheFootervue_type_template_id_441854ca_scoped_true_staticRenderFns,
  false,
  TheFooter_injectStyles,
  "441854ca",
  "0e259c80"
  
)

/* harmony default export */ var TheFooter = (TheFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=script&lang=js&


/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter
  }
});
// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_e6fb196a_scoped_true_render,
  defaultvue_type_template_id_e6fb196a_scoped_true_staticRenderFns,
  false,
  default_injectStyles,
  "e6fb196a",
  "42da26cc"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MainLayout/index.vue?vue&type=template&id=9fe7f19a&scoped=true&
var MainLayoutvue_type_template_id_9fe7f19a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('TheHeader'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-grid-triple gap32 layout-primary mt32\" data-v-9fe7f19a>", "</div>", [_vm._ssrNode("<main class=\"layout-flex-primary\" data-v-9fe7f19a>", "</main>", [_c('nuxt')], 1), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"aside\" data-v-9fe7f19a>", "</aside>", [_c('TheSidebar')], 1)], 2), _vm._ssrNode(" "), _c('TheFooter')], 2);
};
var MainLayoutvue_type_template_id_9fe7f19a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/layouts/MainLayout/index.vue?vue&type=template&id=9fe7f19a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TheSidebar/index.vue?vue&type=template&id=2a550b19&scoped=true&
var TheSidebarvue_type_template_id_2a550b19_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"followus\" data-v-2a550b19>", "</section>", [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Follow us"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"followus-container\" data-v-2a550b19>", "</div>", [_c('IconsConnect')], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"recents\" data-v-2a550b19>", "</section>", [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Most commented posts"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"recents-container\" data-v-2a550b19>", "</div>", _vm._l(_vm.randomPosts, function (post, index) {
    return _c('PostRecent', {
      key: index,
      attrs: {
        "post": post
      }
    });
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"tags\" data-v-2a550b19>", "</section>", [_c('HeadingSection', {
    attrs: {
      "nameHeading": "Tags"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tags-container\" data-v-2a550b19>", "</div>", _vm._l(_vm.tags, function (tag, index) {
    return _c('Tag', {
      key: index,
      attrs: {
        "tag": tag
      }
    });
  }), 1)], 2)], 2);
};
var TheSidebarvue_type_template_id_2a550b19_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/TheSidebar/index.vue?vue&type=template&id=2a550b19&scoped=true&

// EXTERNAL MODULE: ./src/components/HeadingSection/index.vue + 4 modules
var HeadingSection = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostRecent/index.vue?vue&type=template&id=546aa5cc&scoped=true&
var PostRecentvue_type_template_id_546aa5cc_scoped_true_render = function render() {
  var _vm$post, _vm$post2, _vm$post3, _vm$post4, _vm$post5, _vm$post5$creater;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "post-recent"
  }, [_c('nuxt-link', {
    staticClass: "post-recent",
    attrs: {
      "to": `/${(_vm$post = _vm.post) === null || _vm$post === void 0 ? void 0 : _vm$post.id}`
    }
  }, [_c('img', {
    staticClass: "post-recent-image",
    attrs: {
      "src": (_vm$post2 = _vm.post) === null || _vm$post2 === void 0 ? void 0 : _vm$post2.image,
      "alt": ""
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-recent-content\" data-v-546aa5cc>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `/${(_vm$post3 = _vm.post) === null || _vm$post3 === void 0 ? void 0 : _vm$post3.id}`
    }
  }, [_c('p', {
    staticClass: "post-recent-title"
  }, [_vm._v("\n        " + _vm._s((_vm$post4 = _vm.post) === null || _vm$post4 === void 0 ? void 0 : _vm$post4.name) + "\n      ")])]), _vm._ssrNode(" <p class=\"post-recent-date\" data-v-546aa5cc>" + _vm._ssrEscape(_vm._s((_vm$post5 = _vm.post) === null || _vm$post5 === void 0 ? void 0 : (_vm$post5$creater = _vm$post5.creater) === null || _vm$post5$creater === void 0 ? void 0 : _vm$post5$creater.created)) + "</p>")], 2)], 2);
};
var PostRecentvue_type_template_id_546aa5cc_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostRecent/index.vue?vue&type=template&id=546aa5cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostRecent/index.vue?vue&type=script&lang=js&
/* harmony default export */ var PostRecentvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostRecent/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostRecentvue_type_script_lang_js_ = (PostRecentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/PostRecent/index.vue



function PostRecent_injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PostRecent_component = Object(componentNormalizer["a" /* default */])(
  components_PostRecentvue_type_script_lang_js_,
  PostRecentvue_type_template_id_546aa5cc_scoped_true_render,
  PostRecentvue_type_template_id_546aa5cc_scoped_true_staticRenderFns,
  false,
  PostRecent_injectStyles,
  "546aa5cc",
  "2d61a723"
  
)

/* harmony default export */ var PostRecent = (PostRecent_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Category/index.vue?vue&type=template&id=4cd11cf0&scoped=true&
var Categoryvue_type_template_id_4cd11cf0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "category"
  }, [_c('nuxt-link', {
    attrs: {
      "to": _vm.param
    }
  }, [_c('p', {
    staticClass: "category-name"
  }, [_vm._v(_vm._s(_vm.category))])]), _vm._ssrNode(" <p class=\"category-number\" data-v-4cd11cf0>" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</p>")], 2);
};
var Categoryvue_type_template_id_4cd11cf0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Category/index.vue?vue&type=template&id=4cd11cf0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Category/index.vue?vue&type=script&setup=true&lang=js&
/* harmony default export */ var Categoryvue_type_script_setup_true_lang_js_ = ({
  __name: 'index',
  props: {
    category: "string",
    quantity: "number",
    param: "string"
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
// CONCATENATED MODULE: ./src/components/Category/index.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var components_Categoryvue_type_script_setup_true_lang_js_ = (Categoryvue_type_script_setup_true_lang_js_); 
// CONCATENATED MODULE: ./src/components/Category/index.vue



function Category_injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Category_component = Object(componentNormalizer["a" /* default */])(
  components_Categoryvue_type_script_setup_true_lang_js_,
  Categoryvue_type_template_id_4cd11cf0_scoped_true_render,
  Categoryvue_type_template_id_4cd11cf0_scoped_true_staticRenderFns,
  false,
  Category_injectStyles,
  "4cd11cf0",
  "2500d074"
  
)

/* harmony default export */ var Category = (Category_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tag/index.vue?vue&type=template&id=5727fb8a&scoped=true&
var Tagvue_type_template_id_5727fb8a_scoped_true_render = function render() {
  var _vm$tag, _vm$tag2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('nuxt-link', {
    attrs: {
      "to": `/tag/${(_vm$tag = _vm.tag) === null || _vm$tag === void 0 ? void 0 : _vm$tag.slug}`
    }
  }, [_c('p', {
    staticClass: "tag"
  }, [_vm._v(_vm._s((_vm$tag2 = _vm.tag) === null || _vm$tag2 === void 0 ? void 0 : _vm$tag2.name))])]);
};
var Tagvue_type_template_id_5727fb8a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Tag/index.vue?vue&type=template&id=5727fb8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tag/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  props: {
    tag: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/Tag/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tag/index.vue



function Tag_injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Tag_component = Object(componentNormalizer["a" /* default */])(
  components_Tagvue_type_script_lang_js_,
  Tagvue_type_template_id_5727fb8a_scoped_true_render,
  Tagvue_type_template_id_5727fb8a_scoped_true_staticRenderFns,
  false,
  Tag_injectStyles,
  "5727fb8a",
  "39ea64a4"
  
)

/* harmony default export */ var Tag = (Tag_component.exports);
// EXTERNAL MODULE: ./src/components/IconsConnect/index.vue + 4 modules
var IconsConnect = __webpack_require__(40);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TheSidebar/index.vue?vue&type=script&lang=js&





/* harmony default export */ var TheSidebarvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    HeadingSection: HeadingSection["a" /* default */],
    PostRecent: PostRecent,
    Category: Category,
    Tag: Tag,
    IconsConnect: IconsConnect["a" /* default */]
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      tags: [],
      randomPosts: []
    };
  },
  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.getTags();
    await this.getPostRamdom();
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    async getTags() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        status: 1,
        limit: 10
      };
      const response = await this.$axios.get(`manager/tags/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.tags = response.data.data;
      }
    },
    async getPostRamdom() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 10,
        random: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.randomPosts = response.data.data;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/TheSidebar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheSidebarvue_type_script_lang_js_ = (TheSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TheSidebar/index.vue



function TheSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TheSidebar_component = Object(componentNormalizer["a" /* default */])(
  components_TheSidebarvue_type_script_lang_js_,
  TheSidebarvue_type_template_id_2a550b19_scoped_true_render,
  TheSidebarvue_type_template_id_2a550b19_scoped_true_staticRenderFns,
  false,
  TheSidebar_injectStyles,
  "2a550b19",
  "5b0391b3"
  
)

/* harmony default export */ var TheSidebar = (TheSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MainLayout/index.vue?vue&type=script&lang=js&



/* harmony default export */ var MainLayoutvue_type_script_lang_js_ = ({
  layout: "default",
  components: {
    TheSidebar: TheSidebar,
    TheFooter: TheFooter,
    TheHeader: TheHeader
  }
});
// CONCATENATED MODULE: ./src/layouts/MainLayout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MainLayoutvue_type_script_lang_js_ = (MainLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layouts/MainLayout/index.vue



function MainLayout_injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MainLayout_component = Object(componentNormalizer["a" /* default */])(
  layouts_MainLayoutvue_type_script_lang_js_,
  MainLayoutvue_type_template_id_9fe7f19a_scoped_true_render,
  MainLayoutvue_type_template_id_9fe7f19a_scoped_true_staticRenderFns,
  false,
  MainLayout_injectStyles,
  "9fe7f19a",
  "06b81110"
  
)

/* harmony default export */ var MainLayout = (MainLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/TopLayout/TopLayout.vue?vue&type=template&id=7f65190b&
var TopLayoutvue_type_template_id_7f65190b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "site",
    attrs: {
      "id": "page"
    }
  }, [_c('TheHeader'), _vm._ssrNode(" "), _vm.adsHeader ? [_vm.adsHeader.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-header`,
      "contentAds": _vm.adsHeader
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsHeader.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-header`,
      "contentAds": _vm.adsHeader
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div id=\"content\" class=\"site-content container clear\">", "</div>", [_vm._ssrNode("<div id=\"primary\" class=\"content-area clear\">", "</div>", [_c('nuxt')], 1), _vm._ssrNode(" "), _c('Sidebar')], 2)]), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" " + (_vm.backtoTop ? "<div id=\"back-top\"><a title=\"Back to top\"><span class=\"genericon genericon-collapse\"></span></a></div>" : "<!---->") + " "), _c('LoadingScreen'), _vm._ssrNode(" "), _vm.adsHead ? [_vm.adsHead.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-head`,
      "contentAds": _vm.adsHead,
      "position": `head`
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsHead.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-head`,
      "contentAds": _vm.adsHead,
      "position": `head`
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm.adsFooter ? [_vm.adsFooter.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-footer`,
      "contentAds": _vm.adsFooter,
      "position": `footer`
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsFooter.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-footer`,
      "contentAds": _vm.adsFooter,
      "position": `footer`
    }
  }) : _vm._e()] : _vm._e()], 2);
};
var TopLayoutvue_type_template_id_7f65190b_staticRenderFns = [];

// CONCATENATED MODULE: ./src/layouts/TopLayout/TopLayout.vue?vue&type=template&id=7f65190b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header/Header.vue?vue&type=template&id=7e13b2db&
var Headervue_type_template_id_7e13b2db_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_vm._ssrNode("<div class=\"header-container\">", "</div>", [_vm._ssrNode("<div class=\"header-group is-layout-flex\">", "</div>", [_vm._ssrNode("<div class=\"header-left\">", "</div>", [_vm.settings.setting.logo ? [_vm._ssrNode("<div id=\"logo\">", "</div>", [_c('router-link', {
    attrs: {
      "to": `/`
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.settings.setting.logo,
      "alt": _vm.settings.name
    }
  })])], 1)] : [_vm._ssrNode("<div class=\"site-title\">", "</div>", [_vm._ssrNode("<h1>", "</h1>", [_c('nuxt-link', {
    staticClass: "logo-name",
    attrs: {
      "to": `/`
    }
  }, [_vm._v(_vm._s(_vm.settings.name))])], 1)]), _vm._ssrNode(" <div class=\"site-description\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.settings.meta.description) + "\n          ") + "</div>")]], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-right\">", "</div>", [_vm._ssrNode("<div class=\"is-layout-flex hidden-sp\">", "</div>", [_vm._ssrNode("<nav class=\"menu\">", "</nav>", [_vm._ssrNode("<ul class=\"is-layout-flex\">", "</ul>", _vm._l(_vm.primaryMenus, function (menu, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('router-link', {
      class: menu.childrens.length ? 'sf-with-ul' : '',
      attrs: {
        "to": menu.url
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(menu.name)
      }
    })]), _vm._ssrNode(" "), menu.childrens.length ? [_vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", _vm._l(menu.childrens, function (child, v) {
      return _vm._ssrNode("<li>", "</li>", [_c('router-link', {
        attrs: {
          "to": child.url
        }
      }, [_c('span', {
        domProps: {
          "innerHTML": _vm._s(child.name)
        }
      })])], 1);
    }), 0)] : _vm._e()], 2);
  }), 0)]), _vm._ssrNode(" <div class=\"form-search\"><div class=\"input-search\"><input type=\"search\" id=\"wp-block-search__input-4\" name=\"s\" placeholder required=\"required\"" + _vm._ssrAttr("value", _vm.searchModel) + " class=\"wp-block-search__input\"> <button type=\"submit\" aria-label=\"Search\" class=\"wp-block-search__button has-icon wp-element-button\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\"></path></svg></button></div></div>")], 2)]), _vm._ssrNode(" <div class=\"header-toggles has-search\"><button" + _vm._ssrClass("toggle nav-toggle mobile-nav-toggle", {
    active: _vm.menu
  }) + "><span class=\"toggle-inner\"><span class=\"toggle-icon\"><svg aria-hidden=\"true\" role=\"img\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"7\" viewBox=\"0 0 26 7\" class=\"svg-icon\"><path fill-rule=\"evenodd\" d=\"M332.5,45 C330.567003,45 329,43.4329966 329,41.5 C329,39.5670034 330.567003,38 332.5,38 C334.432997,38 336,39.5670034 336,41.5 C336,43.4329966 334.432997,45 332.5,45 Z M342,45 C340.067003,45 338.5,43.4329966 338.5,41.5 C338.5,39.5670034 340.067003,38 342,38 C343.932997,38 345.5,39.5670034 345.5,41.5 C345.5,43.4329966 343.932997,45 342,45 Z M351.5,45 C349.567003,45 348,43.4329966 348,41.5 C348,39.5670034 349.567003,38 351.5,38 C353.432997,38 355,39.5670034 355,41.5 C355,43.4329966 353.432997,45 351.5,45 Z\" transform=\"translate(-329 -38)\"></path></svg></span> <span class=\"toggle-text\">Menu</span></span></button></div>")], 2)])]);
};
var Headervue_type_template_id_7e13b2db_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Header/Header.vue?vue&type=template&id=7e13b2db&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Header/Header.js?vue&type=script&lang=js&


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {},
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      searchModel: null
    };
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * primaryMenus
       * @returns {Array}
       */
      primaryMenus() {
        return this.$store.state.common.storeLoadInit.menus.filter(e => e.type.name === 'Main Menu');
      },
      /**
       * menu
       * @returns {Boolean}
       */
      menu() {
        return this.$store.state.storeMenuSP.menu;
      },
      settings() {
        return this.$store.state.common.storeLoadInit.settings;
      }
    })
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Search
     */
    search() {
      this.$router.push({
        name: 'search',
        query: {
          keywords: this.searchModel
        }
      });
    },
    /**
     * openMenu SP
     */
    openMenu() {
      this.$store.commit(`storeMenuSP/${consts["t" /* TOOGLE_MENU */]}`, true);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Header/Header.js?vue&type=script&lang=js&
 /* harmony default export */ var Header_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Header/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  Header_Headervue_type_script_lang_js_,
  Headervue_type_template_id_7e13b2db_render,
  Headervue_type_template_id_7e13b2db_staticRenderFns,
  false,
  Header_injectStyles,
  null,
  "41e61d7a"
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer/Footer.vue?vue&type=template&id=2cd303d8&
var Footervue_type_template_id_2cd303d8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "site-footer"
  }, [_vm._ssrNode("<div class=\"clear\"></div> "), _vm._ssrNode("<div id=\"site-bottom\" class=\"clear\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"site-info\">" + _vm._ssrEscape("\n\t\t\t\t\t© " + _vm._s(new Date().getFullYear()) + "\n\t\t\t\t\t") + "<a" + _vm._ssrAttr("href", `${_vm.settings.domain}`) + " class=\"router-link-exact-active router-link-active\">" + _vm._ssrEscape(_vm._s(_vm.settings.name)) + "</a></div> "), _vm._ssrNode("<div class=\"menu-primary-menu-container\">", "</div>", [_vm._ssrNode("<ul id=\"footer-menu\" class=\"footer-nav\">", "</ul>", _vm._l(_vm.footerMenus, function (menu, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": `/page${menu.url}`
      }
    }, [_vm._v(_vm._s(menu.name))])], 1);
  }), 0)])], 2)])], 2);
};
var Footervue_type_template_id_2cd303d8_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Footer/Footer.vue?vue&type=template&id=2cd303d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Footer/Footer.js?vue&type=script&lang=js&

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * primaryMenus
       * @returns {Array}
       */
      footerMenus(state) {
        const menus = state.common.storeLoadInit.menus;
        if (!menus.length) return [];
        return menus.filter(e => e.type.name === 'Footer');
      },
      /**
       * Setting site
       * @param {*} state 
       * @returns 
       */
      settings(state) {
        return state.common.storeLoadInit.settings;
      }
    })
  }
});
// CONCATENATED MODULE: ./src/components/Footer/Footer.js?vue&type=script&lang=js&
 /* harmony default export */ var Footer_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Footer/Footer.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  Footer_Footervue_type_script_lang_js_,
  Footervue_type_template_id_2cd303d8_render,
  Footervue_type_template_id_2cd303d8_staticRenderFns,
  false,
  Footer_injectStyles,
  null,
  "56ef11ba"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar/Sidebar.vue?vue&type=template&id=5880c37e&
var Sidebarvue_type_template_id_5880c37e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('aside', {
    staticClass: "widget-area sidebar",
    attrs: {
      "id": "secondary"
    }
  }, [_c('widget-item-sidebar', {
    attrs: {
      "heading": `Most Commented Posts`,
      "posts": _vm.randomPosts
    }
  }), _vm._ssrNode(" "), _c('widget-tags', {
    attrs: {
      "tags": _vm.tags
    }
  })], 2);
};
var Sidebarvue_type_template_id_5880c37e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.vue?vue&type=template&id=5880c37e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WidgetItemSidebar/WidgetItemSidebar.vue?vue&type=template&id=4ae85ec7&
var WidgetItemSidebarvue_type_template_id_4ae85ec7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "widget widget-enjoynews-category-posts widget-posts-thumbnail",
    attrs: {
      "id": "enjoynews-category-posts-2"
    }
  }, [_vm._ssrNode("<h3 class=\"widget-title\">", "</h3>", [_c('router-link', {
    attrs: {
      "to": `#`
    }
  }, [_vm._v(_vm._s(_vm.heading))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.posts, function (post, index) {
    return _vm._ssrNode("<li class=\"clear\">", "</li>", [_c('router-link', {
      staticClass: "thumbnail-link",
      attrs: {
        "to": _vm.$permalink(post)
      }
    }, [_c('div', {
      staticClass: "thumbnail-wrap"
    }, [_c('img', {
      staticClass: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
      attrs: {
        "width": "300",
        "height": "300",
        "src": _vm.imageUrl(post),
        "alt": "",
        "decoding": "async",
        "sizes": "(max-width: 300px) 100vw, 300px"
      }
    })])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-wrap\">", "</div>", [_c('router-link', {
      attrs: {
        "to": _vm.$permalink(post)
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(post.name)
      }
    })]), _vm._ssrNode(" <div class=\"entry-meta\">" + _vm._ssrEscape(_vm._s(post.created)) + "</div>")], 2)], 2);
  }), 0)], 2);
};
var WidgetItemSidebarvue_type_template_id_4ae85ec7_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/WidgetItemSidebar/WidgetItemSidebar.vue?vue&type=template&id=4ae85ec7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/WidgetItemSidebar/WidgetItemSidebar.js?vue&type=script&lang=js&
/* harmony default export */ var WidgetItemSidebarvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    heading: {
      type: String,
      default: ''
    },
    posts: {
      type: Array,
      default: () => []
    }
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Image url
     * @param {*} item 
     * @returns {String}
     */
    imageUrl(item) {
      if (!item.image) return this.$defaultImg();
      return item.image;
    }
  }
});
// CONCATENATED MODULE: ./src/components/WidgetItemSidebar/WidgetItemSidebar.js?vue&type=script&lang=js&
 /* harmony default export */ var WidgetItemSidebar_WidgetItemSidebarvue_type_script_lang_js_ = (WidgetItemSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/WidgetItemSidebar/WidgetItemSidebar.vue



function WidgetItemSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var WidgetItemSidebar_component = Object(componentNormalizer["a" /* default */])(
  WidgetItemSidebar_WidgetItemSidebarvue_type_script_lang_js_,
  WidgetItemSidebarvue_type_template_id_4ae85ec7_render,
  WidgetItemSidebarvue_type_template_id_4ae85ec7_staticRenderFns,
  false,
  WidgetItemSidebar_injectStyles,
  null,
  "66f640ac"
  
)

/* harmony default export */ var WidgetItemSidebar = (WidgetItemSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WidgetTags/WidgetTags.vue?vue&type=template&id=6e53362e&
var WidgetTagsvue_type_template_id_6e53362e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "widget widget_tag_cloud"
  }, [_vm._ssrNode("<h2 class=\"widget-title\"><span>Tags</span></h2> "), _vm._ssrNode("<div class=\"tagcloud\">", "</div>", [_vm._l(_vm.tags, function (tag, index) {
    return [_c('router-link', {
      key: index,
      staticClass: "tag-cloud-link tag-link-8 tag-link-position-1",
      staticStyle: {
        "font-size": "12.745762711864pt"
      },
      attrs: {
        "to": `/tag/${tag.slug}/`
      }
    }, [_vm._v(_vm._s(tag.name))])];
  })], 2)], 2);
};
var WidgetTagsvue_type_template_id_6e53362e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/WidgetTags/WidgetTags.vue?vue&type=template&id=6e53362e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/WidgetTags/WidgetTags.js?vue&type=script&lang=js&
/* harmony default export */ var WidgetTagsvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./src/components/WidgetTags/WidgetTags.js?vue&type=script&lang=js&
 /* harmony default export */ var WidgetTags_WidgetTagsvue_type_script_lang_js_ = (WidgetTagsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/WidgetTags/WidgetTags.vue





/* normalize component */

var WidgetTags_component = Object(componentNormalizer["a" /* default */])(
  WidgetTags_WidgetTagsvue_type_script_lang_js_,
  WidgetTagsvue_type_template_id_6e53362e_render,
  WidgetTagsvue_type_template_id_6e53362e_staticRenderFns,
  false,
  null,
  null,
  "350fa1fa"
  
)

/* harmony default export */ var WidgetTags = (WidgetTags_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Sidebar/Sidebar.js?vue&type=script&lang=js&


/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    WidgetItemSidebar: WidgetItemSidebar,
    WidgetTags: WidgetTags
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      tags: [],
      randomPosts: []
    };
  },
  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.getTags();
    await this.getPostRamdom();
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    async getTags() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        status: 1,
        limit: 10
      };
      const response = await this.$axios.get(`manager/tags/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.tags = response.data.data;
      }
    },
    async getPostRamdom() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 10,
        random: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.randomPosts = response.data.data;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.js?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.vue



function Sidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_5880c37e_render,
  Sidebarvue_type_template_id_5880c37e_staticRenderFns,
  false,
  Sidebar_injectStyles,
  null,
  "5b56c7da"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuSP/MenuSP.vue?vue&type=template&id=216f45d7&
var MenuSPvue_type_template_id_216f45d7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "menu-modal cover-modal header-footer-group",
    class: _vm.menu ? 'show-modal active' : ''
  }, [_vm._ssrNode("<div class=\"menu-modal-inner modal-inner\">", "</div>", [_vm._ssrNode("<div class=\"menu-wrapper section-inner\">", "</div>", [_vm._ssrNode("<div class=\"menu-top\">", "</div>", [_vm._ssrNode("<button class=\"toggle close-nav-toggle fill-children-current-color\"><span class=\"toggle-text\">Close Menu</span> <svg aria-hidden=\"true\" role=\"img\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"svg-icon\"><polygon fill fill-rule=\"evenodd\" points=\"6.852 7.649 .399 1.195 1.445 .149 7.899 6.602 14.352 .149 15.399 1.195 8.945 7.649 15.399 14.102 14.352 15.149 7.899 8.695 1.445 15.149 .399 14.102\"></polygon></svg></button> "), _vm._ssrNode("<nav aria-label=\"Mobile\" role=\"navigation\" class=\"mobile-menu\">", "</nav>", [_vm._ssrNode("<ul class=\"modal-menu reset-list-style\">", "</ul>", _vm._l(_vm.primaryMenus, function (menu, index) {
    return _vm._ssrNode("<li class=\"menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31617\">", "</li>", [_vm._ssrNode("<div class=\"ancestor-wrapper\"><a style=\"cursor: pointer; \"><span>" + _vm._s(menu.name) + "</span></a> " + (menu.childrens.length ? "<button" + _vm._ssrClass("toggle sub-menu-toggle fill-children-current-color", {
      active: menu.hasSubMenu
    }) + "><span class=\"screen-reader-text\">Show sub menu</span> <svg aria-hidden=\"true\" role=\"img\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"12\" viewBox=\"0 0 20 12\" class=\"svg-icon\"><polygon fill fill-rule=\"evenodd\" points=\"1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358\" transform=\"translate(-1310 -358)\"></polygon></svg></button>" : "<!---->") + "</div> "), menu.childrens.length ? [_c('transition', {
      attrs: {
        "name": "slide-fade"
      }
    }, [menu.hasSubMenu ? _c('ul', {
      staticClass: "sub-menu",
      class: {
        active: menu.hasSubMenu
      }
    }, _vm._l(menu.childMenus, function (child, index) {
      return _c('li', {
        key: index
      }, [_c('a', {
        staticStyle: {
          "cursor": "pointer"
        },
        on: {
          "click": function ($event) {
            return _vm.gotoCategory(child.url);
          }
        }
      }, [_c('span', {
        domProps: {
          "innerHTML": _vm._s(child.name)
        }
      })])]);
    }), 0) : _vm._e()])] : _vm._e()], 2);
  }), 0)])], 2)])])]);
};
var MenuSPvue_type_template_id_216f45d7_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MenuSP/MenuSP.vue?vue&type=template&id=216f45d7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/MenuSP/MenuSP.js?vue&type=script&lang=js&


/* harmony default export */ var MenuSPvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * primaryMenus
       * @returns {Array}
       */
      primaryMenus() {
        return this.$store.state.common.storeLoadInit.menus.filter(e => e.type.name === 'Main Menu');
      },
      /**
       * menu
       * @returns {Boolean}
       */
      menu() {
        return this.$store.state.storeMenuSP.menu;
      }
    })
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Close menu sp
     */
    closeMenu() {
      this.$store.commit(`storeMenuSP/${consts["t" /* TOOGLE_MENU */]}`, false);
    },
    /**
     * 
     * @param {*} menuId 
     * @returns 
     */
    getChildMenu(menuId) {
      return this.menuItems.filter(e => e.parent === menuId);
    },
    /**
     * 
     * @param {*} index 
     * @param {*} value 
     */
    openSubMenu(index, value) {
      this.$store.commit('UPDATE_MENU', {
        index: index,
        value: !value
      });
    },
    gotoCategory(link) {
      this.closeMenu();
      this.$router.push({
        path: link
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/MenuSP/MenuSP.js?vue&type=script&lang=js&
 /* harmony default export */ var MenuSP_MenuSPvue_type_script_lang_js_ = (MenuSPvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MenuSP/MenuSP.vue



function MenuSP_injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MenuSP_component = Object(componentNormalizer["a" /* default */])(
  MenuSP_MenuSPvue_type_script_lang_js_,
  MenuSPvue_type_template_id_216f45d7_render,
  MenuSPvue_type_template_id_216f45d7_staticRenderFns,
  false,
  MenuSP_injectStyles,
  null,
  "08d9e29a"
  
)

/* harmony default export */ var MenuSP = (MenuSP_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeaturePost/FeaturePost.vue?vue&type=template&id=362837c2&
var FeaturePostvue_type_template_id_362837c2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "featured-content"
    }
  }, _vm._l(_vm.posts, function (post, index) {
    return _c('feature-item', {
      key: index,
      attrs: {
        "index": index,
        "item": post,
        "className": _vm.className(index)
      }
    });
  }), 1);
};
var FeaturePostvue_type_template_id_362837c2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/FeaturePost/FeaturePost.vue?vue&type=template&id=362837c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeatureItem/FeatureItem.vue?vue&type=template&id=83b0d4a0&
var FeatureItemvue_type_template_id_83b0d4a0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: `${_vm.className}`
  }, [_c('nuxt-link', {
    staticClass: "thumbnail-link",
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('div', {
    staticClass: "thumbnail-wrap",
    class: _vm.index > 0 ? 'image-cover' : ''
  }, [_c('img', {
    staticClass: "attachment-enjoynews_featured_large_thumb size-enjoynews_featured_large_thumb wp-post-image",
    attrs: {
      "width": _vm.index === 0 ? 660 : 266,
      "height": _vm.index === 0 ? 440 : 218,
      "src": _vm.imageUrl,
      "alt": "",
      "decoding": "async",
      "sizes": "(max-width: 660px) 100vw, 660px"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "gradient",
    staticStyle: {
      "display": "inline"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-header\" style=\"display: block;\">", "</div>", [_vm.item.categories.length !== 0 ? [_vm._ssrNode("<div class=\"entry-category\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `category/${_vm.item.categories[0].slug}`
    }
  }, [_vm._v(_vm._s(_vm.item.categories[0].name))])], 1)] : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<h2 class=\"entry-title\">", "</h2>", [_c('nuxt-link', {
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.$omitText(_vm.item.name, 40))
    }
  })])], 1)], 2)], 2);
};
var FeatureItemvue_type_template_id_83b0d4a0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/FeatureItem/FeatureItem.vue?vue&type=template&id=83b0d4a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/FeatureItem/FeatureItem.js?vue&type=script&lang=js&
/* harmony default export */ var FeatureItemvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    className: {
      type: String,
      default: null
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
    imageUrl() {
      if (!this.item.image) return this.$defaultImg();
      return this.item.image;
    }
  }
});
// CONCATENATED MODULE: ./src/components/FeatureItem/FeatureItem.js?vue&type=script&lang=js&
 /* harmony default export */ var FeatureItem_FeatureItemvue_type_script_lang_js_ = (FeatureItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FeatureItem/FeatureItem.vue



function FeatureItem_injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FeatureItem_component = Object(componentNormalizer["a" /* default */])(
  FeatureItem_FeatureItemvue_type_script_lang_js_,
  FeatureItemvue_type_template_id_83b0d4a0_render,
  FeatureItemvue_type_template_id_83b0d4a0_staticRenderFns,
  false,
  FeatureItem_injectStyles,
  null,
  "24c830f4"
  
)

/* harmony default export */ var FeatureItem = (FeatureItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/FeaturePost/FeaturePost.js?vue&type=script&lang=js&

/* harmony default export */ var FeaturePostvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    FeatureItem: FeatureItem
  },
  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.featurePost();
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      posts: [],
      loading: false,
      isLoading: false
    };
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get Classname
     * @param {*} num 
     * @returns {String}
     */
    className(num) {
      if (num === 0) return `featured-large hentry`;else return `featured-small hentry`;
    },
    /**
     * Get feature post
     */
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
// CONCATENATED MODULE: ./src/components/FeaturePost/FeaturePost.js?vue&type=script&lang=js&
 /* harmony default export */ var FeaturePost_FeaturePostvue_type_script_lang_js_ = (FeaturePostvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FeaturePost/FeaturePost.vue



function FeaturePost_injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FeaturePost_component = Object(componentNormalizer["a" /* default */])(
  FeaturePost_FeaturePostvue_type_script_lang_js_,
  FeaturePostvue_type_template_id_362837c2_render,
  FeaturePostvue_type_template_id_362837c2_staticRenderFns,
  false,
  FeaturePost_injectStyles,
  null,
  "5170238e"
  
)

/* harmony default export */ var FeaturePost = (FeaturePost_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingScreen/LoadingScreen.vue?vue&type=template&id=3fbbd417&scoped=true&
var LoadingScreenvue_type_template_id_3fbbd417_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isLoading ? _c('div', {
    staticClass: "loading_wrapper"
  }, [_vm._ssrNode("<div class=\"loading_content mb-2\" data-v-3fbbd417></div>")]) : _vm._e();
};
var LoadingScreenvue_type_template_id_3fbbd417_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/LoadingScreen/LoadingScreen.vue?vue&type=template&id=3fbbd417&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/LoadingScreen/LoadingScreen.js?vue&type=script&lang=js&

/* harmony default export */ var LoadingScreenvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * loading
       * @returns {Boolean}
       */
      isLoading() {
        return this.$store.state.common.storeLoadInit.isLoading;
      }
    })
  }
});
// CONCATENATED MODULE: ./src/components/LoadingScreen/LoadingScreen.js?vue&type=script&lang=js&
 /* harmony default export */ var LoadingScreen_LoadingScreenvue_type_script_lang_js_ = (LoadingScreenvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/LoadingScreen/LoadingScreen.vue



function LoadingScreen_injectStyles (context) {
  
  var style0 = __webpack_require__(94)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LoadingScreen_component = Object(componentNormalizer["a" /* default */])(
  LoadingScreen_LoadingScreenvue_type_script_lang_js_,
  LoadingScreenvue_type_template_id_3fbbd417_scoped_true_render,
  LoadingScreenvue_type_template_id_3fbbd417_scoped_true_staticRenderFns,
  false,
  LoadingScreen_injectStyles,
  "3fbbd417",
  "d0284e9c"
  
)

/* harmony default export */ var LoadingScreen = (LoadingScreen_component.exports);
// EXTERNAL MODULE: ./src/components/AdsKeeper/AdsKeeper.vue + 4 modules
var AdsKeeper = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/AdsGoogle/AdsGoogle.vue + 4 modules
var AdsGoogle = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/layouts/TopLayout/TopLayout.js?vue&type=script&lang=js&











/* harmony default export */ var TopLayoutvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    Header: Header,
    Footer: Footer,
    Sidebar: Sidebar,
    MenuSP: MenuSP,
    FeaturePost: FeaturePost,
    LoadingScreen: LoadingScreen,
    AdsKeeper: AdsKeeper["a" /* default */],
    AdsGoogle: AdsGoogle["a" /* default */],
    TheHeader: TheHeader
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      backtoTop: false
    };
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      adsHeader(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === consts["n" /* HEADER */]);
        return ads ? ads : null;
      },
      adsHead(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === consts["i" /* AUTO_HEAD */]);
        return ads ? ads : null;
      },
      adsFooter(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === consts["m" /* FOOTER */]);
        return ads ? ads : null;
      }
    })
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Event back to top
     */
    handleToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted() {
    // const backToTop = document.querySelector('#back-top');
    window.addEventListener('scroll', async e => {
      const {
        scrollTop
      } = document.documentElement;
      if (scrollTop > 100) {
        this.backtoTop = true;
      } else {
        this.backtoTop = false;
      }
    });
  },
  /* --------------------------------------------------
    head
  -------------------------------------------------- */
  head() {
    return {
      link: [{
        rel: 'canonical',
        href: `${"http://localhost:3000"}${this.$route.path}`
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/layouts/TopLayout/TopLayout.js?vue&type=script&lang=js&
 /* harmony default export */ var TopLayout_TopLayoutvue_type_script_lang_js_ = (TopLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layouts/TopLayout/TopLayout.vue



function TopLayout_injectStyles (context) {
  
  var style0 = __webpack_require__(100)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopLayout_component = Object(componentNormalizer["a" /* default */])(
  TopLayout_TopLayoutvue_type_script_lang_js_,
  TopLayoutvue_type_template_id_7f65190b_render,
  TopLayoutvue_type_template_id_7f65190b_staticRenderFns,
  false,
  TopLayout_injectStyles,
  null,
  "4691723b"
  
)

/* harmony default export */ var TopLayout = (TopLayout_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js











const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_MainLayout/index": sanitizeComponent(MainLayout),
  "_TopLayout/TopLayout": sanitizeComponent(TopLayout)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (layouts_error.options || layouts_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};
(function updateModules() {
  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(102), 'storeMenuSP.js');
  resolveStoreModules(__webpack_require__(103), 'common/storeLoadAds.js');
  resolveStoreModules(__webpack_require__(104), 'common/storeLoadInit.js');

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData;
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath);

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    });

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = moduleName === 'index';
  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }
  const storeModule = getStoreModule(store_store, namespaces);
  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }
  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}
function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }
  return normalizeModule(moduleData, filePath);
}
function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }
  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}
function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }
  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(7);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/locale/en"
var en_ = __webpack_require__(105);

// EXTERNAL MODULE: external "dayjs/locale/ja"
var ja_ = __webpack_require__(106);

// EXTERNAL MODULE: external "dayjs/plugin/utc"
var utc_ = __webpack_require__(43);
var utc_default = /*#__PURE__*/__webpack_require__.n(utc_);

// EXTERNAL MODULE: external "dayjs/plugin/timezone"
var timezone_ = __webpack_require__(44);
var timezone_default = /*#__PURE__*/__webpack_require__.n(timezone_);

// CONCATENATED MODULE: ./.nuxt/dayjs-plugin.js





external_dayjs_default.a.extend(utc_default.a);
external_dayjs_default.a.extend(timezone_default.a);
external_dayjs_default.a.locale('en');
external_dayjs_default.a.tz.setDefault('Asia/Tokyo');
/* harmony default export */ var dayjs_plugin = ((context, inject) => {
  context.$dayjs = external_dayjs_default.a;
  inject('dayjs', external_dayjs_default.a);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(45);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'https://genplusmedia.online/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./src/plugins/pluginApi.js
/* harmony default export */ var pluginApi = (function ({
  $axios
}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    },
    params: {
      api_key: "0906429283",
      website_id: 22
    }
  });

  // Set baseURL to something different
  api.setBaseURL("https://genplusmedia.online/");

  // Inject to context as $api
  inject('api', api);
});
// CONCATENATED MODULE: ./src/plugins/pluginLoadInit.js
// ====================================================
//  pluginLoadInit.js
// ====================================================
/* harmony default export */ var pluginLoadInit = (async context => {
  await context.store.dispatch('common/storeLoadInit/initSettingApp', context);
  await context.store.dispatch('common/storeLoadInit/initMenuApp', context);
  await context.store.dispatch('common/storeLoadAds/initLoadAds');
});
// CONCATENATED MODULE: ./src/plugins/pluginUtility.js
/* harmony default export */ var pluginUtility = ((context, inject) => {
  /**
   * omitText
   * @returns {String}
   */
  inject('omitText', (rowTitle, textLimit) => {
    const omitedTitle = rowTitle.substring(0, textLimit);
    if (rowTitle.length >= textLimit) {
      return omitedTitle + '...';
    } else {
      return rowTitle;
    }
  });

  /**
   * formatDateCommon
   * @returns {String}
   */
  inject('formatDateCommon', (date, format = false) => {
    const dateObj = context.app.$dayjs(date);
    console.log(dateObj);
    if (format) {
      return dateObj.format(format);
    }
    return dateObj.format('DD/MM/YYYY');
  });

  /**
   * defaultImg
   */
  inject('defaultImg', () => {
    return `assets/img/default-thumbnail.png`;
  });

  /**
   * create post
   * @returns {String} 
   */
  inject('timePost', date => {
    if (!date) return null;
    const time = date.split(' ');
    return time[0];
  });

  /**
   * create post
   * @returns {String} 
   */
  inject('permalink', item => {
    const permalinkId = context.store.getters['common/storeLoadInit/permalinkId'];
    if (permalinkId) {
      return `/${item.id}/`;
    } else {
      return `/${item.slug}/`;
    }
  });

  /**
   * site name
   * @returns {String} 
   */
  inject('sitename', () => {
    var _context$store$state$, _context$store$state$2;
    return (_context$store$state$ = context.store.state.common.storeLoadInit) === null || _context$store$state$ === void 0 ? void 0 : (_context$store$state$2 = _context$store$state$.settings) === null || _context$store$state$2 === void 0 ? void 0 : _context$store$state$2.name;
  });

  /**
   * metas
   * @returns {Array} 
   */
  inject('metas', () => {
    var _context$store$state$3, _context$store$state$4;
    return (_context$store$state$3 = context.store.state.common.storeLoadInit) === null || _context$store$state$3 === void 0 ? void 0 : (_context$store$state$4 = _context$store$state$3.settings) === null || _context$store$state$4 === void 0 ? void 0 : _context$store$state$4.meta;
  });

  /**
   * Favicon
   * @returns {String} 
   */
  inject('favicon', () => {
    var _context$store$state$5, _context$store$state$6, _context$store$state$7;
    return ((_context$store$state$5 = context.store.state.common.storeLoadInit) === null || _context$store$state$5 === void 0 ? void 0 : (_context$store$state$6 = _context$store$state$5.settings) === null || _context$store$state$6 === void 0 ? void 0 : (_context$store$state$7 = _context$store$state$6.setting) === null || _context$store$state$7 === void 0 ? void 0 : _context$store$state$7.favicon) || null;
  });
  inject('setLoading', val => {
    context.store.commit('common/storeLoadInit/STORE_SET_LOADING', val);
  });
});
// EXTERNAL MODULE: external "vue-google-adsense"
var external_vue_google_adsense_ = __webpack_require__(10);
var external_vue_google_adsense_default = /*#__PURE__*/__webpack_require__.n(external_vue_google_adsense_);

// CONCATENATED MODULE: ./src/plugins/pluginGoogleAdsense.js


external_vue_default.a.use(__webpack_require__(107));
external_vue_default.a.use(external_vue_google_adsense_default.a.Adsense);
external_vue_default.a.use(external_vue_google_adsense_default.a.InArticleAdsense);
external_vue_default.a.use(external_vue_google_adsense_default.a.InFeedAdsense);
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(46);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(47);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(48);

// CONCATENATED MODULE: ./src/plugins/fontawesome.js





fontawesome_svg_core_["config"].autoAddCss = false;
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"], free_brands_svg_icons_["fab"]);
external_vue_default.a.component('font-awesome-icon', vue_fontawesome_["FontAwesomeIcon"]);
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\dayjs-plugin.js (mode: 'all')
 // Source: .\\axios.js (mode: 'all')
 // Source: ..\\src\\plugins\\pluginApi (mode: 'all')
 // Source: ..\\src\\plugins\\pluginLoadInit (mode: 'all')
 // Source: ..\\src\\plugins\\pluginUtility (mode: 'all')
 // Source: ..\\src\\plugins\\pluginGoogleAdsense (mode: 'all')
 // Source: ..\\src\\plugins\\fontawesome.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Zaly.online",
      "htmlAttrs": {
        "lang": "en-US"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "http-equiv": "X-UA-Compatible",
        "content": "IE=edge"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
      }, {
        "name": "copyright",
        "content": "Copyright ©  All rights reserved."
      }],
      "link": [{
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap",
        "type": "text\u002Fcss",
        "media": "all",
        "async": true
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "\u002Fassets\u002Fcss\u002Fgenericons\u002Fgenericons\u002Fgenericons.css"
      }],
      "script": [{
        "src": "https:\u002F\u002Fpagead2.googlesyndication.com\u002Fpagead\u002Fjs\u002Fadsbygoogle.js",
        "async": true,
        "crossorigin": "anonymous"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof dayjs_plugin === 'function') {
    await dayjs_plugin(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof pluginApi === 'function') {
    await pluginApi(app.context, inject);
  }
  if (typeof pluginLoadInit === 'function') {
    await pluginLoadInit(app.context, inject);
  }
  if (typeof pluginUtility === 'function') {
    await pluginUtility(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./src/plugins/pluginGoogleAdsense.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./src/plugins/pluginGoogleAdsense.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./src/plugins/fontawesome.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./src/plugins/fontawesome.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map