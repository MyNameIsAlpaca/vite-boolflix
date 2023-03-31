<script>
import axios from "axios";
import {store} from "../store.js";
export default {
  name: "AppHeader",
    data() {
        return {
            store,
        };
    }, 

    components: {  },

    methods: {
      updateMovieList(){
        axios.get(this.store.APIbaseSearch + this.store.searchInput).then((response) => {

        this.store.moviesList = response.data.results

        this.store.searchInput = ''

      });
      },
      updateTvList(){
        axios.get(this.store.APITvBaseSearch + this.store.searchInput).then((res) => {

        this.store.tvList = res.data.results

        this.store.searchInput = ''

      });
    },
    changeActiveSection(index){

      if(index == 0) {
        
        this.store.chooseSection[index].active = true;

        this.store.chooseSection[index + 1].active = false;

        this.store.chooseSection[index + 2].active = false;
      }else if (index == 1) {
        this.store.chooseSection[index].active = true;

        this.store.chooseSection[index + 1].active = false;

        this.store.chooseSection[index - 1].active = false;

      } else if (index == 2) {

        this.store.chooseSection[index].active = true;

        this.store.chooseSection[index - 1].active = false;

        this.store.chooseSection[index - 2].active = false;
      }

    },
}
}
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="category">
        <strong :class="section.active ? 'activeSection' : ''" @click="changeActiveSection(index)" v-for="(section , index) in this.store.chooseSection">
        {{section.name}}
        </strong>
      </div>
      <div class="logo-container">
        <img src="/Netflix.png" alt="logo netflix">
      </div>
      <div class="search-container">
        <input @keyup.enter="updateTvList(), updateMovieList(), $emit('userSearch')" type="text" placeholder="Cerca qualcosa..." v-model="this.store.searchInput">
        <button @click="updateTvList(), updateMovieList(), $emit('userSearch')">Cerca</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 80px;
  padding-bottom: 150px;
  padding-top: 30px;
  .header-container{
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .category{
      display: flex;
      gap: 20px;
      strong{
        cursor: pointer;
      }
      .activeSection{
        color: red;
      }
    }
  }
  .logo-container{
    height: 80px;
    display: flex;
    align-items: center;
    img{
      height: 80%;
    }
  }
  .search-container{
    display: flex;
    input{
      background-color: black;
      border: 0;
      font-size: 1.2em;
      padding: 0.5em;
      color: white;
      opacity: 0;
      border-radius: 10px 0px 0px 10px;
    }

    @keyframes open {
      0% {
		opacity: 0;
	}

	100% {
		opacity:1;
	}
    }
    button{
      font-size: 1.2em;
      padding: 0.5em;
      border: 0;
      border-radius: 0px 10px 10px 0;
    }
  }
  .search-container:hover input {
    animation: open 1s ;
    opacity: 1;
  }

  .search-container:not(:hover) input {
    animation: close 1s ;
    opacity: 0;
  }

  @keyframes close {
      100% {
		opacity: 0;
	}

	0% {
		opacity:1;
	}
}
}
</style>