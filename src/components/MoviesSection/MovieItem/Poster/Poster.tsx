import React from "react";
import { IMultimedia } from "../../../../models/Movie";
import "./Poster.scss";

interface IProps{
  multimedia: IMultimedia;
}

const Poster : React.VFC<IProps> = ({ multimedia }) => {
  const { src } = multimedia || {};
  return (
    <img className="poster full-width" src={src} alt="poster" />
  )
}

export default Poster;
