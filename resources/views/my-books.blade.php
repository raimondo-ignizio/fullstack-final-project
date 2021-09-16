@extends("layouts.app")

@section("content")
<div id="container">
  <div class="table-container table-responsive-lg">
    <table class="table table-striped">
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Year</th>
        <th>Pages</th>
        <th>Series</th>
        <th>Series Number</th>
        <th>Finished</th>
        <th>Change status</th>
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
                      <button type='submit' name='id' value='{$data["id"]}'>Set to read</button>
                    </form></td>";
        } else if ($data["is_finished"] === 1) {
          echo "<td><img src='icons/check-icon.svg'/></td>
                <td><form method='POST' action='to-unread'>
                      <button type='submit' name='id' value='{$data["id"]}'>Set to unread</button>
                    </form></td>";
        };

        echo "<td><form method='POST' action='delete'>
                    <button type='submit' name='id' value='{$data["id"]}'
                     onclick='return confirm(`Are you sure?`);'>Delete</button>
                     </form></td></tr>";
      }
      ?>
    </table>

    <nav>
      {{ $books->links("pagination::simple-tailwind") }}
    </nav>
  </div>
  <div class="flex-button">
    <a href="home"><button type="button">Go back</button></a>
    <a href="to-read-list"><button type="button">To read</button></a>
    <a href="my-books"><button type="button">All my books</button></a>
  </div>
</div>
@endsection
