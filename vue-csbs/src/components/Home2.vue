<template>
  <div class="page">
    <h1>Checkbox and Radio Buttons</h1>
    <h3>Frameworks</h3>
    <label for="react">React</label>
    <input type="checkbox" value="react" id="react" v-model="technology" />
    <label for="angular">Angular</label>
    <input type="checkbox" value="angular" id="angular" v-model="technology" />
    <label for="vue">Vue</label>
    <input type="checkbox" value="vue" id="vue" v-model="technology" />
    <br /><br />
    <h3>Prog Languages</h3>
    <label for="python">Python</label>
    <input type="radio" value="Python" id="python" v-model="language" name="language" />
    <label for="java">Java</label>
    <input type="radio" value="Java" id="java" v-model="language" name="language" />
    <label for="Javascript">Javascript</label>
    <input type="radio" value="Javascript" id="Javascript" v-model="language" name="language" />
    <br /><br />

    <h4>Technologies: {{ technology }}</h4>
    <h4>Language: {{ language }}</h4>
  </div>
</template>
<script>
    export default{
        name: 'Home2',
        data(){
            return{
                technology:[],
                language: ''
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
