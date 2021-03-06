"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Books_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Books.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Books.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_books_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/books.js */ "./resources/api/books.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        pages: ""
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page_url = page_url || "/api/books/all";
                _context.prev = 1;
                _context.next = 4;
                return _api_books_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchBooks(page_url);

              case 4:
                res = _context.sent;
                _this.books = res.data;

                _this.makePagination(res);

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                alert("Si ?? verificato un errore:" + _context.t0);
                console.log("Error:", _context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    },
    addBook: function addBook(id) {
      try {
        _api_books_js__WEBPACK_IMPORTED_MODULE_1__["default"].addBook(id);
      } catch (err) {
        alert("Si ?? verificato un errore:" + err);
      }
    },
    makePagination: function makePagination(res) {
      this.pagination = _api_books_js__WEBPACK_IMPORTED_MODULE_1__["default"].makePagination(res);
    }
  }
});

/***/ }),

/***/ "./resources/api/books.js":
/*!********************************!*\
  !*** ./resources/api/books.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fetchBooks: function fetchBooks(page_url) {
    return fetch(page_url).then(function (res) {
      return res.json();
    });
  },
  addBook: function addBook(id) {
    fetch("/api/books/".concat(id), {
      method: "post",
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    }).then(alert("Il libro ?? stato aggiunto.")).then(router.push("books"));
  },
  updateBook: function updateBook(id) {
    fetch("/api/books/".concat(id), {
      method: "put",
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    }).then(function (res) {
      return res.json();
    });
  },
  deleteBook: function deleteBook(id) {
    fetch("/api/books/".concat(id), {
      method: "delete",
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    }).then(function (res) {
      return res.json();
    });
  },
  makePagination: function makePagination(res) {
    var pagination = {
      current_page: res.current_page,
      last_page: res.last_page,
      next_page_url: res.next_page_url,
      prev_page_url: res.prev_page_url
    };
    return pagination;
  }
});

/***/ }),

/***/ "./resources/js/components/Books.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Books.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Books_vue_vue_type_template_id_4c12364f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=4c12364f& */ "./resources/js/components/Books.vue?vue&type=template&id=4c12364f&");
/* harmony import */ var _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&lang=js& */ "./resources/js/components/Books.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Books_vue_vue_type_template_id_4c12364f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Books_vue_vue_type_template_id_4c12364f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Books.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Books.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Books.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Books.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Books.vue?vue&type=template&id=4c12364f&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Books.vue?vue&type=template&id=4c12364f& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_4c12364f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_4c12364f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_4c12364f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Books.vue?vue&type=template&id=4c12364f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Books.vue?vue&type=template&id=4c12364f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Books.vue?vue&type=template&id=4c12364f&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Books.vue?vue&type=template&id=4c12364f& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
          _vm._l(_vm.books, function (book) {
            return _c("tr", { key: book.id }, [
              _c("td", [_vm._v(_vm._s(book.title))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(book.author))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(book.genre))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(book.year))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(book.pages))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        return _vm.addBook(book.id)
                      },
                    },
                  },
                  [_vm._v("Aggiungi")]
                ),
              ]),
            ])
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c("nav", [
        _c("section", { staticClass: "flex-button" }, [
          _c(
            "button",
            {
              staticClass: "nav-button",
              attrs: {
                type: "button",
                disabled: !_vm.pagination.prev_page_url,
              },
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
              attrs: {
                type: "button",
                disabled: !_vm.pagination.next_page_url,
              },
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
        _vm._m(1),
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
      _c("th", [_vm._v("Aggiungi libro")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "flex-button margin-top-20" }, [
      _c("a", { attrs: { href: "/app" } }, [
        _c("button", { attrs: { type: "button" } }, [_vm._v("Homepage")]),
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/app/books" } }, [
        _c("button", { attrs: { type: "button" } }, [_vm._v("I miei libri")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);