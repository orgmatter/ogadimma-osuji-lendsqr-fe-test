import { combineReducers } from "redux";
import LoginReducer from "./auth/login-reducer";
import UsersReducer from "./users-reducer";

export const rootReducers = combineReducers({
    loginState: LoginReducer,
    usersState: UsersReducer
})