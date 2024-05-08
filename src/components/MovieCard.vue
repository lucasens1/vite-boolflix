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
            let vote = this.movieObject.vote_average;
            //Arrotondo per eccesso
            vote = Math.ceil(vote);
            //Trasformo in voto da 1 a 5
            let votoStars = Math.ceil(vote / 2); 
            return votoStars;
        },
        movieBanner(){
            return this.movieObject.poster_path;
        }
    }
}
</script>

<template>
    <div class="my_card border border-1 p-4 rounded-4 h-100 d-flex flex-column justify-content-between">
        <div class="front-card">
            <img :src="`https://image.tmdb.org/t/p/w342/${movieBanner}`" />
        </div>
        <div class="back-card">
            <p><strong>Titolo :</strong> {{ movieTitle }}</p>
            <p><strong>Titolo originale :</strong> {{ originalMovieTitle }} </p>
            <p><strong>Voto :</strong> {{ movieVote }} </p>
            <p><strong>Lingua originale :</strong> {{originalMovieLanguage}} </p>
        </div>
    </div>
</template>

<style scoped>
.my_card{
    position : relative;
}
.front-card{
    padding : 10px;
    img{
        max-width : 100%;
    }
}
.back-card{
    display : none;
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    padding: 10px;
}
/*All'hover sulla card*/
.my_card:hover .front-card{
    display:none;
}
.my_card:hover .back-card{
    display:block;
}
</style>