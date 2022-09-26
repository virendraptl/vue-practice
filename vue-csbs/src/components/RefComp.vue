<template>
  <div class="page">
    <h1>Ref to handle dom elements</h1>
    <input type="text" ref="input">
    <button @click="useRef">Change this element</button>
  </div>
</template>
<script>
    export default{
        name: 'RefComp',
        methods:{
          useRef(){
            this.$refs.input.value='you clicked on a button';
            this.$refs.input.style.color='red';
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
