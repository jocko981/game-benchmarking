import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";
// import "./GameList.css"

class GameList extends React.Component {
    componentDidMount() {
        // fetch games Here !! (redux action call)
        this.props.fetchAllGames();
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

    renderGameList() {
        return this.props.games.map(game => {
            return (
                <div className="item" key={game.ID}>

                    {this.renderAdminEdit(game)}

                    <i className="large middle aligned icon gamepad" />

                    <div className="content">

                        <Link to={`/admin/games/${game.ID}`} className="header">{game.name}</Link>

                        <div className="description">
                            Rating: {game.rating}
                        </div>
                    </div>
                    
                </div>
            );
        })
    }

    renderCreateGame() {
        return (
            <div>
                <Link to="/admin/games/new" className="ui button primary">
                    Add New Game
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
                {/* OVO moze da se prebaci na Admin SideBar - Add Game Btn */}
                {this.renderCreateGame()} 
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

export default connect(mapStateToProps, { fetchAllGames })(GameList);