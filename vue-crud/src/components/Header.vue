<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Post</router-link>
    <router-link to="/update">Update Post</router-link>
    <router-link @click="logout" to="#">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      console.log("loggedout");
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.nav {
  background-color: #0b814e;
  overflow: hidden;
}

.nav a {
  float: left;
  color: white;
  padding: 15px 15px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 5px;
}

.nav a:hover {
  background-color: #cef0e1;
  color: #0b814e;
}
</style>