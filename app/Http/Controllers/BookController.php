<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
  public function read()
  {
    return view("my-books", [
      "books" => Book::orderBy("id", "asc")->paginate(10)
    ]);
  }

  public function create(request $request)
  {
    $title = $request->input("title");
    $author = $request->input("author");
    $genre = $request->input("genre");
    $year = $request->input("year");
    $pages = $request->input("pages");
    $isPartOfSeries = $request->input("belongs_to_a_series");
    $series = $request->input("series");
    $seriesNumber = $request->input("series_number");

    Book::Create([
      "title" => $title,
      "author" => $author,
      "genre" => $genre,
      "year" => $year,
      "pages" => $pages,
      "is_part_of_a_series" => $isPartOfSeries,
      "series" => $series,
      "series_number" => $seriesNumber
    ]);
  }
}
