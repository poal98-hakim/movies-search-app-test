import { apiGet } from "./utils/api"
import { IApiMovies } from "../models/Movie";

function getMovieReviews(apiKey: string, params: {query: string, offset?: number}, always: () => void){
    return apiGet<IApiMovies>("reviews/search.json", apiKey, params, always);
}

const MoviesAPI = {
    getMovieReviews
}

export default MoviesAPI;