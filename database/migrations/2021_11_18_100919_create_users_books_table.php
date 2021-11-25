<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create("user_books", function (Blueprint $table) {
          $table->increments("id")->start_from(0);
          $table->unsignedInteger("user_id");
          $table->unsignedInteger("book_id");
          $table->boolean("is_finished")->nullable()->default("0");
          $table->timestamps();

          $table->foreign("user_id")->references("id")->on("users");
          $table->foreign("book_id")->references("id")->on("books");

          $table->unique(["user_id", "book_id"]);
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
