import React, {useState} from "react";
import Input from "./CommonInputField";

const skill = [
    'React js', 'Next js','HTML',"CSS","Javascript","Aws","Digital Marketing","Node js","Mongodb","Nest Js","Express Js","Boostrap","Material UI"
]
export default function SkillBlock(props) {
    // stats
    const [skills, setSkills] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [filteredSkill, setFilteredSkill] = useState([])
    const {changeValue} = props;

    // handlers
    const handleChange = (e) => {
    setInputValue(e.target.value)
    }

    const handleAddSkills = (e) => {
        if(e.which === 13){
            const skillAlreadyIncluded = skills.includes(inputValue)
            if(skillAlreadyIncluded) return
            setSkills([...skills, inputValue])
            setInputValue('')
        }
    }

    const handleRemoveSkill = (skill, index) => {
       const updateSkills =  skills.filter((tag) => {
            return skill != tag;
        })

        setSkills([...updateSkills])
    }

    return (
        <>
            <fieldset className='education-block-wrapper w-100 p-2'>
                <legend className='w-auto'>Skill</legend>
                <div className='overflow-auto'>

                    <div className='skill-tag-wrapper'>
                        {
                            skills.map((skill, index) => {
                                return(
                                    <>
                                        <span key={index} className='tag'>{skill}<button className='remove-tag' onClick={() => handleRemoveSkill(skill,index)}>X</button></span>
                                    </>

                                )
                            })
                        }
                        <input type='text' onChange={handleChange} onKeyDown={handleAddSkills} value={inputValue}/>
                    </div>
                    <div>
                        {}
                    </div>
                </div>
            </fieldset>
        </>

    )
}