const login = (params) => {
    localStorage.setItem("admin", JSON.stringify(params));
}

// localStorage.removeItem("admin")

const logout = (param) => {
    localStorage.removeItem(param);
}

const getAdmin = () => {
    const admin = localStorage.getItem("admin");
    return JSON.parse(admin);
}

const isLogin = () => {
    return localStorage.getItem("admin")? true:false
}

export default function useAuth() {

    return {
        login,
        logout,
        getAdmin,
        isLogin
    }
}