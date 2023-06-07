import React from 'react';
import Input from "./CommonInputField";
import EducationBlock from "./EducationInput";
import ExperienceBlock from "./ExperinceInput";
import SkillBlock from "./SkillInput";

export default function Form() {
    const handleChange = () => {

    }
    return (
        <div className='form-wrapper d-flex flex-column justify-content-start align-items-center  border-danger w-100 h-100'>
            <p className='resume-title text-capitalize'>Create Resume</p>
            <p></p>
            <fieldset className='personal-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Personal Details</legend>
                <div className='wrapper overflow-auto d-flex flex-wrap'>

                    <Input label='First Name' type='text' changeValue={handleChange}
                           placeholder='Enter your first name'/>

                    <Input label="Last Name" type='text' changeValue={handleChange} placeholder='Enter your last name'
                           value={''}/>

                    <Input label="Email Address" type='text' changeValue={handleChange}
                           placeholder='Enter your active email address'
                           value={''}/>
                    <Input label="Mobile Number" type='text' changeValue={handleChange}
                           placeholder='Enter your mobile number'
                           value={''}/>

                </div>
            </fieldset>

            <EducationBlock changeValue={handleChange}/>
            <ExperienceBlock changeValue={handleChange}/>
            <SkillBlock changeValue={handleChange}/>
            <div className='w-100'>
                <button className='submit-button w-100 mt-4 mb-4' type='button'>Submit</button>
            </div>
        </div>

    )
}
