import React, { useState } from "react";
import Pagination from "./Pagination";

const FilteredGames = ({ filteredGames }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(3);
    
    // Get current games
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if(!filteredGames) {
        return 'Loading...';
    }
    return (
        <div className="filtered_games">
            <div className="ui celled list">

                {currentGames.map((item, index) => {
                    return (
                        <div className="item" key={item.ID}>
                            <div className="header">
                                {item.name}
                            </div>
                            <div className="description">
                                <div>Rating: {item.rating}</div>
                                <div>Global players: {item.num_of_players_global}</div>
                            </div>
                        </div>
                    );
                })}

            </div>

            <Pagination 
                gamesPerPage={gamesPerPage} 
                NumTotalGames={filteredGames.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}

export default FilteredGames;