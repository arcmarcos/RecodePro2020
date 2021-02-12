webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unsplash-js */ \"./node_modules/unsplash-js/dist/unsplash-js.esm.js\");\n\n\nvar _jsxFileName = \"/home/marcos/Dev/RecodePro2020/14_projeto_react-ssr/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst Index = () => {\n  _s();\n\n  const [background, setBackground] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null);\n  const api = Object(unsplash_js__WEBPACK_IMPORTED_MODULE_4__[\"createApi\"])({\n    accessKey: 'Jep9JynO-sFKB58j06eouVYSIEII-onjXOs76W0PXag',\n    fetch: fetch\n  });\n\n  const updateBackground = () => {\n    const url = \"https://source.unsplash.com/random\";\n    setBackground(url);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(() => {\n    api.photos.getRandom({\n      count: 1\n    }).then(res => setBackground(res)).then;\n  }, [api.photos]); //  const image = background.response.results.map(img => console.log(img.urls))\n\n  console.log(background);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"root\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1392119648\", [background]]]) + \" \" + (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.root || \"\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1392119648\",\n      dynamic: [background],\n      children: `*{margin:0;padding:0;}#root{background:url(${background}) center no-repeat;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNvcy9EZXYvUmVjb2RlUHJvMjAyMC8xNF9wcm9qZXRvX3JlYWN0LXNzci9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNTLEFBR3NCLEFBSXFELFNBSHBELFVBQ1osMkNBR3dCLHNCQUN4QiIsImZpbGUiOiIvaG9tZS9tYXJjb3MvRGV2L1JlY29kZVBybzIwMjAvMTRfcHJvamV0b19yZWFjdC1zc3Ivc3JjL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSAndW5zcGxhc2gtanMnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbYmFja2dyb3VuZCwgc2V0QmFja2dyb3VuZF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGFwaSA9IGNyZWF0ZUFwaSh7XG4gICAgYWNjZXNzS2V5OiAnSmVwOUp5bk8tc0ZLQjU4ajA2ZW91VllTSUVJSS1vbmpYT3M3NlcwUFhhZycsXG4gICAgZmV0Y2g6IGZldGNoXG4gIH0pXG5cblxuXG4gIGNvbnN0IHVwZGF0ZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tXCJcbiAgICBzZXRCYWNrZ3JvdW5kKHVybClcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXBpLnBob3Rvc1xuICAgIC5nZXRSYW5kb20oeyBjb3VudDogMSB9KVxuICAgIC50aGVuKHJlcyA9PiBzZXRCYWNrZ3JvdW5kKHJlcykpXG4gICAgLnRoZW5cbiAgfSwgW2FwaS5waG90b3NdKVxuXG4vLyAgY29uc3QgaW1hZ2UgPSBiYWNrZ3JvdW5kLnJlc3BvbnNlLnJlc3VsdHMubWFwKGltZyA9PiBjb25zb2xlLmxvZyhpbWcudXJscykpXG5cbiAgY29uc29sZS5sb2coYmFja2dyb3VuZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicm9vdFwiIGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcm9vdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtiYWNrZ3JvdW5kfSkgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICA8aDE+RnVuZG9zIGFsZWF0w7NyaW9zPC9oMT5cbiAgICAgICAgIDxoMz5DbGlxdWUgcGFyYSBtdWRhciBvIGZ1bmRvPC9oMz5cbiAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSl9Pk11ZGFyPC9idXR0b24+XG4gICAgICAgPC9kaXY+ICAgXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/home/marcos/Dev/RecodePro2020/14_projeto_react-ssr/src/pages/index.js */`\n    }, void 0, false, void 0, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1392119648\", [background]]]) + \" \" + (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container || \"\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1392119648\", [background]]]),\n        children: \"Fundos aleat\\xF3rios\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 10\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1392119648\", [background]]]),\n        children: \"Clique para mudar o fundo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 10\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => window.location.reload(false),\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1392119648\", [background]]]),\n        children: \"Mudar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 10\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 8\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Index, \"/ZjdysflF8K1j+wXnLbv9Fcglmc=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJiYWNrZ3JvdW5kIiwic2V0QmFja2dyb3VuZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcGkiLCJjcmVhdGVBcGkiLCJhY2Nlc3NLZXkiLCJmZXRjaCIsInVwZGF0ZUJhY2tncm91bmQiLCJ1cmwiLCJ1c2VFZmZlY3QiLCJwaG90b3MiLCJnZXRSYW5kb20iLCJjb3VudCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicm9vdCIsImNvbnRhaW5lciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU0sQ0FBQ0MsVUFBRCxFQUFhQyxhQUFiLElBQThCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUFwQztBQUVBLFFBQU1DLEdBQUcsR0FBR0MsNkRBQVMsQ0FBQztBQUNwQkMsYUFBUyxFQUFFLDZDQURTO0FBRXBCQyxTQUFLLEVBQUVBO0FBRmEsR0FBRCxDQUFyQjs7QUFPQSxRQUFNQyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFVBQU1DLEdBQUcsR0FBRyxvQ0FBWjtBQUNBUixpQkFBYSxDQUFDUSxHQUFELENBQWI7QUFDRCxHQUhEOztBQUtBUCw4Q0FBSyxDQUFDUSxTQUFOLENBQWdCLE1BQU07QUFDcEJOLE9BQUcsQ0FBQ08sTUFBSixDQUNDQyxTQURELENBQ1c7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FEWCxFQUVDQyxJQUZELENBRU1DLEdBQUcsSUFBSWQsYUFBYSxDQUFDYyxHQUFELENBRjFCLEVBR0NELElBSEQ7QUFJRCxHQUxELEVBS0csQ0FBQ1YsR0FBRyxDQUFDTyxNQUFMLENBTEgsRUFma0IsQ0FzQnBCOztBQUVFSyxTQUFPLENBQUNDLEdBQVIsQ0FBWWpCLFVBQVo7QUFFQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQUEsZ0dBUTBCQSxVQVIxQixjQUEwQmtCLHdEQUFNLENBQUNDLElBQWpDO0FBQUE7QUFBQTtBQUFBLGdCQVEwQm5CLFVBUjFCO0FBQUEsOERBUTBCQSxVQVIxQjtBQUNKO0FBQ0E7QUFGSSx1REFhRztBQUFBLGtHQUx1QkEsVUFLdkIsY0FBZ0JrQix3REFBTSxDQUFDRSxTQUF2QjtBQUFBLDhCQUNFO0FBQUEsb0dBTnFCcEIsVUFNckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLG9HQVBxQkEsVUFPckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLGVBQU8sRUFBRSxNQUFNcUIsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QixLQUF2QixDQUF2QjtBQUFBLG9HQVJxQnZCLFVBUXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNCRCxDQWhERDs7R0FBTUQsSzs7S0FBQUEsSztBQWtEU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tICd1bnNwbGFzaC1qcydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgYXBpID0gY3JlYXRlQXBpKHtcbiAgICBhY2Nlc3NLZXk6ICdKZXA5SnluTy1zRktCNThqMDZlb3VWWVNJRUlJLW9ualhPczc2VzBQWGFnJyxcbiAgICBmZXRjaDogZmV0Y2hcbiAgfSlcblxuXG5cbiAgY29uc3QgdXBkYXRlQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIlxuICAgIHNldEJhY2tncm91bmQodXJsKVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGkucGhvdG9zXG4gICAgLmdldFJhbmRvbSh7IGNvdW50OiAxIH0pXG4gICAgLnRoZW4ocmVzID0+IHNldEJhY2tncm91bmQocmVzKSlcbiAgICAudGhlblxuICB9LCBbYXBpLnBob3Rvc10pXG5cbi8vICBjb25zdCBpbWFnZSA9IGJhY2tncm91bmQucmVzcG9uc2UucmVzdWx0cy5tYXAoaW1nID0+IGNvbnNvbGUubG9nKGltZy51cmxzKSlcblxuICBjb25zb2xlLmxvZyhiYWNrZ3JvdW5kKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJyb290XCIgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNyb290IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2JhY2tncm91bmR9KSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgIDxoMT5GdW5kb3MgYWxlYXTDs3Jpb3M8L2gxPlxuICAgICAgICAgPGgzPkNsaXF1ZSBwYXJhIG11ZGFyIG8gZnVuZG88L2gzPlxuICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKX0+TXVkYXI8L2J1dHRvbj5cbiAgICAgICA8L2Rpdj4gICBcblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})