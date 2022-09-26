<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Home3 content="this is the data sent from parent" />
    <h1>Component Reuse</h1>
    <ul>
      <li v-for="item in users" :key="item.name">
        <Home4Reuse :data="item" :getData="getData" />
      </li>
    </ul>
  </div>
  <HtmlBind />
  <ChildToParent :data="users[0]" :getUser="getUserName" />
  <RefComp />
  <SimpleForm />
  <NonpropsData id="xyz" />
  <DynamicComp />
  <teleport to="#footer">
    <TeleportFooter />
  </teleport>
</template>

<script>
import Home3 from "./Home3.vue";
import Home4Reuse from "./Home4Reuse.vue";
import HtmlBind from "./htmlBind.vue";
import ChildToParent from "./ChildToParent.vue";
import RefComp from "./RefComp.vue";
import SimpleForm from "./SimpleForm.vue";
import NonpropsData from "./NonpropsData.vue";
import DynamicComp from "./DynamicComp.vue";
import TeleportFooter from "./TeleportFooter.vue";

export default {
  name: "HelloWorld",
  components: {
    Home3,
    Home4Reuse,
    HtmlBind,
    ChildToParent,
    RefComp,
    SimpleForm,
    NonpropsData,
    DynamicComp,
    TeleportFooter,
  },
  methods: {
    getData(name) {
      alert(name);
    },
    getUserName(name) {
      alert(name);
    },
  },
  data() {
    return {
      users: [
        { name: "Tony", email: "tony@em.in" },
        { name: "Bruce", email: "bruce@em.in" },
        { name: "Steve", email: "steve@em.in" },
        { name: "Paul", email: "paul@em.in" },
      ],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
