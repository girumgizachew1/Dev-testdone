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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swell-js */ \"./node_modules/swell-js/dist/swell.umd.min.js\");\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swell_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form */ \"./src/components/form.tsx\");\n/* harmony import */ var _components_shippment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/shippment */ \"./src/components/shippment.tsx\");\n/* harmony import */ var _components_payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/payment */ \"./src/components/payment.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/loading */ \"./src/components/loading.tsx\");\n/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/order_summary */ \"./src/components/order_summary.tsx\");\n/* harmony import */ var _layouts_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/layouts/Meta */ \"./src/layouts/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Index = (param)=>{\n    let { checkout_id  } = param;\n    _s();\n    swell_js__WEBPACK_IMPORTED_MODULE_2___default().init(\"toggly\", \"pk_Qo600k0BZTFLNJzuwLIgqAdmzkh720h5\");\n    const currentStepaccepted = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.currentStep);\n    // Initialize the client first\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        // @ts-ignore\n        swell_js__WEBPACK_IMPORTED_MODULE_2___default().cart.recover(checkout_id).then((e)=>{\n            setCart({\n                ...e\n            });\n        });\n        setLoading(false);\n    }, []);\n    // Use state variables to track the current step\n    // Render the appropriate step based on the current step\n    let stepContent;\n    switch(currentStepaccepted){\n        case 1:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 2:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shippment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    ...cart\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 3:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_payment__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined);\n            break;\n        default:\n            stepContent = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_Main__WEBPACK_IMPORTED_MODULE_9__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Meta__WEBPACK_IMPORTED_MODULE_8__.Meta, {\n            title: \"Next.js checkout Presentation\",\n            description: \"Next js checkout is the perfect starter code for your project. Build your React application with the Next.js framework.\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loading-screen\",\n                className: \"fixed top-0 left-0 z-50 block h-full w-full bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"relative top-1/2 my-0 mx-auto block h-0 w-0 opacity-75\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto grid min-h-screen grid-cols-12 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto mr-6 py-6 sm:py-12 lg:col-span-4 lg:col-start-4 bg-white p-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-auto w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"content-center p-2 w-80 h-24 object-center\",\n                                        src: \"/assets/images/logo.jpg\",\n                                        alt: \"logo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                                className: \" w-full border-gray-400\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-between items-center -mt-3 \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"w-6 h-6 rounded-full \".concat(currentStepaccepted >= 1 ? \"bg-gray-800\" : \"bg-gray-300\")\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"w-6 h-6 rounded-full \".concat(currentStepaccepted >= 2 ? \"bg-gray-800\" : \"bg-gray-300\")\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"w-6 h-6 rounded-full \".concat(currentStepaccepted >= 3 ? \"bg-gray-800\" : \"bg-gray-300\")\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"flex justify-between items-center text-lg font-medium\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"cursor-pointer \".concat(currentStepaccepted === 1 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                        children: \"Customer\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 25\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"cursor-pointer \".concat(currentStepaccepted === 2 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                        children: \"Shipping\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                        lineNumber: 119,\n                                                        columnNumber: 27\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"cursor-pointer \".concat(currentStepaccepted === 3 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                        children: \"Payment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                        lineNumber: 126,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: stepContent\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        cart !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_summary__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            ...cart\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 141,\n                            columnNumber: 30\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"++1dbFG3LPjHlzHmOU4MZZku0OA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector\n    ];\n});\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tEQUNFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSUZMLFNBQVMsSUFBSSxrQkFBSyw4REFBQ2hCLGlFQUFZQTs0QkFBRSxHQUFHZ0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkQ7R0FqSU1aOztRQUt3QkQscURBQVdBOzs7S0FMbkNDOztBQTJJTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NsdWddLnRzeD82ZjQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQ2FydCB9IGZyb20gJ3N3ZWxsLWpzJztcbmltcG9ydCBzd2VsbCBmcm9tICdzd2VsbC1qcyc7XG5cbmltcG9ydCBDdXN0b21lckZvcm0gZnJvbSAnQC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IFNoaXBwbWVudEZvcm0gZnJvbSAnQC9jb21wb25lbnRzL3NoaXBwbWVudCc7XG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnQC9jb21wb25lbnRzL3BheW1lbnQnO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSAnQC9jb21wb25lbnRzL29yZGVyX3N1bW1hcnknO1xuaW1wb3J0IE9yZGVyU3VtbWFyeUZvcnNoaXBtZW50IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlcl9zdW1tYXJ5IEZvcl9TaGlwcG1lbnQnO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gJ0AvbGF5b3V0cy9NZXRhJztcbmltcG9ydCB7IE1haW4gfSBmcm9tICdAL3RlbXBsYXRlcy9NYWluJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbmNvbnN0IEluZGV4ID0gKHsgY2hlY2tvdXRfaWQgfTogeyBjaGVja291dF9pZDogc3RyaW5nIH0pID0+IHtcbiAgc3dlbGwuaW5pdChcbiAgICBwcm9jZXNzLmVudi5ORVhUX1NXRUxMX1BVQkxJQ19TVE9SRSBhcyBzdHJpbmcsXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9TV0VMTF9QVUJMSUNfQVBJX1RPS0VOIGFzIHN0cmluZ1xuICApO1xuICBjb25zdCBjdXJyZW50U3RlcGFjY2VwdGVkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFN0ZXApO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIGNsaWVudCBmaXJzdFxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPENhcnQgfCBhbnk+KG51bGwpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBzd2VsbC5jYXJ0LnJlY292ZXIoY2hlY2tvdXRfaWQpLnRoZW4oKGU6IGFueSkgPT4ge1xuICAgICAgc2V0Q2FydCh7IC4uLmUgfSk7XG4gICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICAgLy8gVXNlIHN0YXRlIHZhcmlhYmxlcyB0byB0cmFjayB0aGUgY3VycmVudCBzdGVwXG5cbiAgIFxuICAvLyBSZW5kZXIgdGhlIGFwcHJvcHJpYXRlIHN0ZXAgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RlcFxuICBsZXQgc3RlcENvbnRlbnQ7XG4gIHN3aXRjaCAoY3VycmVudFN0ZXBhY2NlcHRlZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHN0ZXBDb250ZW50ID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICB7LyogQ3VzdG9tZXIgaW5mb3JtYXRpb24gZm9ybSAqL31cbiAgICAgICAgICA8Q3VzdG9tZXJGb3JtIC8+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHN0ZXBDb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiBTaGlwcGluZyBpbmZvcm1hdGlvbiBmb3JtICovfVxuICAgICAgICAgIDxTaGlwcG1lbnRGb3JtIHsuLi5jYXJ0fSAvPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBzdGVwQ29udGVudCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogUGF5bWVudCBmb3JtICovfVxuICAgICAgICAgIDxQYXltZW50Rm9ybSAvPlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGVwQ29udGVudCA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNYWluXG4gICAgICBtZXRhPXtcbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT1cIk5leHQuanMgY2hlY2tvdXQgUHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5leHQganMgY2hlY2tvdXQgaXMgdGhlIHBlcmZlY3Qgc3RhcnRlciBjb2RlIGZvciB5b3VyIHByb2plY3QuIEJ1aWxkIHlvdXIgUmVhY3QgYXBwbGljYXRpb24gd2l0aCB0aGUgTmV4dC5qcyBmcmFtZXdvcmsuXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImxvYWRpbmctc2NyZWVuXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgei01MCBibG9jayAgaC1mdWxsIHctZnVsbCBiZy13aGl0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0b3AtMS8yIG15LTAgbXgtYXV0byBibG9jayBoLTAgdy0wICBvcGFjaXR5LTc1XCI+XG4gICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGdyaWQgbWluLWgtc2NyZWVuIGdyaWQtY29scy0xMiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXItNiAgcHktNiBzbTpweS0xMiBsZzpjb2wtc3Bhbi00IGxnOmNvbC1zdGFydC00IGJnLXdoaXRlIHAtMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRlbnQtY2VudGVyXHQgcC0yIHctODAgaC0yNCBvYmplY3QtY2VudGVyJyAgc3JjPScvYXNzZXRzL2ltYWdlcy9sb2dvLmpwZycgYWx0PSdsb2dvJyA+PC9pbWc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0zJyA+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIiB3LWZ1bGwgYm9yZGVyLWdyYXktNDAwXCIgLz5cbiAgICAgICAgICAgICAgICB7LyogQ2lyY2xlcyBmb3IgZWFjaHN0ZXAgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgLW10LTMgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTYgaC02IHJvdW5kZWQtZnVsbCAkeyBjdXJyZW50U3RlcGFjY2VwdGVkID49IDEgPyAnYmctZ3JheS04MDAnIDogJ2JnLWdyYXktMzAwJyB9YH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy02IGgtNiByb3VuZGVkLWZ1bGwgJHsgY3VycmVudFN0ZXBhY2NlcHRlZCA+PSAyID8gJ2JnLWdyYXktODAwJyA6ICdiZy1ncmF5LTMwMCcgfWB9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctNiBoLTYgcm91bmRlZC1mdWxsICR7IGN1cnJlbnRTdGVwYWNjZXB0ZWQgPj0gMyA/ICdiZy1ncmF5LTgwMCcgOiAnYmctZ3JheS0zMDAnIH1gfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgey8qIEhlYWRlciB3aXRoIG5hdmlnYXRpb24gbGlua3MgKi99XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXBhY2NlcHRlZCA9PT0gMSA/ICd0ZXh0LWdyYXktOTAwJyA6ICd0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcGFjY2VwdGVkID09PSAyID8gJ3RleHQtZ3JheS05MDAnIDogJ3RleHQtZ3JheS01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGlwcGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXBhY2NlcHRlZCA9PT0gMyA/ICd0ZXh0LWdyYXktOTAwJyA6ICd0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICB7LyogSGVhZGVyIHdpdGggbmF2aWdhdGlvbiBsaW5rcyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3N0ZXBDb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NhcnQgIT09IG51bGwgICYmIDxPcmRlclN1bW1hcnkgey4uLmNhcnR9IC8+fVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2hlY2tvdXRfaWQ6IGNvbnRleHQucXVlcnkuc2x1ZyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3dlbGwiLCJDdXN0b21lckZvcm0iLCJTaGlwcG1lbnRGb3JtIiwiUGF5bWVudEZvcm0iLCJMb2FkZXIiLCJPcmRlclN1bW1hcnkiLCJNZXRhIiwiTWFpbiIsInVzZVNlbGVjdG9yIiwiSW5kZXgiLCJjaGVja291dF9pZCIsImluaXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9TV0VMTF9QVUJMSUNfU1RPUkUiLCJORVhUX1NXRUxMX1BVQkxJQ19BUElfVE9LRU4iLCJjdXJyZW50U3RlcGFjY2VwdGVkIiwic3RhdGUiLCJjdXJyZW50U3RlcCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2FydCIsInNldENhcnQiLCJyZWNvdmVyIiwidGhlbiIsImUiLCJzdGVwQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0IiwiaHIiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[slug].tsx\n"));

/***/ })

});