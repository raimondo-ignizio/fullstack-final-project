<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Book;
use App\Models\UserBook;
use App\Http\Resources\UserBookCollection;
use App\Http\Resources\BookCollection;
use App\Helpers\PaginationHelper;

class ApiController extends Controller
{
    public function searchBooks(Request $req) {
      $validated = $req->validate([
        "title" => ["string", "nullable"]
      ]);

      $title = strip_tags($req->input("title"));

      return new BookCollection(Book::where("title", "like", "%".$title."%")->get());
    }

    public function getAllBooks() {
      $books = Book::all();
      $showPerPage = 10;
      $paginated = PaginationHelper::paginate($books, $showPerPage);

      return $paginated;
    }

    public function getUnreadUserBooks() {
      $books = collect(new UserBookCollection(UserBook::where("user_id", 1)
                          ->where("is_finished", 0)->get()));
      $showPerPage = 10;
      $paginated = PaginationHelper::paginate($books, $showPerPage);

      return $paginated;
    }

    public function getAllUserBooks() {
      $books = collect(new UserBookCollection(UserBook::where("user_id", 1)->get()));
      $showPerPage = 10;
      $paginated = PaginationHelper::paginate($books, $showPerPage);

      return $paginated;
    }

    public function createBook($id) {
      $newbook = new UserBook;
      $newbook->book_id = $id;
      $newbook->user_id = 1;
      $newbook->save();

      return response()->json([
        "message" => "Il libro è stato aggiunto correttamente."
      ], 201);
    }

    public function getBook($id) {
      return new UserBookCollection(UserBook::where("id", $id)->get());
    }

    public function updateBook($id) {
      $book = UserBook::find($id);

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

    public function deleteBook($id) {
      $book = UserBook::find($id);
      $book->delete();

      return response()->json([
        "message" => "Il libro è stato eliminato."
      ], 201);
    }
}
