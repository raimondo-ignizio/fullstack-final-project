"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UserBooks_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserBooks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserBooks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      books: [],
      book: {
        id: "",
        title: "",
        author: "",
        genre: "",
        year: "",
        pages: "",
        is_finished: 0
      },
      pagination: {}
    };
  },
  created: function created() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks: function fetchBooks(page_url) {
      var _this = this;

      page_url = page_url || "/api/books";

      try {
        fetch(page_url).then(function (res) {
          return res.json();
        }).then(function (res) {
          _this.books = res.data;

          _this.makePagination(res);
        });
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    },
    fetchUnreadBooks: function fetchUnreadBooks(page_url) {
      var _this2 = this;

      page_url = page_url || "/api/books/unread";

      try {
        fetch(page_url).then(function (res) {
          return res.json();
        }).then(function (res) {
          _this2.books = res.data;

          _this2.makePagination(res);
        });
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    },
    makePagination: function makePagination(res) {
      var pagination = {
        current_page: res.current_page,
        last_page: res.last_page,
        next_page_url: res.next_page_url,
        prev_page_url: res.prev_page_url
      };
      this.pagination = pagination;
    },
    updateBook: function updateBook(id) {
      var _this3 = this;

      try {
        fetch("/api/books/".concat(id), {
          method: "put",
          headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.fetchBooks("/api/books?page=".concat(_this3.pagination.current_page));
        });
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    },
    deleteBook: function deleteBook(id) {
      var _this4 = this;

      if (confirm("Sei sicuro?")) {
        try {
          fetch("/api/books/".concat(id), {
            method: "delete",
            headers: {
              'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            alert("Libro rimosso.");

            _this4.fetchBooks("/api/books?page=".concat(_this4.pagination.current_page));
          });
        } catch (err) {
          alert("Si è verificato un errore:", err);
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/UserBooks.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/UserBooks.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserBooks_vue_vue_type_template_id_1c86b044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBooks.vue?vue&type=template&id=1c86b044& */ "./resources/js/components/UserBooks.vue?vue&type=template&id=1c86b044&");
/* harmony import */ var _UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBooks.vue?vue&type=script&lang=js& */ "./resources/js/components/UserBooks.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBooks_vue_vue_type_template_id_1c86b044___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserBooks_vue_vue_type_template_id_1c86b044___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserBooks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserBooks.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/UserBooks.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBooks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserBooks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserBooks.vue?vue&type=template&id=1c86b044&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/UserBooks.vue?vue&type=template&id=1c86b044& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_template_id_1c86b044___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_template_id_1c86b044___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_template_id_1c86b044___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBooks.vue?vue&type=template&id=1c86b044& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserBooks.vue?vue&type=template&id=1c86b044&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserBooks.vue?vue&type=template&id=1c86b044&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserBooks.vue?vue&type=template&id=1c86b044& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "table-container table-responsive-lg" }, [
      _c(
        "table",
        { staticClass: "table table-bordered" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.books, function (userbook) {
            return _c("tr", { key: _vm.book.id }, [
              _c("td", [_vm._v(_vm._s(userbook.book.title))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(userbook.book.author))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(userbook.book.genre))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(userbook.book.year))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(userbook.book.pages))]),
              _vm._v(" "),
              !userbook.is_finished
                ? _c("td", [
                    _c("img", { attrs: { src: "/icons/uncheck-icon.svg" } }),
                  ])
                : userbook.is_finished
                ? _c("td", [
                    _c("img", { attrs: { src: "/icons/check-icon.svg" } }),
                  ])
                : _vm._e(),
              _vm._v(" "),
              !userbook.is_finished
                ? _c("td", [
                    _c(
                      "button",
                      {
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.updateBook(userbook.id)
                          },
                        },
                      },
                      [_vm._v("Segna come letto")]
                    ),
                  ])
                : userbook.is_finished
                ? _c("td", [
                    _c(
                      "button",
                      {
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.updateBook(userbook.id)
                          },
                        },
                      },
                      [_vm._v("Segna come da leggere")]
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        return _vm.deleteBook(userbook.id)
                      },
                    },
                  },
                  [_vm._v("Elimina")]
                ),
              ]),
            ])
          }),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("nav", [
      _c("section", { staticClass: "flex-button" }, [
        _c(
          "button",
          {
            staticClass: "nav-button",
            attrs: { type: "button", disabled: !_vm.pagination.prev_page_url },
            on: {
              click: function ($event) {
                return _vm.fetchBooks(_vm.pagination.prev_page_url)
              },
            },
          },
          [_vm._v("<< Pagina precedente")]
        ),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Page " +
              _vm._s(_vm.pagination.current_page) +
              " of " +
              _vm._s(_vm.pagination.last_page)
          ),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "nav-button",
            attrs: { type: "button", disabled: !_vm.pagination.next_page_url },
            on: {
              click: function ($event) {
                return _vm.fetchBooks(_vm.pagination.next_page_url)
              },
            },
          },
          [_vm._v("Pagina successiva >>")]
        ),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "flex-button margin-top-20" }, [
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c(
            "button",
            {
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.fetchUnreadBooks()
                },
              },
            },
            [_vm._v("Da leggere")]
          ),
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c(
            "button",
            {
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.fetchBooks()
                },
              },
            },
            [_vm._v("Tutti i miei libri")]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Titolo")]),
      _vm._v(" "),
      _c("th", [_vm._v("Autore")]),
      _vm._v(" "),
      _c("th", [_vm._v("Genere")]),
      _vm._v(" "),
      _c("th", [_vm._v("Anno")]),
      _vm._v(" "),
      _c("th", [_vm._v("Pagine")]),
      _vm._v(" "),
      _c("th", [_vm._v("Finito")]),
      _vm._v(" "),
      _c("th", [_vm._v("Cambia stato")]),
      _vm._v(" "),
      _c("th"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/app" } }, [
      _c("button", { attrs: { type: "button" } }, [_vm._v("Torna indietro")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/app/library" } }, [
      _c("button", { attrs: { type: "button" } }, [_vm._v("Aggiungi libro")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);