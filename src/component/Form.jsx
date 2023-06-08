import React from 'react';
import Input from "./CommonInputField";
import EducationBlock from "./EducationInput";
import ExperienceBlock from "./ExperinceInput";
import SkillBlock from "./SkillInput";
import {useDispatch, useSelector} from "react-redux";

export default function Form() {
    const resumeData = useSelector((state) => state.form)
    const dispatch = useDispatch()
    const {firstName, lastName, email, mobileNumber, education, experience,skills} = resumeData;
    console.log('data',resumeData)
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
                           placeholder='Enter your first name' value={firstName}/>

                    <Input label="Last Name" type='text' changeValue={handleChange} placeholder='Enter your last name'
                           value={lastName}/>

                    <Input label="Email Address" type='text' changeValue={handleChange}
                           placeholder='Enter your active email address'
                           value={email}/>
                    <Input label="Mobile Number" type='text' changeValue={handleChange}
                           placeholder='Enter your mobile number'
                           value={mobileNumber}/>

                </div>
            </fieldset>

            <EducationBlock changeValue={dispatch} data={education}/>
            <ExperienceBlock changeValue={dispatch} data={experience}/>
            <SkillBlock changeValue={dispatch} data={skills}/>
            <div className='w-100'>
                <button className='submit-button w-100 mt-4 mb-4' type='button'>Submit</button>
            </div>
        </div>

    )
}
