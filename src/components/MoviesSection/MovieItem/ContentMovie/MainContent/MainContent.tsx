import React from "react";
import { IMovie } from "models/Movie";
import HeaderMovie from "./HeaderMovie/HeaderMovie";
import LinkReview from "./LinkReview/LinkReview";
import MovieDescription from "./MovieDescription/MovieDescription";

interface IProps{
  movie: IMovie;
}

const MainContent : React.VFC<IProps> = ({ movie }) => {
  const {display_title, mpaa_rating, summary_short, link} = movie;
  return (
    <div>
        <HeaderMovie title={display_title} rating={mpaa_rating} />
        <LinkReview link={link} />
        <MovieDescription description={summary_short} />
    </div>
  )
}

export default MainContent;
