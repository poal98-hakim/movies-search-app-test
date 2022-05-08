import React from "react";
import Button from "../../Button/Button";
import NumResults from "./NumResults/NumResults";
import styleGeneral from "scss/style.module.scss";

interface IProps{
  totalResults: number | null;
}
const Search : React.VFC<IProps> = ({ totalResults }) => {

  return (
    <div className={`${styleGeneral.flex} ${styleGeneral.fAliCenter}`}>
        <Button type="submit" value="Search" />
        {totalResults ? <NumResults totalResults={totalResults} /> : null}
    </div>
  );
}

export default Search;
