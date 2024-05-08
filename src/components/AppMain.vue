<script>
import MovieCard from './MovieCard.vue';
import TvCard from './TvCard.vue';
import {store} from '../data/store.js';
export default {
    props : {
        filmArray : Array,
        seriesTvArray : Array
    },
    components : {
        MovieCard,
        TvCard
    },
    data(){
        return {
            store
        }
    }
};
</script>

<template>
    <div class="container pt-5">
        <h2>Film trovati : {{ filmArray.length }}</h2>
        <div class="row row-cols-4">
            <div class="col pb-4" v-for="film in filmArray">
                <!-- Passo l'oggetto -->
                <MovieCard :movieObject="film" />
            </div>
        </div>
        <h2>Serie Tv trovate : {{ seriesTvArray.length }} </h2>
        <div class="row row-cols-4">
            <div class="col pb-4" v-for="tv in seriesTvArray">
                <!-- Passo l'oggetto -->
                <TvCard :tvObject="tv" />
            </div>
        </div>
    </div>
</template>

<style>
h2{
    color : white;
}
</style>