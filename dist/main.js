/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oxygen&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --section-padding: 8px;\\n  --section-margin: 1rem;\\n  --border-radius-default: 0.75rem;\\n  --primary-color: #9aa9fd;\\n  --primary-color-dark: #008181;\\n  --shade-color: #494949da;\\n  --color-shadow: grey;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Oxygen\\\", sans-serif;\\n}\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  font-size: 100%;\\n}\\n\\nbutton {\\n  background-color: var(--primary-color);\\n  color: white;\\n  border: none;\\n  border-radius: 32px;\\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\\n  text-decoration: none;\\n  font-size: 1.5rem;\\n  transition-duration: 0.2s;\\n}\\n\\nbutton:not(:disabled),\\ninput:not(:disabled),\\ninput:not(:disabled) + label,\\na {\\n  cursor: pointer;\\n}\\n\\nbutton:not(:disabled):hover {\\n  background-color: var(--primary-color-dark);\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: repeat(12, 1fr);\\n}\\n\\n.grid-cell {\\n  border: solid 1px black;\\n  padding: var(--section-padding);\\n}\\n\\n.ship {\\n  background: gray;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _scripts_displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/displayController */ \"./src/scripts/displayController.js\");\n\n\n\n// console.log('hello world');\n\n// User will click load Game\n_scripts_displayController__WEBPACK_IMPORTED_MODULE_1__.loadStartScreen();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/displayController.js":
/*!******************************************!*\
  !*** ./src/scripts/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickHandlerBoard\": () => (/* binding */ clickHandlerBoard),\n/* harmony export */   \"loadBoardContainer\": () => (/* binding */ loadBoardContainer),\n/* harmony export */   \"loadGame\": () => (/* binding */ loadGame),\n/* harmony export */   \"loadStartScreen\": () => (/* binding */ loadStartScreen),\n/* harmony export */   \"loadWinnerMessage\": () => (/* binding */ loadWinnerMessage)\n/* harmony export */ });\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ \"./src/scripts/gameController.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\n\n\nconst main = document.querySelector('main');\n\nconst player1Container = document.createElement('div');\nconst player2Container = document.createElement('div');\nplayer1Container.setAttribute('id', 'player1-container');\nplayer2Container.setAttribute('id', 'player2-container');\n\nfunction loadStartScreen() {\n  removeAllChildNodes(main);\n  console.log('Start screen loaded');\n  loadGridSetup(main);\n  const clearBoardBtn = document.createElement('button');\n  const randomizeBoardBtn = document.createElement('button');\n\n  const startButton = document.createElement('button');\n  startButton.setAttribute('id', 'start-button');\n  startButton.textContent = 'Start Game';\n  startButton.addEventListener('click', () => {\n    loadGame();\n  });\n\n  main.appendChild(startButton);\n\n  function loadGridSetup(parentNode, gridSize = 12) {\n    const gridContainer = document.createElement('div');\n    gridContainer.classList.add('grid');\n\n    for (let i = 0; i < gridSize; i++) {\n      for (let j = 0; j < gridSize; j++) {\n        const cell = document.createElement('div');\n        cell.textContent = `${i}, ${j}`;\n        cell.dataset.xSetup = i;\n        cell.dataset.ySetup = j;\n        cell.classList.add('grid-cell');\n\n        gridContainer.appendChild(cell);\n      }\n    }\n\n    parentNode.append(gridContainer);\n  }\n}\n\nfunction loadGame() {\n  removeAllChildNodes(main); // remove grid setup elements\n  removeAllChildNodes(player1Container);\n  removeAllChildNodes(player2Container);\n  _gameController__WEBPACK_IMPORTED_MODULE_0__.resetPlayers();\n  _gameController__WEBPACK_IMPORTED_MODULE_0__.setPlayers(); // input player 1 selected ship locations here\n  main.append(player1Container, player2Container);\n\n  const boardContainer1 = loadBoardContainer(\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.players[0],\n    true,\n    player1Container\n  );\n  const boardContainer2 = loadBoardContainer(\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.players[1],\n    false,\n    player2Container\n  );\n\n  player1Container.appendChild(boardContainer1);\n  player2Container.appendChild(boardContainer2);\n}\n\nfunction loadBoardContainer(currentPlayer, showAllShips, node) {\n  const boardContainer = document.createElement('div');\n  boardContainer.classList.add('grid');\n  const gridValues = currentPlayer.playerBoard.board;\n  const gridSize = gridValues.length;\n\n  for (let i = 0; i < gridSize; i++) {\n    for (let j = 0; j < gridSize; j++) {\n      const cell = document.createElement('div');\n      cell.classList.add('grid-cell');\n      if (!showAllShips) {\n        // Computer player board inputted so add coordinate data for player to click\n        cell.dataset.xCoord = i;\n        cell.dataset.yCoord = j;\n        cell.addEventListener('click', clickHandlerBoard);\n      }\n      if (gridValues[i][j].hitStatus !== null) {\n        // Cell has been attacked\n        if (gridValues[i][j].hitStatus) {\n          cell.classList.add('hit');\n          cell.textContent = 'X';\n        } else {\n          cell.classList.add('miss');\n          cell.textContent = 'O';\n        }\n      }\n\n      if (showAllShips && gridValues[i][j].containsShip) {\n        cell.classList.add('ship');\n      }\n\n      boardContainer.append(cell);\n    }\n  }\n\n  return boardContainer;\n\n  // parentNode.append(boardContainer);\n  // parentNode = boardContainer;\n}\n\nfunction loadWinnerMessage(winningPlayer) {\n  disableGridCells();\n\n  const winningMessage = document.createElement('div');\n  winningMessage.setAttribute('id', 'winning-message');\n  winningMessage.textContent = `${winningPlayer.name} wins!`;\n\n  const newGameBtn = document.createElement('button');\n  newGameBtn.textContent = 'Start New Game';\n  newGameBtn.addEventListener('click', loadStartScreen);\n\n  main.append(winningMessage, newGameBtn);\n}\n\nfunction clickHandlerBoard(event) {\n  console.log('clickHandlerBoard called');\n  console.log(event.target);\n  const coords = [event.target.dataset.xCoord, event.target.dataset.yCoord];\n  // Check if chosen coordinate has not been attacked yet\n  if (\n    _gameController__WEBPACK_IMPORTED_MODULE_0__.players[1].playerBoard.board[coords[0]][coords[1]]\n      .hitStatus === null\n  ) {\n    let roundResult = _gameController__WEBPACK_IMPORTED_MODULE_0__.playRoundActive(coords);\n    console.log(roundResult);\n    removeAllChildNodes(player2Container);\n    player2Container.appendChild(\n      loadBoardContainer(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[1], false, player2Container)\n    );\n\n    // Check if player 2 lost\n    if (_gameController__WEBPACK_IMPORTED_MODULE_0__.playerLoses(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[1])) {\n      console.log('Player 2 lost');\n      loadWinnerMessage(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[0]);\n    } else {\n      // Otherwise play the next round\n\n      roundResult = _gameController__WEBPACK_IMPORTED_MODULE_0__.playRoundActive();\n      console.log(roundResult);\n      removeAllChildNodes(player1Container);\n      player1Container.appendChild(\n        loadBoardContainer(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[0], true)\n      );\n\n      // Check if player 1 lost\n      if (_gameController__WEBPACK_IMPORTED_MODULE_0__.playerLoses(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[0])) {\n        console.log('Player 1 lost');\n        loadWinnerMessage(_gameController__WEBPACK_IMPORTED_MODULE_0__.players[1]);\n      }\n    }\n  }\n}\n\nfunction disableGridCells() {\n  const gridCells = document.querySelectorAll('#player2-container .grid-cell');\n  gridCells.forEach((cell) => {\n    cell.removeEventListener('click', clickHandlerBoard);\n  });\n}\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displayController.js?");

/***/ }),

/***/ "./src/scripts/gameController.js":
/*!***************************************!*\
  !*** ./src/scripts/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playRoundActive\": () => (/* binding */ playRoundActive),\n/* harmony export */   \"playerLoses\": () => (/* binding */ playerLoses),\n/* harmony export */   \"players\": () => (/* binding */ players),\n/* harmony export */   \"resetPlayers\": () => (/* binding */ resetPlayers),\n/* harmony export */   \"setPlayers\": () => (/* binding */ setPlayers)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ \"./src/scripts/displayController.js\");\n\n\n\n\nlet players = [];\nlet activePlayer = null;\nlet inActivePlayer = null;\n\n// const gameController = (player1, player2) => {\n//   let gameComplete = false;\n//   let player1Turn = true;\n//   let winner = null;\n//   while (!gameComplete) {\n//     if (player1Turn) {\n//       const { chosenCoords, hitShip } = player1.playRound(player2);\n//       if (player2.playerBoard.allShipsSunk()) {\n//         gameComplete = true;\n//         winner = player1;\n//       }\n//       displayController.loadBoardContainer(player2, false);\n//       player1Turn = false;\n//     } else {\n//       const { chosenCoords, hitShip } = player2.playRound(player1);\n//       if (player1.playerBoard.allShipsSunk()) {\n//         gameComplete = true;\n//         winner = player2;\n//       }\n//       displayController.loadBoardContainer(player1, true);\n//       player1Turn = true;\n//     }\n//   }\n\n//   return winner;\n// };\n\nfunction setPlayers(\n  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)('Player 1', generateRandomBoard(), false),\n  player2 = generateComputerPlayer()\n) {\n  players.push(player1);\n  players.push(player2);\n\n  activePlayer = players[0];\n  inActivePlayer = players[1];\n}\n\nfunction resetPlayers() {\n  players = [];\n}\n\nfunction generateComputerPlayer(shipSizeArr, gridSize = 12) {\n  // shipSizeArr is an array of ship sizes to be created\n  // Example: shipSizeArr = [2, 3, 3, 4, 4, 5] generates a player with 6 ships of size 2, 3, 3, 4, 4, and 5\n  const computerBoard = generateRandomBoard(shipSizeArr, gridSize);\n\n  return (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)('Computer', computerBoard, true);\n}\n\nfunction generateRandomBoard(shipSizeArr = [2, 2], gridSize = 12) {\n  const randomBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)(gridSize);\n  // TEMPORARY BOARD, replace with random board code later\n  // randomBoard.insertShip([[2, 2]]);\n\n  // Assume total ship area < grid area or add check here later\n\n  shipSizeArr.forEach((shipSize) => {\n    const { possibleHorizontalCoords, possibleVerticalCoords } =\n      randomBoard.getPossibleShipCoords(shipSize);\n\n    // Randomly choose between horizontal and vertical\n    const isHorizontal = Math.random() > 0.5;\n\n    // Randomly choose coordinates in array\n    let selectedCoords = [];\n    if (isHorizontal) {\n      selectedCoords =\n        possibleHorizontalCoords[\n          Math.floor(Math.random() * possibleHorizontalCoords.length)\n        ];\n    } else {\n      selectedCoords =\n        possibleVerticalCoords[\n          Math.floor(Math.random() * possibleVerticalCoords.length)\n        ];\n    }\n\n    // Insert the ship into randomBoard\n    randomBoard.insertShip(selectedCoords);\n  });\n\n  return randomBoard;\n\n  // function getPossibleShipCoords(board, shipLength) {\n  //   const horizontalCoords = [];\n  //   const verticalCoords = [];\n\n  //   for (let i = 0; i < board.length; i++) {\n  //     for (let j = 0; j < board[i].length; j++) {\n  //       // Create an array of horizontal and vertical  coordinates for the potential ship\n  //       const tempHorizontalCoords = [];\n  //       const tempVerticalCoords = [];\n\n  //       for (let k = 0; k < shipLength; k++) {\n  //         // Check that the coordinate is inside the board and not occupied by a ship\n  //         if (i + k < board.length && !board[i + k][j].containsShip) {\n  //           tempHorizontalCoords.push([i + k, j]);\n  //         }\n\n  //         if (j + k < board.length && !board[i][j + k].containsShip) {\n  //           tempVerticalCoords.push([i, j + k]);\n  //         }\n  //       }\n\n  //       // if the tempCoordinates length matches shipLength then all coordinates are valid\n  //       if (tempHorizontalCoords.length === shipLength) {\n  //         horizontalCoords.push(tempHorizontalCoords);\n  //       }\n\n  //       if (tempVerticalCoords.length === shipLength) {\n  //         verticalCoords.push(tempVerticalCoords);\n  //       }\n  //     }\n  //   }\n\n  //   return {\n  //     possibleHorizontalCoords: horizontalCoords,\n  //     possibleVerticalCoords: verticalCoords,\n  //   };\n  // }\n}\n\nfunction playRoundActive(\n  coords = inActivePlayer.playerBoard.getRandomAttackableSpace()\n) {\n  // Have the active player play a round on opponents coords then swap active and inactive\n  // Use a random attackable space from the inactive player board if no coordinate given\n\n  const roundResults = activePlayer.playRound(inActivePlayer, coords);\n  const temp = activePlayer;\n  activePlayer = inActivePlayer;\n  inActivePlayer = temp;\n\n  return roundResults;\n}\n\nfunction playerLoses(currentPlayer) {\n  return currentPlayer.playerBoard.allShipsSunk();\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameController.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboard\": () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\n\nconst gameboard = function (gridSize = 12) {\n  const board = [];\n\n  // Create board of empty objects\n  for (let i = 0; i < gridSize; i++) {\n    board.push([]);\n    for (let j = 0; j < gridSize; j++) {\n      board[i].push({\n        hitStatus: null,\n        containsShip: false,\n        shipIndex: null,\n      });\n    }\n  }\n\n  const ships = [];\n\n  const insertShip = (coordinates) => {\n    coordinates.forEach((coordinate) => {\n      // Check if any coordinates are outside the board\n      if (coordinate[0] >= gridSize || coordinate[1] >= gridSize) {\n        throw new Error(\n          `[${coordinate[0]},${coordinate[1]}] is outside of grid size ${gridSize}`\n        );\n      }\n\n      // Check if any coordinates have a ship in them already\n      if (board[coordinate[0]][coordinate[1]].containsShip) {\n        // console.log(board);\n        // console.log(`coordinate: ${coordinate}`);\n        throw new Error(\n          `[${coordinate[0]},${coordinate[1]}] is already occupied`\n        );\n      }\n    });\n\n    // Add ship to ships array\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__.ship)(coordinates.length));\n\n    // Update contains ship status and index in ships array\n    coordinates.forEach((coordinate) => {\n      board[coordinate[0]][coordinate[1]].containsShip = true;\n      board[coordinate[0]][coordinate[1]].shipIndex = ships.length - 1;\n    });\n  };\n\n  const receiveAttack = (coordinate) => {\n    if (board[coordinate[0]][coordinate[1]].hitStatus !== null) {\n      throw new Error(\n        `[${coordinate[0]},${coordinate[1]}] has already been attacked`\n      );\n    }\n\n    if (!board[coordinate[0]][coordinate[1]].containsShip) {\n      board[coordinate[0]][coordinate[1]].hitStatus = false;\n    } else {\n      board[coordinate[0]][coordinate[1]].hitStatus = true;\n      // console.log(board[coordinate[0]][coordinate[1]].shipIndex);\n      ships[board[coordinate[0]][coordinate[1]].shipIndex].hit();\n    }\n  };\n\n  const allShipsSunk = () => {\n    let noSunkShips = true;\n    ships.forEach((currentShip) => {\n      if (!currentShip.isSunk()) {\n        noSunkShips = false;\n      }\n    });\n    return noSunkShips;\n  };\n\n  const getAttackableSpaces = () => {\n    const attackableSpaces = [];\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board[i].length; j++) {\n        if (board[i][j].hitStatus === null) {\n          attackableSpaces.push([i, j]);\n        }\n      }\n    }\n    return attackableSpaces;\n  };\n\n  const getRandomAttackableSpace = () => {\n    const possibleSpaces = getAttackableSpaces();\n    return possibleSpaces[Math.floor(Math.random() * possibleSpaces.length)];\n  };\n\n  const getPossibleShipCoords = (shipLength) => {\n    const horizontalCoords = [];\n    const verticalCoords = [];\n\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board[i].length; j++) {\n        // Create an array of horizontal and vertical  coordinates for the potential ship\n        const tempHorizontalCoords = [];\n        const tempVerticalCoords = [];\n\n        for (let k = 0; k < shipLength; k++) {\n          // Check that the coordinate is inside the board and not occupied by a ship\n          if (i + k < board.length && !board[i + k][j].containsShip) {\n            tempHorizontalCoords.push([i + k, j]);\n          }\n\n          if (j + k < board.length && !board[i][j + k].containsShip) {\n            tempVerticalCoords.push([i, j + k]);\n          }\n        }\n\n        // if the tempCoordinates length matches shipLength then all coordinates are valid\n        if (tempHorizontalCoords.length === shipLength) {\n          horizontalCoords.push(tempHorizontalCoords);\n        }\n\n        if (tempVerticalCoords.length === shipLength) {\n          verticalCoords.push(tempVerticalCoords);\n        }\n      }\n    }\n\n    return {\n      possibleHorizontalCoords: horizontalCoords,\n      possibleVerticalCoords: verticalCoords,\n    };\n  };\n\n  return {\n    get board() {\n      return board;\n    },\n    get ships() {\n      return ships;\n    },\n    insertShip,\n    receiveAttack,\n    allShipsSunk,\n    getRandomAttackableSpace,\n    getPossibleShipCoords,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n\n\n// const prompt = require('prompt-sync')({ sigint: true });\n\nconst player = function (name, playerBoard, computerPlayer) {\n  const playRound = (\n    opponent,\n    targetCoords = chooseUnhitSpace(opponent.playerBoard)\n  ) => {\n    // const targetCoords = chooseUnhitSpace(opponent.playerBoard);\n    opponent.playerBoard.receiveAttack(targetCoords);\n\n    // Return hitShip = true if the player hit an opponent ship\n    return {\n      chosenCoords: targetCoords,\n      hitShip:\n        opponent.playerBoard.board[targetCoords[0]][targetCoords[1]]\n          .containsShip,\n    };\n  };\n\n  function chooseUnhitSpace(opponentBoard) {\n    if (computerPlayer) {\n      return chooseRandomUnhitSpace(opponentBoard.board);\n    }\n    let xCoord = prompt('Enter an x-coordinate: ');\n    let yCoord = prompt('Enter a y-coordinate: ');\n\n    while (opponentBoard.board[xCoord][yCoord].hitStatus !== null) {\n      alert('You have already chosen that space');\n      xCoord = prompt('Enter an x-coordinate: ');\n      yCoord = prompt('Enter a y-coordinate: ');\n    }\n\n    return [xCoord, yCoord];\n  }\n\n  function chooseRandomUnhitSpace(grid) {\n    const availableCoords = [];\n\n    // Loop through grid and add hitStatus: null coordinates\n    for (let i = 0; i < grid.length; i++) {\n      for (let j = 0; j < grid[i].length; j++) {\n        if (grid[i][j].hitStatus === null) {\n          availableCoords.push([i, j]);\n        }\n      }\n    }\n\n    return availableCoords[Math.floor(Math.random() * availableCoords.length)];\n  }\n\n  return {\n    name,\n    get playerBoard() {\n      return playerBoard;\n    },\n    playRound,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ship\": () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = function (length) {\n  let health = length;\n\n  const hit = () => {\n    health -= 1;\n  };\n\n  const isSunk = () => health <= 0;\n\n  return {\n    length,\n    hit,\n    get health() {\n      return health;\n    },\n    isSunk,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;