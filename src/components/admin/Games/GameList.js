import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGames } from "../../../actions";
// import "./GameList.css"

class GameList extends React.Component {
    componentDidMount() {
        // fetch games Here !! (redux action call)
        this.props.fetchGames();
    }

    renderGameList() {
        return this.props.games.map(game => {
            return (
                <div className="item" key={game.ID}>

                    {/* Ovde render EDIT/DELETE adminu */}

                    <i className="large middle aligned icon gamepad" />

                    <div className="content">

                        <Link to={`/admin/games/${game.ID}`}>{game.name}</Link>

                        <div className="description">
                            Rating: {game.rating}
                        </div>
                    </div>
                    
                </div>
            );
        })
    }

    renderAdminEdit(game) {
            return (
                <div className="right floated content">

                    <Link to={`/admin/games/edit/${game.ID}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/admin/games/delete/${game.ID}`} className="ui button negative">
                        Delete
                    </Link>
                    
                </div>
            );
    }

    render() {
        return (
            <div className="content-page-wrapper">
                <h1>Games</h1>

                <div className="ui celled list">
                    {this.renderGameList()}
                </div>

                {/* {this.renderAdminEdit()} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state, '[mapStateToProps - Gamelist.js]')
    return { 
        games: Object.values(state.games),
        // currentUserId: state.auth.userId,
        // isSignedIn: state.auth.isSignedIn 
    };
};

export default connect(mapStateToProps, { fetchGames })(GameList);