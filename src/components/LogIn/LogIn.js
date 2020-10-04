import React from 'react';
import './LogIn.css';
import { firebaseIntitialize, handleSignIn, handleSignOut, handleCreateAccout } from './Login.config';
import { useState } from 'react';

const LogIn = () => {

    firebaseIntitialize();
    const [ singUpUser, setSignUpUser ] = useState(true);
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        isSignedIn : false
    })

    const logIn = () =>{
        handleSignIn()
        .then(res =>{
            setUser(res)
            console.log("SignedIn")
        })
    }
    const logOut = () =>{
        handleSignOut()
        .then(res =>{
            setUser(res)
            console.log("SignedOut")
        })
    }

    const handleBlur = (e) =>{
        let isInputValid = true;
        if(e.target.name === 'email'){
            isInputValid =  /^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$/.test(e.target.value)
        }
        if(e.target.name === 'password'){
            isInputValid = e.target.value.length>4
        }
        if(isInputValid){
            const newUserInfo = {...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }
    console.log(user.email,user.password)
    const handleSubmit = (e)=>{
        if(singUpUser && user.email, user.password){
            handleCreateAccout(user.email,user.password)
            .then(res =>{
               // setUser(res)
                console.log("submitted logUp")
            })
            .catch(err=>{
                console.log(err.message)
            })

        }
        if(!singUpUser && user.email, user.password){

        }
        e.preventDefault();
    }

    
    return (
        <div className = 'login-form'>
            This is logIn
            <br/>
            {user.isSignedIn && user.isSignedIn ? <button onClick = {logOut}>Sign Out</button> : <button onClick = {logIn}>SignIn with Email</button>
            } <br/><br/>
            <form onSubmit={handleSubmit}>
                <input onClick={()=>setSignUpUser(!singUpUser)} type="checkbox"name='signIn'/>
                <label htmlFor="f">SignIn</label>
                <br/>
               {singUpUser && <input onBlur={handleBlur} type="text" name='name' placeholder = 'Your name'/>
                } <br/> <br/>
                <input onBlur={handleBlur} type="email" name="email" placeholder = 'Your email' required/>
                <br/> <br/>
                <input onBlur={handleBlur} type = 'password' name = 'password' placeholder = 'Your Password' required/>
                <br/> <br/>
                <input type="submit" value = 'Sign up'/>
            </form>
           </div>
    );
};

export default LogIn;