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
      "pages"
    ];

    public function userBook()
    {
      return $this->hasMany(UserBook::class);
    }
}
