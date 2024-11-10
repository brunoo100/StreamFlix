import axios from "axios";



// base da url https://api.themoviedb.org/3/
// url da api /movie/now_playing?api_key=abb615b3dd7153f73c6d4ab36a574d7a&language=pt-br


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export  default api;


