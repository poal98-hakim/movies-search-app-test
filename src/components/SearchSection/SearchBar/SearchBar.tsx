import React from "react";
import style from "./SearchBar.module.scss";
import styleGeneral from "scss/style.module.scss";

interface IProps{
  icon: {src: string, alt: string};
  placeholder: string;
  value: string;
  onChange: (keyword: string) => void;
  type: string;
}
const SearchBar : React.VFC<IProps> = ({ icon, placeholder, onChange, type, value }) => {
  return (
    <div className={`${style.searchBarWrapper} ${styleGeneral.flex} ${styleGeneral.fAliCenter} ${styleGeneral.fJusCenter}`} data-testid="search-bar">
      <img src={icon.src} alt={icon.alt} width="25" />
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
