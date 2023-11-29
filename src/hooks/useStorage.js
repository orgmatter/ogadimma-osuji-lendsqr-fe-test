import { UserDetailsProps } from "../types/dashboard";
const setUserDetails = (userDetails) => {

    const detailsToStr = JSON.stringify(userDetails);

    localStorage.setItem("user-details", detailsToStr);
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
        getUserDetails
    }
}