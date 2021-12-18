@extends("layouts.app")

@section("content")
<div id="container">
  <div class="flex">
    <p class="error-message">Hai già aggiunto questo libro.</p>
    <div class="flex-button">
      <a href="/book-form"><button type="button">Torna indietro</button></a>
    </div>
  </div>
</div>
@endsection
