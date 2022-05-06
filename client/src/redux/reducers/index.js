import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import profilesReducer from "./profilesReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  profiles: profilesReducer,
});
