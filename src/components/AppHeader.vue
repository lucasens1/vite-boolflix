<script>
import {store} from '../data/store.js';
import AppSearch from './AppSearch.vue';

export default{
    components : {
        AppSearch,
    },
    data(){
        return{}
    }
}
</script>

<template>
    <header class="container-fluid">
        <div class="container p-2 pt-4 d-flex justify-content-between align-items-center">
            <!-- LOGO -->
            <h1 class="fw-bold"> BOOLFLIX </h1>
            <!-- SEARCHBAR che da AppHeader manda la richiesta presa in searchBar all'App -->
            <AppSearch @searchRequest="$emit('searchGet')"/>
        </div>
    </header>
</template>

<style scoped>
h1{
    color : red;
}

header{
    height : 100px;
    background-color : black;
}
</style>