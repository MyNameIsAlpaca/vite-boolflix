<script>
import { objectToString } from "@vue/shared";
import {store} from "../store.js";
export default {

  name: "AppElementTv",

  data() {

    return {
      store,
    }
  },
  props: {
    tvSeries: Object,
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
    <div class="cardTv">
      <div class="tvSeries-picture">
        <img :src="imageUrl(tvSeries)" alt="">
        <div class="tvSeries-info">
          <strong>{{ tvSeries.name }}</strong>
          <span>Titolo Originale: {{ tvSeries.original_name }}</span>
          <div class="info-lang">
            <span v-if="tvSeries.original_language == 'en' ">Lingua originale: <img class="flag" src="/usa.png" alt=""></span>
            <span v-else-if="tvSeries.original_language == 'ja'">Lingua originale: <img class="flag" src="/giappone.png" alt=""></span>
            <span v-else-if="tvSeries.original_language == 'te'">Lingua originale: <img class="flag" src="/germania.png" alt=""></span>
            <span v-else-if="tvSeries.original_language == 'fr'">Lingua originale: <img class="flag" src="/francia.png" alt=""></span>
            <span v-else-if="tvSeries.original_language == 'it'">Lingua originale: <img class="flag" src="/italia.png" alt=""></span>
            <span v-else-if="tvSeries.original_language == 'ko'">Lingua originale: <img class="flag" src="/korea.png" alt=""></span>
            <span v-else-if="tvSeries.original_language == 'cn'">Lingua originale: <img class="flag" src="/cina.png" alt=""></span>
            <span v-else>Lingua originale: <img class="flag" src="/altro.png" alt=""></span>
          </div>
          <span v-if="tvSeries.vote_average == 0">Voto: Non presente</span>
          <span v-else>Voto: {{ Math.floor(tvSeries.vote_average) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cardTv {
  .tvSeries-picture {
    width: 200px;
    height: 300px;
    position: relative;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .tvSeries-info {
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
    &:hover .tvSeries-info{
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