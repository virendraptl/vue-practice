<template>
  <div class="page">
    <h1>Simple Form</h1>
    <form>
      <ul>
        <li v-for="value in error" :key="value">{{value}} is invalid</li>
      </ul>
      <br>
      <hr>
      <label for="">Email</label>
      <input type="text" placeholder="Enter email" v-model="form.email"/>
      <br />
      <br />
      <label for="">Password</label>
      <input type="password" placeholder="Enter password" v-model="form.password"/>
      <br /><br />
      <label for="">Country</label>
      <select v-model="form.country">
        <option value="India">India</option>
        <option value="USA" >USA</option>
        <option value="China" >China</option>
      </select>
      <br /><br />
      <h3>Job Requirement:</h3>
      <label for="">Remote</label>
      <input type="checkbox" value="Remote" v-model="form.job"/>
      <label for="">Hybrid</label>
      <input type="checkbox" value="Hybrid" v-model="form.job"/>
      <br /><br />
      <h3>Location:</h3>
      <label for="">Home</label>
      <input type="radio" name="form.job" value="Home" v-model="form.location"/>
      <label for="">Away</label>
      <input type="radio" name="form.job" value="Away" v-model="form.location"/>
      <br /><br />
      <button @click="printUser" type="button">Login</button>
      <br />
      {{form}}
    </form>
  </div>
</template>
<script>
    export default{
        name: 'Home',

            data() {
          return {
            form: {
              email: '',
              password: '',
              country: '',
              job:[],
              location:''
            },
            error:[]
          }
        },
        methods:{
          printUser(){
            this.error=[];
            for(const item in this.form){
              if(this.form[item] == '' || this.form[item].length == 0) this.error.push(item)
            }

            if(this.error.length == 0){
              alert('Form Submitted!!')
              console.log('Login Data: ', this.form);
            }
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
