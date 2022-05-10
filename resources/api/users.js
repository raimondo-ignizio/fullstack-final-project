export default {
  getUser() {
    return fetch(`/api/user`)
      .then(res => res.json())
  },

  logout() {
    fetch(`/logout`, {
      method: "post",
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    });
  }
}