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
            $table->string("genre");
            $table->integer("year");
            $table->integer("pages");
        });

        DB::table("books")->insert(
          array(
            ["title" => "Léon",
             "author" => "Carlo Lucarelli",
             "genre" => "Giallo",
             "year" => "2021",
             "pages" => "216"],

            ["title" => "Le terre dello sciacallo",
            "author" => "Amos Oz",
            "genre" => "Narrativa",
            "year" => "2021",
            "pages" => "272"],

            ["title" => "L'ultima sentinella",
            "author" => "Andrew & Lee Child",
            "genre" => "Thriller",
            "year" => "2021",
            "pages" => "360"],

            ["title" => "Cambiare l'acqua ai fiori",
            "author" => "Valérie Perrin",
            "genre" => "Narrativa",
            "year" => "2019",
            "pages" => "476"],

            ["title" => "Vecchie conoscenze",
            "author" => "Antonio Manzini",
            "genre" => "Giallo",
            "year" => "2021",
            "pages" => "416"],

            ["title" => "Io sono l'abisso",
            "author" => "Donato Carrisi",
            "genre" => "Thriller",
            "year" => "2020",
            "pages" => "384"],

            ["title" => "Ossi di seppia",
            "author" => "Eugenio Montale",
            "genre" => "Raccolta di poesie",
            "year" => "1925",
            "pages" => "286"],

            ["title" => "Gerusalemme liberata",
            "author" => "Torquato Tasso",
            "genre" => "Poema eroico",
            "year" => "1581",
            "pages" => "1294"],

            ["title" => "Orgoglio e pregiudizio",
            "author" => "Jane Austen",
            "genre" => "Narrativa classica",
            "year" => "1813",
            "pages" => "419"],

            ["title" => "1984",
            "author" => "George Orwell",
            "genre" => "Fantascienza",
            "year" => "1949",
            "pages" => "342"],

            ["title" => "I pilastri della terra",
            "author" => "Ken Follett",
            "genre" => "Romanzo storico",
            "year" => "1990",
            "pages" => "1049"],

            ["title" => "Blockchain. Tecnologia e applicazioni per il business",
            "author" => "G. Chiap, J. Ranalli, R. Bianchi",
            "genre" => "Ingegneria e informatica",
            "year" => "2019",
            "pages" => "230"],

            ["title" => "La fabbrica di cioccolato",
            "author" => "Roald Dahl",
            "genre" => "Romanzo",
            "year" => "1964",
            "pages" => "202"],

            ["title" => "Il deserto dei tartari",
            "author" => "Dino Buzzati",
            "genre" => "Romanzo",
            "year" => "1940",
            "pages" => "221"],

            ["title" => "Frankenstein",
            "author" => "Mary Shelley",
            "genre" => "Horror",
            "year" => "1818",
            "pages" => "201"],

            ["title" => "Moby Dick",
            "author" => "Herman Melville",
            "genre" => "Avventura",
            "year" => "1851",
            "pages" => "773"],

            ["title" => "Una calda scia di sangue",
            "author" => "Salvatore Sutera",
            "genre" => "Giallo",
            "year" => "2021",
            "pages" => "224"],

            ["title" => "La profezia dell'armadillo",
            "author" => 'Michele "Zerocalcare" Rech',
            "genre" => "Biografia",
            "year" => "2011",
            "pages" => "160"],

            ["title" => "La regina d'oro",
            "author" => "Christian Jacq",
            "genre" => "Romanzo storico",
            "year" => "2021",
            "pages" => "312"],

            ["title" => "La vita segreta dei libri",
            "author" => "Santiago Posteguillo",
            "genre" => "Saggio letterario",
            "year" => "2021",
            "pages" => "204"]
            )
        );
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
