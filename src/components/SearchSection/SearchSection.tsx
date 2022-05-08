import React, { useContext, useState } from "react";
import SearchIcon from "../../images/search-icon-yellow.png";
import KeyIcon from "../../images/key-icon.png";
import SearchBar from "./SearchBar/SearchBar";
import MainContext from "../../contexts/MainContext";
import Search from "./Search/Search";
import style from "./SearchSection.module.scss";
import styleGeneral from "scss/style.module.scss";

interface IProps{
  onSearch: (search: string, apiKey: string) => void;
  totalResults?: number;
  error: string;
}
const SearchSection : React.VFC<IProps> = ({ onSearch, totalResults, error }) => {
  const {search, apiKey, setSearch, setApiKey} = useContext(MainContext);
  const [isValidated, setIsValidated] = useState<boolean>(true);

  const validate = () => {
    if(!isValidated) {
      return <span className={style.errorValidation}>Please fill in all fields!</span>
    }
    if(error){
      return <span className={style.errorValidation}>{error}</span>
    }
    return null;
  }

  return (
    <form className={`${styleGeneral.flex} ${styleGeneral.fDirColumn} ${styleGeneral.fAliCenter}`} onSubmit={event => {
        event.preventDefault();
        if(!search || !apiKey){
            setIsValidated(false);
            return;
        } 
        setIsValidated(true);
        onSearch(search, apiKey);
    }}>
        <SearchBar 
          icon={{
            src: SearchIcon,
            alt: "icon-search"
          }} 
          placeholder="Search*" 
          type="text"
          value={search}
          onChange={setSearch}
        />
        <SearchBar 
          icon={{
            src: KeyIcon,
            alt: "icon-key"
          }} 
          placeholder="Api Key*" 
          type="text"
          value={apiKey}
          onChange={setApiKey}
        />
        <Search totalResults={totalResults || null} />
        {validate()}
      </form>
  );
}

export default SearchSection;
