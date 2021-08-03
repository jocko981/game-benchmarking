import React from "react";
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";
import "./Search.css";
import SidebarUser from "../../../components/SidebarUser/SidebarUser";
import SearchFilters from "./SearchFilters";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllGames();
    }

    render() {
        return (
            <div className="content-page-wrapper">
                <SidebarUser />
                <h1>Search</h1>

                <div className="search_wrapper">
                    <SearchFilters games={this.props.games} />
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

export default connect(mapStateToProps, { fetchAllGames })(Search);