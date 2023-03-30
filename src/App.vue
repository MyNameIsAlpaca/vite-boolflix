<script>

import {store} from "./store.js";

import axios from "axios";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppMain
  },

  methods: {
  },

}
</script>

<template>
  <AppMain></AppMain>
</template>

<style scoped>

</style>
