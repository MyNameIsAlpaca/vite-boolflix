
import {reactive} from "vue";

export const store = reactive({

  moviesList: [],

  tvList: [],

  searchInput: "",

  APIbaseSearch: 'https://api.themoviedb.org/3/search/movie?api_key=eb4e7a09e599161c5a1e90c0010dd4bb&query=',

  APITvBaseSearch: 'https://api.themoviedb.org/3/search/tv?api_key=eb4e7a09e599161c5a1e90c0010dd4bb&query=',

  mostWatch: true,

  APIfilteredSearch: '',

  chooseSection: [
    {
      name: 'Film',
      active: true,
    },
    {
      name: 'Serie TV',
      active: false,
    },
    {
      name: 'La tua lista',
      active: false,
    }
   ],

   activeSectionIndex: 0,

});