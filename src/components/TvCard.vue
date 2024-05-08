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
        }
    }
}
</script>

<template>
    <div class="my_card border-0 p-4 rounded-4 h-100 d-flex flex-column justify-content-between">
        <p> {{ tvTitle }} </p>
        <p> {{ originalTvTitle }} </p>
        <p> {{ originalTvLanguage }} </p>
        <p> {{ tvVote }} </p>
    </div>
</template>

<style>
</style>