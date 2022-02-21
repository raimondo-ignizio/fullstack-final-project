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

Auth::routes();

Route::get('/app/{any?}', [
    function () {
        return view('home');
    }
])->where('any', '.*')->middleware("auth");

Route::get("/", [
  function() {
    return redirect("/app");
  }
]);
