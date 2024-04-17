<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5" >
            <div class="col" v-for="movie in store.movies">
                <CardComponent :img="store.imageUrl + movie.poster_path" :id="movie.id" :title="movie.original_title" :secondTitle="movie.title" :lenguages="movie.original_lenguages" :vote="movie.vote_average"/>
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