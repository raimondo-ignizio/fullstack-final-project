<template>
  <main class="sm:container sm:mx-auto sm:mt-10">
      <div class="w-full sm:px-6 logo-container">
          <section class="flex flex-col break-words sm:border-1 sm:rounded-md sm:shadow-sm sm:shadow-lg">

              <header class="form-header">
                  <img src="icons/site-logo-2.svg" id="home-logo"/>
              </header>

              <div class="w-full p-6">
                  <p class="text-gray-700">
                      Benvenuto/a {{ username }}!
                  </p>
                  <nav class="home-link">
                    <a href="/app/library" class="home-link">Aggiungi un libro</a>
                    <a href="/app/books" class="home-link">I miei libri</a>
                  </nav>
              </div>
          </section>
      </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    }
  },

  methods: {
    getUser() {
      fetch(`/api/user`)
      .then(res => res.json())
      .then(res => {
        this.username = res.name
      })
    }
  },

  created() {
    this.getUser()
  },
}
</script>
