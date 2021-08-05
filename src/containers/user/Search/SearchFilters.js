import React, { useState, useEffect } from "react";
import _ from "lodash";
import FilteredGames from "./FilteredGames";

const Checkboxes = ({ games }) => {
    const inputs = ['Won Award', 'Single Player', 'Violence'];
    const types = ['MOBA', 'FPS', 'MMORPG'];
    const sorts = ['Rating', 'Players'];

    const [checkedInputs, setCheckedInputs] = useState(new Array(inputs.length).fill(false));
    const [checkedTypes, setCheckedTypes] = useState(new Array(types.length).fill(false));
    const [checkedSorts, setCheckedSorts] = useState(new Array(sorts.length).fill(false));
    const [filteredGames, setFilteredGames] = useState(games);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setFilteredGames(games)
    }, [games])

    const handleSearchChange = (event) => {
        const newValue = event.target.value;
        setSearchTerm(newValue);
    }
    const filtersearchName = (arr) => {
        if (searchTerm) {
            return arr.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return arr;
    }
    const handleWonAward = (arr) => {
        if (checkedInputs[0]) {
            return arr.filter(item => item.won_award.toString() === '1');
        } else {
            return arr;
        }
    }
    const handleSinglePlayer = (arr) => {
        if (checkedInputs[1]) {
            return arr.filter(item => item.single_player.toString() === '1');
        } else {
            return arr;
        }
    }
    const handleViolence = (arr) => {
        if (checkedInputs[2]) {
            return arr.filter(item => item.violence.toString() === '1');
        } else {
            return arr;
        }
    }
    const handleType = (arr) => {
        if (checkedTypes[0]) {
            return arr.filter(item => item.type === 'MOBA');
        } else if (checkedTypes[1]) {
            return arr.filter(item => item.type === 'FPS');
        } else if (checkedTypes[2]) {
            return arr.filter(item => item.type === 'MMORPG');
        } else {
            return arr;
        }
    }
    const handleRatingSort = (arr) => {
        if (checkedSorts[0]) {
            const arrNew = _.sortBy(arr, 'rating').sort((a, b) => b.rating - a.rating);
            return arrNew;
        } else {
            return arr;
        }
    }
    const handlePlayersSort = (arr) => {
        if (checkedSorts[1]) {
            const arrNew = _.sortBy(arr, 'num_of_players_global').sort((a, b) => b.num_of_players_global - a.num_of_players_global);
            return arrNew;
        } else {
            return arr;
        }
    }
    useEffect(() => {
        //Filter options updated so apply all filters here
        let result = games;
        result = handleSinglePlayer(result);
        result = handleWonAward(result);
        result = handleViolence(result);
        result = handleType(result);
        result = handleRatingSort(result);
        result = handlePlayersSort(result);
        // na kraju Search filter
        result = filtersearchName(result);
        setFilteredGames(result);
    }, [checkedInputs, checkedTypes, checkedSorts, searchTerm]);

    const handleInputs = (position) => {
        const updateCheckedState = checkedInputs.map((item, index) => index === position ? !item : item);
        setCheckedInputs(updateCheckedState);
    }
    const handleTypes = (position) => {
        const updateCheckedState = checkedTypes.map((item, index) => index === position ? !item : false);
        setCheckedTypes(updateCheckedState);
    }
    const handleSorts = (position) => {
        const updateCheckedState = checkedSorts.map((item, index) => index === position ? !item : false);
        setCheckedSorts(updateCheckedState);
    }

    return (
        <>
            <div className="input_div ui input">
                <input onChange={handleSearchChange} type="text" placeholder="Search for games..." />
            </div>

            <div className="checkboxes_wrapper">
                <div>
                    {inputs.map((item, index) => {
                        return (
                            <div className="checkbox_div" key={index}>
                                <input type="checkbox"
                                    checked={checkedInputs[index]}
                                    name={item}
                                    value={item}
                                    id={`input-${index}`}
                                    onChange={() => handleInputs(index)}
                                />
                                <label htmlFor={`input-${index}`}>{item}</label>
                            </div>
                        );
                    })}
                </div>

                <div>
                    <label>Filter by type:</label>
                    {types.map((item, index) => {
                        return (
                            <div className="checkbox_div" key={index}>
                                <input type="checkbox"
                                    checked={checkedTypes[index]}
                                    name={item}
                                    value={item}
                                    id={`type-${index}`}
                                    onChange={() => handleTypes(index)}
                                />
                                <label htmlFor={`type-${index}`}>{item}</label>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <label>Sort by:</label>
                    {sorts.map((item, index) => {
                        return (
                            <div className="checkbox_div" key={index}>
                                <input type="checkbox"
                                    checked={checkedSorts[index]}
                                    name={item}
                                    value={item}
                                    id={`sort-${index}`}
                                    onChange={() => handleSorts(index)}
                                />
                                <label htmlFor={`sort-${index}`}>{item}</label>
                            </div>
                        );
                    })}
                </div>
            </div>

            <FilteredGames filteredGames={filteredGames} />
        </>
    );
}

export default Checkboxes;