<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
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
  Route::get("books/search", [ApiController::class, "searchBooks"]);
  Route::get("books/all", [ApiController::class, "getAllBooks"]);
  Route::get("books/unread", [ApiController::class, "getUnreadUserBooks"]);
  Route::get("books", [ApiController::class, "getAllUserBooks"]);
  Route::get("books/{id}", [ApiController::class, "getBook"]);
  Route::put("books/{id}", [ApiController::class, "updateBook"]);
  Route::delete("books/{id}", [ApiController::class, "deleteBook"]);
  Route::post("books/{id}", [ApiController::class, "createBook"]);
});
