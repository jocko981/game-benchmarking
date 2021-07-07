import React from "react";
import { connect } from "react-redux";
import { fetchGame } from "../../../actions";
import GamePdf from "./GamePdf";

class GameShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchGame(id);
    }

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

        const { name, ID,
            num_of_players_2015, 
            num_of_players_2016, 
            num_of_players_2017, 
            num_of_players_2018, 
            num_of_players_2019, 
            num_of_players_2020,
            num_of_players_favourite,
            num_of_players_global,
            platform,
            price,
            rating,
            single_player,
            type,
            violence,
            won_award,
            year_published } = this.props.game;

        return (
            <div className="content-page-wrapper">
                <table className="ui unstackable table">
                  <thead>
                    <tr>
                      <th>{name}</th>
                      <th>ID: {ID}</th>
                    </tr>
                  </thead>
                <tbody>
                    <tr>
                      <td>num_of_players_2015</td>
                      <td>{num_of_players_2015}</td>
                    </tr>
                    <tr>
                      <td>num_of_players_2016</td>
                      <td>{num_of_players_2016}</td>
                    </tr>
                    <tr>
                      <td>num_of_players_2017</td>
                      <td>{num_of_players_2017}</td>
                    </tr>
                    <tr>
                      <td>num_of_players_2018</td>
                      <td>{num_of_players_2018}</td>
                    </tr>
                    <tr>
                      <td>num_of_players_2019</td>
                      <td>{num_of_players_2019}</td>
                    </tr>
                    <tr>
                      <td>num_of_players_2020</td>
                      <td>{num_of_players_2020}</td>
                    </tr>

                    <tr>
                      <td>num_of_players_favourite</td>
                      <td>{num_of_players_favourite}</td>
                    </tr>
                    <tr>
                      <td>num_of_players_global</td>
                      <td>{num_of_players_global}</td>
                    </tr>
                    <tr>
                      <td>platform</td>
                      <td>{platform}</td>
                    </tr>
                    <tr>
                      <td>price</td>
                      <td>{price}</td>
                    </tr>
                    <tr>
                      <td>rating</td>
                      <td>{rating}</td>
                    </tr>
                    <tr>
                      <td>single_player</td>
                      <td>{single_player}</td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>{type}</td>
                    </tr>
                    <tr>
                      <td>violence</td>
                      <td>{violence}</td>
                    </tr>
                    <tr>
                      <td>won_award</td>
                      <td>{won_award}</td>
                    </tr>
                    <tr>
                      <td>year_published</td>
                      <td>{year_published}</td>
                    </tr>
                  </tbody>
                </table>
                
                <GamePdf />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'redux state console.log in GameShow')
    console.log(Object.values(state.games), 'ObjValues state GameShow')
    console.log(state.games, '[mapStateToProps - GameShow.js]')
    console.log(ownProps, '[ownProps]')

    return { game: Object.values(state.games)
      .filter(item => item.ID.toString() === ownProps.match.params.id)[0] };
    // .filter pravi nov array, i kada trazimo ownProps==ID onda ostaje samo 1 item("game") u array [{game}] i zato [0] na kraju, i imamo {game}
}

export default connect(mapStateToProps, { fetchGame })(GameShow);