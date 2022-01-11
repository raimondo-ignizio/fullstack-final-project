<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Book;
use App\Models\UserBook;
use App\Http\Resources\UserBookCollection;
use App\Http\Resources\BookCollection;

class ApiController extends Controller
{
    public function searchBooks(Request $req) {
      $validated = $req->validate([
        "title" => ["string", "nullable"]
      ]);

      $title = strip_tags($req->input("title"));

      return new BookCollection(Book::where("title", "like", "%".$title."%")->get());
    }

    public function getUnreadUserBooks() {
      return new UserBookCollection(UserBook::where("user_id", Auth::id())
                                     ->where("is_finished", 0)->get());
    }

    public function getAllUserBooks() {
      return new UserBookCollection(UserBook::where("user_id", Auth::id())->get());
    }

    public function createBook(Request $req) {
      $newbook = new UserBook;
      $newbook->book_id = $req->id;
      if ($req->user) {
        $newbook->user_id = $req->user;
      } else {
        $newbook->user_id = Auth::id();
      }
      $newbook->save();

      return response()->json([
        "message" => "Il libro è stato aggiunto correttamente."
      ], 201);
    }

    public function getBook($id) {
      return new UserBookCollection(UserBook::where("id", $id)->get());
    }

    public function updateBook(Request $req) {
      $book = UserBook::find($req->id);

      if ($book->is_finished == 0) {
        $book->is_finished = 1;
        $book->save();
      } else {
        $book->is_finished = 0;
        $book->save();
      }


      return response()->json([
        "message" => "Operazione completata."
      ], 201);
    }

    public function deleteBook(Request $req) {
      $book = UserBook::find($req->id);
      $book->delete();

      return response()->json([
        "message" => "Il libro è stato eliminato."
      ], 201);
    }
}
