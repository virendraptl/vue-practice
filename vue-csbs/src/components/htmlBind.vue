<template>
<div class="page">
    <h1>HTML Binding</h1>
    <div v-html="tag1"></div>
    <div v-html="tag2"></div>
    <br>
    <hr>
    <h1>Class Binding</h1>
    <h3 :class="{green:colored, red: !colored}">For few classes</h3>
    <button @click="colored = !colored">Toggle Style</button>
    <h3 :class="applyStyle">For multiple classes</h3>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            tag1: '<h1>This is the title</h1>',
            tag2: '<h3>This is the content</h3>',
            colored:true,
        }
    },
    computed: {
        applyStyle(){
            return {
                green:true,
                red:true,
                bordered:true
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

.green{
    background-color: green;
}

.red{
    color: red;
}

.bordered{
    border: 5px solid yellow;
}
</style>
