@php
  use App\Models\Book;
  use App\Models\UserBook;
  use App\Http\Resources\UserBookCollection;
  use Illuminate\Support\Facades\Auth;
  $collection = new UserBookCollection(UserBook::where("user_id", Auth::id())->get())
@endphp

<h2>Aggiungi un libro</h2>
<p>Inserisci l'ID di un libro per aggiungerlo alla tua collezione.</p>
<p>Consulta <a href="/api/search">qua</a> la lista dei libri per trovare l'ID che ti serve</p>

<form method="POST" action="books/create">
  @csrf
  <input type="number" name="id"  min="1" max="{{ Book::all()->last()->id }}">ID Libro</input><br>
  <button type="input">Aggiungi</button>
</form>

<h2>Aggiorna stato di lettura</h2>
<p>Seleziona il libro che desideri segnare come letto. Seleziona un libro già
   letto per segnarlo come da leggere.</p>

<form method="POST" action="books/update">
  @method('PUT')
  @csrf
  <label for="book-select">Scegli un libro</label>
  <select name="id" id="book-select">
    @foreach ($collection as $userbook)
      <option value="{{ $userbook->id }}">{{ $userbook->book->title }}</option>
    @endforeach
  </select>
  <button type="input">Conferma</button>
</form>

<h2>Elimina libro</h2>
<p>Seleziona il libro che vuoi eliminare dalla tua raccolta.</p>

<form method="POST" action="books/delete">
  @method('DELETE')
  @csrf
  <label for="book-select">Scegli un libro</label>
  <select name="id" id="book-select">
    @foreach ($collection as $userbook)
      <option value="{{ $userbook->id }}">{{ $userbook->book->title }}</option>
    @endforeach
  </select>
  <button type="input">Conferma</button>
</form>
