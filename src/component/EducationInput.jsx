import React, {useState} from "react";
import Input from "./CommonInputField";


const EducationCommonBlock = (props) => {
    const {changeValue} = props;

    return (
        <>
            <Input label="Institute Name" type='text' changeValue={changeValue} placeholder='Enter your institute name'
                   value={''}/>
            <Input label="Completion year" type='text' changeValue={changeValue} placeholder='Enter your institute name'
                   value={''}/>
            <Input label="Course Details" type='text' changeValue={changeValue} placeholder='Enter your institute name'
                   value={''}/>
        </>
    )
}
export default function EducationBlock(props) {
    // stats
    const [educationList, setEducationList] = useState(1)
    const {changeValue} = props;

    // handlers

    const addEducationDetailBlock = () => {
        setEducationList(educationList + 1);
    }
    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Education Details</legend>

                {Array.from({length: educationList}).map((_, index) => (
                    <>
                        <div className='wrapper overflow-auto d-flex flex-wrap'>
                            <EducationCommonBlock key={index} changeValue={changeValue}/>
                        </div>
                        <hr/>
                    </>
                ))}

                <div className='pt-2 pb-2'>
                    <button className='custom-button' onClick={addEducationDetailBlock}>Add more Education Details
                    </button>
                </div>
            </fieldset>
        </>

    )
}
