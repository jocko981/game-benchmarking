import React from "react";
import { connect } from "react-redux";
import { fetchAllGames } from "../../../actions";
import GamesFavorite from "./GamesFavorite";
import GamesBestRated from "./GamesBestRated";
import GamesBestSelling from "./GamesBestSelling";
import GamesBestSinglePlayer from "./GamesBestSinglePlayer";
  
  class BoxesGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        boxes: [
          { id: 1, name: "BOX1", color: "red" },
          { id: 2, name: "BOX2", color: "green" },
          { id: 3, name: "BOX3", color: "blue" },
          { id: 4, name: "BOX4", color: "orange" }
        ]
      };
    }
    componentDidMount() {
      this.props.fetchAllGames();
    }

    swapBoxes = (fromBox, toBox) => {
      let boxes = this.state.boxes.slice();
      let fromIndex = -1;
      let toIndex = -1;
  
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].id === fromBox.id) {
          fromIndex = i;
        }
        if (boxes[i].id === toBox.id) {
          toIndex = i;
        }
      }
  
      if (fromIndex != -1 && toIndex != -1) {
        let { fromId, ...fromRest } = boxes[fromIndex];
        let { toId, ...toRest } = boxes[toIndex];
        boxes[fromIndex] = { id: fromBox.id, ...toRest };
        boxes[toIndex] = { id: toBox.id, ...fromRest };
  
        this.setState({ boxes: boxes });
      }
    };
  
  /* The dragstart event is fired when the user starts dragging an element or text selection */
  /* event.target is the source element : that is dragged */
  /* Firefox requires calling dataTransfer.setData for the drag to properly work */
  handleDragStart = data => event => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
  };
  
  /* The dragover event is fired when an element or text selection is being dragged */
  /* over a valid drop target (every few hundred milliseconds) */
  /* The event is fired on the drop target(s) */
  handleDragOver = data => event => {
    event.preventDefault(); // Necessary. Allows us to drop.
    return false;
  };
  
  /* Fired when an element or text selection is dropped on a valid drop target */
  /* The event is fired on the drop target(s) */
  handleDrop = data => event => {
    event.preventDefault();
  
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };
  
    this.swapBoxes(fromBox, toBox);
    return false;
  };

  makeBoxes = () => {
    const games = this.props.games;
    return this.state.boxes.map((item, index) => (
      <GamesFavorite
          games={games}
          key={index}
          id={index +1}
          draggable="true"
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        />
    ));
  };  
  
  render() {
    console.log(this.state) ///////
    const games = this.props.games;
    return (
      <div className="boxesGroup">        
        {/* <GamesFavorite
          games={games}
          id={this.state.boxes[0].id}
          draggable="true"
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        />
        <GamesBestRated
          games={games}
          id={this.state.boxes[1].id}
          draggable="true"
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        />
        <GamesBestSelling
          games={games}
          id={this.state.boxes[2].id}
          draggable="true"
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        />
        <GamesBestSinglePlayer
          games={games}
          id={this.state.boxes[3].id}
          draggable="true"
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        /> */}
        {this.makeBoxes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
      games: Object.values(state.games),
      // currentUserId: state.auth.userId,
      // isSignedIn: state.auth.isSignedIn 
  };
};

export default connect(mapStateToProps, { fetchAllGames })(BoxesGroup);