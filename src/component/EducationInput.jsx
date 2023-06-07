import React, {useState} from "react";
import Input from "./CommonInputField";


const EducationCommonBlock = (props) => {
    const [educationData, setEducationData] = useState({})
    const {changeValue, id} = props;
    const handleChangeValue = (e,id) => {
        const updateData = {...educationData,id: id, [e.target.name]: e.target.value}
        changeValue('ADD_EDUCATION',updateData)
    }
    return (
        <>
            <Input label="Institute Name" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={educationData?.instituteName} name='instituteName'/>
            <Input label="Completion year" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={educationData?.passingYear} name='passingYear'/>
            <Input label="Course Details" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={educationData?.course} name='course'/>
        </>
    )
}
export default function EducationBlock(props) {
    // stats
    const [educationData, setEducationData] = useState({})
    const [educationList, setEducationList] = useState(1)
    const {changeValue,data} = props;
    // handlers

    const handleChangeValue = (e,id) => {
        setEducationData({...educationData,id: id, [e.target.name]: e.target.value})
    }
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
                            <EducationCommonBlock key={index} id={0 + index} changeValue={changeValue} educationData={educationData}/>
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
