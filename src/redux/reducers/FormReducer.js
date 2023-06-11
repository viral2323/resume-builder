import { v4 as uuidv4} from 'uuid'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    education: [
        {
            id: uuidv4(),
            instituteName: '',
            passingYear: '',
            course: '',
        }
    ],
    experience: [
        {
            id:uuidv4(),
            companyName: '',
            experience: '',
            designation: '',
            isCurrentCompany: false
        }
    ],
    skills: [],
    isEdit: false

}
const formReducer = (state = initialState, action) => {
    switch (action.type){
        case 'UPDATE_PERSONAL_DETAILS':
            return {
                ...state,
                [action.payload.name]: action.payload.value
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
                    edu.id === action.payload.id ? action.payload.education : edu
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
                    exp.id === action.payload.id ? action.payload.experience : exp
                )
            };
        case 'DELETE_EXPERIENCE':
            return {
                ...state,
                experience: state.experience.filter((exp, index) => exp.id !== action.payload)
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
        case 'EDIT_FORM':
            return {
                ...state,
                isEdit: action.payload
            }
        default:
            return state;
    }
}

export default formReducer;