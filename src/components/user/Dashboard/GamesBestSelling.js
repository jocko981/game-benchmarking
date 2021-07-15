import React from "react";

const GamesBestSelling = (props) => {

    return (
        
        <div
        className="box"
        draggable={props.draggable}
        onDragStart={props.onDragStart({ id: props.id })}
        onDragOver={props.onDragOver({ id: props.id })}
        onDrop={props.onDrop({ id: props.id })}
        >

        <div>
            <h5>Best Selling games Div 3</h5>
            {props.games.sort((a, b) => b.num_of_players_global - a.num_of_players_global).map(item => {
                return <div key={item.ID}>{item.name} - {item.num_of_players_global}</div>
            })}
        </div>

        </div>
    );
}

export default GamesBestSelling;