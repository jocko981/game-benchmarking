import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGame } from "../../../actions";

class GameShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchGame(id);
        console.log(id, "[GAME ID]")
    }

    render() {
        if(!this.props.game) {
            return <div>"Loading..."</div>
        }
        
        const { name } = this.props.game;

        return (
            <div className="content-page-wrapper">
                {name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.games, '[mapStateToProps - GameShow.js]', ownProps)
    return { game: Object.values(state.games)[ownProps.match.params.id - 1] };
}

export default connect(mapStateToProps, { fetchGame })(GameShow);