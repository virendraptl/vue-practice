<template>
<div class="page">
    <h1>API Post using Form</h1>
    <!-- <div class="flexshow" v-if="list.length > 0">
      <div class="card" v-for="item in list" :key="item.id">
        <img :src="item.avatar" alt="" />
        <h4>ID: {{ item.id }}</h4>
        <h4>Name: {{ item.first_name + " " + item.last_name }}</h4>
        <h4>Email: {{ item.email }}</h4>
      </div>
    </div> -->
    <input type="email" name="email" placeholder="Enter email" v-model="email" />
    <br /><br />
    <input type="password" name="password" placeholder="Enter password" v-model="password" />
    <br /><br />
    <button @click="getUser">Add User</button>
    <br /><br />
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "APIForm",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async getUser() {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                password: this.password,
            });
            console.log('Result:', result);
        },
    },
};
</script>

<style>
.page {
    margin: 10px;
    border: 2px solid #41b885;
}

.card {
    width: 300px;
    height: auto;
    margin: 20px;
    padding: 10px;
    border: 1px solid blue;
}

.flexshow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
