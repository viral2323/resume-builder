export const selectEducationById = (state, id) => {
    const education = state.form.education.find((edu) => edu.id === id);
    return education || null;
}

export const selectExperienceById = (state, id) => {
    const experience = state.form.experience.find((exp) => exp.id === id);
    return experience || null;
}

export const selectSkills = (state) => {
    return state.form.skills;
}

export const selectExperienceData = (state) => {
    return state.form.experience;
}

export const selectEducationData = (state) => {
    return state.form.education;
}