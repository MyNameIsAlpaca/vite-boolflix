<script>
import AppElement from "./AppElement.vue";
import axios from "axios";
import {store} from "../store.js";
export default {
  name: "AppMain",
    data() {
        return {
            store,
        };
    },

    components: { AppElement },

    methods: {
      updateMovieList(){
        axios.get(this.store.APIbaseSearch + this.store.searchInput).then((response) => {

        this.store.moviesList = response.data.results

        console.log(this.store.moviesList)

      });
      },
      backShowClass(index) {
        this.store.moviesList[index].addClass
      },
    },
}
</script>

<template>
  <div>
    <input type="text" placeholder="Inserisci il nome di un film" v-model="this.store.searchInput">
    <button @click="updateMovieList(), $emit('userSearch')">Cerca</button>
    <div class="movie-container">
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
