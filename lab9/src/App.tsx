import React, { useState } from "react";
import {User} from "./components/User/User";
import "./App.css"

export const App = () => 
{
    const[currentUser,setUser] = useState("");
    const[currentInput,setInput] = useState("")

    function getInputText(id: string)
    {
        setInput(()=>id)
    }
    function getUserId()
    {
        setUser(()=>currentInput.trim())
    }
    function getBack()
    {
        setUser(()=>"")
        setInput(()=>"")
    }
    return (<User user={currentUser} userID={getUserId} inputText={getInputText} backBut={getBack}/>);
};