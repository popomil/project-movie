import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/moviesType"


// Higer order function
export const getAllMovie  = () =>{
    return async(dispatch) => {  // Middleware 
        const res = await axios.get(MovieApi); //url
        dispatch({type: ALLMOVIES   , data:res.data.results, pages: res.data.total_pages})
    }
}

export const getMovieSearch  = (word) =>{
    return async(dispatchh) => {  // Middleware 
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`); //url
        dispatchh({type: ALLMOVIES   , data:res.data.results, pages: res.data.total_pages})
    }
}

export const getPages  = (page) =>{
    return async(Dispatch) => {  // Middleware 
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar-US&page=${page}`); //url
        Dispatch({type: ALLMOVIES   , data:res.data.results, pages: res.data.total_pages})
    }
}

