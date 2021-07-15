import React, { useState } from "react";
import GamesFavorite from "./GamesFavorite";
import GamesBestRated from "./GamesBestRated";
import GamesBestSelling from "./GamesBestSelling";
import GamesBestSinglePlayer from "./GamesBestSinglePlayer";
import { useDrop } from "react-dnd";

const DragDrop = () => {
    // [0,1,2,3]    localStorage za dnd position
    const [state, setState] = useState([0,1,2,3]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => changePosition(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const changePosition = (id) => {
        console.log(id, 'id')
    }

    return (
        <>
            <div className="dnd-div-1" ref={drop}>
                <GamesFavorite id={state[0]} />
                <GamesBestRated id={state[1]} />
            </div>
            - - - - - - - - - - - - - - - - - - - - - - - 
            <div className="dnd-div-2" ref={drop}>
                <GamesBestSelling id={state[2]} />
                <GamesBestSinglePlayer id={state[3]} />
            </div>
        </>
    );
}

export default DragDrop;