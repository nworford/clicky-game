
import React from "react";
import "./ClickItem.css";
const ClickItem = props => {
  
  return (
      <div 
        role="img"
        aria-label="click item"
        onClick={() => props.onClick(props.id)}
        style={{ backgroundImage: `url("${props.src}")` }}
        className={`click-item${props.shake ? " shake" : ""}`}
      />
    );
}
export default ClickItem;