import React from "react";
import {MenuProps} from "./MenuTypes";
import search from "../img/search.jpeg"
import "./Menu.css"



export const Menu:React.FC<MenuProps>  = ({userID,inputText}) => 
{
    return(
        <div className="menu">
            <div className="text1">Система поиска аккуанта GitHub</div>
            <img id = "menuPic" src={search}/>
            <div className="menu1">
                <input id = "search"
                onKeyPress = {(e:any) => 
                {if (e.key === "Enter")
                    userID();}} 
                onChange={(e:any) =>
                {inputText(e.target.value)}} />
                <button id="searchBut" onClick={()=>userID()}>Найти</button>
            </div>
        </div>)
} 


