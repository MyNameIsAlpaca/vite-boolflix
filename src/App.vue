<script>

import {store} from "./store.js";

import axios from "axios";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppMain,
    AppHeader
},

  methods: {
  },

}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped>

</style>
