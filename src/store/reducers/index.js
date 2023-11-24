import { combineReducers } from "redux";
import LoginReducer from "./auth/login-reducer";
import UserDetailsReducer from "./user-details-reducer";
import UsersReducer from "./users-reducer";

export const rootReducers = combineReducers({
    loginState: LoginReducer,
    userDetailsState: UserDetailsReducer,
    usersState: UsersReducer
})