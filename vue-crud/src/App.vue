<template>
<router-view></router-view>
</template>

<script>

export default {
    name: "App",
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 100px;
}

.register input, .login input {
  width: 300px;
  height: 40px;
  display: block;
  margin: 0 auto 30px auto;
  border: 1px solid #0b814e;
  padding-left: 10px;
}

.register button, .login button {
  width: 320px;
  height: 40px;
  background-color: #0b814e;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
