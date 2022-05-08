import React from "react";
import { IMultimedia } from "../../../../models/Movie";
import style from "./Poster.module.scss";
import styleGeneral from "scss/style.module.scss";

interface IProps{
  multimedia: IMultimedia;
}

const Poster : React.VFC<IProps> = ({ multimedia }) => {
  const { src } = multimedia || {};
  return (
    <img className={`${style.poster} ${styleGeneral.fullWidth}`} src={src} alt="poster" />
  )
}

export default Poster;
