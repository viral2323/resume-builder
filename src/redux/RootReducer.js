import { combineReducers } from 'redux';
import formReducer from "./reducers/FormReducer";

export const rootReducer = combineReducers({
    form: formReducer,
});