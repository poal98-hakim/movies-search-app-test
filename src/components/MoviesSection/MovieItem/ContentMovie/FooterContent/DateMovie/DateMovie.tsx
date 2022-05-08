import React from "react";
import style from "./DateMovie.module.scss"
import moment from "moment";

interface IProps{
  date: string;
}

const DateMovie : React.VFC<IProps> = ({ date }) => {
  return (
    <span className={style.dateMovie} data-testid="date-movie">{moment(date).format('LL')}</span>
  )
}

export default DateMovie;
