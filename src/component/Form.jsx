import React, {useState} from 'react';
import Input from "./CommonInputField";
import EducationBlock from "./EducationInput";
import ExperienceBlock from "./ExperinceInput";
import SkillBlock from "./SkillInput";
import {useDispatch, useSelector} from "react-redux";
import {updateFirstName} from "../redux/actions/FormAction";
import {createPortal} from "react-dom";
import Error from "./ErrorMessage";

export default function Form() {
    const resumeData = useSelector((state) => state.form)
    const dispatch = useDispatch()
    const [showRequiredMessage,setShowRequiredMessage] = useState(false)
    const {firstName, lastName, email, mobileNumber, education, experience, skills} = resumeData;

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch(updateFirstName({name: name, value: value}))

    }
    const submitResume = () => {
        const isAnyFieldBlank = Object.values(resumeData).some(value => {
            if (Array.isArray(value)) {
                if (value.length === 0) {
                    return true;
                }
                return value.some(item => Object.values(item).some(subValue => subValue === ''));
            }
            return value === '';
        });
        setShowRequiredMessage(isAnyFieldBlank)
    }

    const closeErrorModal = () => {
        setShowRequiredMessage(false)
    }

    return (
        <>
            {
                showRequiredMessage && createPortal(
                    <Error close={closeErrorModal}/>, document.body
                )
            }
        <form>
            <div
                className='form-wrapper d-flex flex-column justify-content-start align-items-center  border-danger w-100 h-100'>
                <p className='resume-title text-capitalize'>Create Resume</p>
                <p></p>
                <fieldset className='personal-block-wrapper w-100 p-2'>
                    <legend className='block-title w-auto'>Personal Details</legend>
                    <div className='wrapper overflow-auto d-flex flex-wrap'>

                        <Input label='First Name' type='text' changeValue={handleChange}
                               placeholder='Enter your first name' value={firstName || ''} name='firstName'/>

                        <Input label="Last Name" type='text' changeValue={handleChange}
                               placeholder='Enter your last name'
                               name='lastName' value={lastName || ''}/>

                        <Input label="Email Address" type='text' changeValue={handleChange}
                               placeholder='Enter your active email address'
                               name='email'
                               value={email || ''}/>
                        <Input label="Mobile Number" type='text' changeValue={handleChange}
                               placeholder='Enter your mobile number'
                               name='mobileNumber'
                               value={mobileNumber || ''}/>

                    </div>
                </fieldset>

                <EducationBlock changeValue={dispatch} data={education} />
                <ExperienceBlock changeValue={dispatch} data={experience} />
                <SkillBlock changeValue={dispatch} data={skills} />
                <div className='w-100'>
                    <button className='submit-button w-100 mt-4 mb-4' type='button' onClick={submitResume}>Submit</button>
                </div>
            </div>
        </form>
        </>
    )
}
