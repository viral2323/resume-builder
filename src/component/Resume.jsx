import React from "react";

export default function ViewResume(){

    return(
        <div className='form-wrapper d-flex flex-column justify-content-start align-items-center  border-danger w-100 h-100'>
            <p className='resume-title text-capitalize'>View Resume</p>
            <fieldset className='personal-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Personal Details</legend>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='m-0'>First Name</label>
                    <p className='m-0'>Viral</p>
                </div>
                <hr className='m-2'/>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='m-0'>First Name</label>
                    <p className='m-0'>Viral</p>
                </div>
                <hr className='m-2'/>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='m-0'>First Name</label>
                    <p className='m-0'>Viral</p>
                </div>
                <hr className='m-2'/>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='m-0'>First Name</label>
                    <p className='m-0'>Viral</p>
                </div>
                <hr className='m-2'/>
            </fieldset>
        </div>
    )
}