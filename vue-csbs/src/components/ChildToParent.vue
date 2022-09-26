<template>
  <div class="page">
    <h1>Child To Parent Data Transfer</h1>
    <h3>Name: {{ name}}</h3>
    <button @click="getUser(name)">Alert name</button>
  </div>
</template>
<script>
  export default {
    name: 'ChildToParent',
    data(){
      return {
      name: 'This is a data in child component'
      }
    },
    props: {
      getUser:Function
    }
  }
</script>

<style>
.page {
  margin: 10px;
  border: 2px solid #41b885;
}
</style>