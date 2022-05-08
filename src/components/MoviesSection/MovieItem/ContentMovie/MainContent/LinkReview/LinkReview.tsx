import React from "react";
import { ILink } from "../../../../../../models/Movie";
import "./LinkReview.scss";

interface IProps{
  link: ILink;
}

const LinkReview : React.VFC<IProps> = ({ link }) => {
  const {url, suggested_link_text} = link;
  return (
    <a className="subtitle" href={url} target="_blank" rel="noreferrer">{suggested_link_text}</a>
  )
}

export default LinkReview;
