<template>
  <div class="page">
    <h1>API Call</h1>
    <div class="flexshow" v-if="list.length > 0">
      <div class="card" v-for="item in list" :key="item.id">
        <img :src="item.avatar" alt="" />
        <h4>ID: {{ item.id }}</h4>
        <h4>Name: {{ item.first_name + " " + item.last_name }}</h4>
        <!-- <h4>Poto url: {{ item.avatar }}</h4> -->
        <h4>Email: {{ item.email }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "APICall",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get(
      "https://reqres.in/api/users?page=1&per_page=50"
    );
    this.list = result.data.data;
    console.log("Fetched data:", result.data.data);
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

.flexshow{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap ;
  justify-content: center;
  align-items: center;
}
</style>
