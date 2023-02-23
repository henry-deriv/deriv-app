/*! For license information please see trading-assessment-config.js.LICENSE.txt */
!function(g,I){"object"==typeof exports&&"object"==typeof module?module.exports=I(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],I):"object"==typeof exports?exports["@deriv/account"]=I(require("@deriv/shared"),require("@deriv/translations")):g["@deriv/account"]=I(g["@deriv/shared"],g["@deriv/translations"])}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__)=>(()=>{"use strict";var __webpack_modules__={"./Configs/trading-assessment-config.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"trading_assessment_form_config\": () => (/* binding */ trading_assessment_form_config),\n/* harmony export */   \"trading_assessment_questions\": () => (/* binding */ trading_assessment_questions)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar trading_assessment_questions = [{\n  question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Do you understand that you could potentially lose 100% of the money you use to trade?'),\n  section: 'risk_tolerance',\n  answer_options: [{\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Yes'),\n    value: 'Yes'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('No'),\n    value: 'No'\n  }],\n  form_control: 'risk_tolerance',\n  field_type: 'radio'\n}, {\n  question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('How much knowledge and experience do you have in relation to online trading?'),\n  section: 'source_of_experience',\n  form_control: 'source_of_experience',\n  answer_options: [{\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('I have an academic degree, professional certification, and/or work experience related to financial services.'),\n    value: 'I have an academic degree, professional certification, and/or work experience.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('I trade forex CFDs and other complex financial instruments regularly on other platforms.'),\n    value: 'I trade forex CFDs and other complex financial instruments.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('I have attended seminars, training, and/or workshops related to trading.'),\n    value: 'I have attended seminars, training, and/or workshops.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('I am interested in trading but have very little experience.'),\n    value: 'I have little experience.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('I have no knowledge and experience in trading at all.'),\n    value: 'I have no knowledge.'\n  }],\n  field_type: 'radio'\n}, {\n  section: 'trading_experience',\n  questions: [{\n    question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('How much experience do you have in CFD trading?'),\n    field_type: 'dropdown',\n    form_control: 'cfd_experience',\n    answer_options: [{\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('No experience'),\n      value: 'No experience'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Less than a year'),\n      value: 'Less than a year'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('1 - 2 years'),\n      value: '1 - 2 years'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Over 3 years'),\n      value: 'Over 3 years'\n    }]\n  }, {\n    question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('How many CFD trades have you placed in the past 12 months?'),\n    field_type: 'dropdown',\n    form_control: 'cfd_frequency',\n    answer_options: [{\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('None'),\n      value: 'No transactions in the past 12 months'\n    }, {\n      text: '1 - 5',\n      value: '1 - 5 transactions in the past 12 months'\n    }, {\n      text: '6 - 10',\n      value: '6 - 10 transactions in the past 12 months'\n    }, {\n      text: '11 - 39',\n      value: '11 - 39 transactions in the past 12 months'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('40 or more'),\n      value: '40 transactions or more in the past 12 months'\n    }]\n  }, {\n    question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('How much experience do you have with other financial instruments?'),\n    field_type: 'dropdown',\n    form_control: 'trading_experience_financial_instruments',\n    answer_options: [{\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('No experience'),\n      value: 'No experience'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Less than a year'),\n      value: 'Less than a year'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('1 - 2 years'),\n      value: '1 - 2 years'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Over 3 years'),\n      value: 'Over 3 years'\n    }]\n  }, {\n    question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('How many trades have you placed with other financial instruments in the past 12 months?'),\n    form_control: 'trading_frequency_financial_instruments',\n    field_type: 'dropdown',\n    answer_options: [{\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('None'),\n      value: 'No transactions in the past 12 months'\n    }, {\n      text: '1 - 5',\n      value: '1 - 5 transactions in the past 12 months'\n    }, {\n      text: '6 - 10',\n      value: '6 - 10 transactions in the past 12 months'\n    }, {\n      text: '11 - 39',\n      value: '11 - 39 transactions in the past 12 months'\n    }, {\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('40 or more'),\n      value: '40 transactions or more in the past 12 months'\n    }]\n  }]\n}, {\n  question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('In your understanding, CFD trading allows you to'),\n  section: 'trading_knowledge',\n  form_control: 'cfd_trading_definition',\n  field_type: 'radio',\n  answer_options: [{\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Purchase commodities or shares of a company.'),\n    value: 'Purchase shares of a company or physical commodities.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Place a position on the price movement of an asset where the outcome is a fixed return or nothing at all.'),\n    value: 'Place a bet on the price movement.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Speculate on the price movement of an asset without actually owning it.'),\n    value: 'Speculate on the price movement.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Make a long-term investment for a guaranteed profit.'),\n    value: 'Make a long-term investment.'\n  }]\n}, {\n  question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('How does leverage affect CFD trading?'),\n  section: 'trading_knowledge',\n  form_control: 'leverage_impact_trading',\n  field_type: 'radio',\n  answer_options: [{\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Leverage helps to mitigate risk.'),\n    value: 'Leverage is a risk mitigation technique.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Leverage prevents you from opening large positions.'),\n    value: 'Leverage prevents you from opening large positions.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Leverage guarantees profits.'),\n    value: 'Leverage guarantees profits.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Leverage lets you open large positions for a fraction of trade value, which may result in increased profit or loss.'),\n    value: \"Leverage lets you open larger positions for a fraction of the trade's value.\"\n  }]\n}, {\n  question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)(\"Leverage trading is high-risk, so it's a good idea to use risk management features such as stop loss. Stop loss allows you to\"),\n  section: 'trading_knowledge',\n  form_control: 'leverage_trading_high_risk_stop_loss',\n  field_type: 'radio',\n  answer_options: [{\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Cancel your trade at any time within a specified time frame.'),\n    value: 'Cancel your trade at any time within a chosen timeframe.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Close your trade automatically when the loss is equal to or more than a specified amount, as long as there is adequate market liquidity.'),\n    value: 'Close your trade automatically when the loss is more than or equal to a specific amount.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Close your trade automatically when the profit is equal to or more than a specified amount, as long as there is adequate market liquidity.'),\n    value: 'Close your trade automatically when the profit is more than or equal to a specific amount.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Make a guaranteed profit on your trade.'),\n    value: 'Make a guaranteed profit on your trade.'\n  }]\n}, {\n  question_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('When are you required to pay an initial margin?'),\n  section: 'trading_knowledge',\n  form_control: 'required_initial_margin',\n  field_type: 'radio',\n  answer_options: [{\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('When opening a leveraged CFD trade'),\n    value: 'When opening a Leveraged CFD trade.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('When trading multipliers'),\n    value: 'When trading Multipliers.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('When buying shares of a company'),\n    value: 'When buying shares of a company.'\n  }, {\n    text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('All of the above'),\n    value: 'All of the above.'\n  }]\n}];\nvar default_form_config = {\n  supported_in: ['maltainvest'],\n  default_value: ''\n};\nvar trading_assessment_form_config = {\n  risk_tolerance: _objectSpread({}, default_form_config),\n  source_of_experience: _objectSpread({}, default_form_config),\n  cfd_experience: _objectSpread({}, default_form_config),\n  cfd_frequency: _objectSpread({}, default_form_config),\n  trading_experience_financial_instruments: _objectSpread({}, default_form_config),\n  trading_frequency_financial_instruments: _objectSpread({}, default_form_config),\n  cfd_trading_definition: _objectSpread({}, default_form_config),\n  leverage_impact_trading: _objectSpread({}, default_form_config),\n  leverage_trading_high_risk_stop_loss: _objectSpread({}, default_form_config),\n  required_initial_margin: _objectSpread({}, default_form_config)\n};\nvar tradingAssessmentConfig = function tradingAssessmentConfig(_ref, TradingAssessmentNewUser) {\n  var real_account_signup_target = _ref.real_account_signup_target;\n  return {\n    header: {\n      active_title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Complete your trading assessment'),\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Trading assessment')\n    },\n    body: TradingAssessmentNewUser,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, trading_assessment_form_config),\n    props: {\n      validate: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.generateValidationFunction)(real_account_signup_target, trading_assessment_form_config),\n      assessment_questions: trading_assessment_questions\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tradingAssessmentConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3RyYWRpbmctYXNzZXNzbWVudC1jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFHQTtBQUdBO0FBR0E7QUFHQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db25maWdzL3RyYWRpbmctYXNzZXNzbWVudC1jb25maWcuanM/NDg1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbiwgZ2V0RGVmYXVsdEZpZWxkcyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IHRyYWRpbmdfYXNzZXNzbWVudF9xdWVzdGlvbnMgPSBbXG4gICAge1xuICAgICAgICBxdWVzdGlvbl90ZXh0OiBsb2NhbGl6ZShcbiAgICAgICAgICAgICdEbyB5b3UgdW5kZXJzdGFuZCB0aGF0IHlvdSBjb3VsZCBwb3RlbnRpYWxseSBsb3NlIDEwMCUgb2YgdGhlIG1vbmV5IHlvdSB1c2UgdG8gdHJhZGU/J1xuICAgICAgICApLFxuICAgICAgICBzZWN0aW9uOiAncmlza190b2xlcmFuY2UnLFxuICAgICAgICBhbnN3ZXJfb3B0aW9uczogW1xuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6ZSgnWWVzJyksIHZhbHVlOiAnWWVzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6ZSgnTm8nKSwgdmFsdWU6ICdObycgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZm9ybV9jb250cm9sOiAncmlza190b2xlcmFuY2UnLFxuICAgICAgICBmaWVsZF90eXBlOiAncmFkaW8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbl90ZXh0OiBsb2NhbGl6ZSgnSG93IG11Y2gga25vd2xlZGdlIGFuZCBleHBlcmllbmNlIGRvIHlvdSBoYXZlIGluIHJlbGF0aW9uIHRvIG9ubGluZSB0cmFkaW5nPycpLFxuICAgICAgICBzZWN0aW9uOiAnc291cmNlX29mX2V4cGVyaWVuY2UnLFxuICAgICAgICBmb3JtX2NvbnRyb2w6ICdzb3VyY2Vfb2ZfZXhwZXJpZW5jZScsXG4gICAgICAgIGFuc3dlcl9vcHRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICdJIGhhdmUgYW4gYWNhZGVtaWMgZGVncmVlLCBwcm9mZXNzaW9uYWwgY2VydGlmaWNhdGlvbiwgYW5kL29yIHdvcmsgZXhwZXJpZW5jZSByZWxhdGVkIHRvIGZpbmFuY2lhbCBzZXJ2aWNlcy4nXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0kgaGF2ZSBhbiBhY2FkZW1pYyBkZWdyZWUsIHByb2Zlc3Npb25hbCBjZXJ0aWZpY2F0aW9uLCBhbmQvb3Igd29yayBleHBlcmllbmNlLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAnSSB0cmFkZSBmb3JleCBDRkRzIGFuZCBvdGhlciBjb21wbGV4IGZpbmFuY2lhbCBpbnN0cnVtZW50cyByZWd1bGFybHkgb24gb3RoZXIgcGxhdGZvcm1zLidcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSSB0cmFkZSBmb3JleCBDRkRzIGFuZCBvdGhlciBjb21wbGV4IGZpbmFuY2lhbCBpbnN0cnVtZW50cy4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnSSBoYXZlIGF0dGVuZGVkIHNlbWluYXJzLCB0cmFpbmluZywgYW5kL29yIHdvcmtzaG9wcyByZWxhdGVkIHRvIHRyYWRpbmcuJyksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdJIGhhdmUgYXR0ZW5kZWQgc2VtaW5hcnMsIHRyYWluaW5nLCBhbmQvb3Igd29ya3Nob3BzLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdJIGFtIGludGVyZXN0ZWQgaW4gdHJhZGluZyBidXQgaGF2ZSB2ZXJ5IGxpdHRsZSBleHBlcmllbmNlLicpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSSBoYXZlIGxpdHRsZSBleHBlcmllbmNlLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdJIGhhdmUgbm8ga25vd2xlZGdlIGFuZCBleHBlcmllbmNlIGluIHRyYWRpbmcgYXQgYWxsLicpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSSBoYXZlIG5vIGtub3dsZWRnZS4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmllbGRfdHlwZTogJ3JhZGlvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VjdGlvbjogJ3RyYWRpbmdfZXhwZXJpZW5jZScsXG4gICAgICAgIHF1ZXN0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uX3RleHQ6IGxvY2FsaXplKCdIb3cgbXVjaCBleHBlcmllbmNlIGRvIHlvdSBoYXZlIGluIENGRCB0cmFkaW5nPycpLFxuICAgICAgICAgICAgICAgIGZpZWxkX3R5cGU6ICdkcm9wZG93bicsXG4gICAgICAgICAgICAgICAgZm9ybV9jb250cm9sOiAnY2ZkX2V4cGVyaWVuY2UnLFxuICAgICAgICAgICAgICAgIGFuc3dlcl9vcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdObyBleHBlcmllbmNlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ05vIGV4cGVyaWVuY2UnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnTGVzcyB0aGFuIGEgeWVhcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdMZXNzIHRoYW4gYSB5ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJzEgLSAyIHllYXJzJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEgLSAyIHllYXJzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ092ZXIgMyB5ZWFycycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPdmVyIDMgeWVhcnMnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uX3RleHQ6IGxvY2FsaXplKCdIb3cgbWFueSBDRkQgdHJhZGVzIGhhdmUgeW91IHBsYWNlZCBpbiB0aGUgcGFzdCAxMiBtb250aHM/JyksXG4gICAgICAgICAgICAgICAgZmllbGRfdHlwZTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgICAgICAgICBmb3JtX2NvbnRyb2w6ICdjZmRfZnJlcXVlbmN5JyxcbiAgICAgICAgICAgICAgICBhbnN3ZXJfb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnTm9uZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdObyB0cmFuc2FjdGlvbnMgaW4gdGhlIHBhc3QgMTIgbW9udGhzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzEgLSA1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMSAtIDUgdHJhbnNhY3Rpb25zIGluIHRoZSBwYXN0IDEyIG1vbnRocycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICc2IC0gMTAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICc2IC0gMTAgdHJhbnNhY3Rpb25zIGluIHRoZSBwYXN0IDEyIG1vbnRocycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcxMSAtIDM5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMTEgLSAzOSB0cmFuc2FjdGlvbnMgaW4gdGhlIHBhc3QgMTIgbW9udGhzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJzQwIG9yIG1vcmUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnNDAgdHJhbnNhY3Rpb25zIG9yIG1vcmUgaW4gdGhlIHBhc3QgMTIgbW9udGhzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvbl90ZXh0OiBsb2NhbGl6ZSgnSG93IG11Y2ggZXhwZXJpZW5jZSBkbyB5b3UgaGF2ZSB3aXRoIG90aGVyIGZpbmFuY2lhbCBpbnN0cnVtZW50cz8nKSxcbiAgICAgICAgICAgICAgICBmaWVsZF90eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIGZvcm1fY29udHJvbDogJ3RyYWRpbmdfZXhwZXJpZW5jZV9maW5hbmNpYWxfaW5zdHJ1bWVudHMnLFxuICAgICAgICAgICAgICAgIGFuc3dlcl9vcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdObyBleHBlcmllbmNlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ05vIGV4cGVyaWVuY2UnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnTGVzcyB0aGFuIGEgeWVhcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdMZXNzIHRoYW4gYSB5ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJzEgLSAyIHllYXJzJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEgLSAyIHllYXJzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ092ZXIgMyB5ZWFycycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdPdmVyIDMgeWVhcnMnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uX3RleHQ6IGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAnSG93IG1hbnkgdHJhZGVzIGhhdmUgeW91IHBsYWNlZCB3aXRoIG90aGVyIGZpbmFuY2lhbCBpbnN0cnVtZW50cyBpbiB0aGUgcGFzdCAxMiBtb250aHM/J1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZm9ybV9jb250cm9sOiAndHJhZGluZ19mcmVxdWVuY3lfZmluYW5jaWFsX2luc3RydW1lbnRzJyxcbiAgICAgICAgICAgICAgICBmaWVsZF90eXBlOiAnZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIGFuc3dlcl9vcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdOb25lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ05vIHRyYW5zYWN0aW9ucyBpbiB0aGUgcGFzdCAxMiBtb250aHMnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnMSAtIDUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxIC0gNSB0cmFuc2FjdGlvbnMgaW4gdGhlIHBhc3QgMTIgbW9udGhzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzYgLSAxMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzYgLSAxMCB0cmFuc2FjdGlvbnMgaW4gdGhlIHBhc3QgMTIgbW9udGhzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJzExIC0gMzknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxMSAtIDM5IHRyYW5zYWN0aW9ucyBpbiB0aGUgcGFzdCAxMiBtb250aHMnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnNDAgb3IgbW9yZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICc0MCB0cmFuc2FjdGlvbnMgb3IgbW9yZSBpbiB0aGUgcGFzdCAxMiBtb250aHMnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbl90ZXh0OiBsb2NhbGl6ZSgnSW4geW91ciB1bmRlcnN0YW5kaW5nLCBDRkQgdHJhZGluZyBhbGxvd3MgeW91IHRvJyksXG4gICAgICAgIHNlY3Rpb246ICd0cmFkaW5nX2tub3dsZWRnZScsXG4gICAgICAgIGZvcm1fY29udHJvbDogJ2NmZF90cmFkaW5nX2RlZmluaXRpb24nLFxuICAgICAgICBmaWVsZF90eXBlOiAncmFkaW8nLFxuICAgICAgICBhbnN3ZXJfb3B0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdQdXJjaGFzZSBjb21tb2RpdGllcyBvciBzaGFyZXMgb2YgYSBjb21wYW55LicpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnUHVyY2hhc2Ugc2hhcmVzIG9mIGEgY29tcGFueSBvciBwaHlzaWNhbCBjb21tb2RpdGllcy4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgJ1BsYWNlIGEgcG9zaXRpb24gb24gdGhlIHByaWNlIG1vdmVtZW50IG9mIGFuIGFzc2V0IHdoZXJlIHRoZSBvdXRjb21lIGlzIGEgZml4ZWQgcmV0dXJuIG9yIG5vdGhpbmcgYXQgYWxsLidcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnUGxhY2UgYSBiZXQgb24gdGhlIHByaWNlIG1vdmVtZW50LicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdTcGVjdWxhdGUgb24gdGhlIHByaWNlIG1vdmVtZW50IG9mIGFuIGFzc2V0IHdpdGhvdXQgYWN0dWFsbHkgb3duaW5nIGl0LicpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnU3BlY3VsYXRlIG9uIHRoZSBwcmljZSBtb3ZlbWVudC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnTWFrZSBhIGxvbmctdGVybSBpbnZlc3RtZW50IGZvciBhIGd1YXJhbnRlZWQgcHJvZml0LicpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnTWFrZSBhIGxvbmctdGVybSBpbnZlc3RtZW50LicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbl90ZXh0OiBsb2NhbGl6ZSgnSG93IGRvZXMgbGV2ZXJhZ2UgYWZmZWN0IENGRCB0cmFkaW5nPycpLFxuICAgICAgICBzZWN0aW9uOiAndHJhZGluZ19rbm93bGVkZ2UnLFxuICAgICAgICBmb3JtX2NvbnRyb2w6ICdsZXZlcmFnZV9pbXBhY3RfdHJhZGluZycsXG4gICAgICAgIGZpZWxkX3R5cGU6ICdyYWRpbycsXG4gICAgICAgIGFuc3dlcl9vcHRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ0xldmVyYWdlIGhlbHBzIHRvIG1pdGlnYXRlIHJpc2suJyksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdMZXZlcmFnZSBpcyBhIHJpc2sgbWl0aWdhdGlvbiB0ZWNobmlxdWUuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ0xldmVyYWdlIHByZXZlbnRzIHlvdSBmcm9tIG9wZW5pbmcgbGFyZ2UgcG9zaXRpb25zLicpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnTGV2ZXJhZ2UgcHJldmVudHMgeW91IGZyb20gb3BlbmluZyBsYXJnZSBwb3NpdGlvbnMuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6IGxvY2FsaXplKCdMZXZlcmFnZSBndWFyYW50ZWVzIHByb2ZpdHMuJyksIHZhbHVlOiAnTGV2ZXJhZ2UgZ3VhcmFudGVlcyBwcm9maXRzLicgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgJ0xldmVyYWdlIGxldHMgeW91IG9wZW4gbGFyZ2UgcG9zaXRpb25zIGZvciBhIGZyYWN0aW9uIG9mIHRyYWRlIHZhbHVlLCB3aGljaCBtYXkgcmVzdWx0IGluIGluY3JlYXNlZCBwcm9maXQgb3IgbG9zcy4nXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJMZXZlcmFnZSBsZXRzIHlvdSBvcGVuIGxhcmdlciBwb3NpdGlvbnMgZm9yIGEgZnJhY3Rpb24gb2YgdGhlIHRyYWRlJ3MgdmFsdWUuXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbl90ZXh0OiBsb2NhbGl6ZShcbiAgICAgICAgICAgIFwiTGV2ZXJhZ2UgdHJhZGluZyBpcyBoaWdoLXJpc2ssIHNvIGl0J3MgYSBnb29kIGlkZWEgdG8gdXNlIHJpc2sgbWFuYWdlbWVudCBmZWF0dXJlcyBzdWNoIGFzIHN0b3AgbG9zcy4gU3RvcCBsb3NzIGFsbG93cyB5b3UgdG9cIlxuICAgICAgICApLFxuICAgICAgICBzZWN0aW9uOiAndHJhZGluZ19rbm93bGVkZ2UnLFxuICAgICAgICBmb3JtX2NvbnRyb2w6ICdsZXZlcmFnZV90cmFkaW5nX2hpZ2hfcmlza19zdG9wX2xvc3MnLFxuICAgICAgICBmaWVsZF90eXBlOiAncmFkaW8nLFxuICAgICAgICBhbnN3ZXJfb3B0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdDYW5jZWwgeW91ciB0cmFkZSBhdCBhbnkgdGltZSB3aXRoaW4gYSBzcGVjaWZpZWQgdGltZSBmcmFtZS4nKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0NhbmNlbCB5b3VyIHRyYWRlIGF0IGFueSB0aW1lIHdpdGhpbiBhIGNob3NlbiB0aW1lZnJhbWUuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICdDbG9zZSB5b3VyIHRyYWRlIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgbG9zcyBpcyBlcXVhbCB0byBvciBtb3JlIHRoYW4gYSBzcGVjaWZpZWQgYW1vdW50LCBhcyBsb25nIGFzIHRoZXJlIGlzIGFkZXF1YXRlIG1hcmtldCBsaXF1aWRpdHkuJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdDbG9zZSB5b3VyIHRyYWRlIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgbG9zcyBpcyBtb3JlIHRoYW4gb3IgZXF1YWwgdG8gYSBzcGVjaWZpYyBhbW91bnQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICdDbG9zZSB5b3VyIHRyYWRlIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgcHJvZml0IGlzIGVxdWFsIHRvIG9yIG1vcmUgdGhhbiBhIHNwZWNpZmllZCBhbW91bnQsIGFzIGxvbmcgYXMgdGhlcmUgaXMgYWRlcXVhdGUgbWFya2V0IGxpcXVpZGl0eS4nXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ0Nsb3NlIHlvdXIgdHJhZGUgYXV0b21hdGljYWxseSB3aGVuIHRoZSBwcm9maXQgaXMgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIGEgc3BlY2lmaWMgYW1vdW50LicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdNYWtlIGEgZ3VhcmFudGVlZCBwcm9maXQgb24geW91ciB0cmFkZS4nKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ01ha2UgYSBndWFyYW50ZWVkIHByb2ZpdCBvbiB5b3VyIHRyYWRlLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbl90ZXh0OiBsb2NhbGl6ZSgnV2hlbiBhcmUgeW91IHJlcXVpcmVkIHRvIHBheSBhbiBpbml0aWFsIG1hcmdpbj8nKSxcbiAgICAgICAgc2VjdGlvbjogJ3RyYWRpbmdfa25vd2xlZGdlJyxcbiAgICAgICAgZm9ybV9jb250cm9sOiAncmVxdWlyZWRfaW5pdGlhbF9tYXJnaW4nLFxuICAgICAgICBmaWVsZF90eXBlOiAncmFkaW8nLFxuICAgICAgICBhbnN3ZXJfb3B0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdXaGVuIG9wZW5pbmcgYSBsZXZlcmFnZWQgQ0ZEIHRyYWRlJyksXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdXaGVuIG9wZW5pbmcgYSBMZXZlcmFnZWQgQ0ZEIHRyYWRlLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBsb2NhbGl6ZSgnV2hlbiB0cmFkaW5nIG11bHRpcGxpZXJzJyksIHZhbHVlOiAnV2hlbiB0cmFkaW5nIE11bHRpcGxpZXJzLicgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBsb2NhbGl6ZSgnV2hlbiBidXlpbmcgc2hhcmVzIG9mIGEgY29tcGFueScpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnV2hlbiBidXlpbmcgc2hhcmVzIG9mIGEgY29tcGFueS4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogbG9jYWxpemUoJ0FsbCBvZiB0aGUgYWJvdmUnKSwgdmFsdWU6ICdBbGwgb2YgdGhlIGFib3ZlLicgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcblxuY29uc3QgZGVmYXVsdF9mb3JtX2NvbmZpZyA9IHtcbiAgICBzdXBwb3J0ZWRfaW46IFsnbWFsdGFpbnZlc3QnXSxcbiAgICBkZWZhdWx0X3ZhbHVlOiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFkaW5nX2Fzc2Vzc21lbnRfZm9ybV9jb25maWcgPSB7XG4gICAgcmlza190b2xlcmFuY2U6IHtcbiAgICAgICAgLi4uZGVmYXVsdF9mb3JtX2NvbmZpZyxcbiAgICB9LFxuICAgIHNvdXJjZV9vZl9leHBlcmllbmNlOiB7XG4gICAgICAgIC4uLmRlZmF1bHRfZm9ybV9jb25maWcsXG4gICAgfSxcbiAgICBjZmRfZXhwZXJpZW5jZToge1xuICAgICAgICAuLi5kZWZhdWx0X2Zvcm1fY29uZmlnLFxuICAgIH0sXG4gICAgY2ZkX2ZyZXF1ZW5jeToge1xuICAgICAgICAuLi5kZWZhdWx0X2Zvcm1fY29uZmlnLFxuICAgIH0sXG4gICAgdHJhZGluZ19leHBlcmllbmNlX2ZpbmFuY2lhbF9pbnN0cnVtZW50czoge1xuICAgICAgICAuLi5kZWZhdWx0X2Zvcm1fY29uZmlnLFxuICAgIH0sXG4gICAgdHJhZGluZ19mcmVxdWVuY3lfZmluYW5jaWFsX2luc3RydW1lbnRzOiB7XG4gICAgICAgIC4uLmRlZmF1bHRfZm9ybV9jb25maWcsXG4gICAgfSxcbiAgICBjZmRfdHJhZGluZ19kZWZpbml0aW9uOiB7XG4gICAgICAgIC4uLmRlZmF1bHRfZm9ybV9jb25maWcsXG4gICAgfSxcbiAgICBsZXZlcmFnZV9pbXBhY3RfdHJhZGluZzoge1xuICAgICAgICAuLi5kZWZhdWx0X2Zvcm1fY29uZmlnLFxuICAgIH0sXG4gICAgbGV2ZXJhZ2VfdHJhZGluZ19oaWdoX3Jpc2tfc3RvcF9sb3NzOiB7XG4gICAgICAgIC4uLmRlZmF1bHRfZm9ybV9jb25maWcsXG4gICAgfSxcbiAgICByZXF1aXJlZF9pbml0aWFsX21hcmdpbjoge1xuICAgICAgICAuLi5kZWZhdWx0X2Zvcm1fY29uZmlnLFxuICAgIH0sXG59O1xuXG5jb25zdCB0cmFkaW5nQXNzZXNzbWVudENvbmZpZyA9ICh7IHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0IH0sIFRyYWRpbmdBc3Nlc3NtZW50TmV3VXNlcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYWN0aXZlX3RpdGxlOiBsb2NhbGl6ZSgnQ29tcGxldGUgeW91ciB0cmFkaW5nIGFzc2Vzc21lbnQnKSxcbiAgICAgICAgICAgIHRpdGxlOiBsb2NhbGl6ZSgnVHJhZGluZyBhc3Nlc3NtZW50JyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IFRyYWRpbmdBc3Nlc3NtZW50TmV3VXNlcixcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgdHJhZGluZ19hc3Nlc3NtZW50X2Zvcm1fY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlOiBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbihyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgdHJhZGluZ19hc3Nlc3NtZW50X2Zvcm1fY29uZmlnKSxcbiAgICAgICAgICAgIGFzc2Vzc21lbnRfcXVlc3Rpb25zOiB0cmFkaW5nX2Fzc2Vzc21lbnRfcXVlc3Rpb25zLFxuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmFkaW5nQXNzZXNzbWVudENvbmZpZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Configs/trading-assessment-config.js\n")},"@deriv/shared":g=>{g.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":g=>{g.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__}},__webpack_module_cache__={};function __webpack_require__(g){var I=__webpack_module_cache__[g];if(void 0!==I)return I.exports;var C=__webpack_module_cache__[g]={exports:{}};return __webpack_modules__[g](C,C.exports,__webpack_require__),C.exports}__webpack_require__.n=g=>{var I=g&&g.__esModule?()=>g.default:()=>g;return __webpack_require__.d(I,{a:I}),I},__webpack_require__.d=(g,I)=>{for(var C in I)__webpack_require__.o(I,C)&&!__webpack_require__.o(g,C)&&Object.defineProperty(g,C,{enumerable:!0,get:I[C]})},__webpack_require__.o=(g,I)=>Object.prototype.hasOwnProperty.call(g,I),__webpack_require__.r=g=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./Configs/trading-assessment-config.js");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));