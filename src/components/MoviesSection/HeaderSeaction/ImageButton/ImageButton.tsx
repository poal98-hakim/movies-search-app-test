import React from "react";
import style from "./ImageButton.module.scss"

interface IProps{
  icon: {src: string, alt: string};
  onClick: () => void;
  disabled: boolean;
}

const ImageButton : React.VFC<IProps> = ({ icon: {src, alt}, onClick, disabled }) => {
  return (
    <button className={style.imageButton} onClick={onClick} disabled={disabled}>
        <img 
            src={src} 
            alt={alt} 
            width="25" 
        />
    </button>
  )
}
export default ImageButton;