import React, {useState} from "react";
import Input from "./CommonInputField";


const ExperienceCommonBlock = (props) => {
    const {changeValue} = props;
    return (
        <>
            <div className='d-flex flex-column mb-3'>
                <label>Company Name</label>
                <Input type='text' changeValue={changeValue} placeholder='Enter your company name'
                       value={''}/>
            </div>
            <div className='d-flex flex-column mb-3'>
                <label>Experience</label>
                <Input type='text' changeValue={changeValue} placeholder='Enter your work experience'
                       value={''}/>
            </div>

            <div className='d-flex flex-column mb-3'>
                <label>Current Designation</label>
                <Input type='text' changeValue={changeValue} placeholder='Enter your institute name'
                       value={''}/>
            </div>

            <div className='d-flex flex-row-reverse mb-3 justify-content-end align-items-center'>
                <label className='pl-2 mb-0'>Currently you are working their?</label>
                <Input classes='custom-checkbox w-auto' type='checkbox' changeValue={changeValue}
                       value={''}/>
            </div>
            <hr/>
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
                <legend className='w-auto'>Experience Details</legend>
                <div className='overflow-auto'>
                    {Array.from({ length: experienceList }).map((_, index) => (
                        <ExperienceCommonBlock key={index} changeValue={changeValue}/>
                    ))}
                    <div>
                        <button onClick={addMoreExperienceDetailsBlock}>Add more Experience Details</button>
                    </div>
                </div>
            </fieldset>
        </>

    )
}