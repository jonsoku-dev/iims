import React from 'react';
import {Wrapper} from "./Button.styled";

export interface ButtonProps {
    label: string
}

const Button:React.FC<ButtonProps> = (props) => {
    return <Wrapper>{props.label}</Wrapper>
}

export default Button;