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
}
</script>

<template>
  <div>
    <div class="cardMovie">
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
</template>

<style scoped lang="scss">
.cardMovie {
  .movie-info {
    display: flex;
    flex-direction: column;
    background-color: darkblue;
  }
}

</style>