import React from "react";
import { IMovie } from "../../models/Movie";
import MovieList from "./MovieList/MovieList";
import "./MoviesSection.scss";
import Spinner from "../Spinner/Spinner";
import "./MoviesSection.scss"
import HeaderSection from "./HeaderSeaction/HeaderSection";

interface IProps{
  movies: IMovie[];
  isLoading: boolean;
  hasMore: boolean;
}

const MoviesSection : React.VFC<IProps> = ({ movies, hasMore, isLoading }) => {

  const movieList = isLoading ? <Spinner /> : <MovieList movies={movies} />;
  return (
    <div className="movie-section flex f-direction-column">
        <HeaderSection hasMore={hasMore} />
        <div className="flex f-justify-center">
            {movieList}
        </div>
    </div>
  )
}
export default MoviesSection;