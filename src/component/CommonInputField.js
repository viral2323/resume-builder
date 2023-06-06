import React from "react";


export default function Input(props){
    const {type, placeholder, value,changeValue, classes} = props;

    return(
        <>
            <input type={type}
                   placeholder={placeholder}
                   value={value}
                   onChange={changeValue}
                   className={`${classes}`}
            />
        </>
    )
}