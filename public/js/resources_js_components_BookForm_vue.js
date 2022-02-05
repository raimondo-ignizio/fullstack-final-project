"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_BookForm_vue"],{

/***/ "./resources/js/components/BookForm.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/BookForm.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookForm_vue_vue_type_template_id_c03a7390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookForm.vue?vue&type=template&id=c03a7390& */ "./resources/js/components/BookForm.vue?vue&type=template&id=c03a7390&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _BookForm_vue_vue_type_template_id_c03a7390___WEBPACK_IMPORTED_MODULE_0__.render,
  _BookForm_vue_vue_type_template_id_c03a7390___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BookForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BookForm.vue?vue&type=template&id=c03a7390&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/BookForm.vue?vue&type=template&id=c03a7390& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_c03a7390___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_c03a7390___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_c03a7390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookForm.vue?vue&type=template&id=c03a7390& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BookForm.vue?vue&type=template&id=c03a7390&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BookForm.vue?vue&type=template&id=c03a7390&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BookForm.vue?vue&type=template&id=c03a7390& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex form-container" }, [
      _c("div", { staticClass: "form-header", attrs: { id: "book-search" } }, [
        _c("img", { attrs: { src: "icons/book-icon.svg" } }),
        _vm._v("\n    Aggiungi libro\n  "),
      ]),
      _vm._v(" "),
      _c("form", { attrs: { method: "GET", action: "books/search" } }, [
        _c("div", { staticClass: "flex" }, [
          _c("label", { attrs: { for: "title" } }, [_vm._v(" Titolo ")]),
          _vm._v(" "),
          _c("input", { attrs: { name: "title", type: "text" } }),
          _vm._v(" "),
          _c("p", { attrs: { id: "hint" } }, [
            _vm._v("Lascia il campo vuoto per visualizzare tutti i libri."),
          ]),
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "flex" }, [
          _c(
            "button",
            { staticClass: "submit-button", attrs: { type: "submit" } },
            [_vm._v(" Cerca ")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "margin-top-20", attrs: { href: "/" } }, [
        _vm._v("Torna indietro"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);