/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gutenberg/editor/editor/sync.js":
/*!*********************************************!*\
  !*** ./src/gutenberg/editor/editor/sync.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleMetaboxValueChange": () => (/* binding */ handleMetaboxValueChange)
/* harmony export */ });
const handleMetaboxValueChange = (optionId, optionValue) => {
  if (optionId === 'page_structure_type') {
    let structure = ct_editor_localizations.default_page_structure;
    if (optionValue !== 'default') {
      structure = optionValue === 'type-4' ? 'normal' : 'narrow';
    }
    document.body.classList.remove('ct-structure-narrow', 'ct-structure-normal');
    document.body.classList.add(`ct-structure-${structure}`);
  }
};

/***/ }),

/***/ "ct-options":
/*!********************************************!*\
  !*** external ["window","blocksyOptions"] ***!
  \********************************************/
/***/ ((module) => {

module.exports = window["window"]["blocksyOptions"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/gutenberg/editor/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/sync */ "./src/gutenberg/editor/editor/sync.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ct_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ct-options */ "ct-options");
/* harmony import */ var ct_options__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ct_options__WEBPACK_IMPORTED_MODULE_8__);









const BlocksyOptions = _ref => {
  let {
    name,
    value,
    options,
    onChange,
    isActive,
    isPinnable = true,
    isPinned,
    togglePin,
    toggleSidebar,
    closeGeneralSidebar
  } = _ref;
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const parentContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [values, setValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.classList[isActive ? 'add' : 'remove']('blocksy-sidebar-active');
  }, [isActive]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
    target: "blocksy",
    icon: "admin-customizer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Blocksy Page Settings', 'blocksy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    name: name,
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ct-page-options-trigger"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 30 30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M10,8.8h5.8c2.5,0,4,1.2,4,3.1c0,1.3-1,2.5-2.3,2.7v0.2c1.6,0.1,2.9,1.4,2.9,3c0,2.2-1.7,3.6-4.4,3.6h-6V8.8z M13.2,11v2.8h1.7c1.2,0,1.8-0.5,1.8-1.4c0-0.9-0.6-1.4-1.7-1.4H13.2zM13.2,15.8V19h1.9c1.3,0,2-0.6,2-1.6c0-1-0.7-1.6-2.1-1.6H13.2z"
    }))),
    className: "ct-components-panel",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Blocksy Page Settings', 'blocksy')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "ct-page-options",
    ref: parentContainerRef
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ct-options-container",
    ref: containerRef
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ct_options__WEBPACK_IMPORTED_MODULE_8__.DeviceManagerProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ct_options__WEBPACK_IMPORTED_MODULE_8__.PanelLevel, {
    containerRef: containerRef,
    parentContainerRef: parentContainerRef,
    useRefsAsWrappers: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ct-panel-options-header components-panel__header edit-post-sidebar-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Blocksy Page Settings', 'blocksy')), isPinnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    icon: isPinned ? 'star-filled' : 'star-empty',
    label: isPinned ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Unpin from toolbar', 'blocksy') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Pin to toolbar', 'blocksy'),
    onClick: togglePin,
    isPressed: isPinned,
    "aria-expanded": isPinned
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    onClick: closeGeneralSidebar,
    icon: "no-alt",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Close plugin', 'blocksy')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ct_options__WEBPACK_IMPORTED_MODULE_8__.OptionsPanel, {
    onChange: (key, v) => {
      const futureValue = {
        ...(values || (0,ct_options__WEBPACK_IMPORTED_MODULE_8__.getValueFromInput)(options, value || {})),
        [key]: v
      };
      (0,_editor_sync__WEBPACK_IMPORTED_MODULE_6__.handleMetaboxValueChange)(key, v);
      onChange(futureValue);
      setValues(futureValue);
    },
    value: values || (0,ct_options__WEBPACK_IMPORTED_MODULE_8__.getValueFromInput)(options, value || {}),
    options: options
  })))))));
};
const BlocksyOptionsComposed = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.withPluginContext)((context, _ref2) => {
  let {
    name
  } = _ref2;
  return {
    sidebarName: `${context.name}/${name}`
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, _ref3) => {
  let {
    sidebarName
  } = _ref3;
  const value = select('core/editor').getEditedPostAttribute('blocksy_meta');
  const {
    getActiveGeneralSidebarName,
    isPluginItemPinned
  } = select('core/edit-post');
  return {
    isActive: getActiveGeneralSidebarName() === sidebarName,
    isPinned: isPluginItemPinned(sidebarName),
    value: Array.isArray(value) ? {} : value || {},
    options: ct_editor_localizations.post_options
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)((dispatch, _ref4) => {
  let {
    sidebarName
  } = _ref4;
  const {
    closeGeneralSidebar,
    openGeneralSidebar,
    togglePinnedPluginItem
  } = dispatch('core/edit-post');
  return {
    closeGeneralSidebar,
    togglePin: () => {
      togglePinnedPluginItem(sidebarName);
    },
    onChange: blocksy_meta => {
      dispatch('core/editor').editPost({
        blocksy_meta
      });
    }
  };
}))(BlocksyOptions);
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('blocksy', {
  render: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlocksyOptionsComposed, {
    name: "blocksy"
  })
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map