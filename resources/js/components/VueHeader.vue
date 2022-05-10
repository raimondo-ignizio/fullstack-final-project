<template>
  <header class="bg-blue-900 py-6 main-header">
    <a href="/"><img src="/icons/site-logo-2.svg" id="header-logo" /></a>
    <div id="header-user">
      <p>Ciao, {{ username }}! <a href="" class="no-underline hover:underline" @click="logout()">Esci</a></p>
    </div>
  </header>
</template>

<script>
import users from "../../api/users.js";

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
      try {
        users.logout();
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    },

    async getUser() {
      try {
        let res = await users.getUser();
        this.username = res.name;
      } catch (err) {
        alert("Si è verificato un errore:", err);
      }
    }
  }
}
</script>
