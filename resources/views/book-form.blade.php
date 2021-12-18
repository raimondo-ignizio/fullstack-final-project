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
<div id="container">
  <div class="flex form-container">
    <div class="form-header" id="book-search">
      <img src="icons/book-icon.svg"/>
      Aggiungi libro
    </div>
    <form method="GET" action="books/search">
      @csrf
      <div class="flex">
        <label for="title"> Titolo </label>
        <input name="title" type="text"/>
        <p id="hint">Lascia il campo vuoto per visualizzare tutti i libri.</p>
      </div>

        <div class="flex">
          <button type="submit" class="submit-button"> Cerca </button>
        </div>
    </form>


    <a href="/home" class="margin-top-20">Torna indietro</a>
  </div>
</div>
@endsection
