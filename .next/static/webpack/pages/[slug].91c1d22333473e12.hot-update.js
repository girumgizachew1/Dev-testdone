"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./src/pages/[slug].tsx":
/*!******************************!*\
  !*** ./src/pages/[slug].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swell-js */ \"./node_modules/swell-js/dist/swell.umd.min.js\");\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swell_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form */ \"./src/components/form.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading */ \"./src/components/loading.tsx\");\n/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/order_summary */ \"./src/components/order_summary.tsx\");\n/* harmony import */ var _layouts_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/Meta */ \"./src/layouts/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/templates/Main */ \"./src/templates/Main.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Index = (param)=>{\n    let { checkout_id  } = param;\n    _s();\n    swell_js__WEBPACK_IMPORTED_MODULE_2___default().init(\"toggly\", \"pk_Qo600k0BZTFLNJzuwLIgqAdmzkh720h5\");\n    // Initialize the client first\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        // @ts-ignore\n        swell_js__WEBPACK_IMPORTED_MODULE_2___default().cart.recover(checkout_id).then((e)=>{\n            setCart({\n                ...e\n            });\n        });\n        setLoading(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_Main__WEBPACK_IMPORTED_MODULE_7__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Meta__WEBPACK_IMPORTED_MODULE_6__.Meta, {\n            title: \"Next.js checkout Presentation\",\n            description: \"Next js checkout is the perfect starter code for your project. Build your React application with the Next.js framework.\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loading-screen\",\n                className: \"fixed top-0 left-0 z-50 block h-full w-full bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"relative top-1/2 my-0 mx-auto block h-0 w-0 opacity-75\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto grid min-h-screen grid-cols-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto mr-6 py-6 sm:py-12 lg:col-span-3 lg:col-start-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-auto w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"relative text-center text-2xl font-medium text-gray-700 sm:text-3xl\",\n                                        children: \"Londinium\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap items-center justify-center text-xs\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"flex items-center gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"inline-flex items-center\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"#\",\n                                                            className: \"text-gray-900 hover:text-gray-900\",\n                                                            children: \"Customer Information\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"ml-2 h-auto font-medium text-gray-400\",\n                                                            children: \"/\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"inline-flex items-center\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"#\",\n                                                            className: \"text-gray-600 hover:text-gray-900\",\n                                                            children: \"Shipping Method\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"ml-2 h-auto font-medium text-gray-400\",\n                                                            children: \"/\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"inline-flex items-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \" text-gray-600 hover:text-gray-900\",\n                                                        children: \"Payment Method\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        cart !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_summary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ...cart\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"kSrK87d3FFXhl+vk/QUq6tTnClk=\");\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDUjtBQUVKO0FBRWdCO0FBQ0g7QUFDWTtBQUNoQjtBQUNFO0FBRXhDLE1BQU1TLFFBQVEsU0FBOEM7UUFBN0MsRUFBRUMsWUFBVyxFQUEyQjs7SUFDckRQLG9EQUFVLENBQ1JTLFFBQW1DLEVBQ25DQSxxQ0FBdUM7SUFLekMsOEJBQThCO0lBRTlCLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3JELE1BQU0sQ0FBQ2dCLE1BQU1DLFFBQVEsR0FBR2pCLCtDQUFRQSxDQUFhLElBQUk7SUFDakRELGdEQUFTQSxDQUFDLElBQU07UUFDZGdCLFdBQVcsSUFBSTtRQUNmLGFBQWE7UUFDYmQsNERBQWtCLENBQUNPLGFBQWFXLElBQUksQ0FBQyxDQUFDQyxJQUFXO1lBQy9DSCxRQUFRO2dCQUFFLEdBQUdHLENBQUM7WUFBQztRQUNqQjtRQUNBTCxXQUFXLEtBQUs7SUFDbEIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNULGlEQUFJQTtRQUNIZSxvQkFDRSw4REFBQ2hCLCtDQUFJQTtZQUNIaUIsT0FBTTtZQUNOQyxhQUFZOzs7WUFJZlQseUJBQ0MsOERBQUNVO2dCQUNDQyxJQUFHO2dCQUNIQyxXQUFVOzBCQUVWLDRFQUFDQztvQkFBS0QsV0FBVTs4QkFDZCw0RUFBQ3ZCLDJEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUtiLDhEQUFDcUI7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0Y7NEJBQUlFLFdBQVU7c0NBQ2IsNEVBQUNGO2dDQUFJRSxXQUFVOztrREFDYiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQXNFOzs7Ozs7a0RBR3BGLDhEQUFDRjt3Q0FBSUUsV0FBVTtrREFDYiw0RUFBQ0c7NENBQUdILFdBQVU7OzhEQUNaLDhEQUFDSTtvREFBR0osV0FBVTs7c0VBQ1osOERBQUNLOzREQUFFQyxNQUFLOzREQUFJTixXQUFVO3NFQUFvQzs7Ozs7O3NFQUcxRCw4REFBQ0M7NERBQUtELFdBQVU7c0VBQXdDOzs7Ozs7Ozs7Ozs7OERBSzFELDhEQUFDSTtvREFBR0osV0FBVTs7c0VBQ1osOERBQUNLOzREQUFFQyxNQUFLOzREQUFJTixXQUFVO3NFQUFvQzs7Ozs7O3NFQUkxRCw4REFBQ0M7NERBQUtELFdBQVU7c0VBQXdDOzs7Ozs7Ozs7Ozs7OERBSzFELDhEQUFDSTtvREFBR0osV0FBVTs4REFDWiw0RUFBQ0s7d0RBQUVDLE1BQUs7d0RBQUlOLFdBQVU7a0VBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU9qRSw4REFBQ3hCLHdEQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHaEJjLFNBQVMsSUFBSSxrQkFBSSw4REFBQ1osaUVBQVlBOzRCQUFFLEdBQUdZLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xEO0dBckZNVDtLQUFBQTs7QUErRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzbHVnXS50c3g/NmY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IENhcnQgfSBmcm9tICdzd2VsbC1qcyc7XG5pbXBvcnQgc3dlbGwgZnJvbSAnc3dlbGwtanMnO1xuXG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gJ0AvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXJfc3VtbWFyeSc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAnQC9sYXlvdXRzL01ldGEnO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gJ0AvdGVtcGxhdGVzL01haW4nO1xuXG5jb25zdCBJbmRleCA9ICh7IGNoZWNrb3V0X2lkIH06IHsgY2hlY2tvdXRfaWQ6IHN0cmluZyB9KSA9PiB7XG4gIHN3ZWxsLmluaXQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9TV0VMTF9QVUJMSUNfU1RPUkUgYXMgc3RyaW5nLFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfU1dFTExfUFVCTElDX0FQSV9UT0tFTiBhcyBzdHJpbmdcbiAgKTtcblxuXG4gIFxuICAvLyBJbml0aWFsaXplIHRoZSBjbGllbnQgZmlyc3RcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPENhcnQgfCBhbnk+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN3ZWxsLmNhcnQucmVjb3ZlcihjaGVja291dF9pZCkudGhlbigoZTogYW55KSA9PiB7XG4gICAgICBzZXRDYXJ0KHsgLi4uZSB9KTtcbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5cbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPVwiTmV4dC5qcyBjaGVja291dCBQcmVzZW50YXRpb25cIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTmV4dCBqcyBjaGVja291dCBpcyB0aGUgcGVyZmVjdCBzdGFydGVyIGNvZGUgZm9yIHlvdXIgcHJvamVjdC4gQnVpbGQgeW91ciBSZWFjdCBhcHBsaWNhdGlvbiB3aXRoIHRoZSBOZXh0LmpzIGZyYW1ld29yay5cIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwibG9hZGluZy1zY3JlZW5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB6LTUwIGJsb2NrICBoLWZ1bGwgdy1mdWxsIGJnLXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC0xLzIgbXktMCBteC1hdXRvIGJsb2NrIGgtMCB3LTAgIG9wYWNpdHktNzVcIj5cbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZ3JpZCBtaW4taC1zY3JlZW4gZ3JpZC1jb2xzLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1yLTYgIHB5LTYgc206cHktMTIgbGc6Y29sLXNwYW4tMyBsZzpjb2wtc3RhcnQtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIHctZnVsbFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBzbTp0ZXh0LTN4bFwiPlxuICAgICAgICAgICAgICAgIExvbmRpbml1bVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXIgSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIGgtYXV0byBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU2hpcHBpbmcgTWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIGgtYXV0byBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgTWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPENoZWNrb3V0Rm9ybSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NhcnQgIT09IG51bGwgJiYgPE9yZGVyU3VtbWFyeSB7Li4uY2FydH0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2hlY2tvdXRfaWQ6IGNvbnRleHQucXVlcnkuc2x1ZyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3dlbGwiLCJDaGVja291dEZvcm0iLCJMb2FkZXIiLCJPcmRlclN1bW1hcnkiLCJNZXRhIiwiTWFpbiIsIkluZGV4IiwiY2hlY2tvdXRfaWQiLCJpbml0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfU1dFTExfUFVCTElDX1NUT1JFIiwiTkVYVF9TV0VMTF9QVUJMSUNfQVBJX1RPS0VOIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjYXJ0Iiwic2V0Q2FydCIsInJlY292ZXIiLCJ0aGVuIiwiZSIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzcGFuIiwiaDEiLCJ1bCIsImxpIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[slug].tsx\n"));

/***/ })

});