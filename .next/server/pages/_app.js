"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/layouts/Preloader.js

const Preloader = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "loading-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "loading-center-absolute",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_one"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_two"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_three"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "object",
                        id: "object_four"
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const layouts_Preloader = (Preloader);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    const { 0: preloader , 1: setPreloader  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setPreloader(false);
        }, 1000);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            preloader && /*#__PURE__*/ jsx_runtime_.jsx(layouts_Preloader, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(386));
module.exports = __webpack_exports__;

})();