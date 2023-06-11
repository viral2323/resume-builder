import React from "react";
import Input from "./CommonInputField";
import {addEducation, deleteEducation, updateEducation} from "../redux/actions/FormAction";
import {useSelector} from "react-redux";
import {selectEducationById, selectEducationData} from "../redux/selectores/FormSelectore";
import {v4 as uuidv4} from 'uuid';

const EducationCommonBlock = (props) => {
    const {changeValue, id} = props;
    const data = useSelector((state) => selectEducationById(state,id))

    const handleChangeValue = (e,id) => {
        const updateData = {...data, [e.target.name]: e.target.value}
        changeValue(updateEducation({id: data.id,education: updateData}))
    }

    return (
        <>
            <Input label="Institute Name" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={data?.instituteName || ""} name='instituteName' />
            <Input label="Completion year" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={data?.passingYear || ""} name='passingYear' />
            <Input label="Course Details" type='text' changeValue={(e) => handleChangeValue(e,id)} placeholder='Enter your institute name'
                   value={data?.course || ""} name='course' />
        </>
    )
}
export default function EducationBlock(props) {

    // stats
    const {changeValue} = props;
    const education = useSelector(state => selectEducationData(state))

    // handlers
    const addEducationDetailBlock = () => {
        changeValue(addEducation({id: uuidv4(),instituteName:'',passingYear: '',course: ''}))
    }

    const deleteEducationBlock = (index) => {
        changeValue(deleteEducation(index))
    }

    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Education Details</legend>

                {education.map((item, index) => (

                    <>
                        <div className='wrapper overflow-auto d-flex flex-wrap'>
                            <EducationCommonBlock key={item.id} id={item.id} changeValue={changeValue}/>
                        </div>
                        <button className='custom-button' type='button' onClick={() => deleteEducationBlock(item.id)}>Delete</button>
                        <hr/>
                    </>
                ))}

                <div className='pt-2 pb-2'>
                    <button type='button' className='custom-button' onClick={addEducationDetailBlock}>Add more Education Details
                    </button>
                </div>
            </fieldset>
        </>

    )
}
