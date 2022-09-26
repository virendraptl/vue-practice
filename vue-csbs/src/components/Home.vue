<template>
  <div class="page">
    <h1>Get input field value</h1>
    <input type="text" v-model="email" />
    <br />
    <br />
    <input type="password" v-model="password" />
    <br />
    <br />
    <button @click="getData()" type="button">Print Output</button>
    <br />
    <br />
  </div>
</template>
<script>
    export default{
        name: 'Home',
        data(){
            return{
                email:null,
                password:null
            }
        },
        methods:{
            getData(){
                console.log('Output:', this.email,this.password);
            }
        }
    }
</script>

<style>
.page {
  margin: 10px;
  border: 2px solid #41b885;
}
</style>
