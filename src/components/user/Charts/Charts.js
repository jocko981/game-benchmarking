import React from "react";
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
            chart: {
                height: 350,
                type: "area"
            },
            stroke: {
                curve: "smooth"
            }
        };
        const series = [{
            name: 'WOW',
            data: [31, 21, 33, 3, 12, 51, 1]
        },
        {
            name: 'WOW',
            data: [31, 21, 33, 3, 12, 51, 1]
        },
        {
            name: 'WOW',
            data: [31, 21, 33, 3, 12, 51, 1]
        }
        ];

        return (
            <div className="content-page-wrapper">
                <h1>Charts</h1>

                <ReactApexChart options={options} series={series} type="heatmap" height={350} />
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