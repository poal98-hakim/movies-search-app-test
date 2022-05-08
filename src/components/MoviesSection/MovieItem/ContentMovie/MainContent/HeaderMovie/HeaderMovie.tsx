import React from "react";
import style from "./HeaderMovie.module.scss";

interface IProps{
  title: string;
  rating: string;
}

const HeaderMovie : React.VFC<IProps> = ({ title, rating }) => {
  return (
    <header>
      <h1 className={style.movieTitle}>{title}</h1>
    </header>
  )
}

export default HeaderMovie;
