/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gutenberg/blocks/blocks/color-palette/index.js":
/*!************************************************************!*\
  !*** ./src/gutenberg/blocks/blocks/color-palette/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);






// Registra el bloque de la paleta de colores con los atributos color y colors
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)("quadlayers/color-palette-block", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color Palette Block", "gutenberg-examples"),
  icon: "universal-access-alt",
  category: "quadlayers",
  attributes: {
    color: {
      type: "string",
      default: "#f00"
    },
    colors: {
      type: "array",
      default: [{
        name: "red",
        color: "#f00"
      }, {
        name: "white",
        color: "#fff"
      }, {
        name: "blue",
        color: "#00f"
      }]
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;
    // Al editarlo, establece el atributo color con el que recibe en el evento
    const onChangeColor = color => {
      setAttributes({
        color: color
      });
    };

    // Componente paleta de colores que recibe los colores totales y el color por defecto
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.color,
        width: "90%",
        height: 30
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "This is the expected result (Edit)")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      colors: attributes.colors,
      value: attributes.color,
      disableCustomColors: true,
      clearable: false,
      onChange: onChangeColor
    }));
  },
  // Se hace destructuring para sacar los atributos color y colors para pasarselos al componente
  save: _ref2 => {
    let {
      attributes: {
        colors
      }
    } = _ref2;
    // Al editarlo, establece el atributo color con el que recibe en el evento
    const [color, setColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const onChangeColor = color => {
      setColor(color);
    };

    // Componente paleta de colores que recibe los colores totales y el color por defecto
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.color,
        width: "90%",
        height: 30
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "This is the expected result (Save)")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      colors: colors,
      value: color,
      disableCustomColors: true,
      clearable: false,
      onChange: onChangeColor
    }));
  }
});

/***/ }),

/***/ "./src/gutenberg/blocks/blocks/controls-block/index.js":
/*!*************************************************************!*\
  !*** ./src/gutenberg/blocks/blocks/controls-block/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('quadlayers/controls-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Example: Controls', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  category: 'quadlayers',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    },
    alignment: {
      type: 'string',
      default: 'none'
    }
  },
  edit: props => {
    const {
      attributes: {
        content,
        alignment
      },
      className
    } = props;
    const onChangeContent = newContent => {
      props.setAttributes({
        content: newContent
      });
    };
    const onChangeAlignment = newAlignment => {
      props.setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      className: className,
      style: {
        textAlign: alignment
      },
      tagName: "p",
      onChange: onChangeContent,
      value: content
    }));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      className: `gutenberg-examples-align-${props.attributes.alignment}`,
      tagName: "p",
      value: props.attributes.content
    });
  }
});

/***/ }),

/***/ "./src/gutenberg/blocks/blocks/editable-block/index.js":
/*!*************************************************************!*\
  !*** ./src/gutenberg/blocks/blocks/editable-block/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('quadlayers/editable-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Example: Editable', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  category: 'quadlayers',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    }
  },
  edit: props => {
    const {
      attributes: {
        content
      },
      setAttributes,
      className
    } = props;
    const onChangeContent = newContent => {
      setAttributes({
        content: newContent
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      className: className,
      onChange: onChangeContent,
      value: content
    });
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "p",
      value: props.attributes.content
    });
  }
});

/***/ }),

/***/ "./src/gutenberg/blocks/blocks/index.js":
/*!**********************************************!*\
  !*** ./src/gutenberg/blocks/blocks/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editable_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editable-block */ "./src/gutenberg/blocks/blocks/editable-block/index.js");
/* harmony import */ var _controls_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls-block */ "./src/gutenberg/blocks/blocks/controls-block/index.js");
/* harmony import */ var _inspector_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector-block */ "./src/gutenberg/blocks/blocks/inspector-block/index.js");
/* harmony import */ var _color_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-palette */ "./src/gutenberg/blocks/blocks/color-palette/index.js");
/**
 * WordPress dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockCollection)("quadlayers", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Quadlayers", "quadlayers"),
  icon: "editor-contract"
});

/**
 * Register Blocks
 */




 // Importamos el bloque de la paleta de colores

/***/ }),

/***/ "./src/gutenberg/blocks/blocks/inspector-block/index.js":
/*!**************************************************************!*\
  !*** ./src/gutenberg/blocks/blocks/inspector-block/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('quadlayers/inspector-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Example: Inspector', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  category: 'quadlayers',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    checkboxField: {
      type: 'boolean',
      default: true
    },
    radioField: {
      type: 'string',
      default: 'yes'
    },
    textField: {
      type: 'string'
    },
    toggleField: {
      type: 'boolean'
    },
    selectField: {
      type: 'string'
    }
  },
  edit(_ref) {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      content,
      checkboxField,
      radioField,
      textField,
      toggleField,
      selectField
    } = attributes;
    function onChangeContent(newContent) {
      setAttributes({
        content: newContent
      });
    }
    function onChangeCheckboxField(newValue) {
      setAttributes({
        checkboxField: newValue
      });
    }
    function onChangeRadioField(newValue) {
      setAttributes({
        radioField: newValue
      });
    }
    function onChangeTextField(newValue) {
      setAttributes({
        textField: newValue
      });
    }
    function onChangeToggleField(newValue) {
      setAttributes({
        toggleField: newValue
      });
    }
    function onChangeSelectField(newValue) {
      setAttributes({
        selectField: newValue
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "My Block Settings",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
      label: "Tick Me",
      help: "Checkbox Field additional help text",
      checked: checkboxField,
      onChange: onChangeCheckboxField
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
      label: "Radio Field",
      selected: radioField,
      options: [{
        label: 'Yes',
        value: 'yes'
      }, {
        label: 'No',
        value: 'no'
      }],
      onChange: onChangeRadioField
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Text Field",
      help: "Additional help text",
      value: textField,
      onChange: onChangeTextField
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Toggle Field",
      checked: toggleField,
      onChange: onChangeToggleField
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Select Control",
      value: selectField,
      options: [{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }, {
        value: 'c',
        label: 'Option C'
      }],
      onChange: onChangeSelectField
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      key: "editable",
      tagName: "p",
      onChange: onChangeContent,
      value: content
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Inspector Control Fields"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Checkbox Field: ", checkboxField ? 'check' : 'no-check'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Radio Field: ", radioField), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Text Field: ", textField), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Toggle Field: ", toggleField ? 'true' : 'false'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Select Field: ", selectField)));
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      content,
      checkboxField,
      radioField,
      textField,
      toggleField,
      selectField
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      value: content,
      tagName: "p"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Inspector Control Fields"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Checkbox Field: ", checkboxField ? 'check' : 'no-check'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Radio Field: ", radioField), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Text Field: ", textField), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Toggle Field: ", toggleField ? 'true' : 'false'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Select Field: ", selectField)));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

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
  !*** ./src/gutenberg/blocks/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/ */ "./src/gutenberg/blocks/blocks/index.js");

})();

/******/ })()
;
//# sourceMappingURL=index.js.map