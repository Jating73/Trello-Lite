import React from "react";
import { CheckSquare, Clock, Paperclip } from "react-feather";
import Chip from "../Chip/Chip";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_labels">
          {props.card?.labels?.map((item, index) => {
            return <Chip key={index} text={item.text} color={item.color} />;
          })}
          <Paperclip />
        </div>
      </div>
      <div className="card_title">{props.card?.title}</div>
      <div className="card_footer">
        {props.card?.date && (
          <p>
            <Clock />
            {props.card?.date}
          </p>
        )}
        <p>{/* <CheckSquare /> */}</p>
      </div>
    </div>
  );
}

export default Card;
