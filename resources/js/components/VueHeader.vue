<template>
  <header class="bg-blue-900 py-6 main-header">
    <a href="/"><img src="/icons/site-logo-2.svg" id="header-logo"/></a>
    <div id="header-user">
      <p>Ciao, {{ username }}! <a href=""
         class="no-underline hover:underline"
         @click="logout()">Esci</a></p>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    }
  },

  created() {
    this.getUser()
  },

  methods: {
    logout() {
      fetch(`/logout`, {
        method: "post",
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      });
    },

    getUser() {
      fetch(`/api/user`)
      .then(res => res.json())
      .then(res => {
        this.username = res.name
      })
    }
  }
}
</script>
