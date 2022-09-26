<template>
  <div class="page">
    <h1>Dynamic Components</h1>
    <button @click="tab = 'DyComp1'">Load Comp 1</button>
    <button @click="tab = 'DyComp2'">Load Comp 2</button>
    <button @click="tab = 'DyComp3'">Load Comp 3</button>
    <component :is="tab"></component>
  </div>
</template>

<script>
import DyComp1 from "./DynamicComponents/DyComp1.vue";
import DyComp2 from "./DynamicComponents/DyComp2.vue";
import DyComp3 from "./DynamicComponents/DyComp3.vue";
export default {
  name: "DynamicComp",
  components: { DyComp1, DyComp2, DyComp3 },
  data() {
    return {
      tab: "DyComp1",
    };
  },
};
</script>

<style>
.page {
  margin: 10px;
  border: 2px solid #41b885;
}
</style>