/*! For license information please see index.js.LICENSE.txt */
!function(_,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("@deriv/shared"),require("@deriv/components"),require("classnames"),require("react-router-dom"),require("@deriv/translations"),require("mobx"),require("react-dom"),require("react-router")):"function"==typeof define&&define.amd?define(["react","@deriv/shared","@deriv/components","classnames","react-router-dom","@deriv/translations","mobx","react-dom","react-router"],e):"object"==typeof exports?exports["@deriv/appstore"]=e(require("react"),require("@deriv/shared"),require("@deriv/components"),require("classnames"),require("react-router-dom"),require("@deriv/translations"),require("mobx"),require("react-dom"),require("react-router")):_["@deriv/appstore"]=e(_.react,_["@deriv/shared"],_["@deriv/components"],_.classnames,_["react-router-dom"],_["@deriv/translations"],_.mobx,_["react-dom"],_["react-router"])}(self,((__WEBPACK_EXTERNAL_MODULE_react__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE_classnames__,__WEBPACK_EXTERNAL_MODULE_react_router_dom__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_mobx__,__WEBPACK_EXTERNAL_MODULE_react_dom__,__WEBPACK_EXTERNAL_MODULE_react_router__)=>(()=>{"use strict";var __webpack_modules__={"./src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar App = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | appstore */[__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-ecf275"), __webpack_require__.e("appstore")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/app */ "./src/components/app.tsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FwcHN0b3JlLy4vc3JjL2luZGV4LnRzeD9kOTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlTGF6eUxvYWRlciwgbW9kdWxlTG9hZGVyIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuXG5jb25zdCBBcHAgPSBtYWtlTGF6eUxvYWRlcihcbiAgICAoKSA9PiBtb2R1bGVMb2FkZXIoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXBwc3RvcmVcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vY29tcG9uZW50cy9hcHAnKSksXG4gICAgKCkgPT4gPExvYWRpbmcgLz5cbikoKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.tsx\n')},"@deriv/components":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/shared":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},classnames:_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_classnames__},mobx:_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_mobx__},react:_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react__},"react-dom":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react_dom__},"react-router":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react_router__},"react-router-dom":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE_react_router_dom__}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={id:_,loaded:!1,exports:{}};return __webpack_modules__[_].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.f={},__webpack_require__.e=_=>Promise.all(Object.keys(__webpack_require__.f).reduce(((e,r)=>(__webpack_require__.f[r](_,e),e)),[])),__webpack_require__.u=_=>"appstore/js/appstore."+_+"."+{"vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-ecf275":"4cfa805dc3414e9dd650",appstore:"42a3ab3452312caf6797"}[_]+".js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"==typeof window)return window}}(),__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),inProgress={},dataWebpackPrefix="@deriv/appstore:",__webpack_require__.l=(_,e,r,a)=>{if(inProgress[_])inProgress[_].push(e);else{var t,o;if(void 0!==r)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var n=i[c];if(n.getAttribute("src")==_||n.getAttribute("data-webpack")==dataWebpackPrefix+r){t=n;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,__webpack_require__.nc&&t.setAttribute("nonce",__webpack_require__.nc),t.setAttribute("data-webpack",dataWebpackPrefix+r),t.src=_),inProgress[_]=[e];var s=(e,r)=>{t.onerror=t.onload=null,clearTimeout(d);var a=inProgress[_];if(delete inProgress[_],t.parentNode&&t.parentNode.removeChild(t),a&&a.forEach((_=>_(r))),e)return e(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),o&&document.head.appendChild(t)}},__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},__webpack_require__.nmd=_=>(_.paths=[],_.children||(_.children=[]),_),__webpack_require__.p="/",(()=>{var _={index:0};__webpack_require__.f.j=(e,r)=>{var a=__webpack_require__.o(_,e)?_[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var t=new Promise(((r,t)=>a=_[e]=[r,t]));r.push(a[2]=t);var o=__webpack_require__.p+__webpack_require__.u(e),i=new Error;__webpack_require__.l(o,(r=>{if(__webpack_require__.o(_,e)&&(0!==(a=_[e])&&(_[e]=void 0),a)){var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,a[1](i)}}),"chunk-"+e,e)}};var e=(e,r)=>{var a,t,[o,i,c]=r,n=0;if(o.some((e=>0!==_[e]))){for(a in i)__webpack_require__.o(i,a)&&(__webpack_require__.m[a]=i[a]);if(c)c(__webpack_require__)}for(e&&e(r);n<o.length;n++)t=o[n],__webpack_require__.o(_,t)&&_[t]&&_[t][0](),_[t]=0},r=self.webpackChunk_deriv_appstore=self.webpackChunk_deriv_appstore||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__("./src/index.tsx");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));