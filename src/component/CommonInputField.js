import React from "react";


export default function Input(props){
    const {type, placeholder, value,changeValue, classes,label, name, checked} = props;

    return(
        <div className={`d-flex flex-column ${type == 'checkbox' ? '' : 'field-wrapper  mb-3'}`}>
            {type != 'checkbox' && <label className='custom-label'>{label}</label>}
            <input type={type}
                   placeholder={placeholder}
                   value={value}
                   onChange={changeValue}
                   className={`${classes} custom-input pl-2`}
                   name={name}
                   checked={checked}
            />
        </div>
    )
}
