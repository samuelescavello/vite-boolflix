<template>
    <main>
        <CardList/>
    </main>
</template>

<script>
import {store} from '../store.js';
import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    main{
        margin-top: 100px;
        
    }
</style>