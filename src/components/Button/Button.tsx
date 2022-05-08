import React from "react";
import "./Button.scss";

interface IProps{
  type: string;
  value: string;
}
const Button : React.VFC<IProps> = ({ type, value }) => {
  return <input type={type} className="button" value={value} />
}

export default Button;
