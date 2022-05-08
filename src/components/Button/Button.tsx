import React from "react";
import style from "./Button.module.scss";

interface IProps{
  type: string;
  value: string;
}
const Button : React.VFC<IProps> = ({ type, value }) => {
  return <input type={type} className={style.button} value={value} />
}

export default Button;
