<template>
<img class="logo" alt="Vue logo" src="../assets/logo.png" />
<h1>Login</h1>
<div class="login">
    <input type="text" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <button @click="login">Login</button>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "SignUp",
    data() {
        return {
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
        async login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            console.log("Result:", result.data);
            if (result.status == 200 && result.data.length > 0) {
                // alert("User successfully registered!");
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({
                    name: "Home"
                });
            } else {
                alert("Some error occured!");
            }
        },
    },
};
</script>

<style>
</style>
