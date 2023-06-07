import React, {useState} from "react";
import Input from "./CommonInputField";


const ExperienceCommonBlock = (props) => {
    const {changeValue} = props;
    return (
        <>
            <Input label="Company Name" type='text' changeValue={changeValue} placeholder='Enter your company name'
                   value={''}/>
            <Input label="Experience" type='text' changeValue={changeValue} placeholder='Enter your work experience'
                   value={''}/>
            <Input label="Current Designation" type='text' changeValue={changeValue}
                   placeholder='Enter your institute name'
                   value={''}/>

            <div className='field-wrapper d-flex flex-row-reverse mb-3 justify-content-end align-items-end'>
                <div className='d-flex flex-row-reverse justify-content-end align-items-center'>
                <label className='custom-label pl-3 mb-0'>Currently you are working their?</label>
                <Input classes='custom-checkbox' type='checkbox' changeValue={changeValue}
                       value={''}/>
                </div>
            </div>
        </>
    )
}
export default function ExperienceBlock(props) {
    // states
    const [experienceList, setExperienceList] = useState(1)
    const {changeValue} = props;

    // handlers

    const addMoreExperienceDetailsBlock = () => {
        setExperienceList(experienceList + 1)
    }

    const removeExperienceDetails = () => {
        setExperienceList(experienceList - 1)
    }
    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Experience Details</legend>
                {Array.from({length: experienceList}).map((_, index) => (
                    <>
                        <div className='wrapper overflow-auto d-flex flex-wrap'>
                            <ExperienceCommonBlock key={index} changeValue={changeValue}/>
                        </div>
                        <hr/>
                    </>
                ))}
                <div className='pt-2 pb-2'>
                    <button className='custom-button' onClick={addMoreExperienceDetailsBlock}>Add more Experience
                        Details
                    </button>
                </div>
            </fieldset>
        </>

    )
}
