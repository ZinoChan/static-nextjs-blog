self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jagaimo\\Desktop\\redux\\blog\\components\\Hero.js",
    _this = undefined;



var Hero = function Hero() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "hero",
    className: "max-w-screen-xl px-2 mx-auto h-screen bg-cover bg-center xl:grid xl:grid-cols-2 flex items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "z-20 absolute h-screen top-0 left-0 w-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/road.jpg",
        className: "w-full h-full",
        alt: "road"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative z-30 w-full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
        initial: {
          y: -100,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1
        },
        transition: {
          duration: .6,
          ease: 'easeInOut'
        },
        className: "xl:text-4xl lg:text-7xl md:text-5xl text-4xl capitalize font-main mb-4 font-bold",
        children: "The Road Less Traveled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
        initial: {
          y: 100,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1
        },
        transition: {
          duration: .6,
          delay: .6,
          ease: 'easeInOut'
        },
        className: " text-md font-secondary mb-6 text-gray-500",
        children: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 68
        }, _this), "Ut congue pellentesque amet, mi, aenean suspendisse. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 64
        }, _this), " Amet, in est dictum tellus cursus."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
        initial: {
          y: 100,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1
        },
        transition: {
          duration: .6,
          delay: 1.2,
          ease: 'easeInOut'
        },
        className: "px-4 py-2 bg-black text-white font-main capitalize text-md",
        children: "Read now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJ5Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixzQkFDRTtBQUNFLE1BQUUsRUFBQyxNQURMO0FBRUUsYUFBUyxFQUFDLG1HQUZaO0FBQUEsNEJBSUU7QUFBSyxlQUFTLEVBQUMsNENBQWY7QUFBQSw2QkFDRTtBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLGlCQUFTLEVBQUMsZUFBaEM7QUFBZ0QsV0FBRyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFPRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDhCQUNFLDhEQUFDLG9EQUFEO0FBQ0EsZUFBTyxFQUFFO0FBQUNDLFdBQUMsRUFBRSxDQUFDLEdBQUw7QUFBVUMsaUJBQU8sRUFBRTtBQUFuQixTQURUO0FBRUEsZUFBTyxFQUFFO0FBQUNELFdBQUMsRUFBRSxDQUFKO0FBQU9DLGlCQUFPLEVBQUU7QUFBaEIsU0FGVDtBQUdBLGtCQUFVLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRSxFQUFYO0FBQWVDLGNBQUksRUFBRTtBQUFyQixTQUhaO0FBSUEsaUJBQVMsRUFBQyxrRkFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUUsOERBQUMsbURBQUQ7QUFDQSxlQUFPLEVBQUU7QUFBQ0gsV0FBQyxFQUFFLEdBQUo7QUFBU0MsaUJBQU8sRUFBRTtBQUFsQixTQURUO0FBRUEsZUFBTyxFQUFFO0FBQUNELFdBQUMsRUFBRSxDQUFKO0FBQU9DLGlCQUFPLEVBQUU7QUFBaEIsU0FGVDtBQUdBLGtCQUFVLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRSxFQUFYO0FBQWVFLGVBQUssRUFBRSxFQUF0QjtBQUEwQkQsY0FBSSxFQUFFO0FBQWhDLFNBSFo7QUFJQSxpQkFBUyxFQUFDLDRDQUpWO0FBQUEsNkZBSzJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTDNELHdFQU11RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU52RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWlCRSw4REFBQyx3REFBRDtBQUNBLGVBQU8sRUFBRTtBQUFDSCxXQUFDLEVBQUUsR0FBSjtBQUFTQyxpQkFBTyxFQUFFO0FBQWxCLFNBRFQ7QUFFQSxlQUFPLEVBQUU7QUFBQ0QsV0FBQyxFQUFFLENBQUo7QUFBT0MsaUJBQU8sRUFBRTtBQUFoQixTQUZUO0FBR0Esa0JBQVUsRUFBRTtBQUFDQyxrQkFBUSxFQUFFLEVBQVg7QUFBZUUsZUFBSyxFQUFFLEdBQXRCO0FBQTJCRCxjQUFJLEVBQUU7QUFBakMsU0FIWjtBQUlBLGlCQUFTLEVBQUMsNERBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FwQ0Q7O0tBQU1KLEk7QUFzQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmExYWIzMDQzZjdmYWRjYjk0MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEhlcm8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGlkPVwiaGVyb1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBweC0yIG14LWF1dG8gaC1zY3JlZW4gYmctY292ZXIgYmctY2VudGVyIHhsOmdyaWQgeGw6Z3JpZC1jb2xzLTIgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMjAgYWJzb2x1dGUgaC1zY3JlZW4gdG9wLTAgbGVmdC0wIHctZnVsbFwiPlxyXG4gICAgICAgIDxpbWcgIHNyYz1cIi9yb2FkLmpwZ1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIiBhbHQ9XCJyb2FkXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTMwIHctZnVsbFwiPlxyXG4gICAgICAgIDxtb3Rpb24uaDFcclxuICAgICAgICBpbml0aWFsPXt7eTogLTEwMCwgb3BhY2l0eTogMH19XHJcbiAgICAgICAgYW5pbWF0ZT17e3k6IDAsIG9wYWNpdHk6IDF9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogLjYsIGVhc2U6ICdlYXNlSW5PdXQnfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ4bDp0ZXh0LTR4bCBsZzp0ZXh0LTd4bCBtZDp0ZXh0LTV4bCB0ZXh0LTR4bCBjYXBpdGFsaXplIGZvbnQtbWFpbiBtYi00IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgVGhlIFJvYWQgTGVzcyBUcmF2ZWxlZFxyXG4gICAgICAgIDwvbW90aW9uLmgxPlxyXG4gICAgICAgIDxtb3Rpb24ucCBcclxuICAgICAgICBpbml0aWFsPXt7eTogMTAwLCBvcGFjaXR5OiAwfX1cclxuICAgICAgICBhbmltYXRlPXt7eTogMCwgb3BhY2l0eTogMX19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAuNiwgZGVsYXk6IC42LCBlYXNlOiAnZWFzZUluT3V0J319XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtbWQgZm9udC1zZWNvbmRhcnkgbWItNiB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiA8YnIgLz5cclxuICAgICAgICAgIFV0IGNvbmd1ZSBwZWxsZW50ZXNxdWUgYW1ldCwgbWksIGFlbmVhbiBzdXNwZW5kaXNzZS4gPGJyIC8+IEFtZXQsIGluXHJcbiAgICAgICAgICBlc3QgZGljdHVtIHRlbGx1cyBjdXJzdXMuXHJcbiAgICAgICAgPC9tb3Rpb24ucD5cclxuICAgICAgICA8bW90aW9uLmJ1dHRvblxyXG4gICAgICAgIGluaXRpYWw9e3t5OiAxMDAsIG9wYWNpdHk6IDB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3t5OiAwLCBvcGFjaXR5OiAxfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IC42LCBkZWxheTogMS4yLCBlYXNlOiAnZWFzZUluT3V0J319XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsYWNrIHRleHQtd2hpdGUgZm9udC1tYWluIGNhcGl0YWxpemUgdGV4dC1tZFwiPlxyXG4gICAgICAgICAgUmVhZCBub3dcclxuICAgICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9