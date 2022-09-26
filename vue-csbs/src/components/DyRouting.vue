<template>
<div class="page">
    <h1>Dynamic Routing</h1>
    <h4>Data from route: {{msg}}</h4>
</div>
</template>

<script>
import {useRoute} from 'vue-router'

export default {
    name: 'DyRouting',
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        const routeData = useRoute();
        console.log('Route data', routeData.params);
        this.msg = routeData.params.msg;
    },
}
</script>
