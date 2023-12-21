import React, {useEffect} from 'react';
import { 
    TextField,
    InputAdornment,
    IconButton
} from "@mui/material";

//--> declare error validation type here
type ErrorValidationProps = {
    errorValidation: {
        email?: string
        password?: string
        name: string
        errorMsg: string
    }[]
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    inputVal: {
        email: string
        password: string
    }
    isPasswordShow: boolean
    handleClickShowPassword: () => void
    handleMouseDownShowPassword: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const ErrorValidationForm = (props: ErrorValidationProps) => {
    
    const { 
        errorValidation, 
        handleInputChange, 
        inputVal, 
        isPasswordShow,
        handleClickShowPassword,
        handleMouseDownShowPassword
    } = props;

    switch(errorValidation?.length) {
        case 1:
            const errorValidObj = errorValidation[0];
            
            return (
                <>
                    <div className={`input-cover ${errorValidObj.name === 'email' ? `input-cover-error-${errorValidObj.name}`: ''}`}>
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
                        <div className="error-validation-msg">
                            {errorValidObj.name === "email" && <span>{errorValidObj.errorMsg.charAt(0).toUpperCase()+errorValidObj.errorMsg.slice(1)}</span>}
                        </div>
                    </div>
                    

                    <div className={`input-cover ${errorValidObj.name === 'email' ? `input-cover-error-${errorValidObj.name}`: ''}`}>
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
                        <div className="error-validation-msg">
                            {errorValidObj.name === "password" && <span>{errorValidObj.errorMsg.charAt(0).toUpperCase()+errorValidObj.errorMsg.slice(1)}</span>}
                        </div>
                    </div>
                </>
            )
        case 2:
            const errorValidElements = errorValidation.map((errorValidate, index) => {

                return errorValidate.name === "email"? (
                    <div className={`input-cover input-cover-error-${errorValidate.name}`}>
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
                        <div className="error-validation-msg">
                            <span dangerouslySetInnerHTML={{__html: errorValidate.errorMsg.charAt(0).toUpperCase()+errorValidate.errorMsg.slice(1)}}></span>
                        </div>
                    </div>
                ): (
                    <div className={`input-cover input-cover-error-${errorValidate.name}`}>
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
                        <div className="error-validation-msg">
                            <span dangerouslySetInnerHTML={{__html: errorValidate.errorMsg.charAt(0).toUpperCase()+errorValidate.errorMsg.slice(1)}}></span>
                        </div>
                    </div>
                )
            })
            return (
                <>
                    {errorValidElements}
                </>
            )
        default:
            return (
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
            )
    }
}
