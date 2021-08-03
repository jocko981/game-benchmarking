import React from "react";
import "./ErrorPage404.css";

const ErrorPage404 = (props) => {

    return (
        <div className="wrapper_404">
            <div className="middle aligned column">
                <h1>404 page not found</h1>
                <div onClick={() => props.history.push("/login")} className="ui big button">
                    <i className="signup icon"></i>
                    Go back to Login page
                </div>
            </div>
        </div>
    );
}

export default ErrorPage404;