import React, { useRef, useState, useEffect  } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import './index.css'
import {decodeToken, getToken} from '../../utils/Common'


export default function LogoutBut() {
    
    const [username, setUsername] = useState()
    const [lastname, setLastName] = useState()
    
    let decodedToken = decodeToken()
    const reference = useRef(decodedToken)

    const role = decodedToken.status

    async function getUserData(){
        const res = await fetch(`http://localhost:3000/users/${reference.current.user_id}`)
        const data = await res.json()
        setUsername(data.firstname)
        setLastName(data.lastname)
    }

    useEffect(()=> {
        const token = getToken()
        if(token){
            getUserData()
        }
        else{
            //If you are not signed in yet, return to login page
            window.location.href = '/login'
        }
    }, [])

    function LogOut(){
        localStorage.removeItem('token')
    }
    
    return (
        <div className='logout-but'>
            <DropdownButton id='drop' title={username + " " +lastname}>
                {role === "admin" && (
                    <Dropdown.Item href="/admindashboard">Αιτήσεις</Dropdown.Item>
                )}
                {role === "user" && (
                    <Dropdown.Item href="/dashboard">Προφίλ</Dropdown.Item>
                )}
                <Dropdown.Item onClick={LogOut} href="/">Έξοδος</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}