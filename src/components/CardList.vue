<template>
    
    <div class="container">
        <h2>film</h2>
        <div class="row " >
            <div class="col" v-for="movie in store.movies">
                <CardComponent :img="store.imageUrl + movie.poster_path"  :title="movie.original_title" :secondTitle="movie.title" :language="movie.original_language" :vote="movie.vote_average"/>
            </div>
        </div>
    </div>

    <div class="container">
        <h2>serietv</h2>
        <div class="row" >
            <div class="col" v-for="serieTV in store.series">
                <CardComponent :img="store.imageUrl + serieTV.poster_path" :id="serieTV.id" :title="serieTV.original_name" :secondTitle="serieTV.name" :lenguages="serieTV.original_lenguages" :vote="serieTV.vote_average"/>
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

</style>