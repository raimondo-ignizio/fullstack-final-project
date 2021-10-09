@extends("layouts.app")

@section("content")

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<div class="flex form-container">
  <header class="form-header">
    <img src="icons/book-icon.svg"/>
    Aggiungi libro
  </header>
  <form method="POST" action="book-form">
    <div class="flex">
      <label for="title"> Titolo </label>
      <input name="title" type="text" required/>
    </div>

    <div class="flex">
      <label for="author"> Autore </label>
      <input name="author" type="text" required/>
    </div>

    <div class="flex">
      <label for="genre"> Genere </label>
      <input name="genre" type="text"/>
    </div>

    <div class="flex">
      <label for="year"> Anno </label>
      <input name="year" type="text"/>
    </div>

    <div class="flex">
      <label for="pages"> Pagine </label>
      <input name="pages" type="text"/>
    </div>

    <div class="flex">
      <label for="belongs_to_a_series"> Fa parte di una serie di libri? </label>
    </div>
      <input for="belongs_to_a_series" type="radio" name="belongs_to_a_series" id="seriesYes" value="1">
      <label for="yes"> Sì </label>
      <input for="belongs_to_a_series" type="radio" name="belongs_to_a_series" id="seriesNo" value="0">
      <label for="no"> No </label>

      <div id="form-optional" style="display: none">
        <div class="flex">
          <label for="series"> Quale serie? </label>
          <input name="series" type="text"/>
        </div>

        <div class="flex">
          <label for="series_number"> Che libro della serie è? </label>
          <input name="series_number" type="number" name="series_number" id="series_number" min="1" max="20">
        </div>
      </div>

      <div class="flex">
        <button type="submit" class="submit-button"> Invia </button>
      </div>
  </form>

  <a href="/home" class="margin-top-20">Torna indietro</a>
</div>

<script type="text/javascript" src="js/book-form.js"></script>
@endsection
