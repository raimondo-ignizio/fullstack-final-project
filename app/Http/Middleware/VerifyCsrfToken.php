<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
      "http://127.0.0.1:8000/book-form",
      "http://127.0.0.1:8000/to-read",
      "http://127.0.0.1:8000/to-unread",
      "http://127.0.0.1:8000/delete"
    ];
}
