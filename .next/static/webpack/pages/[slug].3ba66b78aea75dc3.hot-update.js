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

/***/ "./src/components/shippment.tsx":
/*!**************************************!*\
  !*** ./src/components/shippment.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _splitdelivery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitdelivery */ \"./src/components/splitdelivery.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction shippment(param) {\n    let { items , discount_total , sub_total , grand_total , tax_total , promotions  } = param;\n    _s();\n    const [instruction, setInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const [shippingServices, setShippingServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const currentStepaccepted = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.currentStep);\n    const handleback = (event)=>{\n        event.preventDefault();\n        dispatch({\n            type: \"SET_INPUT_VALUES\",\n            value11: currentStepaccepted - 1\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        dispatch({\n            type: \"SET_INPUT_VALUES\",\n            value11: currentStepaccepted + 1,\n            value13: instruction\n        });\n    };\n    const firstName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.firstName);\n    const lastName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.lastName);\n    const company = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.company);\n    const address = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.address);\n    const apartment = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.apartment);\n    const email = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.email);\n    // Use state variables to track the current step\n    // Function to navigate to the next step\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-check\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-2 text-base\",\n                        children: \"Customer Information\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto w-full border mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"text-left text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: [\n                                        firstName,\n                                        \" \",\n                                        currentStepaccepted,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 71\n                                        }, this),\n                                        \" \",\n                                        email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleback,\n                                        className: \"text-xs text-custom-200\",\n                                        children: \"change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-t text-left text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"Shipping Address\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: [\n                                        firstName,\n                                        \" \",\n                                        lastName,\n                                        \" \",\n                                        company,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 70\n                                        }, this),\n                                        \" \",\n                                        apartment,\n                                        \" \",\n                                        address\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleback,\n                                        className: \"text-xs text-custom-200\",\n                                        children: \"change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-check\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-2 text-base\",\n                        children: \"Select Shipping detail and dates\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 87,\n                columnNumber: 5\n            }, this),\n            items === null || items === void 0 ? void 0 : items.map((e, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splitdelivery__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    length: items.length,\n                    index: key + 1,\n                    ...e\n                }, key, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"delivery-instructions\",\n                        className: \"block text-sm mb-2\",\n                        children: \"Please provide delivery instructions if any\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"delivery-instructions\",\n                        name: \"delivery-instructions\",\n                        placeholder: \"Instructions\",\n                        className: \"appearance-none border w-full py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline-blue text-sm\",\n                        value: instruction,\n                        onChange: (event)=>setInstruction(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 102,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleback,\n                        className: \"h-12 w-24 text-xs font-medium text-custom-200\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        className: \"h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white\",\n                        children: \"Continue To Payment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 117,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(shippment, \"mWwPPmBbORIFZ3Br5CmBdVHxapY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (shippment);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBRWpCLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FBa0I7Ozs7Ozs7Ozs7OztZQUlyQzVCLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT3VDLEdBQUcsQ0FBQyxDQUFDQyxHQUFRQyxvQkFDYiw4REFBQzdDLHNEQUFhQTtvQkFBQzhDLFFBQVExQyxNQUFNMEMsTUFBTTtvQkFBRUMsT0FBT0YsTUFBSTtvQkFBYyxHQUFHRCxDQUFDO21CQUFWQzs7Ozs7MEJBTWhFLDhEQUFDZDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNnQjt3QkFBTUMsU0FBUTt3QkFBd0JqQixXQUFVO2tDQUFxQjs7Ozs7O2tDQUd0RSw4REFBQ2tCO3dCQUNDN0IsTUFBSzt3QkFDTDhCLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pyQixXQUFVO3dCQUNWc0IsT0FBTzVDO3dCQUNQNkMsVUFBVSxDQUFDcEMsUUFBVVIsZUFBZVEsTUFBTXFDLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUkxRCw4REFBQ3ZCO2dCQUFJQyxXQUFVOztrQ0FDVCw4REFBQ1E7d0JBQ0RDLFNBQVN2Qjt3QkFDVGMsV0FBVTtrQ0FBZ0Q7Ozs7OztrQ0FHMUQsOERBQUNRO3dCQUNEQyxTQUFTbEI7d0JBQ1RTLFdBQVU7a0NBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBMUhTN0I7O1FBaUJVRixvREFBV0E7UUFHQUMsb0RBQVdBO1FBZXJCQSxvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNYQSxvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ1hBLG9EQUFXQTs7O0FBb0YvQiwrREFBZUMsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaGlwcG1lbnQudHN4PzA4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCAgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3BsaXRkZWxpdmVyeSBmcm9tIFwiLi9zcGxpdGRlbGl2ZXJ5XCI7XG5pbXBvcnQgdHlwZSB7IENhcnRJdGVtLCBMaXN0UmVzdWx0IH0gZnJvbSAnc3dlbGwtanMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5pbXBvcnQgeyBnZXRQcmljZSB9IGZyb20gJ0AvdXRpbHMvcHJvZHVjdCc7XG5cbmZ1bmN0aW9uIHNoaXBwbWVudCh7XG4gIGl0ZW1zLFxuICBkaXNjb3VudF90b3RhbCxcbiAgc3ViX3RvdGFsLFxuICBncmFuZF90b3RhbCxcbiAgdGF4X3RvdGFsLFxuICBwcm9tb3Rpb25zLFxufToge1xuICBpdGVtczogQXJyYXk8Q2FydEl0ZW0+O1xuICBkaXNjb3VudF90b3RhbDogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBzdWJfdG90YWw6IG51bWJlcjtcbiAgdGF4X3RvdGFsOiBudW1iZXI7XG4gIHByb21vdGlvbnM6IExpc3RSZXN1bHQ8YW55PjtcbiAgZ3JhbmRfdG90YWw6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgW2luc3RydWN0aW9uLCBzZXRJbnN0cnVjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3NoaXBwaW5nU2VydmljZXMsIHNldFNoaXBwaW5nU2VydmljZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGN1cnJlbnRTdGVwYWNjZXB0ZWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50U3RlcCk7XG5cbiAgY29uc3QgaGFuZGxlYmFjayA9IChldmVudDogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfSU5QVVRfVkFMVUVTJyx2YWx1ZTExOiBjdXJyZW50U3RlcGFjY2VwdGVkLTEgfSk7IFxuICBcbn1cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0lOUFVUX1ZBTFVFUycsdmFsdWUxMTogY3VycmVudFN0ZXBhY2NlcHRlZCsxICwgdmFsdWUxMzogaW5zdHJ1Y3Rpb24gXG4gfSk7IFxuXG59XG5cbiAgY29uc3QgZmlyc3ROYW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZmlyc3ROYW1lKTtcbiAgY29uc3QgbGFzdE5hbWUgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGFzdE5hbWUpO1xuICBjb25zdCBjb21wYW55ICAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb21wYW55KTtcbiAgY29uc3QgYWRkcmVzcyAgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWRkcmVzcyk7XG4gIGNvbnN0IGFwYXJ0bWVudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFwYXJ0bWVudCk7XG4gIGNvbnN0IGVtYWlsICAgICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmVtYWlsKTtcblxuXG4gICAvLyBVc2Ugc3RhdGUgdmFyaWFibGVzIHRvIHRyYWNrIHRoZSBjdXJyZW50IHN0ZXBcblxuICAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgc3RlcFxuIFxuXG5cbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2tcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1iYXNlXCI+Q3VzdG9tZXIgSW5mb3JtYXRpb248L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHctZnVsbCBib3JkZXIgbXQtNFwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtc21cIj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+Q29udGFjdDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPntmaXJzdE5hbWV9IHtjdXJyZW50U3RlcGFjY2VwdGVkfSA8YnI+PC9icj4ge2VtYWlsfTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPjxidXR0b24gb25DbGljaz17aGFuZGxlYmFja30gY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtY3VzdG9tLTIwMCcgPmNoYW5nZTwvYnV0dG9uPjwvdGQ+XG5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAgY2xhc3NOYW1lPVwiYm9yZGVyLXQgdGV4dC1sZWZ0IHRleHQtc21cIiA+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlNoaXBwaW5nIEFkZHJlc3M8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57Zmlyc3ROYW1lfSB7bGFzdE5hbWV9IHtjb21wYW55fSA8YnI+PC9icj4ge2FwYXJ0bWVudH0ge2FkZHJlc3N9PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGViYWNrfSBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1jdXN0b20tMjAwJyA+Y2hhbmdlPC9idXR0b24+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctZ3JheS05MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yICB0ZXh0LWJhc2VcIj5TZWxlY3QgU2hpcHBpbmcgZGV0YWlsIGFuZCBkYXRlczwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuXG4gICAge2l0ZW1zPy5tYXAoKGU6IGFueSwga2V5KSA9PiAoXG4gICAgICAgICAgICA8U3BsaXRkZWxpdmVyeSBsZW5ndGg9e2l0ZW1zLmxlbmd0aH0gaW5kZXg9e2tleSsxfSBrZXk9e2tleX0gey4uLmV9IC8+XG4gICAgICAgICAgKSl9XG5cblxuICAgIFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRlbGl2ZXJ5LWluc3RydWN0aW9uc1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gbWItMlwiPlxuICAgICAgICBQbGVhc2UgcHJvdmlkZSBkZWxpdmVyeSBpbnN0cnVjdGlvbnMgaWYgYW55XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJkZWxpdmVyeS1pbnN0cnVjdGlvbnNcIlxuICAgICAgICBuYW1lPVwiZGVsaXZlcnktaW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnN0cnVjdGlvbnNcIlxuICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHctZnVsbCBweS0yIHB4LTMgcm91bmRlZC1tZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZS1ibHVlIHRleHQtc21cIlxuICAgICAgICB2YWx1ZT17aW5zdHJ1Y3Rpb259XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEluc3RydWN0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICBcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTUnPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlYmFja31cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMjQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWN1c3RvbS0yMDBcIj5cbiAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctNDggcm91bmRlZCBiZy1jdXN0b20tMjAwIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiIFxuICAgICAgICAgID5Db250aW51ZSBUbyBQYXltZW50PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwcG1lbnQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdCIsIlNwbGl0ZGVsaXZlcnkiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2hpcHBtZW50IiwiaXRlbXMiLCJkaXNjb3VudF90b3RhbCIsInN1Yl90b3RhbCIsImdyYW5kX3RvdGFsIiwidGF4X3RvdGFsIiwicHJvbW90aW9ucyIsImluc3RydWN0aW9uIiwic2V0SW5zdHJ1Y3Rpb24iLCJkaXNwYXRjaCIsInNoaXBwaW5nU2VydmljZXMiLCJzZXRTaGlwcGluZ1NlcnZpY2VzIiwiY3VycmVudFN0ZXBhY2NlcHRlZCIsInN0YXRlIiwiY3VycmVudFN0ZXAiLCJoYW5kbGViYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJ2YWx1ZTExIiwiaGFuZGxlU3VibWl0IiwidmFsdWUxMyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY29tcGFueSIsImFkZHJlc3MiLCJhcGFydG1lbnQiLCJlbWFpbCIsImRpdiIsImNsYXNzTmFtZSIsImkiLCJzcGFuIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0Ym9keSIsIm1hcCIsImUiLCJrZXkiLCJsZW5ndGgiLCJpbmRleCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/shippment.tsx\n"));

/***/ })

});