import React from "react";
import "./UserInfo.css"


interface UserInfoProps 
{
    data: any;
    backBut: Function;
}; 


export const UserInfo :React.FC<UserInfoProps> = ({data, backBut}) => 
{
    return(
        <div className="userProfile">
            <button id="errorBut" onClick={()=>backBut()}>Назад</button>
            <div className="userProfMini">
                <div id="text2">А вот и нужный человечек</div>
                <img id="profilePic" src={data.avatar_url} alt=""/>
                <div className="userProps">Логин: {data.login}</div>
                <div className="userProps">Подписчики: {data.followers}</div>
                <div className="userProps">Подписан на: {data.following}</div>
                <div className="userProps">Создание аккаунта: {data.created_at}</div>
                <div className="userProps">Данные: {data.bio}</div>
            </div> 
        </div>
    )
} 
