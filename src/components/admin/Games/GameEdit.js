import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGame, editGame } from "../../../actions";

import GameEditForm from "./GameEditForm";

class GameEdit extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchGame(id);
    }
    
    onSubmit = (formValues) => {
        // this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if(!this.props.game) {
            return (
                <div className="content-page-wrapper">
                    <div className="ui segment">
                        <div className="ui active loader"></div>
                        <br/>
                        <br/>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h3>Edit a Game</h3>
                {/* GameForm component HERE */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return { game: Object.values(state.games).filter(item => toString(item.ID) === ownProps.match.params.id)[0] };
    // .filter pravi nov array, i kada trazimo ownProps==ID onda ostaje samo 1 item("game") u array [{game}] i zato [0] na kraju, i imamo {game}
}

export default connect(mapStateToProps, { fetchGame, editGame })(GameEdit);