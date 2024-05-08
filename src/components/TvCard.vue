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
            return this.tvObject.vote_average;
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