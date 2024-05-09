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
            },
            votoInStelle : 5
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
    <div class="my_card h-100 d-flex flex-column justify-content-between">
        <div class="front-card h-100 border border-1">
            <img :src="`https://image.tmdb.org/t/p/w342/${movieBanner}`" />
        </div>
        <div class="back-card overflow-auto border border-1">
            <p><strong>Titolo :</strong> {{ movieTitle }}</p>
            <p><strong>Titolo originale :</strong> {{originalMovieTitle}} </p>
            <!-- Inserire stelle -->
            <p><strong>Voto :</strong>
                <span v-for = "i in movieVote">
                    <i v-if="i <= movieVote" class="fa-solid fa-star"></i>
                </span>
            </p>
            <!-- Work in progress -->
            <p><strong>Lingua originale :</strong> {{originalMovieLanguage}} </p>
            <p><strong>Sinossi :</strong> {{this.movieObject.overview}} </p>
        </div>
    </div>
</template>

<style scoped>
.my_card{
    position : relative;
    height : 100%;
    min-height: 350px;
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
    background-color : black;
}
/*All'hover sulla card*/
.my_card:hover .front-card{
    display:none;
}
.my_card:hover .back-card{
    display:block;
}
i{
    color : yellow;
}
</style>