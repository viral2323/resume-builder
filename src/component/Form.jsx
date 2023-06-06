import React from 'react';
import Input from "./CommonInputField";
import EducationBlock from "./EducationInput";
import ExperienceBlock from "./ExperinceInput";
import SkillBlock from "./SkillInput";

export default function Form() {
    const handleChange = () => {

    }

    return (
        <div className='d-flex flex-column justify-content-start align-items-center p-4 border-danger w-100 h-100'>
            <p className='text-capitalize'>Create Resume</p>
            <p></p>
            <fieldset className='personal-block-wrapper w-100 p-2'>
                <legend className='w-auto'>Personal Details</legend>
                <div className='overflow-auto'>

                    <div className='d-flex flex-column mb-3'>
                        <label>First Name</label>
                        <Input type='text' changeValue={handleChange} placeholder='Enter your first name' value={''}/>
                    </div>
                    <div className='d-flex flex-column mb-3'>
                        <label>Last Name</label>
                        <Input type='text' changeValue={handleChange} placeholder='Enter your last name' value={''}/>
                    </div>
                    <div className='d-flex flex-column mb-3'>
                        <label>Email Address</label>
                        <Input type='text' changeValue={handleChange} placeholder='Enter your active email address'
                               value={''}/>
                    </div>
                    <div className='d-flex flex-column mb-3'>
                        <label>Mobile Number</label>
                        <Input type='text' changeValue={handleChange} placeholder='Enter your mobile number'
                               value={''}/>
                    </div>


                </div>
            </fieldset>
            <EducationBlock changeValue={handleChange}/>
            <ExperienceBlock changeValue={handleChange}/>
            <SkillBlock changeValue={handleChange}/>
        </div>

    )
}