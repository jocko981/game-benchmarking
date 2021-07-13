
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../../actions";
import UserForm from "./UserForm";

class GameCreateForm extends Component {

    onSubmit = (formValues) => {
        this.props.createUser(formValues);
        
        console.log('formValues ', formValues)
    }

    render() {
        
        return (
            <div className="content-page-wrapper">
                <h1>User Create</h1>

                <UserForm onSubmit={this.onSubmit} />
            </div>
        );
    }

}

export default connect(null, { createUser })(GameCreateForm);