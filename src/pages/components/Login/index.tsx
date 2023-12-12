import React,{useState, useEffect} from "react";
import { 
    TextField, 
    Button,
    InputAdornment,
    IconButton
} from "@mui/material";
import { Images } from "../../../images";
import { InputVal } from "../../../types/login";
import { useSelector, connect} from "react-redux";
import { LoginAction } from "../../../store/actions/auth/login-action";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { LoginButton } from "./LoginButton";
import { ErrorValidationForm } from "./ErrorValidationForm";

function LoginComponent(props: any) {

    const { loginDispatchAction } = props;

    const inputObj = {
        email: "",
        password: ""
    }

    const [inputVal, setInputVal] = useState<InputVal>(inputObj);
    const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

    const [errorValidation, setErrorValidation] = useState<any>(null);

    const loginState = useSelector(({loginState}) => loginState);

    const { isLoginFormValid, getInvalidField } = useFormValidation();


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginBtnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const params = inputVal;
        
        //--> login form validation here
        const validateParams = [
            {
                email: inputVal.email,
                name: "email"
            },
            {
                password: inputVal.password,
                name: "password"
            }
        ];
        if(isLoginFormValid(validateParams) === true) {
            setErrorValidation(null);
            loginDispatchAction(params);
        }
        setErrorValidation(getInvalidField(validateParams));
    }

    const handleClickShowPassword = () => {
        setIsPasswordShow((prev) => !prev);
    }

    const handleMouseDownShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    useEffect(() => {

        if(loginState.status === "login_success") {
            window.location.assign("/dashboard/customers/users")
        }

    }, [loginState.status, errorValidation])
    
    return (
        <div className="login-comp-cover-flex">
            <div className="login-comp-cover-item">
                <div className="login-comp-inner-cover-flex">
                    <div className="login-comp-inner-cover-item">
                        <div className="login-intro-cover-flex">
                            <div className="login-intro-cover-item">
                                <div className="intro-header-cover-flex">
                                    <div className="intro-header-cover-item">
                                        <div className="logo-cover-flex">
                                            <div className="logo-cover-item">
                                                <img className="logo-img" src={Images.central.logo} alt="lendsqr logo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-header-cover-item"></div>
                                </div>
                            </div>
                            <div className="login-intro-cover-item">
                                <div className="intro-body-cover">
                                    <div className="body-img-cover-flex">
                                        <div className="body-img-cover-item">
                                            <img className="body-img" src={Images.login.introImgSm} alt="intro img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-comp-inner-cover-item">
                        <div className="login-form-cover-flex">
                            <div className="login-form-cover-item">
                                <div className="login-header-cover"></div>
                            </div>
                            <div className="login-form-cover-item">
                                <div className="form-cover-flex">
                                    <div className="form-cover-item">
                                        <div className="form-header-cover">
                                            <h2 className="form-header-text">Welcome!</h2>
                                            <p className="form-subheader-text">Enter details to login.</p>
                                        </div>
                                        <div className="form-body-cover">
                                            {
                                                errorValidation !== null ?
                                                <div className="input-cover">
                                                    <ErrorValidationForm 
                                                        errorValidation={errorValidation} 
                                                        handleInputChange={handleInputChange}
                                                        inputVal={inputVal}
                                                        isPasswordShow={isPasswordShow}
                                                        handleClickShowPassword={handleClickShowPassword}
                                                        handleMouseDownShowPassword={handleMouseDownShowPassword}
                                                    />
                                                </div>:
                                                <>
                                                    <div className="input-cover">
                                                        <TextField 
                                                            className="login-input" 
                                                            type="email"
                                                            name="email"
                                                            value={inputVal.email}
                                                            onChange={handleInputChange}
                                                            placeholder="Email"
                                                            fullWidth
                                                            required
                                                        />
                                                    </div>
                                                    <div className="input-cover">
                                                        <TextField 
                                                            className="login-input" 
                                                            type={isPasswordShow? "text":"password"}
                                                            name="password"
                                                            value={inputVal.password}
                                                            onChange={handleInputChange}
                                                            placeholder="Password"
                                                            fullWidth
                                                            required
                                                            InputProps={{
                                                                endAdornment: 
                                                                <InputAdornment className="input-adorn-cover" position="end">
                                                                    <IconButton
                                                                        className="icon-btn-cover"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownShowPassword}
                                                                        edge="end"
                                                                    >{isPasswordShow? "HIDE":"SHOW"}</IconButton>
                                                                </InputAdornment>
                                                            }}
                                                        />
                                                    </div>
                                                </>
                                            }
                                            <div className="forgot-pwd-cover">
                                                <p className="forgot-pwd-text">FORGOT PASSWORD?</p>
                                            </div>
                                            <div className="btn-cover-flex">
                                                <div className="btn-cover-item">
                                                    <LoginButton status={loginState.status} handleLoginBtnClick={handleLoginBtnClick} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = () => (dispatch:any) => ({
    loginDispatchAction: (params:any) => dispatch(LoginAction(params))
})

export default connect(null, mapDispatchToProps)(LoginComponent);
