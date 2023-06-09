import React from "react";
import Input from "./CommonInputField";
import {addExperience, deleteExperience, updateExperience} from "../redux/actions/FormAction";
import {useSelector} from "react-redux";
import {selectExperienceById, selectExperienceData} from "../redux/selectores/FormSelectore";
import {v4 as uuidv4} from 'uuid';


const ExperienceCommonBlock = (props) => {
    const {changeValue, id} = props;
    const data = useSelector((state) => selectExperienceById(state,id))
    const handleChangeValue = (e) => {
        let updateData;

        if(e.target.name == 'isCurrentCompany'){
            updateData = {...data, [e.target.name]: e.target.checked}

        }else{
            updateData = {...data, [e.target.name]: e.target.value}
        }

        changeValue(updateExperience({id: data.id,experience:updateData }))
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
                       checked={data?.isCurrentCompany ||''} name='isCurrentCompany'/>
                </div>
            </div>
        </>
    )
}
export default function ExperienceBlock(props) {

    // states
    const {changeValue} = props;
    const experience = useSelector(state => selectExperienceData(state))

    // handlers
    const addMoreExperienceDetailsBlock = () => {
        changeValue(addExperience({id: uuidv4(), companyName: '',experience: '', designation: '', isCurrentCompany: false}))
    }

    const deleteEducationBlock = (index) => {
        changeValue(deleteExperience(index))
    }

    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Experience Details</legend>
                {experience.map((exp) => (
                    <>
                        <div className='wrapper overflow-auto d-flex flex-wrap'>
                            <ExperienceCommonBlock key={exp.id} id={exp.id} changeValue={changeValue}/>
                        </div>
                        <button className='custom-button' type='button' onClick={() => deleteEducationBlock(exp.id)}>Delete</button>
                        <hr/>
                    </>
                ))}
                <div className='pt-2 pb-2'>
                    <button className='custom-button' type='button' onClick={addMoreExperienceDetailsBlock}>Add more Experience
                        Details
                    </button>
                </div>
            </fieldset>
        </>

    )
}
