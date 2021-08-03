import React from "react";

const Loader = () => {

    return (
        <div className="content-page-wrapper">
            <div className="ui segment">
                <div className="ui active loader"></div>
                <br />
                <br />
            </div>

            <div class="ui icon message">
                <i class="notched circle loading icon"></i>
                <div class="content">
                    <div class="header">
                        Just one second
                    </div>
                    <p>We're fetching that content for you.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Loader;