<template>
  <div class="nav">
    <a router-link="/">Home</a>
    <a href="">Add Post</a>
    <a href="">Update Post</a>
    <a href="">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Header",
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

.nav a:hover{
    background-color: #cef0e1;
    color: #0b814e;
}
</style>