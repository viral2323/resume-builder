const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    education: [],
    experience: [],
    skills: []

}
const formReducer = (state = initialState, action) => {
    switch (action.type){
        case 'UPDATE_FIRST_NAME':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case 'UPDATE_LAST_NAME':
            return {
                ...state,
                lastName: action.payload
            };
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: action.payload
            };
        case 'UPDATE_MOBILE_NUMBER':
            return {
                ...state,
                mobileNumber: action.payload
            };
        case 'ADD_EDUCATION':
            const filterData =  state.education.filter((item) => {
                return item.id != action.payload.id;
            });

            return {
                ...state,
                education: [...filterData, action.payload]
            };
        case 'UPDATE_EDUCATION':
            return {
                ...state,
                education: state.education.map((edu, index) =>
                    index === action.payload.index ? action.payload.education : edu
                )
            };
        case 'DELETE_EDUCATION':
            return {
                ...state,
                education: state.education.filter((edu, index) => edu.id !== action.payload)
            };
        case 'ADD_EXPERIENCE':
            const experienceData =  state.experience.filter((item) => {
                return item.id != action.payload.id;
            });
            return {
                ...state,
                experience: [...experienceData, action.payload]
            };
        case 'UPDATE_EXPERIENCE':
            return {
                ...state,
                experience: state.experience.map((exp, index) =>
                    index === action.payload.index ? action.payload.experience : exp
                )
            };
        case 'DELETE_EXPERIENCE':
            return {
                ...state,
                experience: state.experience.filter((exp, index) => index !== action.payload)
            };
        case 'ADD_SKILL':
            return {
                ...state,
                skills: [...state.skills, action.payload]
            };
        case 'DELETE_SKILL':
            return {
                ...state,
                skills: state.skills.filter(skill => skill !== action.payload)
            };
        default:
            return state;
    }
}

export default formReducer;