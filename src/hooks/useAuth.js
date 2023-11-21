const login = (params) => {
    localStorage.setItem("user", JSON.stringify(params));
}

const logout = (param) => {
    localStorage.removeItem(param);
}

const getUser = () => {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
}

const isLogin = () => {
    return localStorage.getItem("user")? true:false
}

export default function useAuth() {

    return {
        login,
        logout,
        getUser,
        isLogin
    }
}