<template>
  <Header />
  <h3>Hello {{ name }}, Welcome to the Home Page!!!</h3>
  <div class="card">
    <div v-for="post in posts" :key="post.id" >
      <img width="200" :src="post.url" alt="">
      <p>{{post.name}}</p>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      name: "",
      posts:[]
    };
  },
  async mounted() {
    let storedData = localStorage.getItem("user-info");
    this.name = JSON.parse(storedData).name;
    if (!storedData) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get('http://localhost:3000/post');
    console.log(result);
    this.posts = result.data
  },
  components: { Header },
};
</script>
<style>
.card{
  width: 200px;
  height: 240px;
  background-color: #cef0e1;
  margin: 10px;
}
</style>

<!-- 
     fileData: any;

  selectFile(event) {
    console.log('converted:',event.base64)
    this.fileData = event.target.files[0];
     if (this.fileData) {
      let reader = new FileReader();
      reader.readAsDataURL(this.fileData);
      reader.onload = (event) => {
        console.log(event.target.result)
      };
     }

    if (this.fileData.type == 'image/jpeg' || this.fileData.type == 'application/pdf') {

    } else {
      alert("file type should be image of pdf")
      return;
    }

  }
 -->