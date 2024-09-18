import React from "react";
import Styles from './index.module.css'

const Input = ({ value, onChange }) => {
    const handleInput = (event) => {
        onChange(event.target.value);
    }

    return (
        <input type="text" 
        value={value}
        onChange={handleInput}
        placeholder="Escribí tareas"
        />
    );
};

export default Input;
