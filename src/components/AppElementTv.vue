<script>
import axios from "axios";
import { objectToString } from "@vue/shared";
import {store} from "../store.js";
export default {

  name: "AppElementTv",

  data() {

    return {
      store,
      listCast: [],
      showCast: false,
      typeList: [],
    }
  },
  props: {
    tvSeries: Object,
  },
  methods: {
        createListCast() {

    this.listCast = []

    axios.get('https://api.themoviedb.org/3/tv/' + this.tvSeries.id + '/credits?api_key=eb4e7a09e599161c5a1e90c0010dd4bb&query').then((response) => {

      this.listCast = [response.data.cast[0].name, response.data.cast[1].name, response.data.cast[2].name, response.data.cast[3].name, response.data.cast[4].name]

    });
    },

    typeOfMovie(){
    this.typeList = []

    axios.get('https://api.themoviedb.org/3/tv/' + this.tvSeries.id + '?api_key=eb4e7a09e599161c5a1e90c0010dd4bb').then((response) => {

      this.typeList = [response.data.genres[0].name]
    });
    },

    movieId(){
    return this.movie.id
    },

    rankMovie(rank) {
      return Math.floor(rank)
    },

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
    <div class="cardTv" @mouseleave="this.showCast = false">
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
          <span v-else>
            <span v-if="rankMovie(tvSeries.vote_average) <= 2">
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="rankMovie(tvSeries.vote_average) <= 4">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="rankMovie(tvSeries.vote_average) <= 6">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="rankMovie(tvSeries.vote_average) <= 8">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else-if="rankMovie(tvSeries.vote_average) <= 10">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
          </span>
          <button class="more-info" @click="this.showCast = !this.showCast, createListCast(), typeOfMovie()">Mostra più informazioni</button>
          <div class="info" v-if="this.showCast">
            <span v-if="this.showCast" class="cast-info">
              <strong>Cast:</strong>
               <span v-for="cast in this.listCast">
                {{cast}}
               </span>
              </span>
              <strong>Genere:</strong>
              <span v-for="genres in this.typeList">
              {{ genres }}
              </span>
            <button class="more-info" @click="this.showCast = !this.showCast">Mostra meno informazioni</button>
          </div>
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
      .more-info{
        background-color: black;
        color: white;
        border: 1px solid white;
        width: 100%;
        padding: 10px 0px;
      }
      .info{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .cast-info{
          display: flex;
          flex-direction: column;
        }
      }
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