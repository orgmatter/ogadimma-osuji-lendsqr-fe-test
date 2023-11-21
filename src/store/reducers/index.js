import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import userDetailsReducer from "./user-details-reducer";
import usersReducer from "./users-reducer";

export const rootReducers = combineReducers({
    authState: authReducer,
    userDetailsState: userDetailsReducer,
    usersState: usersReducer
})