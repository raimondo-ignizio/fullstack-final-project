@extends("layouts.app")

@section("content")
<div class="flex table-container">
  <table class="table table-striped">
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Genre</th>
      <th>Year</th>
      <th>Pages</th>
      <th>Series</th>
      <th>Series Number</th>
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
          <td>{$data["series_number"]}</td>
        </tr>";
    }
    ?>
  </table>

  <nav>
    {{ $books->links("pagination::simple-tailwind") }}
  </nav>
</div>
@endsection
