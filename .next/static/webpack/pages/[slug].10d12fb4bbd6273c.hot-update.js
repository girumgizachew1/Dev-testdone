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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swell-js */ \"./node_modules/swell-js/dist/swell.umd.min.js\");\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swell_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form */ \"./src/components/form.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading */ \"./src/components/loading.tsx\");\n/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/order_summary */ \"./src/components/order_summary.tsx\");\n/* harmony import */ var _layouts_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/Meta */ \"./src/layouts/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/templates/Main */ \"./src/templates/Main.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Index = (param)=>{\n    let { checkout_id  } = param;\n    _s();\n    swell_js__WEBPACK_IMPORTED_MODULE_2___default().init(\"toggly\", \"pk_Qo600k0BZTFLNJzuwLIgqAdmzkh720h5\");\n    // Initialize the client first\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        // @ts-ignore\n        swell_js__WEBPACK_IMPORTED_MODULE_2___default().cart.recover(checkout_id).then((e)=>{\n            setCart({\n                ...e\n            });\n        });\n        setLoading(false);\n    }, []);\n    // Use state variables to track the current step\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    // Function to navigate to the next step\n    const handleNext = ()=>{\n        setCurrentStep(currentStep + 1);\n    };\n    // Function to navigate to the previous step\n    const handlePrev = ()=>{\n        setCurrentStep(currentStep - 1);\n    };\n    // Render the appropriate step based on the current step\n    let stepContent;\n    switch(currentStep){\n        case 1:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNext,\n                        children: \"Return To home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNext,\n                        children: \"Continue to Shipping\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 2:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrev,\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNext,\n                        children: \"Continue To Payment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 3:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrev,\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined);\n            break;\n        default:\n            stepContent = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_Main__WEBPACK_IMPORTED_MODULE_7__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Meta__WEBPACK_IMPORTED_MODULE_6__.Meta, {\n            title: \"Next.js checkout Presentation\",\n            description: \"Next js checkout is the perfect starter code for your project. Build your React application with the Next.js framework.\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loading-screen\",\n                className: \"fixed top-0 left-0 z-50 block h-full w-full bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"relative top-1/2 my-0 mx-auto block h-0 w-0 opacity-75\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto grid min-h-screen grid-cols-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto mr-6 py-6 sm:py-12 lg:col-span-3 lg:col-start-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-auto w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"relative text-center text-2xl font-medium text-gray-700 sm:text-3xl\",\n                                        children: \"Londinium\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"flex justify-between items-center text-lg font-medium\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"cursor-pointer \".concat(currentStep === 1 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                    onClick: ()=>setCurrentStep(1),\n                                                    children: \"Customer\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"cursor-pointer \".concat(currentStep === 2 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                    onClick: ()=>setCurrentStep(2),\n                                                    children: \"Shipping\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 9\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    className: \"cursor-pointer \".concat(currentStep === 3 ? \"text-gray-900\" : \"text-gray-500\"),\n                                                    onClick: ()=>setCurrentStep(3),\n                                                    children: \"Payment\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                                    lineNumber: 133,\n                                                    columnNumber: 9\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: stepContent\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined),\n                        cart !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_summary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ...cart\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 149,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"nkdiEIutdrnq8wqdwn+31hkgY6w=\");\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDUjtBQUVKO0FBRWdCO0FBQ0M7QUFDRjtBQUVGO0FBQ1k7QUFDaEI7QUFDRTtBQUV4QyxNQUFNVyxRQUFRLFNBQThDO1FBQTdDLEVBQUVDLFlBQVcsRUFBMkI7O0lBQ3JEVCxvREFBVSxDQUNSVyxRQUFtQyxFQUNuQ0EscUNBQXVDO0lBS3pDLDhCQUE4QjtJQUU5QixNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFVLEtBQUs7SUFDckQsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQWEsSUFBSTtJQUNqREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNka0IsV0FBVyxJQUFJO1FBQ2YsYUFBYTtRQUNiaEIsNERBQWtCLENBQUNTLGFBQWFXLElBQUksQ0FBQyxDQUFDQyxJQUFXO1lBQy9DSCxRQUFRO2dCQUFFLEdBQUdHLENBQUM7WUFBQztRQUNqQjtRQUNBTCxXQUFXLEtBQUs7SUFDbEIsR0FBRyxFQUFFO0lBRUosZ0RBQWdEO0lBQ2hELE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHeEIsK0NBQVFBLENBQUM7SUFFL0Msd0NBQXdDO0lBQ3hDLE1BQU15QixhQUFhLElBQU07UUFDdkJELGVBQWVELGNBQWM7SUFDL0I7SUFFQSw0Q0FBNEM7SUFDNUMsTUFBTUcsYUFBYSxJQUFNO1FBQ3ZCRixlQUFlRCxjQUFjO0lBQy9CO0lBR0Qsd0RBQXdEO0lBQ3hELElBQUlJO0lBQ0osT0FBUUo7UUFDTixLQUFLO1lBQ0hJLDRCQUNFLDhEQUFDQzs7a0NBRUMsOERBQUMxQix3REFBWUE7Ozs7O2tDQUNiLDhEQUFDMkI7d0JBQU9DLFNBQVNMO2tDQUFZOzs7Ozs7a0NBQzdCLDhEQUFDSTt3QkFBT0MsU0FBU0w7a0NBQVk7Ozs7Ozs7Ozs7OztZQUdqQyxLQUFNO1FBQ1IsS0FBSztZQUNIRSw0QkFDRSw4REFBQ0M7O2tDQUVDLDhEQUFDekIsd0RBQWFBOzs7OztrQ0FDZCw4REFBQzBCO3dCQUFPQyxTQUFTSjtrQ0FBWTs7Ozs7O2tDQUM3Qiw4REFBQ0c7d0JBQU9DLFNBQVNMO2tDQUFZOzs7Ozs7Ozs7Ozs7WUFHakMsS0FBTTtRQUNSLEtBQUs7WUFDSEUsNEJBQ0UsOERBQUNDOztrQ0FFQyw4REFBQ3hCLHdEQUFXQTs7Ozs7a0NBQ1osOERBQUN5Qjt3QkFBT0MsU0FBU0o7a0NBQVk7Ozs7OztrQ0FDN0IsOERBQUNHO2tDQUFPOzs7Ozs7Ozs7Ozs7WUFHWixLQUFNO1FBQ1I7WUFDRUYsY0FBYyxJQUFJO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNuQixpREFBSUE7UUFDSHVCLG9CQUNFLDhEQUFDeEIsK0NBQUlBO1lBQ0h5QixPQUFNO1lBQ05DLGFBQVk7OztZQUlmakIseUJBQ0MsOERBQUNZO2dCQUNDTSxJQUFHO2dCQUNIQyxXQUFVOzBCQUVWLDRFQUFDQztvQkFBS0QsV0FBVTs4QkFDZCw0RUFBQzlCLDJEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUtiLDhEQUFDdUI7Z0JBQUlPLFdBQVU7MEJBQ2IsNEVBQUNQO29CQUFJTyxXQUFVOztzQ0FDYiw4REFBQ1A7NEJBQUlPLFdBQVU7c0NBQ2IsNEVBQUNQO2dDQUFJTyxXQUFVOztrREFDYiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQXNFOzs7Ozs7a0RBR3BGLDhEQUFDUDtrREFFVCw0RUFBQ1U7NENBQUdILFdBQVU7OzhEQUNaLDhEQUFDSTtvREFDQ0osV0FBVyxrQkFFVixPQURDWixnQkFBZ0IsSUFBSSxrQkFBa0IsZUFBZTtvREFFdkRPLFNBQVMsSUFBTU4sZUFBZTs4REFDL0I7Ozs7Ozs4REFHRCw4REFBQ2U7b0RBQ0NKLFdBQVcsa0JBRVYsT0FEQ1osZ0JBQWdCLElBQUksa0JBQWtCLGVBQWU7b0RBRXZETyxTQUFTLElBQU1OLGVBQWU7OERBQy9COzs7Ozs7OERBR0QsOERBQUNlO29EQUNDSixXQUFXLGtCQUVWLE9BRENaLGdCQUFnQixJQUFJLGtCQUFrQixlQUFlO29EQUV2RE8sU0FBUyxJQUFNTixlQUFlOzhEQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBS0wsOERBQUNJO2tEQUVFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBSUlULFNBQVMsSUFBSSxrQkFBSSw4REFBQ1osaUVBQVlBOzRCQUFFLEdBQUdZLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xEO0dBM0lNVDtLQUFBQTs7QUFxSk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tzbHVnXS50c3g/NmY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IENhcnQgfSBmcm9tICdzd2VsbC1qcyc7XG5pbXBvcnQgc3dlbGwgZnJvbSAnc3dlbGwtanMnO1xuXG5pbXBvcnQgQ3VzdG9tZXJGb3JtIGZyb20gJ0AvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCBTaGlwcG1lbnRGb3JtIGZyb20gJ0AvY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICdAL2NvbXBvbmVudHMvZm9ybSc7XG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnQC9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tICdAL2NvbXBvbmVudHMvb3JkZXJfc3VtbWFyeSc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAnQC9sYXlvdXRzL01ldGEnO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gJ0AvdGVtcGxhdGVzL01haW4nO1xuXG5jb25zdCBJbmRleCA9ICh7IGNoZWNrb3V0X2lkIH06IHsgY2hlY2tvdXRfaWQ6IHN0cmluZyB9KSA9PiB7XG4gIHN3ZWxsLmluaXQoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9TV0VMTF9QVUJMSUNfU1RPUkUgYXMgc3RyaW5nLFxuICAgIHByb2Nlc3MuZW52Lk5FWFRfU1dFTExfUFVCTElDX0FQSV9UT0tFTiBhcyBzdHJpbmdcbiAgKTtcblxuXG4gIFxuICAvLyBJbml0aWFsaXplIHRoZSBjbGllbnQgZmlyc3RcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPENhcnQgfCBhbnk+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN3ZWxsLmNhcnQucmVjb3ZlcihjaGVja291dF9pZCkudGhlbigoZTogYW55KSA9PiB7XG4gICAgICBzZXRDYXJ0KHsgLi4uZSB9KTtcbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gICAvLyBVc2Ugc3RhdGUgdmFyaWFibGVzIHRvIHRyYWNrIHRoZSBjdXJyZW50IHN0ZXBcbiAgIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMSk7XG5cbiAgIC8vIEZ1bmN0aW9uIHRvIG5hdmlnYXRlIHRvIHRoZSBuZXh0IHN0ZXBcbiAgIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gICB9O1xuIFxuICAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHN0ZXBcbiAgIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwIC0gMSk7XG4gICB9O1xuXG4gICBcbiAgLy8gUmVuZGVyIHRoZSBhcHByb3ByaWF0ZSBzdGVwIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0ZXBcbiAgbGV0IHN0ZXBDb250ZW50O1xuICBzd2l0Y2ggKGN1cnJlbnRTdGVwKSB7XG4gICAgY2FzZSAxOlxuICAgICAgc3RlcENvbnRlbnQgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIEN1c3RvbWVyIGluZm9ybWF0aW9uIGZvcm0gKi99XG4gICAgICAgICAgPEN1c3RvbWVyRm9ybSAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0+UmV0dXJuIFRvIGhvbWU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9PkNvbnRpbnVlIHRvIFNoaXBwaW5nPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHN0ZXBDb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiBTaGlwcGluZyBpbmZvcm1hdGlvbiBmb3JtICovfVxuICAgICAgICAgIDxTaGlwcG1lbnRGb3JtIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2fT5CYWNrPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fT5Db250aW51ZSBUbyBQYXltZW50PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHN0ZXBDb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiBQYXltZW50IGZvcm0gKi99XG4gICAgICAgICAgPFBheW1lbnRGb3JtIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2fT5QcmV2PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHN0ZXBDb250ZW50ID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1haW5cbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPVwiTmV4dC5qcyBjaGVja291dCBQcmVzZW50YXRpb25cIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTmV4dCBqcyBjaGVja291dCBpcyB0aGUgcGVyZmVjdCBzdGFydGVyIGNvZGUgZm9yIHlvdXIgcHJvamVjdC4gQnVpbGQgeW91ciBSZWFjdCBhcHBsaWNhdGlvbiB3aXRoIHRoZSBOZXh0LmpzIGZyYW1ld29yay5cIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwibG9hZGluZy1zY3JlZW5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB6LTUwIGJsb2NrICBoLWZ1bGwgdy1mdWxsIGJnLXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvcC0xLzIgbXktMCBteC1hdXRvIGJsb2NrIGgtMCB3LTAgIG9wYWNpdHktNzVcIj5cbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZ3JpZCBtaW4taC1zY3JlZW4gZ3JpZC1jb2xzLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1yLTYgIHB5LTYgc206cHktMTIgbGc6Y29sLXNwYW4tMyBsZzpjb2wtc3RhcnQtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIHctZnVsbFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBzbTp0ZXh0LTN4bFwiPlxuICAgICAgICAgICAgICAgIExvbmRpbml1bVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgey8qIEhlYWRlciB3aXRoIG5hdmlnYXRpb24gbGlua3MgKi99XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtbGcgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwID09PSAxID8gJ3RleHQtZ3JheS05MDAnIDogJ3RleHQtZ3JheS01MDAnXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFN0ZXAoMSl9XG4gICAgICAgID5cbiAgICAgICAgICBDdXN0b21lclxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgY3VycmVudFN0ZXAgPT09IDIgPyAndGV4dC1ncmF5LTkwMCcgOiAndGV4dC1ncmF5LTUwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50U3RlcCgyKX1cbiAgICAgICAgPlxuICAgICAgICAgIFNoaXBwaW5nXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICBjdXJyZW50U3RlcCA9PT0gMyA/ICd0ZXh0LWdyYXktOTAwJyA6ICd0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRTdGVwKDMpfVxuICAgICAgICA+XG4gICAgICAgICAgUGF5bWVudFxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgey8qIEhlYWRlciB3aXRoIG5hdmlnYXRpb24gbGlua3MgKi99XG4gICAgICB7c3RlcENvbnRlbnR9XG4gICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y2FydCAhPT0gbnVsbCAmJiA8T3JkZXJTdW1tYXJ5IHsuLi5jYXJ0fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjaGVja291dF9pZDogY29udGV4dC5xdWVyeS5zbHVnLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzd2VsbCIsIkN1c3RvbWVyRm9ybSIsIlNoaXBwbWVudEZvcm0iLCJQYXltZW50Rm9ybSIsIkxvYWRlciIsIk9yZGVyU3VtbWFyeSIsIk1ldGEiLCJNYWluIiwiSW5kZXgiLCJjaGVja291dF9pZCIsImluaXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9TV0VMTF9QVUJMSUNfU1RPUkUiLCJORVhUX1NXRUxMX1BVQkxJQ19BUElfVE9LRU4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNhcnQiLCJzZXRDYXJ0IiwicmVjb3ZlciIsInRoZW4iLCJlIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2Iiwic3RlcENvbnRlbnQiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpZCIsImNsYXNzTmFtZSIsInNwYW4iLCJoMSIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[slug].tsx\n"));

/***/ })

});