@extends("layouts.app")

@section("content")
<div class="flex form-container">
  <header class="form-header">
    <img src="icons/book-icon.svg"/>
    Add book
  </header>
  <form method="POST" action="book-form">
    <div class="flex">
      <label for="title"> Title </label>
      <input name="title" type="text" required/>
    </div>

    <div class="flex">
      <label for="author"> Author </label>
      <input name="author" type="text" required/>
    </div>

    <div class="flex">
      <label for="genre"> Genre </label>
      <input name="genre" type="text"/>
    </div>

    <div class="flex">
      <label for="year"> Year </label>
      <input name="year" type="text"/>
    </div>

    <div class="flex">
      <label for="pages"> Pages </label>
      <input name="pages" type="text"/>
    </div>

    <div class="flex">
      <label for="belongs_to_a_series"> Is the book part of a series? </label>
    </div>
      <input for="belongs_to_a_series" type="radio" name="belongs_to_a_series" id="seriesYes" value="1">
      <label for="yes"> Yes </label>
      <input for="belongs_to_a_series" type="radio" name="belongs_to_a_series" id="seriesNo" value="0">
      <label for="no"> No </label>

      <div id="form-optional" style="display: none">
        <div class="flex">
          <label for="series"> Which series? </label>
          <input name="series" type="text"/>
        </div>

        <div class="flex">
          <label for="series_number"> Which book of the series is it? </label>
          <input name="series_number" type="number" name="series_number" id="series_number" min="1" max="20">
        </div>
      </div>

      <div class="flex">
        <button type="submit" class="submit-button"> Submit </button>
      </div>
  </form>

  <a href="/home" class="margin-top-20">Go back</a>
</div>


<script type="text/javascript" src="js/book-form.js"></script>
@endsection
