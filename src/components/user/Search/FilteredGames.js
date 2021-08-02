import React, { useEffect, useState } from "react";
import { Pagination, Icon } from 'semantic-ui-react';

const FilteredGames = ({ filteredGames }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(3);

    // Get current games
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // num of pages to show
    const numberOfPages = [];
    for (let i = 1; i <= Math.ceil(filteredGames.length / gamesPerPage); i++) {
        numberOfPages.push(i);
    }

    useEffect(() => {
        setCurrentPage(1);
    },[filteredGames]) // set Pagination page to 1. on every filteredGames change 
    if (!filteredGames) {
        return 'Loading...';
    }
    return (
        <div className="filtered_games">
            <div className="ui celled list">

                {currentGames.map((item, index) => {
                    return (
                        <div className="item" key={index}>
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
                activePage={currentPage}
                // defaultActivePage={currentPage}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={null}
                lastItem={null}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                totalPages={numberOfPages.length}
                onPageChange={(event, data) => paginate(data.activePage)}
            />
        </div>
    );
}

export default FilteredGames;