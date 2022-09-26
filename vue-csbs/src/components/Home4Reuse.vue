<template>
  <div>
    <h3>{{ data.name }} | {{ data.email }}</h3>
    <button @click="getData(data.name)">Alert</button>
    <hr />
    <br />
  </div>
</template>
<script>
    export default{
        name:'Home4Reuse',
        props:{
          data:Object,
          getData:Function
        }
    }
</script>