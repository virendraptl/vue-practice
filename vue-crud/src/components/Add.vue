<template>
  <Header />
  <h3>Welcome to the Add Page!!!</h3>
  <form>
    <input v-model="form.name" type="text" placeholder="Enter Name" />
    <br />
    <br />
    <input @change="selectFile($event)" type="file" />
    <br /><br />
    <div v-if="previewUrl != ''">
      <img :src="previewUrl" alt="" />
    </div>
    <br><br>
    <button @click="addPost">Add Post</button>
  </form>
</template>
<script>
import Header from "./Header.vue";

export default {
  name: "Add",
  data() {
    return {
      previewUrl: "",
      form: {
        name: '',
        url: ''
      }
    };
  },
  methods: {
    selectFile(event) {
      console.log("converted:", event.base64);
      let fileData = event.target.files[0];
      if (fileData) {
        let reader = new FileReader();
        reader.readAsDataURL(fileData);
        reader.onload = (event) => {
          console.log(event.target.result);
          this.previewUrl = event.target.result;
        };
      }

      console.log("file type info:", fileData.type);

      if (
        fileData.type == "image/jpeg" ||
        fileData.type == "application/pdf" ||
        fileData.type == "image/png"
      ) {
        console.log("file upload done");
      } else {
        alert("file type should be image of pdf");
        return;
      }
    },
    addPost(){
      this.form.url = this.previewUrl;

    }
  },
  mounted() {
    let storedData = localStorage.getItem("user-info");
    if (!storedData) {
      this.$router.push({ name: "SignUp" });
    }
  },
  components: { Header },
};
</script>


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