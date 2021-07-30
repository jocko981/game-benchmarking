import React, { useEffect, useState } from "react";
import './Benchmark.css';
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";
import BenchmarkTable from "./BenchmarkTable";

class Benchmark extends React.Component {
    constructor(props) {
        super(props);

        const inputs = ['Single Player', 'Violence', 'Players > 1.500.000', 'Rating > 8', 'Year Published', 'Steam Platform', 'Won Award']; // to local storage this and then map it
        // localStorage.setItem('benchmark', JSON.stringify(inputs));

        const response = localStorage.getItem('benchmark');
        const data = JSON.parse(response);
        // const [checkedState, setCheckedState] = useState(data.map(item => item.checked));
        // const [checkedProps, setCheckedProps] = useState(data);

        this.state = {
            checkedState: data.map(item => item.checked),
            checkedProps: data,
            inputs: inputs
        };
    }
    componentDidMount() {
        this.props.fetchAllGames();
    }

    // functions
    handleChange = (position) => {
        const updateCheckedState = this.state.checkedState.map((item, index) => index === position ? !item : item);
        this.setState({ checkedState: updateCheckedState });
    }
    saveCriteria = () => {
        const gg = this.state.checkedState.map((item, index) => {
            return { name: item, checked: this.state.checkedState[index] }
        });
        // console.log(_.mapKeys(gg, "name"), 'gg')
        localStorage.setItem('benchmark', JSON.stringify(gg))

        this.setState({ checkedProps: gg });
    }

    render() {

        return (
            <div className="content-page-wrapper">
                <h1>Benchmark</h1>
                <div>
                    SELECT CRITERIA DIV for DROPDOWN to Open/Close
                </div>

                <div className="criteria_div">
                    {this.state.inputs.map((item, index) => {
                        return (
                            <div className="criteria" key={index}>
                                <input type='checkbox'
                                    checked={this.state.checkedState[index]}
                                    name={item}
                                    value={item}
                                    id={index}
                                    onChange={() => this.handleChange(index)}
                                />
                                <label htmlFor={index}>{item}</label>

                                {this.state.checkedProps[index].checked !== this.state.checkedState[index] && <span> - [ criteria changed ]</span>}
                            </div>
                        );
                    })}
                </div>

                <div onClick={this.saveCriteria} className="ui button primary">Save Criteria</div>
                {/* {inputs.map((item, index) => checkedProps[index].checked !== checkedState[index] && <span> Click to Save new criterias :) </span>)} */}

                <div className="criteria_table">
                    <BenchmarkTable games={this.props.games} checkedProps={this.state.checkedProps} />
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        games: Object.values(state.games)
    };
}

export default connect(mapStateToProps, { fetchAllGames })(Benchmark);