<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Auth;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
        "id" => $this->id,
        "title" => $this->title,
        "author" => $this->author,
        "genre" => $this->genre,
        "year" => $this->year,
        "pages" => $this->pages
      ];
    }
}
