<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookController;

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

Route::post("/book-form", [BookController::class, "create"])->middleware("auth");

Route::get("/my-books", [BookController::class, "read"])->middleware("auth");

Route::post("/to-read", [BookController::class, "unreadToRead"])->middleware("auth");

Route::post("/to-unread", [BookController::class, "readToUnread"])->middleware("auth");

Route::post("/delete", [BookController::class, "delete"])->middleware("auth");

Route::get("/to-read-list", [BookController::class, "showToRead"])->middleware("auth");

Route::patch("/my-books", [
  "as" => "books.table",
  "uses" => "BookController@read"
]);
