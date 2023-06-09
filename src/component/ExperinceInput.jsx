import React, {useState} from "react";
import Input from "./CommonInputField";
import {addEducation, addExperience, deleteEducation} from "../redux/actions/FormAction";
import {useSelector} from "react-redux";
import {selectExperienceById} from "../redux/selectores/FormSelectore";


const ExperienceCommonBlock = (props) => {
    const {changeValue, id} = props;
    const [experienceData, setExperienceData] = useState({})
    const data = useSelector((state) => selectExperienceById(state,id))
    const handleChangeValue = (e) => {
        let updateData;
        if(e.target.name == 'isCurrentCompany'){
            updateData = {...experienceData,id: id, [e.target.name]: e.target.checked}

        }else{
            updateData = {...experienceData,id: id, [e.target.name]: e.target.value}
        }
        changeValue(addExperience(updateData))
        setExperienceData(updateData)
    }
    return (
        <>
            <Input label="Company Name" type='text' changeValue={handleChangeValue} placeholder='Enter your company name'
                   value={data?.companyName || ''} name='companyName'/>
            <Input label="Experience" type='text' changeValue={handleChangeValue} placeholder='Enter your work experience'
                   value={data?.experience || ''} name='experience'/>
            <Input label="Current Designation" type='text' changeValue={handleChangeValue}
                   placeholder='Enter your institute name'
                   value={data?.designation ||''} name='designation'/>

            <div className='field-wrapper d-flex flex-row-reverse mb-3 justify-content-end align-items-end'>
                <div className='d-flex flex-row-reverse justify-content-end align-items-center'>
                <label className='custom-label pl-3 mb-0'>Currently you are working their?</label>
                <Input classes='custom-checkbox' type='checkbox' changeValue={handleChangeValue}
                       value={data?.isCurrentCompany ||''} name='isCurrentCompany'/>
                </div>
            </div>
        </>
    )
}
export default function ExperienceBlock(props) {
    // states
    const {changeValue} = props;
    const [experienceList, setExperienceList] = useState([1])

    // handlers

    const addMoreExperienceDetailsBlock = () => {
        const nextNumber = experienceList[experienceList.length - 1] ?? 0;
        setExperienceList([...experienceList, nextNumber + 1]);

    }

    const deleteEducationBlock = (index) => {
        changeValue(deleteEducation(index))
        const revisedList = experienceList.filter((item) => {
            return item != index
        })
        setExperienceList([...revisedList])
    }
    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Experience Details</legend>
                {experienceList.map((item) => (
                    <>
                        <div className='wrapper overflow-auto d-flex flex-wrap'>
                            <ExperienceCommonBlock key={item} id={item} changeValue={changeValue}/>
                        </div>
                        <button className='custom-button' onClick={() => deleteEducationBlock(item)}>Delete</button>
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
