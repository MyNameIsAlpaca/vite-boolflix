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
  <div class="containerAll">
    <div class="main">
      <AppMain></AppMain>
    </div>
  </div>
</template>

<style scoped lang="scss">
.containerAll{
max-width: 1400px;
margin: auto;
}

</style>
