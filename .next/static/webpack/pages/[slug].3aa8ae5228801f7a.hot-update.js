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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _splitdelivery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitdelivery */ \"./src/components/splitdelivery.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction shippment(param) {\n    let { items , discount_total , sub_total , grand_total , tax_total , promotions  } = param;\n    _s();\n    const [instruction, setInstruction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const [shippingServices, setShippingServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const currentStepaccepted = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.currentStep);\n    const firstName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.firstName);\n    const lastName = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.lastName);\n    const company = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.company);\n    const address = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.address);\n    const apartment = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.apartment);\n    const emailstate = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.email);\n    console.log(emailstate);\n    const handleback = (event)=>{\n        event.preventDefault();\n        dispatch({\n            type: \"SET_INPUT_VALUES\",\n            value11: currentStepaccepted - 1\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        dispatch({\n            type: \"SET_INPUT_VALUES\",\n            value11: currentStepaccepted + 1,\n            value13: instruction\n        });\n    };\n    // Use state variables to track the current step\n    // Function to navigate to the next step\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-check\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-2 text-base\",\n                        children: \"Customer Information\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto w-full border mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"text-left text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: [\n                                        firstName,\n                                        \" \",\n                                        currentStepaccepted,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 71\n                                        }, this),\n                                        \" \",\n                                        email\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleback,\n                                        className: \"text-xs text-custom-200\",\n                                        children: \"change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border-t text-left text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: \"Shipping Address\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: [\n                                        firstName,\n                                        \" \",\n                                        lastName,\n                                        \" \",\n                                        company,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 70\n                                        }, this),\n                                        \" \",\n                                        apartment,\n                                        \" \",\n                                        address\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"px-4 py-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleback,\n                                        className: \"text-xs text-custom-200\",\n                                        children: \"change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-check\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-2 text-base\",\n                        children: \"Select Shipping detail and dates\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 75,\n                columnNumber: 5\n            }, this),\n            items === null || items === void 0 ? void 0 : items.map((e, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splitdelivery__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    length: items.length,\n                    index: key + 1,\n                    ...e\n                }, key, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"delivery-instructions\",\n                        className: \"block text-sm mb-2\",\n                        children: \"Please provide delivery instructions if any\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"delivery-instructions\",\n                        name: \"delivery-instructions\",\n                        placeholder: \"Instructions\",\n                        className: \"appearance-none border w-full py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline-blue text-sm\",\n                        value: instruction,\n                        onChange: (event)=>setInstruction(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 90,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleback,\n                        className: \"h-12 w-24 text-xs font-medium text-custom-200\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        className: \"h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white\",\n                        children: \"Continue To Payment\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n                lineNumber: 105,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\components\\\\shippment.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(shippment, \"2VpM90o4giv2Xa+uX8CF7q0IZ98=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (shippment);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTtrQ0FDWiw0RUFBQ0M7NEJBQUVELFdBQVU7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQWtCOzs7Ozs7Ozs7Ozs7WUFJckMvQixrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU8wQyxHQUFHLENBQUMsQ0FBQ0MsR0FBUUMsb0JBQ2IsOERBQUNoRCxzREFBYUE7b0JBQUNpRCxRQUFRN0MsTUFBTTZDLE1BQU07b0JBQUVDLE9BQU9GLE1BQUk7b0JBQWMsR0FBR0QsQ0FBQzttQkFBVkM7Ozs7OzBCQU1oRSw4REFBQ2Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDZ0I7d0JBQU1DLFNBQVE7d0JBQXdCakIsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FHdEUsOERBQUNrQjt3QkFDQ3ZCLE1BQUs7d0JBQ0x3QixJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNackIsV0FBVTt3QkFDVnNCLE9BQU8vQzt3QkFDUGdELFVBQVUsQ0FBQzlCLFFBQVVqQixlQUFlaUIsTUFBTStCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUkxRCw4REFBQ3ZCO2dCQUFJQyxXQUFVOztrQ0FDVCw4REFBQ1E7d0JBQ0RDLFNBQVNqQjt3QkFDVFEsV0FBVTtrQ0FBZ0Q7Ozs7OztrQ0FHMUQsOERBQUNRO3dCQUNEQyxTQUFTWjt3QkFDVEcsV0FBVTtrQ0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0E5R1NoQzs7UUFHVUYsb0RBQVdBO1FBR0FDLG9EQUFXQTtRQUNyQkEsb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNYQSxvREFBV0E7UUFDWEEsb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNOQSxvREFBV0E7OztBQW9HcEMsK0RBQWVDLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2hpcHBtZW50LnRzeD8wODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNwbGl0ZGVsaXZlcnkgZnJvbSBcIi4vc3BsaXRkZWxpdmVyeVwiO1xuaW1wb3J0IHR5cGUgeyBDYXJ0SXRlbSwgTGlzdFJlc3VsdCB9IGZyb20gJ3N3ZWxsLWpzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuaW1wb3J0IHsgZ2V0UHJpY2UgfSBmcm9tICdAL3V0aWxzL3Byb2R1Y3QnO1xuXG5mdW5jdGlvbiBzaGlwcG1lbnQoeyBpdGVtcywgZGlzY291bnRfdG90YWwsICBzdWJfdG90YWwsICBncmFuZF90b3RhbCwgIHRheF90b3RhbCwgIHByb21vdGlvbnMsfTogeyAgaXRlbXM6IEFycmF5PENhcnRJdGVtPjsgIGRpc2NvdW50X3RvdGFsOiBudW1iZXI7ICB0b3RhbDogbnVtYmVyOyAgc3ViX3RvdGFsOiBudW1iZXI7IHRheF90b3RhbDogbnVtYmVyO3Byb21vdGlvbnM6IExpc3RSZXN1bHQ8YW55PjsgZ3JhbmRfdG90YWw6IG51bWJlcjt9KSB7XG4gIFxuICBjb25zdCBbaW5zdHJ1Y3Rpb24sIHNldEluc3RydWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbc2hpcHBpbmdTZXJ2aWNlcywgc2V0U2hpcHBpbmdTZXJ2aWNlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgY3VycmVudFN0ZXBhY2NlcHRlZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmN1cnJlbnRTdGVwKTtcbiAgY29uc3QgZmlyc3ROYW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZmlyc3ROYW1lKTtcbiAgY29uc3QgbGFzdE5hbWUgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubGFzdE5hbWUpO1xuICBjb25zdCBjb21wYW55ICAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb21wYW55KTtcbiAgY29uc3QgYWRkcmVzcyAgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWRkcmVzcyk7XG4gIGNvbnN0IGFwYXJ0bWVudCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFwYXJ0bWVudCk7XG4gIGNvbnN0IGVtYWlsc3RhdGUgICAgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZW1haWwpO1xuXG4gIGNvbnNvbGUubG9nKGVtYWlsc3RhdGUpXG5cbiAgY29uc3QgaGFuZGxlYmFjayA9IChldmVudDogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfSU5QVVRfVkFMVUVTJyx2YWx1ZTExOiBjdXJyZW50U3RlcGFjY2VwdGVkLTEgfSk7IFxuICBcbn1cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyB9KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0lOUFVUX1ZBTFVFUycsdmFsdWUxMTogY3VycmVudFN0ZXBhY2NlcHRlZCsxICwgdmFsdWUxMzogaW5zdHJ1Y3Rpb24gXG4gfSk7IFxuXG59XG5cblxuXG4gICAvLyBVc2Ugc3RhdGUgdmFyaWFibGVzIHRvIHRyYWNrIHRoZSBjdXJyZW50IHN0ZXBcblxuICAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgc3RlcFxuIFxuXG5cbiBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2tcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1iYXNlXCI+Q3VzdG9tZXIgSW5mb3JtYXRpb248L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHctZnVsbCBib3JkZXIgbXQtNFwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRleHQtc21cIj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+Q29udGFjdDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPntmaXJzdE5hbWV9IHtjdXJyZW50U3RlcGFjY2VwdGVkfSA8YnI+PC9icj4ge2VtYWlsfTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPjxidXR0b24gb25DbGljaz17aGFuZGxlYmFja30gY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtY3VzdG9tLTIwMCcgPmNoYW5nZTwvYnV0dG9uPjwvdGQ+XG5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAgY2xhc3NOYW1lPVwiYm9yZGVyLXQgdGV4dC1sZWZ0IHRleHQtc21cIiA+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlNoaXBwaW5nIEFkZHJlc3M8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj57Zmlyc3ROYW1lfSB7bGFzdE5hbWV9IHtjb21wYW55fSA8YnI+PC9icj4ge2FwYXJ0bWVudH0ge2FkZHJlc3N9PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGViYWNrfSBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1jdXN0b20tMjAwJyA+Y2hhbmdlPC9idXR0b24+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctZ3JheS05MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yICB0ZXh0LWJhc2VcIj5TZWxlY3QgU2hpcHBpbmcgZGV0YWlsIGFuZCBkYXRlczwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuXG4gICAge2l0ZW1zPy5tYXAoKGU6IGFueSwga2V5KSA9PiAoXG4gICAgICAgICAgICA8U3BsaXRkZWxpdmVyeSBsZW5ndGg9e2l0ZW1zLmxlbmd0aH0gaW5kZXg9e2tleSsxfSBrZXk9e2tleX0gey4uLmV9IC8+XG4gICAgICAgICAgKSl9XG5cblxuICAgIFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImRlbGl2ZXJ5LWluc3RydWN0aW9uc1wiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gbWItMlwiPlxuICAgICAgICBQbGVhc2UgcHJvdmlkZSBkZWxpdmVyeSBpbnN0cnVjdGlvbnMgaWYgYW55XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJkZWxpdmVyeS1pbnN0cnVjdGlvbnNcIlxuICAgICAgICBuYW1lPVwiZGVsaXZlcnktaW5zdHJ1Y3Rpb25zXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnN0cnVjdGlvbnNcIlxuICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHctZnVsbCBweS0yIHB4LTMgcm91bmRlZC1tZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZS1ibHVlIHRleHQtc21cIlxuICAgICAgICB2YWx1ZT17aW5zdHJ1Y3Rpb259XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEluc3RydWN0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICBcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTUnPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlYmFja31cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMjQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWN1c3RvbS0yMDBcIj5cbiAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctNDggcm91bmRlZCBiZy1jdXN0b20tMjAwIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiIFxuICAgICAgICAgID5Db250aW51ZSBUbyBQYXltZW50PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwcG1lbnQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdCIsIlNwbGl0ZGVsaXZlcnkiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2hpcHBtZW50IiwiaXRlbXMiLCJkaXNjb3VudF90b3RhbCIsInN1Yl90b3RhbCIsImdyYW5kX3RvdGFsIiwidGF4X3RvdGFsIiwicHJvbW90aW9ucyIsImluc3RydWN0aW9uIiwic2V0SW5zdHJ1Y3Rpb24iLCJkaXNwYXRjaCIsInNoaXBwaW5nU2VydmljZXMiLCJzZXRTaGlwcGluZ1NlcnZpY2VzIiwiY3VycmVudFN0ZXBhY2NlcHRlZCIsInN0YXRlIiwiY3VycmVudFN0ZXAiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNvbXBhbnkiLCJhZGRyZXNzIiwiYXBhcnRtZW50IiwiZW1haWxzdGF0ZSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImhhbmRsZWJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInZhbHVlMTEiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZTEzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaSIsInNwYW4iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0ZCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsInRib2R5IiwibWFwIiwiZSIsImtleSIsImxlbmd0aCIsImluZGV4IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shippment.tsx\n"));

/***/ })

});