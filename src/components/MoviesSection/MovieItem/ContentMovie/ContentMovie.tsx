import React from "react";
import { IMovie } from "../../../../models/Movie";
import FooterContent from "./FooterContent/FooterContent";
import MainContent from "./MainContent/MainContent";
import styleGeneral from "scss/style.module.scss";

interface IProps{
  movie: IMovie;
}

const ContentMovie : React.VFC<IProps> = ({ movie }) => {
  const {publication_date} = movie;
  return (
    <section className={`${styleGeneral.flex} ${styleGeneral.fDirColumn} ${styleGeneral.fJusBetween} ${styleGeneral.fullHeight}`}>
        <MainContent movie={movie} />
        <FooterContent date={publication_date} />
    </section>
  )
}

export default ContentMovie;
