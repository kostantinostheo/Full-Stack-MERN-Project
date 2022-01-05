import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import base64 from 'base-64';



export default function Dashboard()
{
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()

    const history = useNavigate()

    let decodedToken

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
                //console.log(decodedToken)
                setFirstname(decodedToken.firstname)
                setLastname(decodedToken.lastname)
                setEmail(decodedToken.email)
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
                <li><b>Firstname:</b> {firstname}</li>
                <li><b>Lastname:</b> {lastname}</li>
                <li><b>Email:</b> {email}</li>
            </ul>
        </div>
    );
}