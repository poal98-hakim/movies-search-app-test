import React from "react";
import "./ImageButton.scss"

interface IProps{
  icon: {src: string, alt: string};
  onClick: () => void;
  disabled: boolean;
}

const ImageButton : React.VFC<IProps> = ({ icon: {src, alt}, onClick, disabled }) => {
  return (
    <button className="image-button" onClick={onClick} disabled={disabled}>
        <img 
            src={src} 
            alt={alt} 
            width="25" 
        />
    </button>
  )
}
export default ImageButton;