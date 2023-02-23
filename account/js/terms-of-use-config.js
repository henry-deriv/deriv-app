/*! For license information please see terms-of-use-config.js.LICENSE.txt */
!function(_,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],e):"object"==typeof exports?exports["@deriv/account"]=e(require("@deriv/shared"),require("@deriv/translations")):_["@deriv/account"]=e(_["@deriv/shared"],_["@deriv/translations"])}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__)=>(()=>{"use strict";var __webpack_modules__={"./Configs/terms-of-use-config.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar terms_of_use_config = {\n  agreed_tos: {\n    supported_in: ['svg', 'iom'],\n    default_value: false\n  },\n  agreed_tnc: {\n    supported_in: ['svg', 'iom'],\n    default_value: false\n  }\n};\nvar termsOfUseConfig = function termsOfUseConfig(_ref, TermsOfUse) {\n  var real_account_signup_target = _ref.real_account_signup_target;\n  var is_appstore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var active_title = is_appstore ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Our terms of use') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Terms of use');\n  return {\n    header: {\n      active_title: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.isDesktop)() ? active_title : null,\n      title: is_appstore ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('TERMS OF USE') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Terms of use')\n    },\n    body: TermsOfUse,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, terms_of_use_config),\n    props: {\n      real_account_signup_target: real_account_signup_target\n    },\n    icon: 'IcDashboardTermsOfUse'\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (termsOfUseConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3Rlcm1zLW9mLXVzZS1jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbmZpZ3MvdGVybXMtb2YtdXNlLWNvbmZpZy5qcz8yZDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGVza3RvcCwgZ2V0RGVmYXVsdEZpZWxkcyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgdGVybXNfb2ZfdXNlX2NvbmZpZyA9IHtcbiAgICBhZ3JlZWRfdG9zOiB7XG4gICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJ10sXG4gICAgICAgIGRlZmF1bHRfdmFsdWU6IGZhbHNlLFxuICAgIH0sXG4gICAgYWdyZWVkX3RuYzoge1xuICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ2lvbSddLFxuICAgICAgICBkZWZhdWx0X3ZhbHVlOiBmYWxzZSxcbiAgICB9LFxufTtcblxuY29uc3QgdGVybXNPZlVzZUNvbmZpZyA9ICh7IHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0IH0sIFRlcm1zT2ZVc2UsIGlzX2FwcHN0b3JlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBhY3RpdmVfdGl0bGUgPSBpc19hcHBzdG9yZSA/IGxvY2FsaXplKCdPdXIgdGVybXMgb2YgdXNlJykgOiBsb2NhbGl6ZSgnVGVybXMgb2YgdXNlJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBhY3RpdmVfdGl0bGU6IGlzRGVza3RvcCgpID8gYWN0aXZlX3RpdGxlIDogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOiBpc19hcHBzdG9yZSA/IGxvY2FsaXplKCdURVJNUyBPRiBVU0UnKSA6IGxvY2FsaXplKCdUZXJtcyBvZiB1c2UnKSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogVGVybXNPZlVzZSxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgdGVybXNfb2ZfdXNlX2NvbmZpZyksXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjogJ0ljRGFzaGJvYXJkVGVybXNPZlVzZScsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlcm1zT2ZVc2VDb25maWc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Configs/terms-of-use-config.js\n")},"@deriv/shared":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":_=>{_.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./Configs/terms-of-use-config.js");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));