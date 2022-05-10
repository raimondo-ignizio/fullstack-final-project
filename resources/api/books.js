export default {
  fetchBooks(page_url) {
    return fetch(page_url)
      .then(res => res.json())
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

  updateBook(id) {
    fetch(`/api/books/${id}`, {
      method: "put",
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    })
      .then(res => res.json())
  },

  deleteBook(id) {
    fetch(`/api/books/${id}`, {
      method: "delete",
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    })
      .then(res => res.json())
  },

  makePagination(res) {
    let pagination = {
      current_page: res.current_page,
      last_page: res.last_page,
      next_page_url: res.next_page_url,
      prev_page_url: res.prev_page_url,
    }

    return pagination;
  }
}