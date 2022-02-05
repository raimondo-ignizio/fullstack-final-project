<template>
  <div class="flex form-container">
    <div class="form-header" id="book-search">
      <img src="icons/book-icon.svg"/>
      Aggiungi libro
    </div>
    <form method="GET" action="books/search">
      <div class="flex">
        <label for="title"> Titolo </label>
        <input name="title" type="text"/>
        <p id="hint">Lascia il campo vuoto per visualizzare tutti i libri.</p>
      </div>

      <section class="flex">
        <button type="submit" class="submit-button"> Cerca </button>
      </section>
    </form>


    <a href="/" class="margin-top-20">Torna indietro</a>
  </div>
</template>
