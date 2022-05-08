import React from "react";
import { IMovie } from "../../../models/Movie";
import MovieItem from '../MovieItem/MovieItem';

interface IProps{
  movies: IMovie[];
}

const MovieList : React.VFC<IProps> = ({ movies }) => {
  return (
    <div className="full-width" role="list">  {/*would be better to have an id of each movie to use as a key*/}
      { movies?.map(movie => <MovieItem key={movie.display_title+movie.publication_date} movie={movie} />)}
    </div>
  )
}

export default MovieList;
