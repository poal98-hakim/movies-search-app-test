import React from "react";
import { IMovie } from "../../../models/Movie";
import Poster from "./Poster/Poster";
import ContentMovie from "./ContentMovie/ContentMovie";
import style from "./MovieItem.module.scss";

interface IProps{
  movie: IMovie;
}

const MovieItem : React.VFC<IProps> = ({ movie }) => {
  
  const {multimedia} = movie;

  return (
    <article className={style.movieItemWrapper}>
      <div className={style.leftCont}>
        <Poster multimedia={multimedia} />
      </div>
      <div className={style.rightCont}>
        <ContentMovie movie={movie} />
      </div>
    </article>
  )
}
export default MovieItem;

