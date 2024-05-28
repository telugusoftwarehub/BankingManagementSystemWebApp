import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = (props) => {
    const location = useLocation(); // 
    const navigate = useNavigate(); // react-routes-dom loo unna option

    const [username, setUsername] = useState("");
    const [password, setPasswrod] = useState("");

    const keyupEventHandler = (event) => {
        const { target: {name, value} } = event;

        if(name === "username") {
            setUsername(value)
        } 

        if(name === "password") {
            setPasswrod(value)
        }
    }

    const loginBtnEventListiner = () => {
        const options = {
            method: "POST",
            payload: {
                username,
                password
            }
        }
        fetch('./dummyData/user_authentication_failed.json', options)
            .then((response) => response.json())
            .then((response) => {
                const { statusCode, status, user } = response;

                if(status && statusCode === '101') {
                    localStorage.setItem("token", user.token);
                    location.search = "action"
                    navigate('/dashboard', {state: {login: "success"}});
                }

                if(status && statusCode === '100') {
                    navigate('/error');
                }
            })

    }

    return <>
        <h1>User Login</h1>
        <label for="username">Username: </label>
        <input type="text" name="username" id="username"  onKeyUp={keyupEventHandler}/>
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" onKeyUp={keyupEventHandler}/>
        <button onClick={loginBtnEventListiner}> Login </button>
    </>
}

export default LoginPage;