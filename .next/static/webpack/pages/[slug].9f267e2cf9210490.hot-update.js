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

/***/ "./src/components/payment.tsx":
/*!************************************!*\
  !*** ./src/components/payment.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swell-js */ \"./node_modules/swell-js/dist/swell.umd.min.js\");\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swell_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction payment() {\n    _s();\n    const firstName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.firstName);\n    const currentStepaccepted = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.currentStep);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const handleback = (event)=>{\n        event.preventDefault();\n        dispatch({\n            type: \"SET_INPUT_VALUES\",\n            value11: currentStepaccepted - 1\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        dispatch({\n            type: \"SET_INPUT_VALUES\",\n            value11: currentStepaccepted + 1\n        });\n    };\n    const [paymentMethod, setPaymentMethod] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        setPaymentMethod(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        swell_js__WEBPACK_IMPORTED_MODULE_2___default().payment.createElements({\n            paypal: {\n                elementId: \"#paypal-button\",\n                style: {\n                    layout: \"horizontal\",\n                    color: \"blue\",\n                    shape: \"rect\",\n                    label: \"buynow\",\n                    tagline: false\n                },\n                onSuccess: ()=>{\n                    swell_js__WEBPACK_IMPORTED_MODULE_2___default().cart.submitOrder();\n                },\n                onError: (error)=>{\n                    console.log(\"onError\", error);\n                }\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-check\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-2 text-base\",\n                        children: \"Customer Information\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto w-full border mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"text-left text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: [\n                                        firstName,\n                                        \" \",\n                                        currentStepaccepted\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-xs text-custom-200\",\n                                        children: \"change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 35\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-t text-left text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"Shipping Address\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"123 Main Street\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-xs text-custom-200\",\n                                        children: \"change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 35\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-t text-left text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"method\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: [\n                                        \"-express Shipping \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 53\n                                        }, this),\n                                        \" -standard shipping \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-xs text-custom-200\",\n                                        children: \"change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 35\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-fit bg-custom-100 mt-6 rounded-md flex flex-row space-x-3 p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/assets/images/truck.png\",\n                        className: \"w-7 h-7 ml-3\",\n                        alt: \"track\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xs text-center\",\n                        children: \"please note your order has been split into 2 deliveries \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                lineNumber: 94,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-check\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-2 text-base\",\n                        children: \"Payment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                lineNumber: 99,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto w-full border mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"text-left text-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-4 py-2\",\n                            children: \"All transaction are secure and encrypted \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                lineNumber: 106,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"paypal-button\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                lineNumber: 115,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"h-12 w-24 text-xs font-medium text-custom-200\",\n                        onClick: handleback,\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white\",\n                        onClick: handleSubmit,\n                        children: \"Complete Order\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n                lineNumber: 118,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\payment.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(payment, \"sW0AYaozeGJxGUX+ZyAzaoekqOc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (payment);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUd2Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNaLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWiw0RUFBQ0M7NEJBQUVELFdBQVU7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQWlCOzs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDRztnQkFBTUgsV0FBVTswQkFDakIsNEVBQUNJOzhCQUNDLDRFQUFDQzt3QkFBR0wsV0FBVTtrQ0FDWiw0RUFBQ007NEJBQUdOLFdBQVU7c0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNOUIsOERBQUNEOzBCQUNLLDRFQUFDQTtvQkFBSWUsSUFBRzs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUNmO2dCQUFJQyxXQUFVOztrQ0FDVCw4REFBQ087d0JBQ0RQLFdBQVU7d0JBQ1ZlLFNBQVMzQztrQ0FBWTs7Ozs7O2tDQUNyQiw4REFBQ21DO3dCQUNEUCxXQUFVO3dCQUNWZSxTQUFTdEM7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQztHQTFIU1g7O1FBRVdELG9EQUFXQTtRQUVEQSxvREFBV0E7UUFDdEJELG9EQUFXQTs7O0FBdUg5QiwrREFBZUUsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wYXltZW50LnRzeD9hMTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFN3ZWxsIGZyb20gJ3N3ZWxsLWpzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmZ1bmN0aW9uIHBheW1lbnQoKSB7XG5cbiAgY29uc3QgZmlyc3ROYW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZmlyc3ROYW1lKTtcblxuICBjb25zdCBjdXJyZW50U3RlcGFjY2VwdGVkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudFN0ZXApO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgaGFuZGxlYmFjayA9IChldmVudDogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfSU5QVVRfVkFMVUVTJyx2YWx1ZTExOiBjdXJyZW50U3RlcGFjY2VwdGVkLTEgfSk7IFxuICBcbn1cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0lOUFVUX1ZBTFVFUycsdmFsdWUxMTogY3VycmVudFN0ZXBhY2NlcHRlZCsxIH0pOyBcblxufVxuIFxuXG4gIGNvbnN0IFtwYXltZW50TWV0aG9kLCBzZXRQYXltZW50TWV0aG9kXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogeyB0YXJnZXQ6IHsgdmFsdWU6IFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgICBzZXRQYXltZW50TWV0aG9kKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBTd2VsbC5wYXltZW50LmNyZWF0ZUVsZW1lbnRzKHtcbiAgICAgIHBheXBhbDoge1xuICAgICAgICBlbGVtZW50SWQ6ICcjcGF5cGFsLWJ1dHRvbicsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICBzaGFwZTogJ3JlY3QnLFxuICAgICAgICAgIGxhYmVsOiAnYnV5bm93JyxcbiAgICAgICAgICB0YWdsaW5lOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgU3dlbGwuY2FydC5zdWJtaXRPcmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yOiAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkVycm9yJywgZXJyb3IpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgIFxuICBcbiAgXG4gIH0sIFtdKTtcblxuXG4gXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctZ3JheS05MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVja1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIHRleHQtYmFzZVwiPkN1c3RvbWVyIEluZm9ybWF0aW9uPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHctZnVsbCBib3JkZXIgbXQtNFwiPlxuICAgIDx0aGVhZD5cbiAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1zbVwiPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+Q29udGFjdDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57Zmlyc3ROYW1lfSB7Y3VycmVudFN0ZXBhY2NlcHRlZH08L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+PGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1jdXN0b20tMjAwJyA+Y2hhbmdlPC9idXR0b24+PC90ZD5cblxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDx0Ym9keT5cbiAgICAgIDx0ciAgY2xhc3NOYW1lPVwiYm9yZGVyLXQgdGV4dC1sZWZ0IHRleHQtc21cIiA+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5TaGlwcGluZyBBZGRyZXNzPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPjEyMyBNYWluIFN0cmVldDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj48YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWN1c3RvbS0yMDAnID5jaGFuZ2U8L2J1dHRvbj48L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICAgIDx0Ym9keT5cbiAgICAgIDx0ciAgY2xhc3NOYW1lPVwiYm9yZGVyLXQgdGV4dC1sZWZ0IHRleHQtc21cIiA+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5tZXRob2Q8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+LWV4cHJlc3MgU2hpcHBpbmcgPGJyPjwvYnI+IC1zdGFuZGFyZCBzaGlwcGluZyA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+PGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1jdXN0b20tMjAwJyA+Y2hhbmdlPC9idXR0b24+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgPC90YWJsZT5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1maXQgYmctY3VzdG9tLTEwMCBtdC02IHJvdW5kZWQtbWQgZmxleCBmbGV4LXJvdyBzcGFjZS14LTMgcC0yJyA+XG4gICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9pbWFnZXMvdHJ1Y2sucG5nJyBjbGFzc05hbWU9J3ctNyBoLTcgbWwtMycgYWx0PSd0cmFjaycgPjwvaW1nPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LWNlbnRlcicgPnBsZWFzZSBub3RlIHlvdXIgb3JkZXIgaGFzIGJlZW4gc3BsaXQgaW50byAyIGRlbGl2ZXJpZXMgPC9oMT4gIFxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC02XCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1iYXNlXCI+UGF5bWVudDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHctZnVsbCBib3JkZXIgbXQtNFwiPlxuICAgIDx0aGVhZD5cbiAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGV4dC1zbVwiPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+QWxsIHRyYW5zYWN0aW9uIGFyZSBzZWN1cmUgYW5kIGVuY3J5cHRlZCA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuICAgIDwvdGFibGU+XG5cblxuICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInBheXBhbC1idXR0b25cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtNSc+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMjQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWN1c3RvbS0yMDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZWJhY2t9PkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy00OCByb3VuZGVkIGJnLWN1c3RvbS0yMDAgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCIgXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fT5Db21wbGV0ZSBPcmRlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXltZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTd2VsbCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJwYXltZW50IiwiZmlyc3ROYW1lIiwic3RhdGUiLCJjdXJyZW50U3RlcGFjY2VwdGVkIiwiY3VycmVudFN0ZXAiLCJkaXNwYXRjaCIsImhhbmRsZWJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInZhbHVlMTEiLCJoYW5kbGVTdWJtaXQiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudHMiLCJwYXlwYWwiLCJlbGVtZW50SWQiLCJzdHlsZSIsImxheW91dCIsImNvbG9yIiwic2hhcGUiLCJsYWJlbCIsInRhZ2xpbmUiLCJvblN1Y2Nlc3MiLCJjYXJ0Iiwic3VibWl0T3JkZXIiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaSIsInNwYW4iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0ZCIsImJ1dHRvbiIsInRib2R5IiwiYnIiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImlkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/payment.tsx\n"));

/***/ })

});