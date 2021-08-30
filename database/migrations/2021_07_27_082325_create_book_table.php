<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments("id")->start_from(0);
            $table->string("title");
            $table->string("author");
            $table->string("genre")->nullable();
            $table->integer("year")->nullable();
            $table->integer("pages")->nullable();
            $table->boolean("is_part_of_a_series");
            $table->string("series")->nullable();
            $table->integer("series_number")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
