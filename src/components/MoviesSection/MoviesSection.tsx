import React from "react";
import { IMovie } from "../../models/Movie";
import MovieList from "./MovieList/MovieList";
import Spinner from "../Spinner/Spinner";
import HeaderSection from "./HeaderSeaction/HeaderSection";
import style from "./MoviesSection.module.scss"
import styleGeneral from "scss/style.module.scss";

interface IProps{
  movies: IMovie[];
  isLoading: boolean;
  hasMore: boolean;
}

const MoviesSection : React.VFC<IProps> = ({ movies, hasMore, isLoading }) => {

  const movieList = isLoading ? <Spinner /> : <MovieList movies={movies} />;
  return (
    <div className={`${style.movieSection} ${styleGeneral.flex} ${styleGeneral.fDirColumn}`}>
        <HeaderSection hasMore={hasMore} />
        <div className={`${styleGeneral.flex} ${styleGeneral.fJusCenter}`}>
            {movieList}
        </div>
    </div>
  )
}
export default MoviesSection;