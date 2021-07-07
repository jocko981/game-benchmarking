import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGame, deleteGame } from "../../../actions";
import history from "../../../history";

import ModalDeleteGame from "../Modals/ModalDeleteGame";

class GameDelete extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchGame(id);
    }

    renderDelete() {
        const { id } = this.props.match.params;
        
        return (
            <>
                <button onClick={() => this.props.deleteGame(id)} className="ui button negative">Delete</button>
                <Link to="/admin/games" className="ui button">Cancel</Link>
            </>
        );
    }

    renderContent() {
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

        return <> Are you sure you want to delete: <b>{this.props.game.name}</b>? </>
    }

    render() {
        return (
            <ModalDeleteGame
                title="Delete Game"
                renderContent={this.renderContent()}
                renderDelete={this.renderDelete()}
                onDismiss={() => history.push("/admin/games")}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.games, 'toProps')

    return { game: Object.values(state.games)
        .filter(item => item.ID.toString() === ownProps.match.params.id)[0] };
    // [item.ID] je Number, a [ownProps.match.params.id] je po sebi String
    // .filter pravi nov array, i kada trazimo ownProps==ID onda ostaje samo 1 item("game") u array [{game}] i zato [0] na kraju, i imamo {game}
}

export default connect(mapStateToProps, { fetchGame, deleteGame })(GameDelete);