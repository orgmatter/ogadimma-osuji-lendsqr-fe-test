import { UserDetailsProps } from "../types/dashboard";
const setUserDetails = (userDetails) => {

    const detailsToStr = JSON.stringify(userDetails);

    localStorage.setItem("user-details", detailsToStr);
}

const setStorageData = (param) => {
    localStorage.setItem(param.key, param.value);
}

const getStorageData = (key) => {

    if (!localStorage.getItem(key))
        return false
    else return localStorage.getItem(key);
}

const getUserDetails = () => {

    return JSON.parse(localStorage.getItem("user-details"));
}

const clearStorageData = (key = null) => {
    localStorage.removeItem(key);
}

export default function useStorage() {

    return {
        setUserDetails,
        getUserDetails,
        setStorageData,
        getStorageData,
        clearStorageData
    }
}