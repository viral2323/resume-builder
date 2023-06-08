// Action types
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_MOBILE_NUMBER = 'UPDATE_MOBILE_NUMBER';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';
export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';
export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';

// Action creators
export const updateFirstName = (firstName) => {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    };
};

export const updateLastName = (lastName) => {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    };
};

export const updateEmail = (email) => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    };
};

export const updateMobileNumber = (mobileNumber) => {
    return {
        type: UPDATE_MOBILE_NUMBER,
        payload: mobileNumber
    };
};

export const addEducation = (education) => {
    return {
        type: ADD_EDUCATION,
        payload: education
    };
};

export const updateEducation = (payload) => {
    return {
        type: UPDATE_EDUCATION,
        payload
    };
};

export const deleteEducation = (index) => {
    return {
        type: DELETE_EDUCATION,
        payload: index
    };
};

export const addExperience = (experience) => {
    return {
        type: ADD_EXPERIENCE,
        payload: experience
    };
};

export const updateExperience = (payload) => {
    return {
        type: UPDATE_EXPERIENCE,
        payload
    };
};

export const deleteExperience = (index) => {
    return {
        type: DELETE_EXPERIENCE,
        payload: index
    };
};

export const addSkill = (skill) => {
    return {
        type: ADD_SKILL,
        payload: skill
    };
};

export const deleteSkill = (skill) => {
    return {
        type: DELETE_SKILL,
        payload: skill
    };
};