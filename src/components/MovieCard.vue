<script>
export default {
    props : {
        movieObject : Object,
    },
    computed : {
        movieTitle(){
            return this.movieObject.title;
        },
        originalMovieTitle(){
            return this.movieObject.original_title;
        },
        originalMovieLanguage(){
            return this.movieObject.original_language;
        },
        movieVote(){
            return this.movieObject.vote_average;
        }
    }
}
</script>

<template>
    <div class="my_card border border-1 p-4 rounded-4 h-100 d-flex flex-column justify-content-between">
        <p> {{ movieTitle }} </p>
        <p> {{ originalMovieTitle }} </p>
        <p> {{ originalMovieLanguage }} </p>
        <p> {{ movieVote }} </p>
    </div>
</template>

<style>
</style>