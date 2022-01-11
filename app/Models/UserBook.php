<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBook extends Model
{
    use HasFactory;

    protected $table = "user_books";

    protected $fillable = [
      "user_id",
      "book_id",
      "is_finished"
    ];

    public function book()
    {
      return $this->belongsTo(Book::class);
    }
}
