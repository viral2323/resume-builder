import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editForm} from "../redux/actions/FormAction";
import {education, experience} from "./enum";

export default function ViewResume(){
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const resumeData = useSelector(state => state.form)

    const EditForm = () => {
        dispatch(editForm(true))
        navigate('/edit-resume')
    }
    return(
        <div className='form-wrapper d-flex flex-column justify-content-start align-items-center  border-danger w-100 h-100'>
            <p className='resume-title text-capitalize'>View Resume</p>
            <fieldset className='personal-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Personal Details</legend>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='view-label m-0'>First Name</label>
                    <p className='view-field-data m-0'>{resumeData.firstName}</p>
                </div>
                <hr className='m-2'/>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='view-label m-0'>Last Name</label>
                    <p className='view-field-data m-0'>{resumeData.lastName}</p>
                </div>
                <hr className='m-2'/>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='view-label m-0'>Email Address</label>
                    <p className='view-field-data m-0'>{resumeData.email}</p>
                </div>
                <hr className='m-2'/>
                <div className='view-field-wrapper d-flex align-items-center'>
                    <label className='view-label m-0'>Mobile Number</label>
                    <p className='view-field-data m-0'>{resumeData.mobileNumber}</p>
                </div>
            </fieldset>
            <fieldset className='personal-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Education Details</legend>
                {
                    resumeData.education.map((edu,index1,arr1) => {
                       return Object.keys(edu).map((key,index,arr) => {
                           if(key == 'id') return
                            return(
                                <>
                                <div className='view-field-wrapper d-flex align-items-center'>
                                    <label className='view-label m-0'>{education[key]}</label>
                                    <p className='view-field-data m-0'>{edu[key]}</p>
                                </div>
                                {arr.length - 1 != index ? <hr className='m-2'/> : arr1.length - 1 != index1 && <hr className='separate-item'/>}
                                </>
                            )
                        })
                    })
                }

            </fieldset>
            <fieldset className='personal-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Experience Details</legend>
                {
                    resumeData.experience.map((exp,index1,arr1) => {
                        return Object.keys(exp).map((key,index,arr) => {
                            if(key == 'id') return
                            return(
                                <div>
                                    <div className='view-field-wrapper d-flex align-items-center'>
                                        <label className='view-label m-0'>{experience[key]}</label>
                                        <p className='view-field-data m-0'>{key == 'isCurrentCompany' ? exp[key] ? 'Yes' : "No" : exp[key]}</p>
                                    </div>
                                    {arr.length - 1 != index ? <hr className='m-2'/> : arr1.length -1 != index1 &&  <hr className='separate-item'/>}
                                </div>
                            )
                        })
                    })
                }

            </fieldset>
            <fieldset className='personal-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Experience Details</legend>
                {
                    resumeData.skills.map((skill,index) => {
                        return(
                            <span key={index} className='tag'>{skill}</span>
                        )
                    })
                }

            </fieldset>
            <div className='w-100'>
                <button className='submit-button w-100 mt-4 mb-4' type='button' onClick={EditForm} >Edit Resume</button>
            </div>
        </div>
    )
}