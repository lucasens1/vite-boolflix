<script>
export default {
    props : {
        tvObject : Object,
    },
    computed : {
        tvTitle(){
            return this.tvObject.name;
        },
        originalTvTitle(){
            return this.tvObject.original_name;
        },
        originalTvLanguage(){
            return this.tvObject.original_language;
        },
        tvVote(){
            let vote = this.tvObject.vote_average;
            //Arrotondo per eccesso
            vote = Math.ceil(vote);
            //Trasformo in voto da 1 a 5
            let votoStars = Math.ceil(vote / 2); 
            return votoStars;
        },
        tvBanner(){
            return this.tvObject.poster_path;
        }
    }
}
</script>

<template>
    <div class="my_card border border-1 rounded-4 h-100 d-flex flex-column justify-content-between">
        <div class="front-card">
            <img :src="`https://image.tmdb.org/t/p/w342/${tvBanner}`" />
        </div>
        <div class="back-card overflow-auto">
            <p><strong>Titolo :</strong> {{ tvTitle }}</p>
            <p><strong>Titolo originale :</strong> {{ originalTvTitle }} </p>
            <p><strong>Voto :</strong> {{ tvVote }} </p>
            <p><strong>Lingua originale :</strong> {{ originalTvLanguage }} </p>
            <p><strong>Overview :</strong> {{this.tvObject.overview}} </p>
        </div>
    </div>
</template>

<style scoped>
.my_card{
    position : relative;
    height:100%;
}
.front-card{
    padding : 10px;
    img{
        max-width : 100%;
        height : 100%;
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