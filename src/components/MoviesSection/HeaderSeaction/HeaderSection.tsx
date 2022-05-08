import React, { useContext } from "react";
import RightArrowIcon from "images/right-arrow.png";
import LeftArrowIcon from "images/left-arrow.png";
import MainContext from "contexts/MainContext";
import ImageButton from "./ImageButton/ImageButton";
import stylesGeneral from "scss/style.module.scss"

interface IProps{
  hasMore: boolean;
}

const HeaderSection : React.VFC<IProps> = ({ hasMore }) => {
  const {page, setPage} = useContext(MainContext);

  return (
    <div className={`${stylesGeneral.flex} ${stylesGeneral.fJusEnd}`}>
        <ImageButton 
            icon={{src: LeftArrowIcon, alt: "left-arrow"}} 
            onClick={() => setPage(page => page - 20)} 
            disabled={page ? false : true}
            />
        <ImageButton 
            icon={{src: RightArrowIcon, alt: "right-arrow" }} 
            onClick={() => setPage(page => page + 20)} 
            disabled={!hasMore}
            />
    </div>
  )
}
export default HeaderSection;