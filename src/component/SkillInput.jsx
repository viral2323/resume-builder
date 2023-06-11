import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectSkills} from "../redux/selectores/FormSelectore";
import {addSkill, deleteSkill} from "../redux/actions/FormAction";
import {staticSkills} from "./enum";


export default function SkillBlock(props) {
    // stats
    const {changeValue} = props;
    const skill = useSelector((state) => selectSkills(state))

    const [skills, setSkills] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [filteredSkill, setFilteredSkill] = useState([])
    // handlers
    useEffect(() => {
        setSkills([...skill])
    }, [skill])
    useEffect(() => {
        filterSkill()
    }, [inputValue, skills])
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const filterSkill = () => {
        const findSkill = staticSkills.filter((skill) => {
            return inputValue && skill.toLowerCase().includes(inputValue.toLowerCase())
        })
        const filteredSkill = findSkill.filter((skill) => {
            return !skills.includes(skill)
        })
        setFilteredSkill([...filteredSkill])

    }

    const handleAddSkills = (e, field) => {
        if (field == 'input' && e.which === 13) {
            e.preventDefault()
            const isBlank = /^\s*$/.test(inputValue)
            if (isBlank) return
            const skillAlreadyIncluded = skills.includes(inputValue)
            if (skillAlreadyIncluded) return

            changeValue(addSkill(inputValue))
            setInputValue('')
        } else if (field !== 'input') {
            const skillAlreadyIncluded = skills.includes(field)
            if (skillAlreadyIncluded) return

            changeValue(addSkill(field))
        }
    }

    const handleRemoveSkill = (skill) => {
        changeValue(deleteSkill(skill))
        filterSkill()
    }

    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='block-title w-auto'>Skills</legend>
                <div className='overflow-auto'>

                    <div className='skill-tag-wrapper'>
                        {
                            skills.map((skill, index) => {
                                return (
                                    <>
                                        <span key={index} className='tag'>{skill}
                                            <button className='remove-tag' type='button'
                                                    onClick={() => handleRemoveSkill(skill, index)}>X</button></span>
                                    </>

                                )
                            })
                        }
                        <input type='text' className='skill-input' style={{width: skills.length > 0 ? '60%' : '100%'}}
                               onChange={handleChange} onKeyDown={(e) => handleAddSkills(e, 'input')} value={inputValue}
                               name='skills'/>
                    </div>
                    {filteredSkill.length > 0 && <div className='skill-search'>
                        {
                            filteredSkill.map((skill) => {
                                return (<div className='search-item' onClick={(e) => handleAddSkills(e, skill)}>
                                    <span>{skill}</span>
                                    <hr className='m-0'/>
                                </div>)
                            })
                        }
                    </div>}
                </div>
            </fieldset>
        </>

    )
}