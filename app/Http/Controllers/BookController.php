<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
  public function read()
  {
    return view("my-books", [
      "books" => Book::orderBy("id", "asc")->
                 where("user_id", "=", Auth::id())->paginate(10)
    ]);
  }

  public function showToRead()
  {
    return view("my-books", [
      "books" => Book::orderBy("id", "asc")
                 ->where("is_finished", "=", false)
                 ->where("user_id", "=", Auth::id())->paginate(10)
    ]);
  }

  public function create(request $request)
  {

    $validated = $request->validate([
      "title" => ["required", "string"],
      "author" => ["required", "string"],
      "genre" => ["string"],
      "year" => ["date_format:Y"],
      "pages" => ["integer"],
      "series" => ["string", "nullable"],
      "seriesNumber" => ["integer", "nullable", "max:20"]
    ]);

    $title = strip_tags($request->input("title"));
    $author = strip_tags($request->input("author"));
    $genre = strip_tags($request->input("genre"));
    $year = $request->input("year");
    $pages = $request->input("pages");
    $isPartOfSeries = $request->input("belongs_to_a_series");
    $series = strip_tags($request->input("series"));
    $seriesNumber = $request->input("series_number");

    Book::Create([
      "title" => $title,
      "author" => $author,
      "genre" => $genre,
      "year" => $year,
      "pages" => $pages,
      "is_part_of_a_series" => $isPartOfSeries,
      "series" => $series,
      "series_number" => $seriesNumber,
      "user_id" => Auth::id()
    ]);

    return redirect()->route("books.table");
  }

  public function unreadToRead(request $request)
  {
    $id = $request->input("id");
    $book = Book::find($id);
    $book->update(["is_finished" => true]);

    return back();
  }

  public function readToUnread(request $request)
  {
    $id = $request->input("id");
    $book = Book::find($id);
    $book->update(["is_finished" => false]);

    return back();
  }

  public function delete(request $request)
  {
    $id = $request->input("id");
    $book = Book::find($id);
    $book->delete();

    return back();
  }
}
