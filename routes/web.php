<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserBookController;
use App\Models\Book;
use App\Models\UserBook;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get("/book-form", function(){
  return view("book-form");
})->middleware("auth");

Route::get("/books/search", [BookController::class, "read"])->middleware("auth");

Route::post("/books/{book}/create", [UserBookController::class, "create"])->middleware("auth");

Route::get("/books", [UserBookController::class, "read"])->middleware("auth");

Route::put("/books/{userbook}/to-read", [UserBookController::class, "unreadToRead"])->middleware("auth");

Route::put("/books/{userbook}/to-unread", [UserBookController::class, "readToUnread"])->middleware("auth");

Route::delete("/books/{userbook}/delete", [UserBookController::class, "delete"])->middleware("auth");

Route::get("/books/unread", [UserBookController::class, "showToRead"])->middleware("auth");

Route::patch("/books", [
  "as" => "books.table",
  "uses" => "UserBookController@read"
]);
