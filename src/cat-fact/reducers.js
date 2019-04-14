import { combineReducers } from 'redux';
import {CAT_FACT_CALL_SUCCESS, CAT_IMAGE_CALL_SUCCESS} from "./actions";

const initialState = {
    selectCatData: {
        fact: '',
        image: ''
    }
};

export function fetchCatData(state = initialState, action) {
    if(action && action.type) {
        switch (action.type) {
            case CAT_FACT_CALL_SUCCESS:
                return Object.assign(state, { fact: action.data });
            case CAT_IMAGE_CALL_SUCCESS:
                return Object.assign(state, { image: action.data });
            default:
                return state;
        }
    }

    return state;
}


const catApp = combineReducers({
    selectCatData: fetchCatData
});

export default catApp;
