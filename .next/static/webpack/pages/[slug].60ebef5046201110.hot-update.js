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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swell-js */ \"./node_modules/swell-js/dist/swell.umd.min.js\");\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swell_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form */ \"./src/components/form.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading */ \"./src/components/loading.tsx\");\n/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/order_summary */ \"./src/components/order_summary.tsx\");\n/* harmony import */ var _layouts_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/Meta */ \"./src/layouts/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/templates/Main */ \"./src/templates/Main.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Index = (param)=>{\n    let { checkout_id  } = param;\n    _s();\n    swell_js__WEBPACK_IMPORTED_MODULE_2___default().init(\"toggly\", \"pk_Qo600k0BZTFLNJzuwLIgqAdmzkh720h5\");\n    // Initialize the client first\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        // @ts-ignore\n        swell_js__WEBPACK_IMPORTED_MODULE_2___default().cart.recover(checkout_id).then((e)=>{\n            setCart({\n                ...e\n            });\n        });\n        setLoading(false);\n    }, []);\n    // Use state variables to track the current step\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    // Function to navigate to the next step\n    const handleNext = ()=>{\n        setCurrentStep(currentStep + 1);\n    };\n    // Function to navigate to the previous step\n    const handlePrev = ()=>{\n        setCurrentStep(currentStep - 1);\n    };\n    // Render the appropriate step based on the current step\n    let stepContent;\n    switch(currentStep){\n        case 1:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-12 w-24 text-xs font-medium text-blue-500\",\n                                children: \"Return To home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-12 w-48 rounded bg-blue-500 text-xs font-medium text-white\",\n                                onClick: handleNext,\n                                children: \"Continue to Shipping\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 2:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-12 w-24 text-xs font-medium text-blue-500\",\n                                onClick: handlePrev,\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-12 w-48 rounded bg-blue-500 text-xs font-medium text-white\",\n                                onClick: handleNext,\n                                children: \"Continue To Payment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 3:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-12 w-24 text-xs font-medium text-blue-500\",\n                                onClick: handlePrev,\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"h-12 w-48 rounded bg-blue-500 text-xs font-medium text-white\",\n                                onClick: handleNext,\n                                children: \"Complete Order\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, undefined);\n            break;\n        default:\n            stepContent = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_Main__WEBPACK_IMPORTED_MODULE_7__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Meta__WEBPACK_IMPORTED_MODULE_6__.Meta, {\n            title: \"Next.js checkout Presentation\",\n            description: \"Next js checkout is the perfect starter code for your project. Build your React application with the Next.js framework.\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loading-screen\",\n                className: \"fixed top-0 left-0 z-50 block h-full w-full bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"relative top-1/2 my-0 mx-auto block h-0 w-0 opacity-75\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 120,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto grid min-h-screen grid-cols-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto mr-6 py-6 sm:py-12 lg:col-span-3 lg:col-start-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-auto w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-72 h-24\",\n                                        src: \"/assets/images/logo.jpg\",\n                                        alt: \"logo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"flex justify-between items-center text-lg font-medium\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"cursor-pointer \".concat(currentStep === 1 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                    onClick: ()=>setCurrentStep(1),\n                                                    children: \"Customer\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 133,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"cursor-pointer \".concat(currentStep === 2 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                    onClick: ()=>setCurrentStep(2),\n                                                    children: \"Shipping\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"cursor-pointer \".concat(currentStep === 3 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                    onClick: ()=>setCurrentStep(3),\n                                                    children: \"Payment\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 149,\n                                                    columnNumber: 9\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: stepContent\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 159,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined),\n                        cart !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_summary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ...cart\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 165,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"nkdiEIutdrnq8wqdwn+31hkgY6w=\");\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFFdkRRLFNBQVMsSUFBTVAsZUFBZTs4REFDL0I7Ozs7Ozs4REFHRCw4REFBQ2lCO29EQUNDWixXQUFXLGtCQUVWLE9BRENOLGdCQUFnQixJQUFJLGtCQUFrQixlQUFlO29EQUV2RFEsU0FBUyxJQUFNUCxlQUFlOzhEQUMvQjs7Ozs7OzhEQUdELDhEQUFDaUI7b0RBQ0NaLFdBQVcsa0JBRVYsT0FEQ04sZ0JBQWdCLElBQUksa0JBQWtCLGVBQWU7b0RBRXZEUSxTQUFTLElBQU1QLGVBQWU7OERBQy9COzs7Ozs7Ozs7Ozs7Ozs7OztrREFLTCw4REFBQ0k7a0RBRUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFJSVQsU0FBUyxJQUFJLGtCQUFJLDhEQUFDWixpRUFBWUE7NEJBQUUsR0FBR1ksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQ7R0EzSk1UO0tBQUFBOztBQXFLTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NsdWddLnRzeD82ZjQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQ2FydCB9IGZyb20gJ3N3ZWxsLWpzJztcbmltcG9ydCBzd2VsbCBmcm9tICdzd2VsbC1qcyc7XG5cbmltcG9ydCBDdXN0b21lckZvcm0gZnJvbSAnQC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IFNoaXBwbWVudEZvcm0gZnJvbSAnQC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IFBheW1lbnRGb3JtIGZyb20gJ0AvY29tcG9uZW50cy9mb3JtJztcblxuaW1wb3J0IExvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlcl9zdW1tYXJ5JztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdAL2xheW91dHMvTWV0YSc7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnQC90ZW1wbGF0ZXMvTWFpbic7XG5cbmNvbnN0IEluZGV4ID0gKHsgY2hlY2tvdXRfaWQgfTogeyBjaGVja291dF9pZDogc3RyaW5nIH0pID0+IHtcbiAgc3dlbGwuaW5pdChcbiAgICBwcm9jZXNzLmVudi5ORVhUX1NXRUxMX1BVQkxJQ19TVE9SRSBhcyBzdHJpbmcsXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9TV0VMTF9QVUJMSUNfQVBJX1RPS0VOIGFzIHN0cmluZ1xuICApO1xuXG5cbiAgXG4gIC8vIEluaXRpYWxpemUgdGhlIGNsaWVudCBmaXJzdFxuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8Q2FydCB8IGFueT4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc3dlbGwuY2FydC5yZWNvdmVyKGNoZWNrb3V0X2lkKS50aGVuKChlOiBhbnkpID0+IHtcbiAgICAgIHNldENhcnQoeyAuLi5lIH0pO1xuICAgIH0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgIC8vIFVzZSBzdGF0ZSB2YXJpYWJsZXMgdG8gdHJhY2sgdGhlIGN1cnJlbnQgc3RlcFxuICAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZSgxKTtcblxuICAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgc3RlcFxuICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgKyAxKTtcbiAgIH07XG4gXG4gICAvLyBGdW5jdGlvbiB0byBuYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc3RlcFxuICAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICAgc2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgLSAxKTtcbiAgIH07XG5cbiAgIFxuICAvLyBSZW5kZXIgdGhlIGFwcHJvcHJpYXRlIHN0ZXAgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RlcFxuICBsZXQgc3RlcENvbnRlbnQ7XG4gIHN3aXRjaCAoY3VycmVudFN0ZXApIHtcbiAgICBjYXNlIDE6XG4gICAgICBzdGVwQ29udGVudCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgey8qIEN1c3RvbWVyIGluZm9ybWF0aW9uIGZvcm0gKi99XG4gICAgICAgICAgPEN1c3RvbWVyRm9ybSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgPGJ1dHRvbiAgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMjQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWJsdWUtNTAwXCJcbiAgICAgICAgICAgID5SZXR1cm4gVG8gaG9tZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy00OCByb3VuZGVkIGJnLWJsdWUtNTAwIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiIFxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH0+Q29udGludWUgdG8gU2hpcHBpbmc8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHN0ZXBDb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiBTaGlwcGluZyBpbmZvcm1hdGlvbiBmb3JtICovfVxuICAgICAgICAgIDxTaGlwcG1lbnRGb3JtIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0yNCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS01MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZ9PkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy00OCByb3VuZGVkIGJnLWJsdWUtNTAwIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9PkNvbnRpbnVlIFRvIFBheW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHN0ZXBDb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiBQYXltZW50IGZvcm0gKi99XG4gICAgICAgICAgPFBheW1lbnRGb3JtIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0yNCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS01MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZ9PkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy00OCByb3VuZGVkIGJnLWJsdWUtNTAwIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9PkNvbXBsZXRlIE9yZGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RlcENvbnRlbnQgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJOZXh0LmpzIGNoZWNrb3V0IFByZXNlbnRhdGlvblwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJOZXh0IGpzIGNoZWNrb3V0IGlzIHRoZSBwZXJmZWN0IHN0YXJ0ZXIgY29kZSBmb3IgeW91ciBwcm9qZWN0LiBCdWlsZCB5b3VyIFJlYWN0IGFwcGxpY2F0aW9uIHdpdGggdGhlIE5leHQuanMgZnJhbWV3b3JrLlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJsb2FkaW5nLXNjcmVlblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHotNTAgYmxvY2sgIGgtZnVsbCB3LWZ1bGwgYmctd2hpdGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTEvMiBteS0wIG14LWF1dG8gYmxvY2sgaC0wIHctMCAgb3BhY2l0eS03NVwiPlxuICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBncmlkIG1pbi1oLXNjcmVlbiBncmlkLWNvbHMtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXItNiAgcHktNiBzbTpweS0xMiBsZzpjb2wtc3Bhbi0zIGxnOmNvbC1zdGFydC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd3LTcyIGgtMjQnICBzcmM9Jy9hc3NldHMvaW1hZ2VzL2xvZ28uanBnJyBhbHQ9J2xvZ28nID48L2ltZz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgIHsvKiBIZWFkZXIgd2l0aCBuYXZpZ2F0aW9uIGxpbmtzICovfVxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICBjdXJyZW50U3RlcCA9PT0gMSA/ICd0ZXh0LWdyYXktOTAwJyA6ICd0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTdGVwKDEpfVxuICAgICAgICA+XG4gICAgICAgICAgQ3VzdG9tZXJcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwID09PSAyID8gJ3RleHQtZ3JheS05MDAnIDogJ3RleHQtZ3JheS01MDAnXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFN0ZXAoMil9XG4gICAgICAgID5cbiAgICAgICAgICBTaGlwcGluZ1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgY3VycmVudFN0ZXAgPT09IDMgPyAndGV4dC1ncmF5LTkwMCcgOiAndGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RlcCgzKX1cbiAgICAgICAgPlxuICAgICAgICAgIFBheW1lbnRcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIHsvKiBIZWFkZXIgd2l0aCBuYXZpZ2F0aW9uIGxpbmtzICovfVxuICAgICAge3N0ZXBDb250ZW50fVxuICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NhcnQgIT09IG51bGwgJiYgPE9yZGVyU3VtbWFyeSB7Li4uY2FydH0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2hlY2tvdXRfaWQ6IGNvbnRleHQucXVlcnkuc2x1ZyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3dlbGwiLCJDdXN0b21lckZvcm0iLCJTaGlwcG1lbnRGb3JtIiwiUGF5bWVudEZvcm0iLCJMb2FkZXIiLCJPcmRlclN1bW1hcnkiLCJNZXRhIiwiTWFpbiIsIkluZGV4IiwiY2hlY2tvdXRfaWQiLCJpbml0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfU1dFTExfUFVCTElDX1NUT1JFIiwiTkVYVF9TV0VMTF9QVUJMSUNfQVBJX1RPS0VOIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjYXJ0Iiwic2V0Q2FydCIsInJlY292ZXIiLCJ0aGVuIiwiZSIsImN1cnJlbnRTdGVwIiwic2V0Q3VycmVudFN0ZXAiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsInN0ZXBDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0IiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[slug].tsx\n"));

/***/ })

});