import React from "react";
import history from "../../history";
import "./ErrorPage404.css";

const ErrorPage404 = () => {

    return (
        <div className="wrapper_404">
            <div className="middle aligned column">

                <h1>404 page not found</h1>

                <div onClick={() => history.go(-1)} className="ui big button">
                    <i className="arrow alternate circle left icon"></i>
                    Go back to Previous page
                </div>

                <div onClick={() => history.push("/login")} className="ui big button">
                    <i className="signup icon"></i>
                    Go back to Login page
                </div>

            </div>
        </div>
    );
}

export default ErrorPage404;