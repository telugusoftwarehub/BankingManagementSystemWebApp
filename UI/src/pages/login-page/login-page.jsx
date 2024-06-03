import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login-page.css"

const LoginPage = (props) => {
    const location = useLocation(); // 
    const navigate = useNavigate(); // react-routes-dom loo unna option

    const [username, setUsername] = useState("");
    const [password, setPasswrod] = useState("");

    const keyupEventHandler = (event) => {
        const { target: { name, value } } = event;

        if (name === "username") {
            setUsername(value)
        }

        if (name === "password") {
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
        fetch('./dummyData/user_authentication.json', options)
            .then((response) => response.json())
            .then((response) => {
                const { statusCode, status, user } = response;

                if (status && statusCode === '101') {
                    localStorage.setItem("token", user.token);
                    location.search = "action"
                    navigate('/dashboard', { state: { login: "success" } });
                }

                if (status && statusCode === '100') {
                    navigate('/error');
                }
            })

    }

    return <>
        <div className="login_container">
            <div className="login_wrap">
                <h1>User Login</h1>
                <div className="text_items">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" onKeyUp={keyupEventHandler} />
                </div>
                <div className="text_items">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" onKeyUp={keyupEventHandler} />
                </div>
                
                    <button onClick={loginBtnEventListiner} className="lgn_button"> Login </button>
            
            </div>
        </div>
    </>
}

export default LoginPage;