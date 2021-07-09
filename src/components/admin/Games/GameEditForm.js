import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGame, editGame } from "../../../actions";

class GameEditForm extends Component {
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

    return { game: Object.values(state.games).find(item => toString(item.ID) === ownProps.match.params.id) };
}

export default connect(mapStateToProps, { fetchGame, editGame })(GameEditForm);