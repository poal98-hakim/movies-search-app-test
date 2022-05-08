import React from "react";
import { IMovie } from "../../../models/Movie";
import Poster from "./Poster/Poster";
import ContentMovie from "./ContentMovie/ContentMovie";
import "./MovieItem.scss";

interface IProps{
  movie: IMovie;
}

const MovieItem : React.VFC<IProps> = ({ movie }) => {
  
  const {multimedia} = movie;

  return (
    <article className="movie-item-wrapper">
      <div className="left-cont">
        <Poster multimedia={multimedia} />
      </div>
      <div className="right-cont">
        <ContentMovie movie={movie} />
      </div>
    </article>
  )
}
export default MovieItem;

