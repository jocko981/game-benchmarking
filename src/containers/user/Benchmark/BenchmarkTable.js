import React, { useEffect } from "react";

const BenchmarkTable = ({ games, checkedProps }) => {

    return (
        <table className="ui definition celled table">
            <thead>
                <tr>
                    <th>Selected Criteria: </th>
                    {games.map((item, index) => <th key={index}>{item.name}</th>)}
                </tr>
            </thead>
            <tbody>
            {/* 
                {checkedProps.map((item,index) => {
                    return (
                        item.checked && <tr>
                            <td>Single Player</td>
                            {games.map((item, index) => <td key={index}>{item.itemz.toString() === '1' ? 'Yes' : '/'}</td>)}
                        </tr>
                    );
                })} */}

                {checkedProps[0].checked && <tr>
                    <td>Single Player</td>
                    {games.map((item, index) => <td key={index}>{item.single_player.toString() === '1' ? 'Yes' : '/'}</td>)}
                </tr>}

                {checkedProps[1].checked && <tr>
                    <td>Violence</td>
                    {games.map((item, index) => <td key={index}>{item.violence.toString() === '1' ? 'Yes' : '/'}</td>)}
                </tr>}

                {checkedProps[2].checked && <tr>
                    <td>Players &gt; 1.500.000</td>
                    {games.map((item, index) => <td key={index}>{item.num_of_players_global > 1500000 ? 'Yes' : '/'}</td>)}
                </tr>}

                {checkedProps[3].checked && <tr>
                    <td>Rating &gt; 8</td>
                    {games.map((item, index) => <td key={index}>{item.rating > 8 ? 'Yes' : '/'}</td>)}
                </tr>}

                {checkedProps[4].checked && <tr>
                    <td>Year Published &gt; 2010</td>
                    {games.map((item, index) => <td key={index}>{item.year_published > 2010 ? 'Yes' : '/'}</td>)}
                </tr>}

                {checkedProps[5].checked && <tr>
                    <td>Steam Platform</td>
                    {games.map((item, index) => <td key={index}>{item.platform === 'steam' ? 'Yes' : '/'}</td>)}
                </tr>}

                {checkedProps[6].checked && <tr>
                    <td>Won Award</td>
                    {games.map((item, index) => <td key={index}>{item.won_award.toString() === '1' ? 'Yes' : '/'}</td>)}
                </tr>}

            </tbody>
        </table>
    );
}

export default BenchmarkTable;