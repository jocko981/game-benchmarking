import React from "react";

const GamesBestRated = (props) => {

    return (
        <div
        className="box"
        draggable={props.draggable}
        onDragStart={props.onDragStart({ id: props.id })}
        onDragOver={props.onDragOver({ id: props.id })}
        onDrop={props.onDrop({ id: props.id })}
        >

        <div>
            <h5>Best Rated games Div 2</h5>
            {props.games.sort((a, b) => b.rating - a.rating).map(item => {
                return <div key={item.ID}>{item.name} - {item.rating}</div>
            })}
        </div>

        </div>
    );
}

export default GamesBestRated;