
import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = (props) => {
    const [loginValue, setLoginValue] = useState({ username: "", password: "" });
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setLoginValue((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }

    const onLoginSubmit = (e) => {
        e.preventDefault();

        // allUsers.users.filter((user) => {
        //     if(loginValue.username === user.username && loginValue.password === user.password) {
        //         props.history.push("/dashboard")

        // if (user.admin === true) => push to /admin else push to /user

        //     }
        //     setErrorMsg("This account does not exist, please try again.")
        //     return null
        // });
        
        if(loginValue.username.length < 1 && loginValue.password.length < 1) {
            setErrorMsg("Please type your Username and Password to login.");
        } else if(loginValue.username.length < 1) {
            setErrorMsg("Please enter Username.");
        } else if(loginValue.password.length < 1) {
            setErrorMsg("Please enter Password.");
        }
        
    }

    return (
        <div className="container-wrapper">

        <div className="container">
            <h2>Login</h2>

            <form onSubmit={onLoginSubmit}>
                <input
                  onChange={handleChange}
                  name="username"
                  value={loginValue.username}
                  placeholder="Username"
                  autoComplete="off"
                  maxLength="99"
                />
        
                <input
                  onChange={handleChange}
                  name="password"
                  value={loginValue.password}
                  placeholder="Password"
                  type="password"
                  maxLength="99"
                />

                <button type="submit">Login</button>

                <p>{errorMsg}</p>
            </form>
        </div>

        </div>
    );
}

export default LoginPage;