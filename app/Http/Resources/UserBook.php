<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\BookResource;

class UserBook extends JsonResource
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
          "book" => $this->book,
          "id" => $this->id,
          "user_id" => $this->user_id,
          "is_finished" => $this->is_finished,
        ];
    }
}
