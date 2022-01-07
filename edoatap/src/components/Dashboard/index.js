import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import base64 from 'base-64';



export default function Dashboard()
{
    const [status, setStatus] = useState()
    const [user_id, setId] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()

    const history = useNavigate()

    let decodedToken

    async function getUserData(){

        const res = await fetch(`http://localhost:3000/users/${decodedToken.user_id}`)
        const data = await res.json()
        await setProfile(data)

    }

    async function setProfile(data){
        setFirstName(data.firstname)
        setLastName(data.lastname)
        setEmail(data.email)
    }

    useEffect(()=> {
        const token = localStorage.getItem('token')
        if(token){
            const parts = token.split('.');
            decodedToken = base64.decode(parts[1]);
            decodedToken = JSON.parse(decodedToken);
            
            if(!decodedToken){
                localStorage.removeItem('token')
                history.reaplace('/login')
            }else{
                setStatus(decodedToken.status)
                setId(decodedToken.user_id)
                getUserData()
            }
        }
        else{
            //If you are not signed in yet, return to login page
            window.location.href = '/login'
        }
    }, [])

    return(
        <div>
            <ul style={{"list-style-type": "none"}}>
                <li><b>User role:</b> {status}</li>
                <li><b>User ID:</b> {user_id}</li>
                <li><b>Firstname:</b> {firstname}</li>
                <li><b>Lastname:</b> {lastname}</li>
                <li><b>Email:</b> {email}</li>
            </ul>
        </div>
    );
}