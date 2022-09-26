<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <router-link to="/">Form</router-link>
  <br />
  <router-link to="/home2">Inputs</router-link>
  <br />
  <router-link to="/helloworld">Advanced</router-link>
  <br />
  <router-link to="/dyrouting/qwerty">Dynamic Route</router-link>
  <br />
  <router-link to="/apicall">API Call</router-link>
  <br />
  <router-link to="/apiform">API Form</router-link>
  <br />
  <hr />

  <router-view />

</template>

<script>
export default {
    name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
