import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DragDrop = () => {
    // [0,1,2,3]    localStorage za dnd position

    const dragDrop1 = [{ id: 1, name: 'Gary', desc: 'Big guy Gary stare' }, { id: 2, name: 'Marty', desc: 'Big nerd' }, { id: 3, name: 'Sara', desc: 'Big guy is her bf' }, { id: 4, name: 'Luter', desc: 'Big guy L stare' }];
    const dragDrop2 = [{ id: 1, name: 'A', desc: 'Gtare' }, { id: 2, name: 'B', desc: 'erd' }, { id: 3, name: 'C', desc: 'Bigbf' }, { id: 4, name: 'D', desc: 'B stare' }];
    
    localStorage.setItem('dragDrop1', JSON.stringify(dragDrop1));
    const getArray1 = localStorage.getItem('dragDrop1');

    const [array1, setArray1] = useState(JSON.parse(getArray1));
    console.log(array1, 'arr1')

    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "div",
    //     drop: (item) => changePosition(item.id),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver()
    //     })
    // }))

    // const changePosition = (id) => {
    //     console.log(id, 'id')
    // }

    const handleOnDragEnd = (result) => {
          console.log(result);
        const items = Array.from(array1);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        localStorage.setItem('dragDrop1', JSON.stringify(items));
        setArray1(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='dragDrop1'>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {array1.map((item, index) => {
                            return (
                                // index = index, ostale sve itemID
                                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                    {(provided) => (
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <div style={{ padding: '10px', backgroundColor: 'white', border: 'solid 1px red' }}>
                                                <h4>{item.name}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default DragDrop;