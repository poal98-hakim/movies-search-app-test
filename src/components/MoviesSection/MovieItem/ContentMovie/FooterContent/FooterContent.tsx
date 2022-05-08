import React from "react";
import DateMovie from "./DateMovie/DateMovie";

interface IProps{
    date: string;
}

const FooterContent : React.VFC<IProps> = ({ date }) => {
  return (
    <footer>
        <DateMovie date={date} />
    </footer>
  )
}

export default FooterContent;
