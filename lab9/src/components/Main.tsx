import React from "react";
import "./Menu.css"
import { Link} from 'react-router-dom';

interface MainProps
{
    
}; 

export const Main:React.FC<MainProps>  = ({}) => 
{
    return(<div>
        <div className="header">1</div>
        <div className="menu">
            <div className="text1">Помогу найти тебе любого пользователя GitHub;)</div>
            <img id = "mainPic" src="./img/main.png" alt=""/>
            <Link to = {"/user"}  className="searchLink">Чего ты ждешь? Жми скорее</Link>
         <div className="footer">1</div>   
        </div></div>)
} 
 

