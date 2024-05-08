<script>
import {store} from '../data/store.js';

export default{
}
</script>

<template>
    <header class="container-fluid">
        <div class="container p-2 pt-4 d-flex justify-content-between align-items-center">
            <!-- LOGO -->
            <h1 class="fw-bold"> BOOLFLIX </h1>
            <!-- SEARCHBAR -->
            <div class="d-flex">
                <input type="text" placeholder="Cosa vuoi cercare?" class="p-1">
                <button class="btn btn-outline-danger p-1 ms-1"><span class="p-2">Cerca</span></button>
            </div>
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