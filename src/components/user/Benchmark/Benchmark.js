import React, { useEffect, useState } from "react";
import './Benchmark.css';
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";
import BenchmarkTable from "./BenchmarkTable";

const Benchmark = (props) => {
    useEffect(() => {
        fetchAllGames();
    }, [fetchAllGames])

    const inputs = ['Single Player', 'Violence', 'Players > 1.500.000', 'Rating > 8', 'Year Published', 'Steam Platform', 'Won Award']; // to local storage this and then map it

    // localStorage.setItem('benchmark', JSON.stringify(inputs));

    const response = localStorage.getItem('benchmark');
    const data = JSON.parse(response);
    const [checkedState, setCheckedState] = useState(data.map(item => item.checked));
    const [checkedProps, setCheckedProps] = useState(data);

    const handleChange = (position) => {
        const updateCheckedState = checkedState.map((item, index) => index === position ? !item : item);
        setCheckedState(updateCheckedState);
    }
    const saveCriteria = () => {
        const gg = checkedState.map((item,index) => {
            return {name: item, checked: checkedState[index]}
        });
        // console.log(_.mapKeys(gg, "name"), 'gg')
        localStorage.setItem('benchmark', JSON.stringify(gg))
        
        setCheckedProps(gg);
    }

    return (
        <div className="content-page-wrapper">
            <h1>Benchmark</h1>
            <div>
                SELECT CRITERIA DIV for DROPDOWN to Open/Close
            </div>

            <div className="criteria_div">
                {inputs.map((item, index) => {
                    return (
                        <div className="criteria" key={index}>
                            <input type='checkbox'
                                checked={checkedState[index]}
                                name={item}
                                value={item}
                                id={index}
                                onChange={() => handleChange(index)}
                            />
                            <label htmlFor={index}>{item}</label>
                            
                            {checkedProps[index].checked !== checkedState[index] && <span> - [ criteria changed ]</span>}
                        </div>
                    );
                })}
            </div>

            <div onClick={saveCriteria} className="ui button primary">Save Criteria</div>

            <div className="criteria_table">
                <BenchmarkTable games={props.games} checkedProps={checkedProps} />
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        games: Object.values(state.games)
    };
}

export default connect(mapStateToProps, { fetchAllGames })(Benchmark);