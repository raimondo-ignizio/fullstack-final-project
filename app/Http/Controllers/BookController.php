<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class BookController extends Controller
{
  public function read(request $request)
  {
    $validated = $request->validate([
      "title" => ["string", "nullable"]
    ]);

    $title = strip_tags($request->input("title")."%");

    return view("library", [
      "books" => Book::orderBy("title", "asc")
                ->where("title", "like", $title)
                ->orWhere("author", "like", $title)
                ->paginate(10)
    ]);
  }

  public function create(request $request)
  {

    $validated = $request->validate([
      "title" => ["required", "string"],
      "author" => ["required", "string"],
      "genre" => ["string"],
      "year" => ["date_format:Y"],
      "pages" => ["integer"]
    ]);

    $title = strip_tags($request->input("title"));
    $author = strip_tags($request->input("author"));
    $genre = strip_tags($request->input("genre"));
    $year = $request->input("year");
    $pages = $request->input("pages");

    Book::Create([
      "title" => $title,
      "author" => $author,
      "genre" => $genre,
      "year" => $year,
      "pages" => $pages,
      "user_id" => Auth::id()
    ]);

    return redirect()->route("books.table");
  }
}
