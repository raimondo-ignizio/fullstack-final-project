@extends("layouts.app")

@section("content")
<div id="container">
  <div class="table-container table-responsive-lg">
    <table class="table table-striped">
      <tr>
        <th>Titolo</th>
        <th>Autore</th>
        <th>Genere</th>
        <th>Anno</th>
        <th>Pagine</th>
        <th>Aggiungi libro</th>
      </tr>

      @foreach ($books as $book)
        <tr>
            <td>{{ $book->title }}</td>
            <td>{{ $book->author }}</td>
            <td>{{ $book->genre }}</td>
            <td>{{ $book->year }}</td>
            <td>{{ $book->pages }}</td>
            <td>
              <form method="POST" action="{{ $book->id }}/create">
                @csrf
                <button type="submit">Aggiungi</button>
                </form></td>
      @endforeach
      </table>

    <nav>
      {{ $books->links("pagination::simple-tailwind") }}
    </nav>
  </div>
  <div class="flex-button">
    <a href="/home"><button type="button">Homepage</button></a>
    <a href="/books"><button type="button">I miei libri</button></a>
  </div>
</div>
@endsection
