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
        <th>Serie</th>
        <th>Numero nella serie</th>
        <th>Finito</th>
        <th>Cambia stato</th>
      </tr>
      <?php
      use App\Models\Book;

      foreach ($books as $book) {
        $data = $book->toArray();
        echo
        "<tr>
            <td>{$data["title"]}</td>
            <td>{$data["author"]}</td>
            <td>{$data["genre"]}</td>
            <td>{$data["year"]}</td>
            <td>{$data["pages"]}</td>
            <td>{$data["series"]}</td>
            <td>{$data["series_number"]}</td>";

        if ($data["is_finished"] === 0) {
          echo "<td><img src='icons/uncheck-icon.svg'/></td>
                <td><form method='POST' action='to-read'>
                      <button type='submit' name='id' value='{$data["id"]}'>Segna come letto</button>
                    </form></td>";
        } else if ($data["is_finished"] === 1) {
          echo "<td><img src='icons/check-icon.svg'/></td>
                <td><form method='POST' action='to-unread'>
                      <button type='submit' name='id' value='{$data["id"]}'>Segna come da leggere</button>
                    </form></td>";
        };

        echo "<td><form method='POST' action='delete'>
                    <button type='submit' name='id' value='{$data["id"]}'
                     onclick='return confirm(`Are you sure?`);'>Elimina</button>
                     </form></td></tr>";
      }
      ?>
    </table>

    <nav>
      {{ $books->links("pagination::simple-tailwind") }}
    </nav>
  </div>
  <div class="flex-button">
    <a href="home"><button type="button">Torna indietro</button></a>
    <a href="to-read-list"><button type="button">Da leggere</button></a>
    <a href="my-books"><button type="button">Tutti i miei libri</button></a>
  </div>
</div>
@endsection
