<script>
import AppElement from "./AppElement.vue";
import axios from "axios";
import {store} from "../store.js";
import AppElementTv from "./AppElementTv.vue";
export default {
  name: "AppMain",
    data() {
        return {
            store,
        };
    },

    components: { AppElement, AppElementTv },

    methods: {
      backShowClass(index) {
        this.store.moviesList[index].addClass
      },
      },
      backShowClass(index) {
        this.store.tvList[index].addClass
      },
    }
</script>

<template>
  <div>
    <div class="movie-container">
      <AppElementTv v-if="this.store.chooseSection[1].active == true" :tvSeries="tvSeries" v-for="(tvSeries, index) in this.store.tvList"></AppElementTv>
      <AppElement v-else-if="this.store.chooseSection[0].active == true" :movie="movie" v-for="(movie, index) in this.store.moviesList"></AppElement>
    </div>
  </div>
</template>

<style scoped lang="scss">
.movie-container{
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
}


</style>
