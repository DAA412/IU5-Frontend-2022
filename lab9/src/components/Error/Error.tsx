import React from "react";
import {ErrorProps} from "./ErrorTypes";
import error from "../img/error.jpg"
import "./Error.css";


export const Error:React.FC<ErrorProps> = ({backBut}) => 
{
    return(
        <div className="errorClass">
            <div className="miniError">
                <button id="errorBut" onClick={()=>backBut()}>Назад</button>
                <img id="error1" src={error} alt=""/>
            </div>
            <div className="text">Такого пользователя я не нашёл:(</div>
        </div>
    )
} 

