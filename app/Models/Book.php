<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $table = "books";

    protected $fillable = [
      "title",
      "author",
      "genre",
      "year",
      "pages",
      "is_part_of_a_series",
      "series",
      "series_number",
      "is_finished",
      "user_id"
    ];
}
