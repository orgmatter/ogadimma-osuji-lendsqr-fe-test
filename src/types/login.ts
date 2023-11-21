import React from "react";

export type InputVal = {
    email: string
    password: string
}

export type LoginProps = {
    inputVal: InputVal
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClickShowPassword: () => void
    handleMouseDownShowPassword: (e: React.MouseEvent<HTMLButtonElement>) => void
}