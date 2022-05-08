import React from "react";
import style from "./Spinner.module.scss";

const Spinner : React.VFC = () => <div className={style.loader} data-testid="loader"></div>;

export default Spinner;
