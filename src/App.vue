<template>
  <headerComponent @statusSearch="setParams"/>
  <MainComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
import {store} from './store.js';
  export default {
    name: 'App',
    components: {
      HeaderComponent,MainComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      setParams(){
        if(this.store.filterFilm){
          this.store.options.params.query = this.store.filterFilm
        }else{
          this.store.options.params.query=''
        }
        this.getMovies()
      },
      getMovies() {
        axios.get(this.store.apiUrl+this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.movies=res.data.results
          console.log(res.data.results);
        })
      },
      getSerieTv() {
       axios.get(this.store.apiUrl+this.store.endPoint.serieTv, this.store.options).then((res) => {
        this.store.series=res.data.results 
        console.log(res.data.results);
       })
     },
     
    },
  
    created(){
      // this.getMovies();
      // this.getSerieTv();
    }
  }
</script>

<style lang="scss" scoped>


</style>