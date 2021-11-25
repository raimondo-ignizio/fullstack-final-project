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
        <th>Finito</th>
        <th>Cambia stato</th>
      </tr>

      @foreach ($user_books as $book)
        <tr>
            <td>{{ $book->title }}</td>
            <td>{{ $book->author }}</td>
            <td>{{ $book->genre }}</td>
            <td>{{ $book->year }}</td>
            <td>{{ $book->pages }}</td>

        @if ($book->is_finished === 0)
          <td><img src='icons/uncheck-icon.svg'/></td>
                <td><form method='POST' action='books/{{ $book->n }}/to-read'>
                  @csrf
                      <button type='submit'>Segna come letto</button>
                    </form></td>
        @endif

        @if ($book->is_finished === 1)
        <td><img src='icons/check-icon.svg'/></td>
                <td><form method='POST' action='books/{{ $book->n }}/to-unread'>
                  @csrf
                      <button type='submit'>Segna come da leggere</button>
                    </form></td>
        @endif

        <td><form method='POST' action='books/{{ $book->n }}/delete'>
                    @csrf
                    <button type='submit'
                     onclick='return confirm(`Are you sure?`);'>Elimina</button>
                     </form></td></tr>
        @endforeach
      </table>

    <nav>
      {{ $user_books->links("pagination::simple-tailwind") }}
    </nav>
  </div>
  <div class="flex-button">
    <a href="home"><button type="button">Torna indietro</button></a>
    <a href="unread"><button type="button">Da leggere</button></a>
    <a href="books"><button type="button">Tutti i miei libri</button></a>
  </div>
</div>
@endsection
