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
      updateMovieList(){
        axios.get(this.store.APIbaseSearch + this.store.searchInput).then((response) => {

        this.store.moviesList = response.data.results

      });
      },
      backShowClass(index) {
        this.store.moviesList[index].addClass
      },
      updateTvList(){
        axios.get(this.store.APITvBaseSearch + this.store.searchInput).then((res) => {

        this.store.tvList = res.data.results

      });
      },
      backShowClass(index) {
        this.store.tvList[index].addClass
      },
    },
}
</script>

<template>
  <div>
    <input type="text" placeholder="Inserisci il nome di un film" v-model="this.store.searchInput">
    <button @click="updateTvList(), updateMovieList(), $emit('userSearch')">Cerca</button>
    <div class="movie-container">
      <AppElementTv :tvSeries="tvSeries" v-for="(tvSeries, index) in this.store.tvList"></AppElementTv>
      <AppElement :movie="movie" v-for="(movie, index) in this.store.moviesList"></AppElement>
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
