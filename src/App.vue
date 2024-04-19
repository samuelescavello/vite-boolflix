<template>
  <LoaderComponent/>
  <headerComponent @statusSearch="setParams"/>
  <MainComponent/>
</template>

<script>
import LoaderComponent from './components/LoaderComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
import {store} from './store.js';
  export default {
    name: 'App',
    components: {
      HeaderComponent,MainComponent,LoaderComponent
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
        this.getSerieTv()
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

     getPopularMovie(){
      axios.get(this.store.apiUrl+this.store.endPoint.popularMovie, this.store.options).then((res) => {
        this.store.popularMovies=res.data.results
      })
     },

     getPopularSerie(){
      axios.get(this.store.apiUrl+this.store.endPoint.popularSerieTv, this.store.options).then((res) => {
        this.store.popularSeries=res.data.results
      })
     }
     
    },
  
    created(){
      // this.getMovies();
      // this.getSerieTv();
      this.getPopularMovie()
      this.getPopularSerie()
    }
  }
</script>

<style lang="scss" scoped>


</style>