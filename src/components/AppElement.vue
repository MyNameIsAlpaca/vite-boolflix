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
    },
  },
}
</script>

<template>
  <div>
    <div class="cardMovie">
      <div class="movie-picture">
        <img :src="imageUrl(movie)" alt="">
        <div class="movie-info">
          <strong>{{ movie.title }}</strong>
          <span>Titolo Originale: {{ movie.original_title }}</span>
          <div class="info-lang">
            <span v-if="movie.original_language == 'en' ">Lingua originale: <img class="flag" src="/usa.png" alt=""></span>
            <span v-else-if="movie.original_language == 'ja'">Lingua originale: <img class="flag" src="/giappone.png" alt=""></span>
            <span v-else-if="movie.original_language == 'te'">Lingua originale: <img class="flag" src="/germania.png" alt=""></span>
            <span v-else-if="movie.original_language == 'fr'">Lingua originale: <img class="flag" src="/francia.png" alt=""></span>
            <span v-else-if="movie.original_language == 'it'">Lingua originale: <img class="flag" src="/italia.png" alt=""></span>
            <span v-else-if="movie.original_language == 'ko'">Lingua originale: <img class="flag" src="/korea.png" alt=""></span>
            <span v-else-if="movie.original_language == 'cn'">Lingua originale: <img class="flag" src="/cina.png" alt=""></span>
            <span v-else>Lingua originale: <img class="flag" src="/altro.png" alt=""></span>
          </div>
          <span v-if="movie.vote_average == 0">Voto: Non presente</span>
          <span v-else>Voto: {{ Math.floor(movie.vote_average) }}</span>
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
      background-color: rgba(0, 0, 0, 0.801);
      display: none;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      .info-lang{
        span{
          display: flex;
          gap: 5px;
          .flag{
            width: 20px;
          }
        }
      }
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