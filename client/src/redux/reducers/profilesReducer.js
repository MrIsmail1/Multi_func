import { SET_PROFILE, GET_PROFILES, DELETE_PROFILE } from "./../types";
const initialState = {
  profiles: [],
  profile: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    case DELETE_PROFILE:
      return {
          ...state,
          profiles: state.profiles.filter(p => p.id !== action.payload)
      };
    default:
      return state;
  }
}
