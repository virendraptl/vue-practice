<template>
  <img class="logo" alt="Vue logo" src="../assets/logo.png" />
  <h1>SignUp</h1>
  <div class="register">
    <input type="text" placeholder="Enter name" v-model="name" />
    <input type="text" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <button @click="signUp">SignUp</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    let storedData = localStorage.getItem("user-info");
    if (storedData) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log("Result:", result.data);
      if (result.status == 201) {
        // alert("User successfully registered!");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      } else {
        alert("Some error occured!");
      }
    },
  },
};
</script>

<style>

</style>
