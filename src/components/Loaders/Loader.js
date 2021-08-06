import React from "react";

const Loader = () => {

    return (
        <div className="content-page-wrapper">
            <div className="ui segment">
                <div className="ui active loader"></div>
                <br />
                <br />
            </div>

            <div className="ui icon message">
                <i className="notched circle loading icon"></i>
                <div className="content">
                    <div className="header">
                        Just one second
                    </div>
                    <p>We're fetching that content for you.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Loader;