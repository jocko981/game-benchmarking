import React, { useEffect, useState } from "react";
import './Benchmark.css';
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";
import BenchmarkTable from "./BenchmarkTable";

const Benchmark = (props) => {
    useEffect(() => {
        fetchAllGames();
    }, [fetchAllGames])

    return (
        <div className="content-page-wrapper">
            <h1>Benchmark</h1>

            <div>
                SELECT CRITERIA DIV for DROPDOWN to Open/Close
            </div>

            <div className="criteria_div">

                <div className="criteria">
                    <input type="checkbox" id='' value='' onChange />
                    <label>Single Player</label>
                </div>
                <div className="criteria">
                    <input type="checkbox" id='' value='' onChange />
                    <label>Violence</label>
                </div>
                <div className="criteria">
                    <input type="checkbox" id='' value='' onChange />
                    <label>Players &gt; 1.000.000</label>
                </div>
                <div className="criteria">
                    <input type="checkbox" id='' value='' onChange />
                    <label>Rating &gt; 8</label>
                </div>
                <div className="criteria">
                    <input type="checkbox" id='' value='' onChange />
                    <label>Year Published &gt; 2017</label>
                </div>
                <div className="criteria">
                    <input type="checkbox" id='' value='' onChange />
                    <label>Steam Platform</label>
                </div>
                <div className="criteria">
                    <input type="checkbox" id='' value='' onChange />
                    <label>Won Award</label>
                </div>

            </div>
            
            <div className="ui button primary">Save Criteria</div>

            <div className="criteria_table">
                <BenchmarkTable games={props.games} />
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

// <div className="ui container">
//                 <select name="skills" multiple="" className="ui fluid  selection dropdown">
//                     <option value="">Skills</option>
//                     <option value="angular">Angular</option>
//                     <option value="css">CSS</option>
//                     <option value="design">Graphic Design</option>
//                     <option value="ember">Ember</option>
//                     <option value="html">HTML</option>
//                     <option value="ia">Information Architecture</option>
//                     <option value="javascript">Javascript</option>
//                     <option value="mech">Mechanical Engineering</option>
//                     <option value="meteor">Meteor</option>
//                     <option value="node">NodeJS</option>
//                     <option value="plumbing">Plumbing</option>
//                     <option value="python">Python</option>
//                     <option value="rails">Rails</option>
//                     <option value="react">React</option>
//                     <option value="repair">Kitchen Repair</option>
//                     <option value="ruby">Ruby</option>
//                     <option value="ui">UI Design</option>
//                     <option value="ux">User Experience</option>
//                 </select>
//             </div>