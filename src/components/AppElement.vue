<script>
import { objectToString } from "@vue/shared";
import {store} from "../store.js";
export default {

  name: "AppElement",

  data() {

    return {
      store,
    }
  },
  props: {
    movie: Object,
  },
  methods: {
    imageUrl(link) {
      if(link.poster_path == null){
        if(link.backdrop_path == null){
          return '/notfound.png'
        } else {
          return 'https://image.tmdb.org/t/p/w400/' + link.backdrop_path
        }
      } else{
        return 'https://image.tmdb.org/t/p/w400/' + link.poster_path
      }
    }
  },
}
</script>

<template>
  <div>
    <div class="cardMovie">
      <div class="movie-picture">
        <img :src="imageUrl(movie)" alt="">
        <div class="movie-info">
          <span>{{ movie.title }}</span>
          <span>Titolo Originale: {{ movie.original_title }}</span>
          <span v-if="movie.original_language == 'en' ">Lingua originale: Inglese</span>
          <span v-else-if="movie.original_language == 'ja'">Lingua originale: Giapponese</span>
          <span v-else-if="movie.original_language == 'te'">Lingua originale: Tedesco</span>
          <span v-else-if="movie.original_language == 'fr'">Lingua originale: Francese</span>
          <span v-else-if="movie.original_language == 'it'">Lingua originale: Italiano</span>
          <span v-else-if="movie.original_language == 'ko'">Lingua originale: Koreano</span>
          <span v-else-if="movie.original_language == 'cn'">Lingua originale: Cinese</span>
          <span>{{ movie.vote_average }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardMovie {
  .movie-picture {
    width: 200px;
    height: 300px;
    position: relative;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .movie-info {
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.377);
      display: none;
    }
    &:hover .movie-info{
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

</style>