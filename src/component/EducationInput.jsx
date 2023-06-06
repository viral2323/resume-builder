import React, {useState} from "react";
import Input from "./CommonInputField";


const EducationCommonBlock = (props) => {
    const {changeValue} = props;

    return(
        <>
            <div className='d-flex flex-column mb-3'>
                <label>Institute Name</label>
                <Input type='text' changeValue={changeValue} placeholder='Enter your institute name'
                       value={''}/>
            </div>
            <div className='d-flex flex-column mb-3'>
                <label>Completion year</label>
                <Input type='text' changeValue={changeValue} placeholder='Enter your institute name'
                       value={''}/>
            </div>

            <div className='d-flex flex-column mb-3'>
                <label>Course Details</label>
                <Input type='text' changeValue={changeValue} placeholder='Enter your institute name'
                       value={''}/>
            </div>
            <hr/>
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
                <legend className='w-auto'>Education Details</legend>
                <div className='overflow-auto'>

                    {Array.from({ length: educationList }).map((_, index) => (
                        <EducationCommonBlock key={index} changeValue={changeValue}/>
                    ))}
                    <div>
                        <button onClick={addEducationDetailBlock}>Add more Education Details</button>
                    </div>
                </div>
            </fieldset>
        </>

    )
}