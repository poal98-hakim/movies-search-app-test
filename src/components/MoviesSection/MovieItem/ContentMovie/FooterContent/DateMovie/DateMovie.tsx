import React from "react";
import "./DateMovie.scss"
import moment from "moment";

interface IProps{
  date: string;
}

const DateMovie : React.VFC<IProps> = ({ date }) => {
  return (
    <span className="date-movie" data-testid="date-movie">{moment(date).format('LL')}</span>
  )
}

export default DateMovie;
