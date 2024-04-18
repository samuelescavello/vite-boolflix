<template>
    
    <div class="container">
        <div v-if="store.movies.length > 0">
            <h2  class="text-uppercase">film</h2>
        </div>
        <div class="row " >
            <div class="col" v-for="movie in store.movies">
                <CardComponent :img="store.imageUrl + movie.poster_path"  :title="movie.original_title" :secondTitle="movie.title" :language="movie.original_language" :vote="movie.vote_average" :overview="movie.overview"/>
            </div>
        </div>
    </div>

    <div class="container">
        <div v-if="store.series.length > 0">
            <h2 class="text-uppercase">serietv</h2>
        </div>
        <div class="row" >
            <div class="col" v-for="serieTV in store.series">
                <CardComponent :img="store.imageUrl + serieTV.poster_path" :id="serieTV.id" :title="serieTV.original_name" :secondTitle="serieTV.name" :language="serieTV.original_language" :vote="serieTV.vote_average" :overview="serieTV.overview"/>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
        },

    }
</script>

<style lang="scss" scoped>
    h2{
        color: red;
    }
</style>