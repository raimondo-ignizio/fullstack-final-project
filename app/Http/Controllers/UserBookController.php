<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserBook;
use App\Models\Book;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserBookController extends Controller
{
  public function read()
  {
    return view("my-books", [
      "user_books" => DB::table("user_books")
               ->leftJoin("books", "user_books.book_id", "=", "books.id")
               ->select("books.*", "user_books.is_finished", "user_books.id as n")
               ->orderBy("created_at", "asc")
               ->where("user_id", "=", Auth::id())
               ->paginate(10)
    ]);
  }

  public function showToRead()
  {
    return view("my-books", [
      "user_books" => DB::table("user_books")
                 ->leftJoin("books", "user_books.book_id", "=", "books.id")
                 ->select("books.*", "user_books.is_finished", "user_books.id as n")
                 ->orderBy("created_at", "asc")
                 ->where("is_finished", "=", false)
                 ->where("user_id", "=", Auth::id())->paginate(10)
    ]);
  }

  public function create(Book $book)
  {
    UserBook::Create([
    "book_id" => $book->id,
    "user_id" => Auth::id()]);

    return redirect()->route("books.table");
  }

  public function unreadToRead(UserBook $userbook)
  {
    $userbook->update(["is_finished" => true]);

    return back();
  }

  public function readToUnread(UserBook $userbook)
  {
    $userbook->update(["is_finished" => false]);

    return back();
  }

  public function delete(UserBook $userbook)
  {
    $userbook->delete();

    return back();
  }
}
