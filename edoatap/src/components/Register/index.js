import React from 'react';
import { useState } from 'react';

export default function Register()
{
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    
    async function onRegister(event)
    {
        event.preventDefault()
        await fetch(`http://localhost:3000/users/register`, {
        method: 'POST',
        headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            }),
        })

        alert('Επιτυχής Εγγραφή')
        window.location.href = '/login'
        
    }

    return(
        <div>
            <h3>Register</h3>
            <form onSubmit={onRegister}>
                <input 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder='Firstname'
                /><br/>
                <input 
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder='Lastname'
                /><br/>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='Email'
                /><br/>
                <input 
                value={password}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder='Password'
                />
                <br/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
}