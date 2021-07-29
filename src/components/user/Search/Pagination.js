import React from "react";
import { Pagination as SemanticPagination, Icon } from 'semantic-ui-react';

const Pagination = ({ gamesPerPage, NumTotalGames, paginate, currentPage }) => {
    const numberOfPages = [];

    for (let i = 1; i <= Math.ceil(NumTotalGames / gamesPerPage); i++) {
        numberOfPages.push(i);
    }

    return (
        <nav className="ui pagination menu">
            
            {/* {numberOfPages.map((number, index) => (
                <a key={number} onClick={() => paginate(number)} className={`item ${currentPage === number && "active"}`}>
                    {/* samo sam izbacio href='!#' */}
                    {/* {number} */}
                {/* </a>
            ))} */}

            <SemanticPagination
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

        </nav>
    );
}

export default Pagination;