import { UserDetailsProps } from "../types/dashboard";
const setUserDetails = (userDetails) => {

    const detailsToStr = JSON.stringify(userDetails);

    localStorage.setItem("user-details", detailsToStr);
}

const setStorageData = (param) => {
    if(param.action === "reset") {
        localStorage.setItem(param.key, param.value);
    }else if(param.action === "fetch_user") {
        localStorage.setItem(param.key, param.value);
    }else if(param.action === "filter") {
        return null
    }
}

const getStorageData = (key) => {

    if (!localStorage.getItem(key))
        return false
    else return localStorage.getItem(key);
}

const getUserDetails = () => {

    return JSON.parse(localStorage.getItem("user-details"));
}

export default function useStorage() {

    return {
        setUserDetails,
        getUserDetails,
        setStorageData,
        getStorageData
    }
}