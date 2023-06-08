import React, {useState} from "react";
import Input from "./CommonInputField";
import {addEducation, deleteEducation} from "../redux/actions/FormAction";


const EducationCommonBlock = (props) => {
    const [educationData, setEducationData] = useState({})
    const {changeValue, id} = props;
    const handleChangeValue = (e,id) => {
        const updateData = {...educationData,id: id, [e.target.name]: e.target.value}
        changeValue(addEducation(updateData))
        setEducationData(updateData)
    }
    return (
        <>
            <Input label="Institute Name" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={educationData?.instituteName || ""} name='instituteName'/>
            <Input label="Completion year" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={educationData?.passingYear || ""} name='passingYear'/>
            <Input label="Course Details" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={educationData?.course || ""} name='course'/>
        </>
    )
}
export default function EducationBlock(props) {
    // stats
    const [educationData, setEducationData] = useState({})
    const [educationList, setEducationList] = useState([1])
    const {changeValue,data} = props;
    // handlers
    const addEducationDetailBlock = () => {
        const nextNumber = educationList[educationList.length] + 1;
        setEducationList([...educationList, nextNumber]);
    }

    const deleteEducationBlock = (index) => {
        changeValue(deleteEducation(index))

    }

    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Education Details</legend>

                {educationList.map((item, index) => (

                    <>
                        <div className='wrapper overflow-auto d-flex flex-wrap'>
                            <EducationCommonBlock key={item} id={item} changeValue={changeValue} educationData={educationData}/>
                        </div>
                        <button className='custom-button' onClick={() => deleteEducationBlock(item)}>Delete</button>
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
