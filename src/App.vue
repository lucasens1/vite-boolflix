<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './data/store.js';
import axios from "axios";

export default {
  components : {
        AppHeader,
        AppMain,
        AppFooter
      },
  data(){
    return{
      store,
    }
  },
  //All'avvio inizializzo la connessione all'API
  created(){
    this.getInitialized();
  },
  methods : {
    getInitialized(){
      console.log('Inizializzazione ... connessione con chiave API univoca');
      axios.get('https://api.themoviedb.org/3/search/movie', {
      params : {
        api_key: this.store.apiKey,
      }}).then((resp)=>{
      console.log(resp.data.results);
    });
    },
    /*
     * Informazioni : funzione che prende dall'API, le serie TV corrispondenti in parte o del tutto alla searchQuery e le assegna   all'tvArray 
     */
    getTvSeries(){
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params : {
          api_key : this.store.apiKey,
          query : this.store.searchQuery
        }
      }).then((resp) => {
        //console.log(resp.data.results);
        this.store.tvArray = resp.data.results;
        console.log(this.store.tvArray);
      });
    },
    /*
     * Informazioni : funzione che prende dall'API, i Film corrispondenti in parte o del tutto alla searchQuery e le assegna al moviesArray 
     */
    getMovies(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params : {
          api_key : this.store.apiKey,
          query : this.store.searchQuery
        }
      }).then((resp) => {
        //console.log(resp.data.results);
        this.store.moviesArray = resp.data.results;
        console.log(this.store.moviesArray);
      });
    },
    /**
     * Informazioni : funzione che stampa l'oggetto della ricerca in console, successivamente assegna i valori ai due array in Store
     */
    getResults(){
      console.log("Ho clickato questa stringa sotto è la this.store.searchQuery : ");
      console.log(this.store.searchQuery);
      //Assegno quindi i film e serie TV che corrispondono a quella searchQuery
      console.log("1 -> Serie TV" );
      this.getTvSeries();
      console.log("2 -> Film ");
      this.getMovies();
    },
  },
};
</script>

<template>
  <div class="container-fluid p-0">
    <AppHeader @searchGet="getResults" />
    <AppMain :filmArray="store.moviesArray" :seriesTvArray ="store.tvArray"/>
    <AppFooter />
    <!--ciao
    <span class="fa-solid fa-user"></span> -->
  </div>
</template>

<style scoped>
</style>
