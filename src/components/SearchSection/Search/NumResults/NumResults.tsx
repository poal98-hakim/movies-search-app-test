import React from "react";
import style from "./NumResults.module.scss";

interface IProps{
    totalResults: number;
}
const NumResults : React.VFC<IProps> = ({totalResults}) => <span className={style.numResultsMovies}>{totalResults} results</span>

export default NumResults;
