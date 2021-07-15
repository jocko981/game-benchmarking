import React from "react";

const GamesFavorite = (props) => {

    return (
        // ovaj div da ima ref={drag} i da ima conditional className. RED je DIV dok ga dragujem
        <div
        className="box"
        draggable={props.draggable}
        onDragStart={props.onDragStart({ id: props.id })}
        onDragOver={props.onDragOver({ id: props.id })}
        onDrop={props.onDrop({ id: props.id })}
        >
        <div>
            <h5>Favorite games Div 1</h5>
            {props.games.sort((a, b) => b.num_of_players_favourite - a.num_of_players_favourite).map(item => {
                return <div key={item.ID}>{item.name} - {item.num_of_players_favourite}</div>
            })}
        </div>

        </div>
    );
}

export default GamesFavorite;