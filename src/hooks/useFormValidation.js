export const useFormValidation = () => {

    const isLoginFormValid = (params) => {

        const [{email}, {password}] = params;

        if((email.length !== 0) && (password.length !== 0) && (isEmailValid(email) === true)) {
            return true
        }else {
            return false
        }
    }

    const getInvalidField = (params) => {
        if(!isLoginFormValid(params)) {

            const errorStack = [];

            for(var i = 0; i < params.length; ++i) {
                if(params[i][params[i].name] === ""){
                    errorStack.push({
                        ...params[i],
                        errorMsg: `${params[i].name} cannot be empty!`
                    });
                }else if(params[i][params[i].name] !== "") {

                    if((params[i].name === "email") && !isEmailValid(params[i][params[i].name])) {

                        errorStack.push({
                            ...params[i],
                            errorMsg: `email is invalid!`
                        });
                    }else {

                        break
                    }
                }
            }
            return errorStack
        }
    }

    const isEmailValid = (email) => {

        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(regex.test(email)){
            return true
        }
        return false;
    }

    return {
        isLoginFormValid,
        getInvalidField
    }
}