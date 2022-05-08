import React from "react";
import "./NumResults.scss";

interface IProps{
    totalResults: number;
}
const NumResults : React.VFC<IProps> = ({totalResults}) => <span className="num-results-movies">{totalResults} results</span>

export default NumResults;
