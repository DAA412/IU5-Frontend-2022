import React from "react";
import { Menu } from "./Menu";
import { UserSearch } from "./UserSearch";

 interface UserProps
{
    user : string;
    userID : Function;
    inputText : Function;
    backBut: Function;
}; 

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
