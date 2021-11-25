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
  <header class="form-header" id="book-search">
    <img src="icons/book-icon.svg"/>
    Aggiungi libro
  </header>
  <form method="GET" action="search">
    @csrf
    <div class="flex">
      <label for="title"> Titolo </label>
      <input name="title" type="text"/>
    </div>

      <div class="flex">
        <button type="submit" class="submit-button"> Cerca </button>
      </div>
  </form>


  <a href="home" class="margin-top-20">Torna indietro</a>
</div>

@endsection
