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

          <tr v-for="userbook in books" v-bind:key="book.id">
              <td>{{ userbook.book.title }}</td>
              <td>{{ userbook.book.author }}</td>
              <td>{{ userbook.book.genre }}</td>
              <td>{{ userbook.book.year }}</td>
              <td>{{ userbook.book.pages }}</td>
              <td v-if="!userbook.is_finished">
                <img src='/icons/uncheck-icon.svg'/>
              </td>
              <td v-else-if="userbook.is_finished">
                <img src='/icons/check-icon.svg'/>
              </td>
              <td v-if="!userbook.is_finished">
                <button type='button' @click="updateBook(userbook.id)">Segna come letto</button>
              </td>
              <td v-else-if="userbook.is_finished">
                <button type='button' @click="updateBook(userbook.id)">Segna come da leggere</button>
              </td>
              <td>
                <button type='button'
                        @click='deleteBook(userbook.id)'>Elimina</button>
              </td>
            </tr>
        </table>
      </div>
      <nav>
        <section class="flex-button">
          <button type="button" class="nav-button"
          :disabled="!pagination.prev_page_url"
          @click="fetchBooks(pagination.prev_page_url)"><< Pagina precedente</button>

           <p>Page {{ pagination.current_page }} of {{ pagination.last_page}}</p>

          <button type="button" class="nav-button"
           :disabled="!pagination.next_page_url"
           @click="fetchBooks(pagination.next_page_url)">Pagina successiva >></button>
        </section>

        <section class="flex-button margin-top-20">
          <a href="/"><button type="button">Torna indietro</button></a>
          <a href="/library"><button type="button">Aggiungi libro</button></a>
          <a href="#"><button type="button" @click="fetchUnreadBooks()">Da leggere</button></a>
          <a href="#"><button type="button" @click="fetchBooks()">Tutti i miei libri</button></a>
        </section>
    </nav>
  </div>
</template>
<script>
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
      fetchBooks(page_url) {
        page_url = page_url || "api/books";
        fetch(page_url)
          .then(res => res.json())
          .then(res => {
            this.books = res.data;
            this.makePagination(res);
          })
      },

      fetchUnreadBooks(page_url) {
        page_url = page_url || "api/books/unread";
        fetch(page_url)
        .then(res => res.json())
        .then(res => {
          this.books = res.data;
          this.makePagination(res);
        })
      },

      makePagination(res) {
        let pagination = {
          current_page: res.current_page,
          last_page: res.last_page,
          next_page_url: res.next_page_url,
          prev_page_url: res.prev_page_url,
        }

        this.pagination = pagination;
      },

      updateBook(id) {
        fetch(`api/books/${id}`, {
          method: "put",
          headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
          }
        })
        .then(res => res.json())
        .then(data => {
          this.fetchBooks(`api/books?page=${this.pagination.current_page}`);
        })
      },

      deleteBook(id) {
        if (confirm("Sei sicuro?")) {
          fetch(`api/books/${id}`, {
            method: "delete",
            headers: {
              'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
          })
          .then(res => res.json())
          .then(data => {
            alert("Libro rimosso.");
            this.fetchBooks(`api/books?page=${this.pagination.current_page}`);
          })
        }
      },
    }
};
</script>
