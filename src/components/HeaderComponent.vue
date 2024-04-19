<template>
    <header class="py-3 d-flex justify-content-between fixed-top ">
       
        <img src="../assets/img/Netflix_Logo.svg" alt="">

        <nav class="navbar">
            <div class="container-fluid">
                <div class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Search" aria-label="text" @keyup.enter="$emit('statusSearch')" v-model="store.filterFilm">
                    <button class="btn btn-outline-danger" type="submit" @click="$emit('statusSearch')">Search</button>
                </div>
            </div>
        </nav>
    
    </header>
</template>

<script>
import {store} from '../store.js';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
            }
        }
    }
    
</script>

<style lang="scss" scoped>
    header{
        background-color: black; 
    }

    img{
        width: 150px;
        padding-left: 20px;
    }
</style>