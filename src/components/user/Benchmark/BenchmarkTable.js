import React from "react";

const BenchmarkTable = ({ games }) => {
    return (
        <table className="ui definition celled table">
            <thead>
                <tr>
                    <th></th>
                    {games.map(item => <th>{item.name}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Single Player</td>
                    {games.map(item => <td>{item.single_player.toString() === '1' ? 'Yes' : '/'}</td>)}
                </tr>

                <tr>
                    <td>Violence</td>
                    {games.map(item => <td>{item.violence.toString() === '1' ? 'Yes' : '/'}</td>)}
                </tr>

                <tr>
                    <td>Players &gt; 1.500.000</td>
                    {games.map(item => <td>{item.num_of_players_global > 1500000 ? 'Yes' : '/'}</td>)}
                </tr>

                <tr>
                    <td>Rating &gt; 8</td>
                    {games.map(item => <td>{item.rating > 8 ? 'Yes' : '/'}</td>)}
                </tr>

                <tr>
                    <td>Year Published &gt; 2010</td>
                    {games.map(item => <td>{item.year_published > 2010 ? 'Yes' : '/'}</td>)}
                </tr>

                <tr>
                    <td>Steam Platform</td>
                    {games.map(item => <td>{item.platform === 'steam' ? 'Yes' : '/'}</td>)}
                </tr>

                <tr>
                    <td>Won Award</td>
                    {games.map(item => <td>{item.won_award.toString() === '1' ? 'Yes' : '/'}</td>)}
                </tr>

            </tbody>
        </table>
    );
}

export default BenchmarkTable;