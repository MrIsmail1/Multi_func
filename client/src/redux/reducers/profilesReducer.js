import { SET_PROFILE , GET_PROFILES } from './../types';
const initialState = {
    profiles : [],
    profile : {}
}
export default function ( state = initialState, action ) {
switch (action.type) {
    case SET_PROFILE:
        return ({
            ...state,
            profile : action.payload,
        })
        case GET_PROFILES:
        return ({
            ...state,
            profiles : action.payload,
        })

    default:
        return state;
}
}