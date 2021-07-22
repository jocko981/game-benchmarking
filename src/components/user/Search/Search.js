import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";
import Checkboxes from "./Checkboxes";
import "./Search.css";

const Search = (props) => {
    useEffect(() => {
        fetchAllGames();
    }, [fetchAllGames])

    return (
        <div className="content-page-wrapper">
            <h1>Search</h1>

            <div className="search_wrapper">

                <div className="input_div ui input">
                    <input type="text" placeholder="Search for games..." />
                </div>

                <Checkboxes games={props.games} />

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        games: Object.values(state.games)
    };
}

export default connect(mapStateToProps, { fetchAllGames })(Search);