import React from "react";
import style from "./MovieDescription.module.scss";

interface IProps{
  description: string;
}

const MovieDescription : React.VFC<IProps> = ({ description }) => {
  return (
    <p className={style.movieDescription}>{description}</p>
  )
}

export default MovieDescription;
