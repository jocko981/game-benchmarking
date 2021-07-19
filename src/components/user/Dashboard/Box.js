import React from "react";

const Box = (props) => {

    switch(props.id) {
        case 1:
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
                    <h3>Favorite games - div 1</h3>
                    {props.games.sort((a, b) => b.num_of_players_favourite - a.num_of_players_favourite).map(item => {
                        return <div key={item.ID}>{item.name} - {item.num_of_players_favourite}</div>
                    })}
                </div>
        
                </div>
            );

        case 2:
            return (
                <div
                  className="box"
                  draggable={props.draggable}
                  onDragStart={props.onDragStart({ id: props.id })}
                  onDragOver={props.onDragOver({ id: props.id })}
                  onDrop={props.onDrop({ id: props.id })}
                >
        
                <div>
                    <h3>Best Rated games - div 2</h3>
                    {props.games.sort((a, b) => b.rating - a.rating).map(item => {
                        return <div key={item.ID}>{item.name} - {item.rating}</div>
                    })}
                </div>
        
                </div>
            );
            
        case 3:
            return (
        
                <div
                  className="box"
                  draggable={props.draggable}
                  onDragStart={props.onDragStart({ id: props.id })}
                  onDragOver={props.onDragOver({ id: props.id })}
                  onDrop={props.onDrop({ id: props.id })}
                >
        
                <div>
                    <h3>Best Selling games - div 3</h3>
                    {props.games.sort((a, b) => b.num_of_players_global - a.num_of_players_global).map(item => {
                        return <div key={item.ID}>{item.name} - {item.num_of_players_global}</div>
                    })}
                </div>
        
                </div>
            );

        case 4:
            return (
                <div
                  className="box"
                  draggable={props.draggable}
                  onDragStart={props.onDragStart({ id: props.id })}
                  onDragOver={props.onDragOver({ id: props.id })}
                  onDrop={props.onDrop({ id: props.id })}
                >
        
                <div>
                    <h3>Best SinglePlayer games - div 4</h3>
                    {props.games.filter(item => item.single_player !== 0)
                    
                    .sort((a, b) => b.num_of_players_global - a.num_of_players_global).map(item => {
                        return <div key={item.ID}>{item.name} - {item.num_of_players_global}</div>
                    })}
                </div>
                
                </div>
            );


        default:
            return 'No box rendered';
    }
}

export default Box;