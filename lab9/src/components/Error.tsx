import React from "react";
import "./Error.css";

interface ErrorProps {backBut : Function;}; 


export const Error:React.FC<ErrorProps> = ({backBut}) => 
{
    return(
        <div className="errorClass">
            <div className="miniError">
                <button id="errorBut" onClick={()=>backBut()}>Назад</button>
                <img id="error1" src="https://s2.narvii.com/image/rwhgoqml2bwottosy22qasy4nsvt6fj3_hq.jpg" alt=""/>
            </div>
            <div className="text">Такого пользователя я не нашёл:(</div>
        </div>
    )
} 

