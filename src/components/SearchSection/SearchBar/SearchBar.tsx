import React from "react";
import "./SearchBar.scss";

interface IProps{
  icon: {src: string, alt: string};
  placeholder: string;
  value: string;
  onChange: (keyword: string) => void;
  type: string;
}
const SearchBar : React.VFC<IProps> = ({ icon, placeholder, onChange, type, value }) => {
  return (
    <div className="search-bar-wrapper flex f-align-center f-justify-center" data-testid="search-bar">
      <img src={icon.src} alt={icon.alt} width="25" />
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
