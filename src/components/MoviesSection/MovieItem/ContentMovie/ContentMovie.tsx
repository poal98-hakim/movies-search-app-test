import React from "react";
import { IMovie } from "../../../../models/Movie";
import FooterContent from "./FooterContent/FooterContent";
import MainContent from "./MainContent/MainContent";

interface IProps{
  movie: IMovie;
}

const ContentMovie : React.VFC<IProps> = ({ movie }) => {
  const {publication_date} = movie;
  return (
    <section className="flex f-direction-column f-justify-between full-height">
        <MainContent movie={movie} />
        <FooterContent date={publication_date} />
    </section>
  )
}

export default ContentMovie;
