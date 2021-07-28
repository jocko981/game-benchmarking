import React from "react";

const Pagination = ({ gamesPerPage, NumTotalGames, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(NumTotalGames / gamesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="ui pagination menu">
            {pageNumbers.map((number, index) => (
                <a key={number} onClick={() => paginate(number)} className={`item ${currentPage === number && "active"}`}>
                    {/* samo sam izbacio href='!#' */}
                    {number}
                </a>
            ))}
        </nav>
    );
}

export default Pagination;