<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Models\Book;
use App\Models\UserBook;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


  Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(["auth"])->group(function() {
  Route::get("books/search", [BookController::class, "searchBooks"]);
  Route::get("books/all", [BookController::class, "getAllBooks"]);
  Route::get("books/unread", [BookController::class, "getUnreadUserBooks"]);
  Route::get("books", [BookController::class, "getAllUserBooks"]);
  Route::get("books/{id}", [BookController::class, "getBook"]);
  Route::put("books/{id}", [BookController::class, "updateBook"]);
  Route::delete("books/{id}", [BookController::class, "deleteBook"]);
  Route::post("books/{id}", [BookController::class, "createBook"]);
});
