<template>
    <div class="page">
        <h1 v-bind="$attrs">Non-props Data transfer</h1>
        <h3>Tony</h3>
        <h3>Bruce</h3>
        <h3>Steve</h3>
    </div>
</template>
<script>
export default {
    name: 'NonpropsData'
}
</script>
<style>
.page {
  margin: 10px;
  border: 2px solid #41b885;
}
</style>