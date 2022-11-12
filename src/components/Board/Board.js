import React from "react";
import Card from "../Card/Card";
import { Plus } from "react-feather";
import "./Board.css";

function Board(props) {
    console.log(props)
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">{props.board?.board_title}</p>
        <span>{props.board?.cards?.length}</span>
      </div>
      <div className="board_button_outer">
        <button className="board_button">
          <Plus />
        </button>
      </div>
      <div className="board_cards custom-scroll">
        {props.board.cards.map(card => {
            return (
                <Card key={card.id} card={card}/>
            )
        })}
      </div>
    </div>
  );
}

export default Board;
