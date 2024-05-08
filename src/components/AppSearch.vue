<script>
import {store} from '../data/store.js';

export default{
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="d-flex">
        <!-- Input che assegna in maniera dinamico il valore alla searchQuery -->
        <input type="text" placeholder="Cosa vuoi cercare?" class="p-1" v-model="store.searchQuery">
        <!-- Button che invia la richiesta all'Header -->
        <button class="btn btn-outline-danger p-1 ms-1" @click="$emit('searchRequest')">
            <span class="p-2">Cerca</span>
        </button>
    </div>
</template>

<style>
</style>