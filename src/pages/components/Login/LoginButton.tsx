import React from 'react';
import { Button } from '@mui/material';

type LoginBtnProps = {
    status: string
    handleLoginBtnClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

export const LoginButton = (props: LoginBtnProps) => {
    
    const { status, handleLoginBtnClick } = props;

    switch(status) {
        case "login_start":
            return (
                <Button
                    className="login-btn"
                    variant="contained"
                    color="primary"
                    type="button"
                    disabled
                ><i>...Loggin in</i></Button>
            )
        case "login_failed":
            return (
                <Button
                    className="login-btn"
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleLoginBtnClick}
                >LOG IN</Button>
            )
        default:
            return (
                <Button
                    className="login-btn"
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleLoginBtnClick}
                >LOG IN</Button>
            )
    }
}