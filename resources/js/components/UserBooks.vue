<template>
  <div>
    <div class="table-container table-responsive-lg">
      <table class="table table-bordered">
        <tr>
          <th>Titolo</th>
          <th>Autore</th>
          <th>Genere</th>
          <th>Anno</th>
          <th>Pagine</th>
          <th>Finito</th>
          <th>Cambia stato</th>
          <th></th>
        </tr>

        <tr v-for="userbook in books" v-bind:key="userbook.id">
          <td>{{ userbook.book.title }}</td>
          <td>{{ userbook.book.author }}</td>
          <td>{{ userbook.book.genre }}</td>
          <td>{{ userbook.book.year }}</td>
          <td>{{ userbook.book.pages }}</td>
          <td v-if="!userbook.is_finished">
            <img src='/icons/uncheck-icon.svg' />
          </td>
          <td v-else-if="userbook.is_finished">
            <img src='/icons/check-icon.svg' />
          </td>
          <td v-if="!userbook.is_finished">
            <button type='button' @click="updateBook(userbook.id)">Segna come letto</button>
          </td>
          <td v-else-if="userbook.is_finished">
            <button type='button' @click="updateBook(userbook.id)">Segna come da leggere</button>
          </td>
          <td>
            <button type='button' @click='deleteBook(userbook.id)'>Elimina</button>
          </td>
        </tr>
      </table>
    </div>
    <nav>
      <section class="flex-button">
        <button type="button" class="nav-button" :disabled="!pagination.prev_page_url"
          @click="fetchBooks(pagination.prev_page_url)">&lt;&lt; Pagina precedente</button>

        <p>Page {{ pagination.current_page }} of {{ pagination.last_page }}</p>

        <button type="button" class="nav-button" :disabled="!pagination.next_page_url"
          @click="fetchBooks(pagination.next_page_url)">Pagina successiva &gt;&gt;</button>
      </section>

      <section class="flex-button margin-top-20">
        <a href="/app"><button type="button">Torna indietro</button></a>
        <a href="/app/library"><button type="button">Aggiungi libro</button></a>
        <a href="#"><button type="button" @click="fetchUnreadBooks()">Da leggere</button></a>
        <a href="#"><button type="button" @click="fetchBooks()">Tutti i miei libri</button></a>
      </section>
    </nav>
  </div>
</template>

<script>
import books from "../../api/books.js"

export default {
  data() {
    return {
      books: [],
      book: {
        id: "",
        title: "",
        author: "",
        genre: "",
        year: "",
        pages: "",
        is_finished: 0,
      },

      pagination: {},
    }
  },

  created() {
    this.fetchBooks();
  },

  methods: {
    async fetchBooks(page_url) {
      page_url = page_url || "/api/books";
      try {
        let res = await books.fetchBooks(page_url);
        this.books = res.data;
        this.makePagination(res);
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    },

    async fetchUnreadBooks(page_url) {
      page_url = page_url || "/api/books/unread";
      try {
        let res = await books.fetchBooks(page_url);
        this.books = res.data;
        this.makePagination(res);
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    },

    makePagination(res) {
      this.pagination = books.makePagination(res);
    },

    async updateBook(id) {
      try {
        await books.updateBook(id);
        this.fetchBooks(`/api/books?page=${this.pagination.current_page}`);
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    },

    async deleteBook(id) {
      if (confirm("Sei sicuro?")) {
        try {
          await books.deleteBook(id);
          this.fetchBooks(`/api/books?page=${this.pagination.current_page}`);
        } catch (err) {
          alert("Si è verificato un errore:", err);
        }
      }
    },
  }
};
</script>
