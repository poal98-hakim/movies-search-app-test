import React from "react";
import "./HeaderMovie.scss";

interface IProps{
  title: string;
  rating: string;
}

const HeaderMovie : React.VFC<IProps> = ({ title, rating }) => {
  return (
    <header>
      <h1 className="movie-title">{title}</h1>
    </header>
  )
}

export default HeaderMovie;
