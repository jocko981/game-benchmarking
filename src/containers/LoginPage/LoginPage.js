
import React, { useState } from "react";
import "./LoginPage.css";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        // this.value = {gg: "gg"}
        // console.log(this.value.gg)

        const [loginValue, setLoginValue] = useState({ username: "", password: "" });
        const [errorMsg, setErrorMsg] = useState("");
      }

    handleChange = (event) => {
        const { name, value } = event.target;
    
        setLoginValue((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }

    onLoginSubmit = (e) => {
        e.preventDefault();
        
        const allUsers = JSON.parse(localStorage.getItem('allUsers'));

        allUsers.filter((userData) => {
            if(loginValue.username === userData.name && loginValue.password === userData.password) {
                // if (user.admin === true) => push to /admin else push to /user
                if(userData.role === "admin") {
                    props.history.push("/admin")
                } else
                props.history.push("/user")
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
        

        console.log(allUsers, 'loging')
    }
    render() {
        
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
}

export default LoginPage;