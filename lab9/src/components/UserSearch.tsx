import React, { useState, useEffect } from "react";
import { UserInfo } from "./UserInfo";
import { Error } from "./Error";
import "./UserSearch.css"

interface UserSearchProps
{
    user : string;
    backBut : Function;
}; 



export const UserSearch:React.FC<UserSearchProps>  = ({user,backBut}) => {
    const[errorСondition,setError] = useState(false);
    const[loadingCondition,setLoading] = useState(true);
    const[userData ,setUserData] = useState<any>();

    useEffect(()=>
    {
        fetch(`https://api.github.com/users/${user}` ,  
        {
            method: 'GET',
            headers: {Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,},
        }).then((data)=>
        {
            
            if(data.status !== 200 )
                setError(true);
            else
            { return data.json();}
        }).then((data) =>
            {
                console.log(data);
                setUserData(data);
                setLoading(false);
            })
            },[user]);

    if(errorСondition)
        return(<Error backBut={backBut} />)
    if(loadingCondition)
        return(
        <div className="loading">
            <img id="load" src = "https://cdn.humoraf.ru/wp-content/uploads/2017/07/skachat-anime-gifki-humoraf-43.gif" alt=""/>
            <div id="text3">Загрузка..</div>
        </div>)
    else
    {
        return(<UserInfo data={userData} backBut={backBut}/>)
    }

} 