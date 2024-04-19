import {reactive} from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint:{
        movie:'search/movie',
        serieTv: 'search/tv',
        popularMovie: 'movie/popular',
        popularSerieTv: 'tv/popular'
        
    },
    options:{
        params:{
            api_key: 'edbb48568da179f473b1480294ce4f47',
            query:''
        }
    },
    movies: [],
    series: [],
    popularMovies: [],
    popularSeries: [],
    imageUrl: 'http://image.tmdb.org/t/p/original',
    filterFilm:'',
    isloaded : true
});