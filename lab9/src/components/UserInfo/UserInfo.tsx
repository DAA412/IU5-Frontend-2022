import React from "react";
import { UserInfoProps } from "./UserInfoTypes";
import "./UserInfo.css"


export const UserInfo :React.FC<UserInfoProps> = ({backBut,data}) => 
{
    return(
        <div className="userProfile">
            <button id="backBut" onClick={()=>backBut()}>Назад</button>
            <div className="userProfMini">
                <div id="text2">А вот и нужный человечек</div>
                <img id="profilePic" src={data.avatar_url}/>
                <div className="userProps">Логин: {data.login}</div>
                <div className="userProps">Подписчики: {data.followers}</div>
                <div className="userProps">Подписан на: {data.following}</div>
            </div> 
        </div>
    )
} 