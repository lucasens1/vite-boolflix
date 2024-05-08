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
    this.getInitialized()
  },
  methods : {
    getInitialized(){
      axios.get('https://api.themoviedb.org/3/search/movie', {
      params : {
        api_key: this.store.apiKey,
      }}).then((resp)=>{
      console.log(resp.data.results);
    });
    }
  }
};
</script>

<template>
  <div class="container-fluid p-0">
    <AppHeader />
    <AppMain />
    <AppFooter />
    <!--ciao
    <span class="fa-solid fa-user"></span> -->
  </div>
</template>

<style scoped>
</style>
