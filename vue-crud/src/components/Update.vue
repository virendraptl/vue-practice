<template>
  <Header />
  <h3>Welcome to the Update Page!!!</h3>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Update",
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