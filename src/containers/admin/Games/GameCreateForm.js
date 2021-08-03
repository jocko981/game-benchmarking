
import React, { Component } from "react";
import { connect } from "react-redux";
import { createGame } from "../../../actions";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import GameForm from "./GameForm";

class GameCreateForm extends Component {

    onSubmit = (formValues) => {
        this.props.createGame(formValues);
        
        console.log('formValues - GameCreateForm.js', formValues)
    }

    render() {
        
        return (
            <div className="content-page-wrapper">
                <SidebarAdmin />
                <h1>Game Create</h1>

                <GameForm onSubmit={this.onSubmit} />
            </div>
        );
    }

}

export default connect(null, { createGame })(GameCreateForm);