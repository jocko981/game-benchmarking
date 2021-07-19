import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGame, editGame } from "../../../actions";
import GameForm from "./GameForm";
import Loader from "../../Loaders/Loader";

class GameEditForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchGame(id);
    }
    
    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.editGame(id, formValues);
    };
    

    render() {
        if(!this.props.game) {
            return (
                <Loader />
            );
        }

        return (
            <div className="content-page-wrapper">
                <h3>Edit a Game</h3>
                <GameForm
                    initialValues={_.pick(this.props.game, 'name', 'ID', 'num_of_players_2015', 'num_of_players_2016', 'num_of_players_2017', 'num_of_players_2018', 'num_of_players_2019', 'num_of_players_2020', 'num_of_players_favourite', 'num_of_players_global', 'platform', 'price', 'rating', 'single_player', 'type', 'violence', 'won_award', 'year_published')}
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state.games, 'games') nzm da li ima previse rendera

    return { game: Object.values(state.games)
        .find(item => item.ID.toString() === ownProps.match.params.id) };
}

export default connect(mapStateToProps, { fetchGame, editGame })(GameEditForm);