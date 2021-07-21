import React from "react";
import "./Charts.css";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";

class Charts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllGames();
    }

    render() {
        const options = {
            // chart: {
            //     height: 350,
            //     type: "heatmap"
            // },
            // stroke: {
            //     curve: "smooth"
            // }
        };

        const games = this.props.games;
        const series = games.map((item) => {
            return {
                name: item.name,
                data: [item.num_of_players_2015, item.num_of_players_2016, item.num_of_players_2017, item.num_of_players_2018, item.num_of_players_2019, item.num_of_players_2020]
            }
        })

        return (
            <div className="content-page-wrapper">
                <h1>Charts</h1>
                
                <div className="chart_wrapper">
                    <ReactApexChart options={options} series={series} type="heatmap" height={350} />
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        games: Object.values(state.games)
    };
}

export default connect(mapStateToProps, { fetchAllGames })(Charts);