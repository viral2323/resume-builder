import React from "react";

export default function Error(props){
    setTimeout(() => {
        props.close()
    }, 2000)
    return(
        <div className='error-message'>
           <p style={{margin: 0}}>All Fields are required!</p>
           <button className='custom-button' onClick={props.close}>X</button>
        </div>
    )
}