/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ const __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/styles.css':
      /*! **************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \************************************************************* */
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ":root {\\n  --section-padding: 1rem;\\n  --section-margin: 1rem;\\n  --border-radius-default: 0.75rem;\\n  --primary-color: #82b4ff;\\n  --primary-color-dark: #46618a;\\n  --shade-color: #494949da;\\n  --color-shadow: grey;\\n  --grid-size: 12;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\"IBM Plex Mono\\", monospace;\\n}\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  font-size: 100%;\\n}\\n\\nbutton {\\n  background-color: var(--primary-color);\\n  color: rgba(255, 255, 255, 0.5);\\n  border: none;\\n  /* border-radius: 32px; */\\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\\n  text-decoration: none;\\n  font-size: 1.5rem;\\n  transition-duration: 0.2s;\\n}\\n\\nbutton:not(:disabled),\\ninput:not(:disabled),\\ninput:not(:disabled) + label,\\na {\\n  cursor: pointer;\\n  color: rgba(255, 255, 255, 1);\\n}\\n\\n.icon:hover {\\n  cursor: pointer;\\n}\\n\\nbutton:not(:disabled):hover {\\n  background-color: var(--primary-color-dark);\\n}\\n\\n.box-shadow {\\n  box-shadow: 2px 5px 5px var(--color-shadow);\\n}\\n\\n.icon {\\n  vertical-align: bottom;\\n}\\n\\nbody {\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nh1 {\\n  text-align: center;\\n  font-size: 3rem;\\n  background: var(--primary-color);\\n  padding: var(--section-padding);\\n}\\n\\nmain {\\n  flex: 1;\\n  margin-bottom: 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  padding: var(--section-padding);\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: repeat(var(--grid-size), 1fr);\\n  padding: var(--section-padding);\\n  width: clamp(400px, 50vw, 700px);\\n}\\n\\n.grid-cell {\\n  border: solid 1px black;\\n  width: 100%;\\n  height: 0;\\n  padding-top: 100%;\\n  position: relative;\\n}\\n\\n.grid-cell.miss,\\n.grid-cell.hit {\\n  cursor: not-allowed;\\n}\\n\\n#player2-container .grid {\\n  cursor: crosshair;\\n}\\n\\n#player2-container .grid-cell:hover {\\n  border: solid 1px white;\\n}\\n\\n#setup-controls {\\n  display: grid;\\n  gap: 0.5rem;\\n}\\n\\n#setup-instructions {\\n  border-bottom: solid 2px black;\\n  text-align: center;\\n}\\n\\n#rotate-button:hover + #shipContainer > .draggable:first-child {\\n  transform: rotate(0deg);\\n}\\n\\n#shipContainer {\\n  justify-self: center;\\n  width: fit-content;\\n  display: flex;\\n  align-items: center;\\n  gap: 1.5rem;\\n  padding: var(--section-padding);\\n}\\n\\n#shipContainer > :not(:first-child) {\\n  opacity: 0.5;\\n  width: 50%;\\n}\\n\\n.ship {\\n  background: gray;\\n}\\n\\n#setup-controls {\\n  background: var(--primary-color);\\n  padding: var(--section-padding);\\n  border-radius: var(--border-radius-default);\\n}\\n\\n.draggable.ship {\\n  height: fit-content;\\n  width: fit-content;\\n}\\n\\n.ship-unit {\\n  background: rgba(128, 128, 128, 0.623);\\n  width: 25px;\\n  height: 25px;\\n  border: solid 1px black;\\n}\\n\\n/* Currently draggable elements  */\\n[draggable=\\"true\\"] {\\n  cursor: move;\\n}\\n\\n[draggable=\\"true\\"] .ship-unit {\\n  width: 50px;\\n  height: 50px;\\n}\\n\\n.dragHover-valid {\\n  background: lightgreen;\\n}\\n\\n.dragHover-invalid {\\n  background: red;\\n}\\n\\n.vertical {\\n  display: flex;\\n}\\n\\n.hit {\\n  background: rgb(255, 84, 112);\\n}\\n\\n.miss {\\n  background: rgb(211, 211, 211);\\n}\\n\\n#player1-container,\\n#player2-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.pop-up {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1rem;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  padding: 2rem 1rem;\\n  transform: translate(-50%, -50%);\\n  width: 50%;\\n  background: rgba(252, 252, 252, 0.77);\\n  z-index: 99;\\n  border-radius: var(--border-radius-default);\\n  border: solid 2px black;\\n}\\n\\n.pop-up button {\\n  border-radius: 1.5rem;\\n}\\n\\n.pop-up ~ * {\\n  filter: blur(3px);\\n}\\n\\nfooter {\\n  text-align: center;\\n  padding: var(--section-padding);\\n  background: var(--primary-color-dark);\\n  margin-top: var(--section-margin);\\n  flex-shrink: 0;\\n}\\n\\n@media (min-width: 780px) {\\n  main {\\n    flex-direction: row;\\n  }\\n\\n  .pop-up {\\n    width: 40%;\\n  }\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*! **************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \************************************************************* */
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/styles.css':
      /*! ************************!*\
  !*** ./src/styles.css ***!
  \*********************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ './src/index.js':
      /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");\n/* harmony import */ var _scripts_displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/displayController */ "./src/scripts/displayController.js");\n\n\n\n// User will click load Game\n_scripts_displayController__WEBPACK_IMPORTED_MODULE_1__.loadStartScreen();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?'
        );

        /***/
      },

    /***/ './src/scripts/displayController.js':
      /*! ******************************************!*\
  !*** ./src/scripts/displayController.js ***!
  \***************************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickHandlerBoard\": () => (/* binding */ clickHandlerBoard),\n/* harmony export */   \"loadBoardContainer\": () => (/* binding */ loadBoardContainer),\n/* harmony export */   \"loadGame\": () => (/* binding */ loadGame),\n/* harmony export */   \"loadStartScreen\": () => (/* binding */ loadStartScreen),\n/* harmony export */   \"loadWinner\": () => (/* binding */ loadWinner)\n/* harmony export */ });\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ \"./src/scripts/gameController.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\n\n\nconst main = document.querySelector('main');\n\nconst player1Container = document.createElement('div');\nconst player2Container = document.createElement('div');\nplayer1Container.setAttribute('id', 'player1-container');\nplayer2Container.setAttribute('id', 'player2-container');\n\nfunction loadStartScreen() {\n  removeAllChildNodes(main);\n  _gameController__WEBPACK_IMPORTED_MODULE_0__.clearSetupShips();\n  _gameController__WEBPACK_IMPORTED_MODULE_0__.resetPlayers();\n\n  const setupControls = document.createElement('div');\n  setupControls.setAttribute('id', 'setup-controls');\n  setupControls.classList.add('box-shadow');\n\n  const setupInstructions = document.createElement('p');\n  setupInstructions.setAttribute('id', 'setup-instructions');\n  setupInstructions.textContent = 'Drag and drop your ships on the board';\n\n  setupControls.appendChild(setupInstructions);\n\n  let horizontal = true; // current ship orientation\n  loadGridSetup(main);\n  loadShipStart();\n  const randomizeBoardBtn = document.createElement('button');\n  randomizeBoardBtn.textContent = 'Random Board';\n  randomizeBoardBtn.addEventListener('click', populateRandomBoard);\n\n  const startButton = document.createElement('button');\n  startButton.setAttribute('id', 'start-button');\n  startButton.textContent = 'Start Game';\n  startButton.disabled = true;\n  startButton.addEventListener('click', () => {\n    loadGame();\n  });\n\n  setupControls.append(randomizeBoardBtn, startButton);\n  main.appendChild(setupControls);\n\n  function loadGridSetup(parentNode, gridSize = 12) {\n    document.querySelector(':root').style.setProperty('--grid-size', gridSize);\n    const gridContainer = document.createElement('div');\n    gridContainer.classList.add('grid');\n\n    for (let i = 0; i < gridSize; i++) {\n      for (let j = 0; j < gridSize; j++) {\n        const cell = document.createElement('div');\n        // cell.textContent = `${i}, ${j}`;\n        cell.dataset.xSetup = i;\n        cell.dataset.ySetup = j;\n        cell.classList.add('grid-cell');\n        cell.addEventListener('dragenter', dragEnter);\n        cell.addEventListener('dragover', dragOver);\n        cell.addEventListener('dragleave', dragLeave);\n        cell.addEventListener('drop', drop);\n\n        gridContainer.appendChild(cell);\n      }\n    }\n\n    parentNode.append(gridContainer);\n\n    function dragEnter(event) {\n      event.preventDefault();\n      removeDragHoverCells();\n\n      const xPosition = parseInt(event.target.dataset.xSetup);\n      const yPosition = parseInt(event.target.dataset.ySetup);\n      let hoverClass = '';\n      if (\n        evaluateAllValidPositions(\n          [xPosition, yPosition],\n          getCurrentShipSize(),\n          isHorizontalShip()\n        )\n      ) {\n        hoverClass = 'dragHover-valid';\n      } else {\n        hoverClass = 'dragHover-invalid';\n      }\n\n      if (isHorizontalShip()) {\n        for (\n          let x = xPosition;\n          x < parseInt(xPosition) + getCurrentShipSize();\n          x++\n        ) {\n          const cell = document.querySelector(\n            `[data-x-setup~=\"${x}\"][data-y-setup~=\"${yPosition}\"]`\n          );\n          // console.log(cell.textContent);\n          cell.classList.add('dragHover');\n          cell.classList.add(hoverClass);\n        }\n      } else {\n        for (\n          let y = yPosition;\n          y < parseInt(yPosition) + getCurrentShipSize();\n          y++\n        ) {\n          const cell = document.querySelector(\n            `[data-x-setup~=\"${xPosition}\"][data-y-setup~=\"${y}\"]`\n          );\n          console.log(cell.textContent);\n          cell.classList.add('dragHover');\n          cell.classList.add(hoverClass);\n        }\n      }\n    }\n\n    function dragOver(event) {\n      event.preventDefault();\n      // console.log('dragover called');\n      // console.log(event.target);\n    }\n\n    function dragLeave(event) {\n      // event.target.classList.remove('dragHover');\n    }\n\n    function drop(event) {\n      removeDragHoverCells();\n\n      const xPosition = parseInt(event.target.dataset.xSetup);\n      const yPosition = parseInt(event.target.dataset.ySetup);\n      // Do not continue if invalid drop location\n      if (\n        !evaluateAllValidPositions(\n          [xPosition, yPosition],\n          getCurrentShipSize(),\n          isHorizontalShip()\n        )\n      ) {\n        console.error(`${xPosition},${yPosition} is invalid`);\n        return;\n      }\n\n      const shipCoords = [];\n      // Set each selected cell to be a ship\n      if (isHorizontalShip()) {\n        for (let x = xPosition; x < xPosition + getCurrentShipSize(); x++) {\n          const cell = gridContainer.querySelector(\n            `[data-x-setup~=\"${x}\"][data-y-setup~=\"${yPosition}\"]`\n          );\n          cell.classList.add('ship');\n          cell.removeEventListener('dragenter', dragEnter);\n          cell.removeEventListener('drop', drop);\n          shipCoords.push([x, yPosition]);\n        }\n      } else {\n        for (let y = yPosition; y < yPosition + getCurrentShipSize(); y++) {\n          const cell = gridContainer.querySelector(\n            `[data-x-setup~=\"${xPosition}\"][data-y-setup~=\"${y}\"]`\n          );\n          cell.classList.add('ship');\n          cell.removeEventListener('dragenter', dragEnter);\n          cell.removeEventListener('drop', drop);\n          shipCoords.push([xPosition, y]);\n        }\n      }\n\n      // Add coordinates to gameController setup Array\n      _gameController__WEBPACK_IMPORTED_MODULE_0__.addSetupShip(shipCoords);\n\n      // Remove ship from shipContainer\n      const shipContainer = document.querySelector('#shipContainer');\n      shipContainer.removeChild(shipContainer.firstChild);\n\n      // Set the next ship as draggable\n      if (shipContainer.hasChildNodes()) {\n        shipContainer.firstChild.draggable = true;\n      }\n\n      // Reset horizontal orientation\n      horizontal = true;\n\n      // Enable start button if all ships placed\n      // Disable rotate button if all ships placed\n      if (shipContainer.childElementCount < 1) {\n        document.querySelector('#start-button').disabled = false;\n        document.querySelector('#rotate-button').disabled = true;\n      }\n    }\n\n    function evaluateAllValidPositions(startingPosition, length, horizontal) {\n      // Check if ship goes outside grid bounds\n      if (horizontal && startingPosition[0] + length > gridSize) {\n        return false;\n      }\n      if (!horizontal && startingPosition[1] + length > gridSize) {\n        return false;\n      }\n\n      // Check if ship interferes with existing ship\n      if (horizontal) {\n        for (\n          let x = startingPosition[0];\n          x < startingPosition[0] + length;\n          x++\n        ) {\n          const cell = gridContainer.querySelector(\n            `[data-x-setup~=\"${x}\"][data-y-setup~=\"${startingPosition[1]}\"]`\n          );\n          if (cell.classList.contains('ship')) {\n            return false;\n          }\n        }\n      } else {\n        for (\n          let y = startingPosition[1];\n          y < startingPosition[1] + length;\n          y++\n        ) {\n          const cell = gridContainer.querySelector(\n            `[data-x-setup~=\"${startingPosition[0]}\"][data-y-setup~=\"${y}\"]`\n          );\n          if (cell.classList.contains('ship')) {\n            return false;\n          }\n        }\n      }\n\n      return true;\n    }\n\n    function getCurrentShipSize() {\n      const shipContainer = document.querySelector('#shipContainer');\n      return shipContainer.firstChild.childElementCount;\n    }\n\n    function isHorizontalShip() {\n      return horizontal;\n    }\n  }\n\n  function populateRandomBoard() {\n    loadStartScreen(); // clears grid\n    const randomBoard = _gameController__WEBPACK_IMPORTED_MODULE_0__.generateRandomBoard();\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.setPlayers((0,_player__WEBPACK_IMPORTED_MODULE_1__.player)('Player 1', randomBoard, false)); // Tell game controller to set player 1 board as the random board\n\n    const gridContainer = document.querySelector('.grid');\n    for (let x = 0; x < randomBoard.board.length; x++) {\n      for (let y = 0; y < randomBoard.board[x].length; y++) {\n        if (randomBoard.board[x][y].containsShip) {\n          const cell = gridContainer.querySelector(\n            `[data-x-setup~=\"${x}\"][data-y-setup~=\"${y}\"]`\n          );\n          cell.classList.add('ship');\n        }\n      }\n    }\n\n    // Remove draggable ships\n    const shipContainer = document.querySelector('#shipContainer');\n    removeAllChildNodes(shipContainer);\n\n    if (shipContainer.childElementCount < 1) {\n      document.querySelector('#start-button').disabled = false;\n      document.querySelector('#rotate-button').disabled = true;\n    }\n  }\n\n  function loadShipStart(\n    shipSizeArray = [5, 4, 3, 3, 2],\n    parentNode = setupControls\n  ) {\n    const rotateBtn = document.createElement('button');\n    rotateBtn.setAttribute('id', 'rotate-button');\n    rotateBtn.addEventListener('click', rotateCurrentShip);\n    rotateBtn.textContent = 'Rotate Ship';\n    const shipContainer = document.createElement('div');\n    shipContainer.setAttribute('id', 'shipContainer');\n    const resetBoardBtn = document.createElement('button');\n    resetBoardBtn.textContent = 'Reset Board';\n    resetBoardBtn.addEventListener('click', () => {\n      loadStartScreen();\n    });\n\n    // Create a ship div for every ship\n    shipSizeArray.forEach((shipSize) => {\n      const ship = document.createElement('div');\n      ship.classList.add('draggable');\n      // ship.classList.add('ship');\n\n      // ship.draggable = true;\n      ship.dataset.isHorizontal = true;\n      ship.addEventListener('dragstart', dragStart);\n      function dragStart(event) {\n        event.dataTransfer.clearData();\n        event.dataTransfer.setData('text/plain', JSON.stringify({ shipSize }));\n      }\n      ship.addEventListener('dragend', dragEnd);\n      function dragEnd(event) {\n        removeDragHoverCells();\n      }\n\n      // Add divs equal to ship size to each ship div\n      for (let i = 0; i < shipSize; i++) {\n        const shipUnit = document.createElement('div');\n        // shipUnit.textContent = i;\n        shipUnit.dataset.index = i;\n        shipUnit.classList.add('ship-unit');\n        // shipUnit.classList.add('grid-cell');\n        ship.appendChild(shipUnit);\n      }\n\n      shipContainer.append(ship);\n    });\n\n    shipContainer.firstChild.draggable = true;\n\n    parentNode.append(rotateBtn, shipContainer, resetBoardBtn);\n\n    function rotateCurrentShip() {\n      horizontal = !horizontal;\n      if (horizontal) {\n        document\n          .querySelector('#shipContainer > div:nth-child(1)')\n          .classList.remove('vertical');\n      } else {\n        document\n          .querySelector('#shipContainer > div:nth-child(1)')\n          .classList.add('vertical');\n      }\n    }\n  }\n\n  function removeDragHoverCells() {\n    const hoveredCells = document.querySelectorAll('.dragHover');\n    hoveredCells.forEach((cell) =>\n      cell.classList.remove('dragHover', 'dragHover-valid', 'dragHover-invalid')\n    );\n  }\n}\n\nfunction loadGame() {\n  removeAllChildNodes(main); // remove grid setup elements\n  removeAllChildNodes(player1Container);\n  removeAllChildNodes(player2Container);\n\n  // Random board sets players when called\n  // If ships were dragged onto board, sets players needs to be called here\n  if (_gameController__WEBPACK_IMPORTED_MODULE_0__.players.length === 0) {\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.resetPlayers();\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.setPlayers();\n  }\n\n  const boardContainer1 = loadBoardContainer(\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.players[0],\n    true,\n    player1Container\n  );\n  const boardContainer2 = loadBoardContainer(\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.players[1],\n    false,\n    player2Container\n  );\n\n  const player1Name = document.createElement('h2');\n  player1Name.textContent = _gameController__WEBPACK_IMPORTED_MODULE_0__.players[0].name;\n  player1Name.classList.add('player-name');\n\n  const player2Name = document.createElement('h2');\n  player2Name.textContent = _gameController__WEBPACK_IMPORTED_MODULE_0__.players[1].name;\n  player2Name.classList.add('player-name');\n\n  player1Container.append(boardContainer1, player1Name);\n  player2Container.append(boardContainer2, player2Name);\n  main.append(player1Container, player2Container);\n}\n\nfunction loadBoardContainer(currentPlayer, showAllShips) {\n  const boardContainer = document.createElement('div');\n  boardContainer.classList.add('grid');\n  const gridValues = currentPlayer.playerBoard.board;\n  const gridSize = gridValues.length;\n\n  for (let i = 0; i < gridSize; i++) {\n    for (let j = 0; j < gridSize; j++) {\n      const cell = document.createElement('div');\n      cell.classList.add('grid-cell');\n      if (!showAllShips) {\n        // Computer player board inputted so add coordinate data for player to click\n        cell.dataset.xCoord = i;\n        cell.dataset.yCoord = j;\n        cell.addEventListener('click', clickHandlerBoard);\n      }\n      if (gridValues[i][j].hitStatus !== null) {\n        // Cell has been attacked\n        if (gridValues[i][j].hitStatus) {\n          cell.classList.add('hit');\n          // cell.textContent = 'X';\n        } else {\n          cell.classList.add('miss');\n          // cell.textContent = 'O';\n        }\n      }\n\n      if (showAllShips && gridValues[i][j].containsShip) {\n        cell.classList.add('ship');\n      }\n\n      boardContainer.append(cell);\n    }\n  }\n\n  return boardContainer;\n}\n\nfunction loadWinner(winningPlayer) {\n  revealPlayer2Ships();\n  disableGridCells();\n\n  const gameEndPopup = document.createElement('div');\n  gameEndPopup.classList.add('pop-up');\n\n  const winningMessage = document.createElement('h2');\n  winningMessage.setAttribute('id', 'winning-message');\n  winningMessage.textContent = `${winningPlayer.name} wins!`;\n\n  const newGameBtn = document.createElement('button');\n  newGameBtn.textContent = 'Start New Game';\n  newGameBtn.addEventListener('click', loadStartScreen);\n\n  gameEndPopup.append(winningMessage, newGameBtn);\n  main.prepend(gameEndPopup);\n}\n\nfunction clickHandlerBoard(event) {\n  const coords = [event.target.dataset.xCoord, event.target.dataset.yCoord];\n\n  const player1Name = document.createElement('h2');\n  player1Name.textContent = _gameController__WEBPACK_IMPORTED_MODULE_0__.players[0].name;\n  player1Name.classList.add('player-name');\n\n  const player2Name = document.createElement('h2');\n  player2Name.textContent = _gameController__WEBPACK_IMPORTED_MODULE_0__.players[1].name;\n  player2Name.classList.add('player-name');\n\n  // Check if chosen coordinate has not been attacked yet\n  if (\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.players[1].playerBoard.board[coords[0]][coords[1]]\n      .hitStatus === null\n  ) {\n    let roundResult = _gameController__WEBPACK_IMPORTED_MODULE_0__.playRoundActive(coords);\n    removeAllChildNodes(player2Container);\n    player2Container.append(\n      loadBoardContainer(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[1], false, player2Container),\n      player2Name\n    );\n\n    // Check if player 2 lost\n    if (_gameController__WEBPACK_IMPORTED_MODULE_0__.playerLoses(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[1])) {\n      // console.log('Player 2 lost');\n      loadWinner(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[0]);\n    } else {\n      // Otherwise play the next round\n\n      roundResult = _gameController__WEBPACK_IMPORTED_MODULE_0__.playRoundActive();\n      console.log(roundResult);\n      removeAllChildNodes(player1Container);\n      player1Container.append(\n        loadBoardContainer(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[0], true),\n        player1Name\n      );\n\n      // Check if player 1 lost\n      if (_gameController__WEBPACK_IMPORTED_MODULE_0__.playerLoses(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[0])) {\n        // console.log('Player 1 lost');\n        loadWinner(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[1]);\n      }\n    }\n  }\n}\n\nfunction revealPlayer2Ships() {\n  // to be called when game ends\n  removeAllChildNodes(player2Container);\n  const player2Name = document.createElement('h2');\n  player2Name.textContent = _gameController__WEBPACK_IMPORTED_MODULE_0__.players[1].name;\n  player2Name.classList.add('player-name');\n  player2Container.append(\n    loadBoardContainer(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[1], true, player2Container), // true value indicates ships will be revealed\n    player2Name\n  );\n}\n\nfunction disableGridCells() {\n  const gridCells = document.querySelectorAll('#player2-container .grid-cell');\n  gridCells.forEach((cell) => {\n    cell.removeEventListener('click', clickHandlerBoard);\n  });\n}\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displayController.js?"
        );

        /***/
      },

    /***/ './src/scripts/gameController.js':
      /*! ***************************************!*\
  !*** ./src/scripts/gameController.js ***!
  \************************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addSetupShip": () => (/* binding */ addSetupShip),\n/* harmony export */   "clearSetupShips": () => (/* binding */ clearSetupShips),\n/* harmony export */   "generateRandomBoard": () => (/* binding */ generateRandomBoard),\n/* harmony export */   "playRoundActive": () => (/* binding */ playRoundActive),\n/* harmony export */   "playerLoses": () => (/* binding */ playerLoses),\n/* harmony export */   "players": () => (/* binding */ players),\n/* harmony export */   "resetPlayers": () => (/* binding */ resetPlayers),\n/* harmony export */   "setPlayers": () => (/* binding */ setPlayers)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.js");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/scripts/displayController.js");\n\n\n\n\nlet players = [];\nlet activePlayer = null;\nlet inActivePlayer = null;\nlet setupShips = [];\n\nfunction addSetupShip(coords) {\n  setupShips.push(coords);\n}\n\nfunction clearSetupShips() {\n  setupShips = [];\n}\n\nfunction generateSetupBoard() {\n  const setupBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)();\n  setupShips.forEach((setupShip) => {\n    setupBoard.insertShip(setupShip);\n  });\n  return setupBoard;\n}\n\nfunction setPlayers(\n  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(\'Player 1\', generateSetupBoard(), false),\n  player2 = generateComputerPlayer()\n) {\n  players.push(player1);\n  players.push(player2);\n\n  activePlayer = players[0];\n  inActivePlayer = players[1];\n}\n\nfunction resetPlayers() {\n  players = [];\n}\n\nfunction generateComputerPlayer(shipSizeArr, gridSize = 12) {\n  // shipSizeArr is an array of ship sizes to be created\n  // Example: shipSizeArr = [2, 3, 3, 4, 4, 5] generates a player with 6 ships of size 2, 3, 3, 4, 4, and 5\n  const computerBoard = generateRandomBoard(shipSizeArr, gridSize);\n\n  return (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(\'Computer\', computerBoard, true);\n}\n\nfunction generateRandomBoard(shipSizeArr = [5, 4, 3, 3, 2], gridSize = 12) {\n  const randomBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)(gridSize);\n\n  // Assume total ship area < grid area or add check here later\n\n  shipSizeArr.forEach((shipSize) => {\n    const { possibleHorizontalCoords, possibleVerticalCoords } =\n      randomBoard.getPossibleShipCoords(shipSize);\n\n    // Randomly choose between horizontal and vertical\n    const isHorizontal = Math.random() > 0.5;\n\n    // Randomly choose coordinates in array\n    let selectedCoords = [];\n    if (isHorizontal) {\n      selectedCoords =\n        possibleHorizontalCoords[\n          Math.floor(Math.random() * possibleHorizontalCoords.length)\n        ];\n    } else {\n      selectedCoords =\n        possibleVerticalCoords[\n          Math.floor(Math.random() * possibleVerticalCoords.length)\n        ];\n    }\n\n    // Insert the ship into randomBoard\n    randomBoard.insertShip(selectedCoords);\n  });\n\n  return randomBoard;\n}\n\nfunction playRoundActive(coords) {\n  // Have the active player play a round on opponents coords then swap active and inactive\n\n  const roundResults = activePlayer.playRound(inActivePlayer, coords); // playRound will automatically plug likely coords for computer player\n  const temp = activePlayer;\n  activePlayer = inActivePlayer;\n  inActivePlayer = temp;\n\n  return roundResults;\n}\n\nfunction playerLoses(currentPlayer) {\n  return currentPlayer.playerBoard.allShipsSunk();\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameController.js?'
        );

        /***/
      },

    /***/ './src/scripts/gameboard.js':
      /*! **********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \********************************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "gameboard": () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");\n\n\nconst gameboard = function (gridSize = 12) {\n  const board = [];\n\n  // Create board of empty objects\n  for (let i = 0; i < gridSize; i++) {\n    board.push([]);\n    for (let j = 0; j < gridSize; j++) {\n      board[i].push({\n        hitStatus: null,\n        containsShip: false,\n        shipIndex: null,\n      });\n    }\n  }\n\n  const ships = [];\n\n  const insertShip = (coordinates) => {\n    coordinates.forEach((coordinate) => {\n      // Check if any coordinates are outside the board\n      if (coordinate[0] >= gridSize || coordinate[1] >= gridSize) {\n        throw new Error(\n          `[${coordinate[0]},${coordinate[1]}] is outside of grid size ${gridSize}`\n        );\n      }\n\n      // Check if any coordinates have a ship in them already\n      if (board[coordinate[0]][coordinate[1]].containsShip) {\n        throw new Error(\n          `[${coordinate[0]},${coordinate[1]}] is already occupied`\n        );\n      }\n    });\n\n    // Add ship to ships array\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(coordinates.length));\n\n    // Update contains ship status and index in ships array\n    coordinates.forEach((coordinate) => {\n      board[coordinate[0]][coordinate[1]].containsShip = true;\n      board[coordinate[0]][coordinate[1]].shipIndex = ships.length - 1;\n    });\n  };\n\n  const receiveAttack = (coordinate) => {\n    if (board[coordinate[0]][coordinate[1]].hitStatus !== null) {\n      throw new Error(\n        `[${coordinate[0]},${coordinate[1]}] has already been attacked`\n      );\n    }\n\n    if (!board[coordinate[0]][coordinate[1]].containsShip) {\n      board[coordinate[0]][coordinate[1]].hitStatus = false;\n    } else {\n      board[coordinate[0]][coordinate[1]].hitStatus = true;\n      ships[board[coordinate[0]][coordinate[1]].shipIndex].hit();\n    }\n  };\n\n  const allShipsSunk = () => {\n    let noSunkShips = true;\n    ships.forEach((currentShip) => {\n      if (!currentShip.isSunk()) {\n        noSunkShips = false;\n      }\n    });\n    return noSunkShips;\n  };\n\n  const getAttackableSpaces = () => {\n    const attackableSpaces = [];\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board[i].length; j++) {\n        if (board[i][j].hitStatus === null) {\n          attackableSpaces.push([i, j]);\n        }\n      }\n    }\n    return attackableSpaces;\n  };\n\n  const getRandomAttackableSpace = () => {\n    const possibleSpaces = getAttackableSpaces();\n    return possibleSpaces[Math.floor(Math.random() * possibleSpaces.length)];\n  };\n\n  const getPossibleShipCoords = (shipLength) => {\n    const horizontalCoords = [];\n    const verticalCoords = [];\n\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board[i].length; j++) {\n        // Create an array of horizontal and vertical  coordinates for the potential ship\n        const tempHorizontalCoords = [];\n        const tempVerticalCoords = [];\n\n        for (let k = 0; k < shipLength; k++) {\n          // Check that the coordinate is inside the board and not occupied by a ship\n          if (i + k < board.length && !board[i + k][j].containsShip) {\n            tempHorizontalCoords.push([i + k, j]);\n          }\n\n          if (j + k < board.length && !board[i][j + k].containsShip) {\n            tempVerticalCoords.push([i, j + k]);\n          }\n        }\n\n        // if the tempCoordinates length matches shipLength then all coordinates are valid\n        if (tempHorizontalCoords.length === shipLength) {\n          horizontalCoords.push(tempHorizontalCoords);\n        }\n\n        if (tempVerticalCoords.length === shipLength) {\n          verticalCoords.push(tempVerticalCoords);\n        }\n      }\n    }\n\n    return {\n      possibleHorizontalCoords: horizontalCoords,\n      possibleVerticalCoords: verticalCoords,\n    };\n  };\n\n  const getHits = () => {\n    const hits = [];\n\n    // Loop through each row and column of the board\n    for (let row = 0; row < board.length; row++) {\n      for (let col = 0; col < board[row].length; col++) {\n        // If the space has been hit and contains a ship, add it to the hits array\n        if (\n          board[row][col].hitStatus === true &&\n          board[row][col].containsShip\n        ) {\n          hits.push([row, col]);\n        }\n      }\n    }\n\n    return hits;\n  };\n\n  const validNeighbor = (coord) => {\n    // returns true if given coordinates are valid unhit spaces\n    if (\n      coord[0] >= 0 &&\n      coord[0] < board.length &&\n      coord[1] >= 0 &&\n      coord[1] < board.length\n    ) {\n      // coord is within board bounds\n      if (board[coord[0]][coord[1]].hitStatus === null) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  return {\n    get board() {\n      return board;\n    },\n    get ships() {\n      return ships;\n    },\n    insertShip,\n    receiveAttack,\n    allShipsSunk,\n    getRandomAttackableSpace,\n    getPossibleShipCoords,\n    getHits,\n    validNeighbor,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?'
        );

        /***/
      },

    /***/ './src/scripts/player.js':
      /*! *******************************!*\
  !*** ./src/scripts/player.js ***!
  \****************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n\n\nconst player = function (name, playerBoard, computerPlayer) {\n  const playRound = (\n    opponent,\n    targetCoords = chooseUnhitSpace(opponent.playerBoard)\n  ) => {\n    opponent.playerBoard.receiveAttack(targetCoords);\n\n    // Return hitShip = true if the player hit an opponent ship\n    return {\n      chosenCoords: targetCoords,\n      hitShip:\n        opponent.playerBoard.board[targetCoords[0]][targetCoords[1]]\n          .containsShip,\n    };\n  };\n\n  function chooseUnhitSpace(opponentBoard) {\n    if (computerPlayer) {\n      // return chooseRandomUnhitSpace(opponentBoard.board);\n      return chooseLikelyUnhitSpace(opponentBoard);\n    }\n    let xCoord = prompt('Enter an x-coordinate: ');\n    let yCoord = prompt('Enter a y-coordinate: ');\n\n    while (opponentBoard.board[xCoord][yCoord].hitStatus !== null) {\n      alert('You have already chosen that space');\n      xCoord = prompt('Enter an x-coordinate: ');\n      yCoord = prompt('Enter a y-coordinate: ');\n    }\n\n    return [xCoord, yCoord];\n  }\n\n  function chooseRandomUnhitSpace(grid) {\n    const availableCoords = [];\n\n    // Loop through grid and add hitStatus: null coordinates\n    for (let i = 0; i < grid.length; i++) {\n      for (let j = 0; j < grid[i].length; j++) {\n        if (grid[i][j].hitStatus === null) {\n          availableCoords.push([i, j]);\n        }\n      }\n    }\n\n    return availableCoords[Math.floor(Math.random() * availableCoords.length)];\n  }\n\n  function chooseLikelyUnhitSpace(board) {\n    const grid = board.board;\n    const hitCoords = board.getHits();\n    const likelyCoords = [];\n\n    // Loop through hitCoords and add valid neighbors to availableCoords\n    hitCoords.forEach((hitCoord) => {\n      const neighbors = [\n        [hitCoord[0] + 1, hitCoord[1]], // x + 1\n        [hitCoord[0], hitCoord[1] + 1], // y + 1\n        [hitCoord[0] - 1, hitCoord[1]], // x - 1\n        [hitCoord[0], hitCoord[1] - 1], // y - 1\n      ];\n\n      // Loop through each neighbor and add to availableCoords if valid and not already added\n      neighbors.forEach((neighbor) => {\n        // Check if valid neighbor\n        if (board.validNeighbor(neighbor)) {\n          // Check if neighbor is not already in availableCoords\n          if (!likelyCoords.includes(neighbor)) {\n            likelyCoords.push(neighbor);\n          }\n        }\n      });\n    });\n\n    if (likelyCoords.length > 0) {\n      return likelyCoords[0];\n    }\n    return chooseRandomUnhitSpace(grid);\n  }\n\n  return {\n    name,\n    get playerBoard() {\n      return playerBoard;\n    },\n    playRound,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?"
        );

        /***/
      },

    /***/ './src/scripts/ship.js':
      /*! *****************************!*\
  !*** ./src/scripts/ship.js ***!
  \**************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ship": () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = function (length) {\n  let health = length;\n\n  const hit = () => {\n    health -= 1;\n  };\n\n  const isSunk = () => health <= 0;\n\n  return {\n    length,\n    hit,\n    get health() {\n      return health;\n    },\n    isSunk,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?'
        );

        /***/
      },

    /** *** */
  };
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */
    }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ const module = (__webpack_module_cache__[moduleId] = {
      /** *** */ id: moduleId,
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    });
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */
  }
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/compat get default export */
  /** *** */ (() => {
    /** *** */ // getDefaultExport function for compatibility with non-harmony modules
    /** *** */ __webpack_require__.n = (module) => {
      /** *** */ const getter =
        module && module.__esModule
          ? /** *** */ () => module.default
          : /** *** */ () => module;
      /** *** */ __webpack_require__.d(getter, { a: getter });
      /** *** */ return getter;
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (const key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/make namespace object */
  /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = (exports) => {
      /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/nonce */
  /** *** */ (() => {
    /** *** */ __webpack_require__.nc = undefined;
    /** *** */
  })();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ // startup
  /** *** */ // Load entry module and return exports
  /** *** */ // This entry module can't be inlined because the eval devtool is used.
  /** *** */ const __webpack_exports__ = __webpack_require__('./src/index.js');
  /** *** */
  /** *** */
})();
