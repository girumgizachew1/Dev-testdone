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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swell-js */ \"./node_modules/swell-js/dist/swell.umd.min.js\");\n/* harmony import */ var swell_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swell_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form */ \"./src/components/form.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading */ \"./src/components/loading.tsx\");\n/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/order_summary */ \"./src/components/order_summary.tsx\");\n/* harmony import */ var _layouts_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/layouts/Meta */ \"./src/layouts/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/templates/Main */ \"./src/templates/Main.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Index = (param)=>{\n    let { checkout_id  } = param;\n    _s();\n    swell_js__WEBPACK_IMPORTED_MODULE_2___default().init(\"toggly\", \"pk_Qo600k0BZTFLNJzuwLIgqAdmzkh720h5\");\n    // Initialize the client first\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        // @ts-ignore\n        swell_js__WEBPACK_IMPORTED_MODULE_2___default().cart.recover(checkout_id).then((e)=>{\n            setCart({\n                ...e\n            });\n        });\n        setLoading(false);\n    }, []);\n    // Use state variables to track the current step\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    // Function to navigate to the next step\n    const handleNext = ()=>{\n        setCurrentStep(currentStep + 1);\n    };\n    // Function to navigate to the previous step\n    const handlePrev = ()=>{\n        setCurrentStep(currentStep - 1);\n    };\n    // Render the appropriate step based on the current step\n    let stepContent;\n    switch(currentStep){\n        case 1:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleNext,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 2:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrev,\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNext,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined);\n            break;\n        case 3:\n            stepContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePrev,\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined);\n            break;\n        default:\n            stepContent = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_templates_Main__WEBPACK_IMPORTED_MODULE_7__.Main, {\n        meta: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Meta__WEBPACK_IMPORTED_MODULE_6__.Meta, {\n            title: \"Next.js checkout Presentation\",\n            description: \"Next js checkout is the perfect starter code for your project. Build your React application with the Next.js framework.\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loading-screen\",\n                className: \"fixed top-0 left-0 z-50 block h-full w-full bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"relative top-1/2 my-0 mx-auto block h-0 w-0 opacity-75\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto grid min-h-screen grid-cols-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto mr-6 py-6 sm:py-12 lg:col-span-3 lg:col-start-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-auto w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"relative text-center text-2xl font-medium text-gray-700 sm:text-3xl\",\n                                        children: \"Londinium\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap items-center justify-center text-xs\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: stepContent\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        cart !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_summary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ...cart\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                            lineNumber: 117,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\dev-test\\\\src\\\\pages\\\\[slug].tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"nkdiEIutdrnq8wqdwn+31hkgY6w=\");\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDUjtBQUVKO0FBRWdCO0FBQ0g7QUFDWTtBQUNoQjtBQUNFO0FBRXhDLE1BQU1TLFFBQVEsU0FBOEM7UUFBN0MsRUFBRUMsWUFBVyxFQUEyQjs7SUFDckRQLG9EQUFVLENBQ1JTLFFBQW1DLEVBQ25DQSxxQ0FBdUM7SUFLekMsOEJBQThCO0lBRTlCLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3JELE1BQU0sQ0FBQ2dCLE1BQU1DLFFBQVEsR0FBR2pCLCtDQUFRQSxDQUFhLElBQUk7SUFDakRELGdEQUFTQSxDQUFDLElBQU07UUFDZGdCLFdBQVcsSUFBSTtRQUNmLGFBQWE7UUFDYmQsNERBQWtCLENBQUNPLGFBQWFXLElBQUksQ0FBQyxDQUFDQyxJQUFXO1lBQy9DSCxRQUFRO2dCQUFFLEdBQUdHLENBQUM7WUFBQztRQUNqQjtRQUNBTCxXQUFXLEtBQUs7SUFDbEIsR0FBRyxFQUFFO0lBRU4sZ0RBQWdEO0lBQy9DLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFL0Msd0NBQXdDO0lBQ3hDLE1BQU11QixhQUFhLElBQU07UUFDdkJELGVBQWVELGNBQWM7SUFDL0I7SUFFQSw0Q0FBNEM7SUFDNUMsTUFBTUcsYUFBYSxJQUFNO1FBQ3ZCRixlQUFlRCxjQUFjO0lBQy9CO0lBRUEsd0RBQXdEO0lBQ3hELElBQUlJO0lBQ0osT0FBUUo7UUFDTixLQUFLO1lBQ0hJLDRCQUNFLDhEQUFDQzswQkFFQyw0RUFBQ0M7b0JBQU9DLFNBQVNMOzhCQUFZOzs7Ozs7Ozs7OztZQUdqQyxLQUFNO1FBQ1IsS0FBSztZQUNIRSw0QkFDRSw4REFBQ0M7O2tDQUVDLDhEQUFDQzt3QkFBT0MsU0FBU0o7a0NBQVk7Ozs7OztrQ0FDN0IsOERBQUNHO3dCQUFPQyxTQUFTTDtrQ0FBWTs7Ozs7Ozs7Ozs7O1lBR2pDLEtBQU07UUFDUixLQUFLO1lBQ0hFLDRCQUNFLDhEQUFDQzs7a0NBRUMsOERBQUNDO3dCQUFPQyxTQUFTSjtrQ0FBWTs7Ozs7O2tDQUM3Qiw4REFBQ0c7a0NBQU87Ozs7Ozs7Ozs7OztZQUdaLEtBQU07UUFDUjtZQUNFRixjQUFjLElBQUk7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ25CLGlEQUFJQTtRQUNIdUIsb0JBQ0UsOERBQUN4QiwrQ0FBSUE7WUFDSHlCLE9BQU07WUFDTkMsYUFBWTs7O1lBSWZqQix5QkFDQyw4REFBQ1k7Z0JBQ0NNLElBQUc7Z0JBQ0hDLFdBQVU7MEJBRVYsNEVBQUNDO29CQUFLRCxXQUFVOzhCQUNkLDRFQUFDOUIsMkRBQU1BOzs7Ozs7Ozs7Ozs7Ozs7MEJBS2IsOERBQUN1QjtnQkFBSU8sV0FBVTswQkFDYiw0RUFBQ1A7b0JBQUlPLFdBQVU7O3NDQUNiLDhEQUFDUDs0QkFBSU8sV0FBVTtzQ0FDYiw0RUFBQ1A7Z0NBQUlPLFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FBR0YsV0FBVTtrREFBc0U7Ozs7OztrREFHcEYsOERBQUNQO3dDQUFJTyxXQUFVO2tEQUNmLDRFQUFDUDtzREFFS0Q7Ozs7Ozs7Ozs7O2tEQUtOLDhEQUFDdkIsd0RBQVlBOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUdoQmMsU0FBUyxJQUFJLGtCQUFJLDhEQUFDWixpRUFBWUE7NEJBQUUsR0FBR1ksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEQ7R0E5R01UO0tBQUFBOztBQXdITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3NsdWddLnRzeD82ZjQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQ2FydCB9IGZyb20gJ3N3ZWxsLWpzJztcbmltcG9ydCBzd2VsbCBmcm9tICdzd2VsbC1qcyc7XG5cbmltcG9ydCBDaGVja291dEZvcm0gZnJvbSAnQC9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IExvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJ0AvY29tcG9uZW50cy9vcmRlcl9zdW1tYXJ5JztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdAL2xheW91dHMvTWV0YSc7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnQC90ZW1wbGF0ZXMvTWFpbic7XG5cbmNvbnN0IEluZGV4ID0gKHsgY2hlY2tvdXRfaWQgfTogeyBjaGVja291dF9pZDogc3RyaW5nIH0pID0+IHtcbiAgc3dlbGwuaW5pdChcbiAgICBwcm9jZXNzLmVudi5ORVhUX1NXRUxMX1BVQkxJQ19TVE9SRSBhcyBzdHJpbmcsXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9TV0VMTF9QVUJMSUNfQVBJX1RPS0VOIGFzIHN0cmluZ1xuICApO1xuXG5cblxuICAvLyBJbml0aWFsaXplIHRoZSBjbGllbnQgZmlyc3RcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPENhcnQgfCBhbnk+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN3ZWxsLmNhcnQucmVjb3ZlcihjaGVja291dF9pZCkudGhlbigoZTogYW55KSA9PiB7XG4gICAgICBzZXRDYXJ0KHsgLi4uZSB9KTtcbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gLy8gVXNlIHN0YXRlIHZhcmlhYmxlcyB0byB0cmFjayB0aGUgY3VycmVudCBzdGVwXG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoMSk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgc3RlcFxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwICsgMSk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHN0ZXBcbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50U3RlcChjdXJyZW50U3RlcCAtIDEpO1xuICB9O1xuXG4gIC8vIFJlbmRlciB0aGUgYXBwcm9wcmlhdGUgc3RlcCBiYXNlZCBvbiB0aGUgY3VycmVudCBzdGVwXG4gIGxldCBzdGVwQ29udGVudDtcbiAgc3dpdGNoIChjdXJyZW50U3RlcCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHN0ZXBDb250ZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiBDdXN0b21lciBpbmZvcm1hdGlvbiBmb3JtICovfVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBzdGVwQ29udGVudCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogU2hpcHBpbmcgaW5mb3JtYXRpb24gZm9ybSAqL31cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByZXZ9PlByZXY8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgc3RlcENvbnRlbnQgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIFBheW1lbnQgZm9ybSAqL31cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByZXZ9PlByZXY8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3RlcENvbnRlbnQgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJOZXh0LmpzIGNoZWNrb3V0IFByZXNlbnRhdGlvblwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJOZXh0IGpzIGNoZWNrb3V0IGlzIHRoZSBwZXJmZWN0IHN0YXJ0ZXIgY29kZSBmb3IgeW91ciBwcm9qZWN0LiBCdWlsZCB5b3VyIFJlYWN0IGFwcGxpY2F0aW9uIHdpdGggdGhlIE5leHQuanMgZnJhbWV3b3JrLlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJsb2FkaW5nLXNjcmVlblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHotNTAgYmxvY2sgIGgtZnVsbCB3LWZ1bGwgYmctd2hpdGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTEvMiBteS0wIG14LWF1dG8gYmxvY2sgaC0wIHctMCAgb3BhY2l0eS03NVwiPlxuICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBncmlkIG1pbi1oLXNjcmVlbiBncmlkLWNvbHMtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXItNiAgcHktNiBzbTpweS0xMiBsZzpjb2wtc3Bhbi0zIGxnOmNvbC1zdGFydC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIHNtOnRleHQtM3hsXCI+XG4gICAgICAgICAgICAgICAgTG9uZGluaXVtXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgd2l0aCBuYXZpZ2F0aW9uIGxpbmtzICovfVxuICAgICAgICAgICAgICAgICAgIHtzdGVwQ29udGVudH1cbiAgICAgICAgICAgICAgPC9kaXY+ICBcblxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y2FydCAhPT0gbnVsbCAmJiA8T3JkZXJTdW1tYXJ5IHsuLi5jYXJ0fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjaGVja291dF9pZDogY29udGV4dC5xdWVyeS5zbHVnLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzd2VsbCIsIkNoZWNrb3V0Rm9ybSIsIkxvYWRlciIsIk9yZGVyU3VtbWFyeSIsIk1ldGEiLCJNYWluIiwiSW5kZXgiLCJjaGVja291dF9pZCIsImluaXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9TV0VMTF9QVUJMSUNfU1RPUkUiLCJORVhUX1NXRUxMX1BVQkxJQ19BUElfVE9LRU4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNhcnQiLCJzZXRDYXJ0IiwicmVjb3ZlciIsInRoZW4iLCJlIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2Iiwic3RlcENvbnRlbnQiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpZCIsImNsYXNzTmFtZSIsInNwYW4iLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[slug].tsx\n"));

/***/ })

});