<template>
  <div class="page">
    <h1>Parent to Child Data Transfer</h1>
    <h3>message: {{content}}</h3>
  </div>
</template>
<script>
    export default{
        name: 'Home',
        props: {
          content:String
        }
    }
</script>

<style>
.page {
  margin: 10px;
  border: 2px solid #41b885;
}
</style>
