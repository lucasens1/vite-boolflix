<script>
export default {
    props : {
        movieObject : Object,
    },
    data(){
        return{
            //Da sistemare concettualmente
            flagImages : {
                it : "../assets/ita.png",
                fr : "../assets/france.png",
                en : "../assets/en.png",
                jp : "../assets/jap.png",
                es : "../assets/usa.png",
            }
        }
    },
    computed : {
        movieTitle(){
            return this.movieObject.title;
        },
        originalMovieTitle(){
            return this.movieObject.original_title;
        },
        originalMovieLanguage(){
            let lang = this.movieObject.original_language;
            return lang;
        },
        movieVote(){
            //Da Aggiungere conversione in stelle
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
    <div class="my_card border border-1 rounded-4 h-100 d-flex flex-column justify-content-between">
        <div class="front-card">
            <img :src="`https://image.tmdb.org/t/p/w342/${movieBanner}`" />
        </div>
        <div class="back-card overflow-auto">
            <p><strong>Titolo :</strong> {{ movieTitle }}</p>
            <p><strong>Titolo originale :</strong> {{originalMovieTitle}} </p>
            <p><strong>Voto :</strong> {{ movieVote }} </p>
            <p><strong>Lingua originale :</strong> {{originalMovieLanguage}} </p>
            <p><strong>Sinossi :</strong> {{this.movieObject.overview}} </p>
        </div>
    </div>
</template>

<style scoped>
.my_card{
    position : relative;
    height : 100%;
}
.front-card{
    padding : 10px;
    img{
        max-width : 100%;
        height:100%;
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
    color : white;
}
/*All'hover sulla card*/
.my_card:hover .front-card{
    display:none;
}
.my_card:hover .back-card{
    display:block;
}
</style>