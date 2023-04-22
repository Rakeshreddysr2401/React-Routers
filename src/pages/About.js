import {Navigate} from 'react-router-dom';
import {useState} from 'react';
export default function About(){
    const[user,setUser]=useState("rakhi");
    if(!user){
        return <Navigate to="/"></Navigate>
    }
    return(
        <div className="about">
            <h1>About Page {user}</h1>
            <p>In this page we have our personal details</p>
            <button onClick={()=>{setUser(null)}}>LogOut </button>
        </div>
    )
}