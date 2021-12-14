"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/fonts.js":
/*!*****************************!*\
  !*** ./components/fonts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Fonts = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {\n        styles: `\n        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');\n        `,\n        __source: {\n            fileName: \"/mnt/e/Documents/CODINGG/WEBSITE PART THREE (MOST POWERFULLEST)/davidliu-website3/components/fonts.js\",\n            lineNumber: 4,\n            columnNumber: 5\n        },\n        __self: undefined\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fonts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZvbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUV2QyxLQUFLLENBQUNDLEtBQUssNEVBQ05ELGtEQUFNO1FBQ0hFLE1BQU0sR0FBRzs7Ozs7Ozs7O0FBTWpCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXZpZGxpdS13ZWJzaXRlMy8uL2NvbXBvbmVudHMvZm9udHMuanM/MzQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuXHJcbmNvbnN0IEZvbnRzID0gKCkgPT4gKFxyXG4gICAgPEdsb2JhbFxyXG4gICAgICAgIHN0eWxlcz17YFxyXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU0rUExVUytSb3VuZGVkKzFjOndnaHRAMzAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICBgfVxyXG4gICAgLz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9udHMiXSwibmFtZXMiOlsiR2xvYmFsIiwiRm9udHMiLCJzdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/fonts.js\n");

/***/ }),

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#f0e7db', '#202023')(props)\n            }\n        })\n};\nconst components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderLineOffset: 6,\n                textDecorationColor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: (props)=>({\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#3d7aed', '#ff63c3')(props),\n                textUnderlineOffset: 3\n            })\n    }\n};\nconst fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nconst colors = {\n    glassTeal: '#88ccca'\n};\nconst config = {\n    initialColorMode: 'dark'\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    styles,\n    components,\n    colors,\n    fonts\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDRDtBQUU3QyxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLE1BQU0sR0FBRUMsS0FBSyxJQUFLLENBQUM7WUFDZkMsSUFBSSxFQUFFLENBQUM7Z0JBQ0hDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxDQUFTLFVBQUUsQ0FBUyxVQUFFRyxLQUFLO1lBQ3hDLENBQUM7UUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELEtBQUssQ0FBQ0csVUFBVSxHQUFHLENBQUM7SUFDaEJDLE9BQU8sRUFBRSxDQUFDO1FBQ05DLFFBQVEsRUFBRSxDQUFDO1lBQ1AsQ0FBZSxnQkFBRSxDQUFDO2dCQUNkQyxjQUFjLEVBQUUsQ0FBVztnQkFDM0JDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QkMsbUJBQW1CLEVBQUUsQ0FBUztnQkFDOUJDLHVCQUF1QixFQUFFLENBQUM7Z0JBQzFCQyxTQUFTLEVBQUUsQ0FBQztnQkFDWkMsWUFBWSxFQUFFLENBQUM7WUFDbkIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0RDLElBQUksRUFBRSxDQUFDO1FBQ0hDLFNBQVMsR0FBRWQsS0FBSyxJQUFLLENBQUM7Z0JBQ2xCZSxLQUFLLEVBQUVsQiw0REFBSSxDQUFDLENBQVMsVUFBRSxDQUFTLFVBQUVHLEtBQUs7Z0JBQ3ZDZ0IsbUJBQW1CLEVBQUUsQ0FBQztZQUMxQixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ1hDLE9BQU8sRUFBRSxDQUFxQjtBQUNsQyxDQUFDO0FBRUQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNaQyxTQUFTLEVBQUUsQ0FBUztBQUN4QixDQUFDO0FBRUQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUNaQyxnQkFBZ0IsRUFBRSxDQUFNO0FBQzVCLENBQUM7QUFFRCxLQUFLLENBQUNDLEtBQUssR0FBRzNCLDZEQUFXLENBQUMsQ0FBQztJQUN2QnlCLE1BQU07SUFBRXZCLE1BQU07SUFBRUssVUFBVTtJQUFFZ0IsTUFBTTtJQUFFRixLQUFLO0FBQzdDLENBQUM7QUFFRCxpRUFBZU0sS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdmlkbGl1LXdlYnNpdGUzLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgSGVhZGluZzoge1xyXG4gICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgdGV4dFVuZGVyTGluZU9mZnNldDogNixcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICcjNTI1MjUyJyxcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgTGluazoge1xyXG4gICAgICAgIGJhc2VTdHlsZTogcHJvcHMgPT4gKHtcclxuICAgICAgICAgICAgY29sb3I6IG1vZGUoJyMzZDdhZWQnLCAnI2ZmNjNjMycpKHByb3BzKSxcclxuICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogM1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZvbnRzID0ge1xyXG4gICAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufVxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgZ2xhc3NUZWFsOiAnIzg4Y2NjYSdcclxufVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgY29uZmlnLCBzdHlsZXMsIGNvbXBvbmVudHMsIGNvbG9ycywgZm9udHNcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJMaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwidGV4dFVuZGVybGluZU9mZnNldCIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdsYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.js\");\n/* harmony import */ var _components_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/fonts */ \"./components/fonts.js\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        __source: {\n            fileName: \"/mnt/e/Documents/CODINGG/WEBSITE PART THREE (MOST POWERFULLEST)/davidliu-website3/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_fonts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/mnt/e/Documents/CODINGG/WEBSITE PART THREE (MOST POWERFULLEST)/davidliu-website3/pages/_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/mnt/e/Documents/CODINGG/WEBSITE PART THREE (MOST POWERFULLEST)/davidliu-website3/pages/_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1A7QUFDVjtBQUNPO1NBRTlCSSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLHVFQUNETiw0REFBYztRQUFDRSxLQUFLLEVBQUVBLGtEQUFLOzs7Ozs7OztpRkFDdkJDLHlEQUFLOzs7Ozs7OztpRkFDTEUsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7OztBQUdwQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXZpZGxpdS13ZWJzaXRlMy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vbGliL3RoZW1lJ1xyXG5pbXBvcnQgRm9udHMgZnJvbSAnLi4vY29tcG9uZW50cy9mb250cydcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgPEZvbnRzIC8+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIkhlYWRpbmciLCJ0aGVtZSIsIkZvbnRzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();