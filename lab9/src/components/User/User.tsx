import React from "react";
import {UserProps} from "../User/UserTypes";
import { Menu } from "../Menu/Menu";
import { UserSearch } from "../UserSearch/UserSearch";


export const User :React.FC<UserProps> = ({user,userID,inputText,backBut}) => 
{
    if(user.length === 0)
    {
        return(<Menu userID={userID} inputText={inputText}/>)
    }
    else
    {
        return(<UserSearch backBut={backBut} user={user}/>)
    }
}