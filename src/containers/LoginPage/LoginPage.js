
import React, { useState } from "react";
import "./LoginPage.css";
import { connect } from "react-redux";
import { userSignIn, adminSignIn } from "../../actions";

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
        
        const allUsers = JSON.parse(localStorage.getItem('allUsers'));

        allUsers.filter((userData) => {
            if(loginValue.username === userData.name && loginValue.password === userData.password) {
                // if (admin === true) => push to /admin else push to /user
                if(userData.role === "admin") {
                    props.adminSignIn(userData); // action call
                    props.history.push("/admin")
                } else {
                    props.userSignIn(userData); // action call
                    props.history.push("/user")
                }
            }
            setErrorMsg("This account does not exist, please try again.")
            return null
        });
        
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

        <div className="header">
            <h1>Game Benchmarking</h1>
        </div>

        <div className="container">
            <h2>Login</h2>

            <form onSubmit={onLoginSubmit}>
                <input
                  onChange={handleChange}
                  name="username"
                  value={loginValue.username}
                  placeholder="Username"
                  autoComplete="off"
                  maxLength="199"
                />
        
                <input
                  onChange={handleChange}
                  name="password"
                  value={loginValue.password}
                  placeholder="Password"
                  type="password"
                  maxLength="199"
                />

                <button type="submit">Login</button>

                <p>{errorMsg}</p>
            </form>
        </div>

        </div>
    );
    
}

export default connect(null, { userSignIn, adminSignIn })(LoginPage);