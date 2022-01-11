<h2>Cerca un libro</h2>
<p>Lascia il campo vuoto per visualizzare tutti i libri.</p>

<form method="GET" action="books/search">
  @csrf
  <input type="text" name="title">Titolo</input><br>
  <button type="input">Cerca</button>
</form>
