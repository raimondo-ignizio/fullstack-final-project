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
          <th>Aggiungi libro</th>
        </tr>

          <tr v-for="book in books" v-bind:key="book.id">
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.genre }}</td>
              <td>{{ book.year }}</td>
              <td>{{ book.pages }}</td>
              <td>
                <button type="button" @click="addBook(book.id)">Aggiungi</button>
              </td>
          </tr>
        </table>

        <nav>
          <section class="flex-button">
            <button type="button" class="nav-button"
            :disabled="!pagination.prev_page_url"
            @click="fetchBooks(pagination.prev_page_url)">&lt;&lt; Pagina precedente</button>

             <p>Page {{ pagination.current_page }} of {{ pagination.last_page}}</p>

            <button type="button" class="nav-button"
             :disabled="!pagination.next_page_url"
             @click="fetchBooks(pagination.next_page_url)">Pagina successiva &gt;&gt;</button>
          </section>


          <section class="flex-button margin-top-20">
            <a href="/app"><button type="button">Homepage</button></a>
            <a href="/app/books"><button type="button">I miei libri</button></a>
          </section>
        </nav>
      </div>
    </div>
</template>

<script>
import router from "../router";

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
            },
            pagination: {},
        }
    },

    created() {
      this.fetchBooks();
    },

    methods: {
      fetchBooks(page_url) {
        try {
        page_url = page_url || "/api/books/all"
        fetch(page_url)
          .then(res => res.json())
          .then(res => {
            this.books = res.data;
            this.makePagination(res);
          })
        } catch (err) {
          alert("Si è verificato un errore:", err);
          router.push("home");
        }
      },

      addBook(id) {
        fetch(`/api/books/${id}`, {
          method: "post",
          headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
          }
        })
        .then(alert("Il libro è stato aggiunto."))
        .then(router.push("books"))

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
    },
};
</script>
