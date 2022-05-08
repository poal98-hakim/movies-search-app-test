import React from "react";
import Button from "../../Button/Button";
import NumResults from "./NumResults/NumResults";

interface IProps{
  totalResults: number | null;
}
const Search : React.VFC<IProps> = ({ totalResults }) => {

  return (
    <div className="flex f-align-center">
        <Button type="submit" value="Search" />
        {totalResults ? <NumResults totalResults={totalResults} /> : null}
    </div>
  );
}

export default Search;
