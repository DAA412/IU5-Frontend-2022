import React from "react";
import search from "./img/search.jpeg"
import "./Menu.css"
import {Link} from 'react-router-dom';
 
interface MenuProps
{
    userID : Function;
    inputText : Function;
}; 

export const Menu:React.FC<MenuProps>  = ({userID,inputText}) => 
{
    return(
        <div className="menu">
            <div className="text1">Система поиска аккуанта GitHub</div>
            <img id = "menuPic" src={search} alt=""/>
            <div className="menu1">
                <input id = "search"
                onKeyPress = {(e:any) => 
                {if (e.key === "Enter")
                    userID();}} 
                onChange={(e:any) =>
                {inputText(e.target.value)}} />
                <button id="searchBut" onClick={()=>userID()}>Найти</button>
            </div>
            <Link to = {"/"}  className="homeLink">Домой;)</Link>
            
        </div>)
} 
 

