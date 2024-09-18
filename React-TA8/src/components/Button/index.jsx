import React from "react";
import Styles from './index.module.css'

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

export default Button;