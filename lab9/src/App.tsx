import React, { useState } from "react";
import {User} from "./components/User";
import "./App.css"
import {Routes, Route} from 'react-router-dom'
import { Main } from "./components/Main";

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
    return (
        <Routes>
            <Route path={process.env.REACT_APP_DEV === "true" ? "/user" : "/lab9/build"} element={<User user={currentUser} userID={getUserId} inputText={getInputText} backBut={getBack}/>}></Route>
            <Route path={process.env.REACT_APP_DEV === "true" ? "/" : "/lab9/build"} element={<Main />}></Route>
        </Routes>
    );
};