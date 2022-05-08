import React from "react";
import "./MovieDescription.scss"

interface IProps{
  description: string;
}

const MovieDescription : React.VFC<IProps> = ({ description }) => {
  return (
    <p className="movie-description">{description}</p>
  )
}

export default MovieDescription;
