import React, {useState} from "react";
import Input from "./CommonInputField";
import {addEducation, deleteEducation} from "../redux/actions/FormAction";
import {useSelector} from "react-redux";
import {selectEducationById} from "../redux/selectores/FormSelectore";



const EducationCommonBlock = (props) => {
    const {changeValue, id} = props;
    const [educationData, setEducationData] = useState({})
    // const data = useSelector((state) => selectEducationById(state,id))

    const handleChangeValue = (e,id) => {
        const updateData = {...educationData,id: id, [e.target.name]: e.target.value}
        changeValue(addEducation(updateData))
        setEducationData(updateData)
    }

    return (
        <>
            {/*<In
             value={data?.course || ""} name='course'/>*/}
        </>
    )
}
export default function EducationBlock(props) {
    // stats
    const {changeValue} = props;
    const [educationList, setEducationList] = useState([1])
    console.log('edu')
    // handlers
    const addEducationDetailBlock = () => {
        const nextNumber = educationList[educationList.length - 1] ?? 0;
        setEducationList([...educationList, nextNumber + 1]);
    }

    const deleteEducationBlock = (index) => {
        changeValue(deleteEducation(index))
        const revisedList = educationList.filter((item) => {
            return item != index
        })
        setEducationList([...revisedList])
    }

    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Education Details</legend>

                {educationList.map((item, index) => (

                    <>
                        <div className='wrapper overflow-auto d-flex flex-wrap'>
                            <EducationCommonBlock key={item} id={item} changeValue={changeValue}/>
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
